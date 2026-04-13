import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Settings,
  Paintbrush,
  Truck,
  BadgeEuro,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comment ça marche ? — ApprenKit",
  description:
    "Comprenez le processus de financement OPCO et comment commander votre Welcome Box ApprenKit en 4 étapes simples.",
};

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Vous configurez votre box",
    description:
      "Utilisez notre configurateur en ligne pour choisir la base (PC ou iPad), sélectionner le secteur de formation et préciser le nombre d'apprentis. Uploadez le logo de votre CFA pour voir la personnalisation.",
    detail:
      "Le configurateur prend moins de 2 minutes. Vous recevez ensuite un devis par email ou WhatsApp sous 24h.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "On personnalise",
    description:
      "Notre équipe prépare les boxes : impression du logo CFA sur les articles (pochette, tapis de souris, stylo, casquette/tote bag...), sélection des articles métier adaptés à la formation.",
    detail:
      "La personnalisation inclut : skin logotypée sur le PC ou la tablette, broderie ou impression sur les textiles, gravure possible sur certains articles.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Livraison clé en main",
    description:
      "Chaque box est livrée dans un emballage logotypé rigide personnalisé au logo de votre CFA — un unboxing mémorable pour le premier jour. Vous choisissez : livraison groupée au CFA, ou envoi individuel directement à l'apprenti à son domicile. Tout le matériel est neuf, en emballage d'origine.",
    detail: "Délai : 30 à 45 jours après validation de la commande et réception du logo.",
  },
  {
    icon: BadgeEuro,
    number: "04",
    title: "Votre OPCO rembourse",
    description:
      "Nous vous fournissons une facture détaillée avec la description pédagogique de chaque article, au format attendu par les OPCOs. Le CFA soumet la demande à son OPCO qui prend en charge jusqu'à 500€ par apprenti.",
    detail:
      "L'aide au premier équipement pédagogique est versée par l'OPCO de l'entreprise qui emploie l'apprenti. Cette aide est non-remboursable.",
  },
];

const faqs = [
  {
    q: "Que couvre exactement la garantie 1 an ?",
    a: "Le PC et l'iPad sont couverts 1 an contre le vol (dépôt de plainte officiel obligatoire sous 48h) et la casse accidentelle involontaire (chute, impact non intentionnel). Le traitement est : réparation en priorité si possible — si la réparation est impossible ou dépasse 70% de la valeur du produit, remplacement par un équivalent neuf. La garantie ne couvre pas : la perte, l'immersion, les dégradations intentionnelles, les modifications non autorisées, l'usure normale, ni les sinistres non déclarés dans les 5 jours. 1 sinistre pris en charge par appareil sur la durée de garantie.",
  },
  {
    q: "Tous les CFA peuvent-ils bénéficier de l'aide OPCO ?",
    a: "Oui, dès lors que l'apprenti est en contrat d'apprentissage avec une entreprise adhérente à un OPCO. L'aide au premier équipement est prévue par la réglementation et gérée par chaque OPCO (Atlas, EP, AKTO, Constructys, OCAPIAT...). Le montant peut varier selon l'OPCO, dans la limite de 500€.",
  },
  {
    q: "Qui fait la demande auprès de l'OPCO ?",
    a: "C'est le CFA qui constitue le dossier et transmet la demande à l'OPCO de l'entreprise employeuse. Nous vous fournissons tous les justificatifs nécessaires (facture détaillée, description pédagogique).",
  },
  {
    q: "Est-ce que l'aide couvre 100% du prix de la box ?",
    a: "L'OPCO prend en charge jusqu'à 500€ par apprenti. Nos boxes PC et iPad sont conçues pour s'inscrire dans cette enveloppe. Selon les articles sélectionnés et le nombre d'apprentis, un devis précis vous sera fourni.",
  },
  {
    q: "Quand est-on payé par l'OPCO ?",
    a: "Les délais varient selon l'OPCO : certains paient sur devis avant achat, d'autres remboursent après présentation de la facture. Nous vous accompagnons dans la compréhension du processus propre à votre OPCO.",
  },
  {
    q: "Peut-on commander pour plusieurs promotions en même temps ?",
    a: "Oui. Vous pouvez passer une commande groupée par promotion, par formation ou pour l'ensemble de votre établissement. Nous adaptons le calendrier de livraison à votre rentrée.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Comment ça marche ?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            De la configuration à la livraison, en passant par le financement OPCO — tout est simple.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow">
                  <step.icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {step.number}
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{step.title}</h2>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
                <p className="mt-3 text-sm text-primary font-medium bg-primary/10 rounded-lg px-3 py-2 inline-block">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Questions fréquentes</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border bg-white p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Garantie block */}
        <div className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-6 flex flex-col sm:flex-row items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground mb-1">
              Garantie 1 an — PC et iPad
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Couvre :</strong> vol (dépôt de plainte sous 48h) · casse accidentelle involontaire (chute, impact).<br />
              <strong className="text-foreground">Traitement :</strong> réparation en priorité — si irréparable ou coût &gt; 70% valeur produit : remplacement par équivalent neuf.<br />
              <strong className="text-foreground">Ne couvre pas :</strong> perte · immersion · dégradation intentionnelle · modifications · usure normale.<br />
              <span className="mt-1 block text-xs text-muted-foreground">
                Sinistre à déclarer sous 5 jours via le CFA avec justificatif (récépissé de plainte ou constat photos). 1 sinistre par appareil sur la durée de garantie.
              </span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center rounded-2xl bg-primary p-10 text-primary-foreground">
          <h2 className="text-2xl font-bold mb-3">Prêt à vous lancer ?</h2>
          <p className="text-primary-foreground/80 mb-6">
            Configurez votre box en 2 minutes. Devis gratuit et sans engagement.
          </p>
          <Link
            href="/configurateur"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "gap-2 text-primary font-semibold"
            )}
          >
            Configurer ma box
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
