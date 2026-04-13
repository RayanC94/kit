"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Check, Loader2 } from "lucide-react";
import { getBox, type BoxBase } from "@/lib/boxes";
import { getSector } from "@/lib/sectors";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ContactData {
  nom: string;
  cfa: string;
  email: string;
  telephone: string;
}

interface StepContactProps {
  boxId: BoxBase | null;
  secteurId: string | null;
  nbApprentis: number;
  commentaire: string;
  contact: ContactData;
  onContactChange: (data: ContactData) => void;
}

export function StepContact({
  boxId,
  secteurId,
  nbApprentis,
  commentaire,
  contact,
  onContactChange,
}: StepContactProps) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const box = boxId ? getBox(boxId) : null;
  const sector = secteurId ? getSector(secteurId) : null;

  const isValid =
    contact.nom.trim() &&
    contact.cfa.trim() &&
    contact.email.trim() &&
    contact.telephone.trim();

  const extrasLabel = sector?.extras.map((e) => e.label).join(", ") ?? "";

  const whatsappLink = buildWhatsAppLink({
    nom: contact.nom || "Votre nom",
    cfa: contact.cfa || "Votre CFA",
    email: contact.email || "votre@email.fr",
    telephone: contact.telephone || "",
    box: box?.name ?? "",
    secteur: sector?.name ?? "",
    nbApprentis,
    extras: extrasLabel,
  });

  async function handleEmailSubmit() {
    if (!isValid) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          box: box?.name,
          secteur: sector?.name,
          nbApprentis,
          extras: extrasLabel,
          commentaire,
        }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous contacter via WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">Demande envoyée !</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Nous avons bien reçu votre demande de devis pour{" "}
          <strong>{nbApprentis} apprenti(s)</strong> du <strong>{contact.cfa}</strong>.
          Nous vous revenons sous 24h avec un devis détaillé au format OPCO.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Un email de confirmation a été envoyé à <strong>{contact.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Récapitulatif & Contact</h2>
      <p className="text-muted-foreground mb-8">
        Vérifiez votre configuration et laissez-nous vos coordonnées pour recevoir le devis.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Récapitulatif */}
        <div className="rounded-xl border bg-muted/30 p-6 space-y-4">
          <h3 className="font-semibold text-foreground">Votre configuration</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base choisie</span>
              <span className="font-medium">
                {box ? `${box.icon} ${box.name}` : "Non sélectionnée"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Formation</span>
              <span className="font-medium">
                {sector ? `${sector.icon} ${sector.name}` : "Non sélectionnée"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Nb d&apos;apprentis</span>
              <span className="font-medium">{nbApprentis}</span>
            </div>
            {extrasLabel && (
              <div className="pt-2 border-t">
                <p className="text-muted-foreground mb-1">Articles métier :</p>
                <p className="font-medium">{extrasLabel}</p>
              </div>
            )}
            {commentaire && (
              <div className="pt-2 border-t">
                <p className="text-muted-foreground mb-1">Notes :</p>
                <p className="text-foreground">{commentaire}</p>
              </div>
            )}
          </div>

          <div className="rounded-lg bg-accent/20 border border-accent/30 p-3 text-sm">
            <p className="font-semibold">Budget OPCO estimé</p>
            <p className="text-xl font-bold text-foreground">
              {(nbApprentis * 500).toLocaleString("fr-FR")} €
            </p>
            <p className="text-xs text-muted-foreground">500€ × {nbApprentis} apprenti(s)</p>
          </div>
        </div>

        {/* Formulaire contact */}
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="nom">Votre nom</Label>
              <Input
                id="nom"
                value={contact.nom}
                onChange={(e) => onContactChange({ ...contact, nom: e.target.value })}
                placeholder="Jean Dupont"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cfa">Nom du CFA</Label>
              <Input
                id="cfa"
                value={contact.cfa}
                onChange={(e) => onContactChange({ ...contact, cfa: e.target.value })}
                placeholder="CFA de la Région"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email professionnel</Label>
            <Input
              id="email"
              type="email"
              value={contact.email}
              onChange={(e) => onContactChange({ ...contact, email: e.target.value })}
              placeholder="direction@cfa.fr"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="telephone">Téléphone</Label>
            <Input
              id="telephone"
              type="tel"
              value={contact.telephone}
              onChange={(e) => onContactChange({ ...contact, telephone: e.target.value })}
              placeholder="06 00 00 00 00"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          {/* Submit buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              onClick={handleEmailSubmit}
              disabled={!isValid || sending}
              className="gap-2 w-full"
            >
              {sending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
              {sending ? "Envoi en cours..." : "Recevoir mon devis par email"}
            </Button>

            <a
              href={isValid ? whatsappLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex w-full items-center justify-center gap-2 rounded-lg border-2 border-green-500 bg-green-50 px-4 py-2.5 text-sm font-medium text-green-700 transition-colors
                ${isValid ? "hover:bg-green-100 cursor-pointer" : "opacity-50 cursor-not-allowed pointer-events-none"}
              `}
            >
              <MessageCircle className="h-4 w-4" />
              Contacter sur WhatsApp
            </a>

            {!isValid && (
              <p className="text-xs text-muted-foreground text-center">
                Remplissez tous les champs pour activer les boutons
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
