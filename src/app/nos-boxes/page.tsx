import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { boxes } from "@/lib/boxes";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Nos Welcome Boxes — ApprenKit",
  description:
    "Découvrez nos boxes PC et iPad personnalisées pour vos apprentis. Tout inclus, logotypé, financé par votre OPCO.",
};

export default function NosBoxesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Catalogue 2025
          </Badge>
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Nos Welcome Boxes
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Deux bases, infiniment personnalisables. Chaque box est adaptée à votre formation
            et logotypée aux couleurs de votre CFA.
          </p>
        </div>

        {/* Box cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mb-20">
          {boxes.map((box) => (
            <div
              key={box.id}
              className="rounded-2xl border-2 bg-white p-8 shadow-sm flex flex-col gap-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-5xl mb-3">{box.icon}</div>
                  <h2 className="text-2xl font-bold text-foreground">{box.name}</h2>
                  <p className="mt-2 text-muted-foreground">{box.tagline}</p>
                </div>
                <Badge className="shrink-0 bg-primary/10 text-primary border-primary/20 text-sm px-3 py-1">
                  {box.badge}
                </Badge>
              </div>

              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  Contenu de la box
                </h3>
                <ul className="space-y-2.5">
                  {box.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-accent/20 border border-accent/30 p-4 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Financement OPCO jusqu&apos;à 500€ / apprenti
                </p>
                <p className="text-muted-foreground">
                  Nous vous fournissons un devis détaillé prêt à soumettre à votre OPCO.
                </p>
              </div>

              <Link
                href={`/configurateur?box=${box.id}`}
                className={cn(buttonVariants(), "gap-2 w-full justify-center")}
              >
                Configurer cette box
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Sectors section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Articles spécifiques par secteur
            </h2>
            <p className="mt-3 text-muted-foreground">
              En plus du contenu commun, chaque box inclut des articles adaptés à la filière.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.filter((s) => s.id !== "autre").map((sector) => (
              <div
                key={sector.id}
                className="rounded-xl border bg-white p-5 hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-2">{sector.icon}</div>
                <h3 className="font-semibold text-sm text-foreground">{sector.name}</h3>
                <ul className="mt-2 space-y-1">
                  {sector.extras.map((extra) => (
                    <li key={extra.label} className="text-xs text-muted-foreground flex gap-1.5">
                      <span className="text-primary">+</span>
                      {extra.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="rounded-2xl bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold mb-3">
            Votre formation n&apos;est pas listée ?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Nous définissons les articles métier sur-mesure avec vous. Contactez-nous
            pour étudier votre besoin.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "text-primary font-semibold"
            )}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
