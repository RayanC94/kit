import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Settings, Paintbrush, Truck, BadgeEuro } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Vous configurez",
    description:
      "Choisissez la base (PC ou iPad), la formation de vos apprentis et uploadez le logo de votre CFA.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "On personnalise",
    description:
      "Nous imprimons votre logo sur les articles sélectionnés et préparons les boxes avec les articles métier adaptés.",
  },
  {
    icon: Truck,
    number: "03",
    title: "On livre au CFA",
    description:
      "Livraison directement dans votre établissement, boxes prêtes à être remises aux apprentis dès le premier jour.",
  },
  {
    icon: BadgeEuro,
    number: "04",
    title: "L'OPCO rembourse",
    description:
      "Nous vous fournissons un devis détaillé au format OPCO. Votre OPCO prend en charge jusqu'à 500€ par apprenti.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Simple, rapide, remboursé
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            En 4 étapes, vos apprentis sont équipés et votre OPCO finance l&apos;essentiel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center gap-4 lg:items-start lg:text-left">
              {i < steps.length - 1 && (
                <div aria-hidden className="absolute top-6 left-12 hidden h-px w-full bg-border lg:block" />
              )}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                <step.icon className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/comment-ca-marche"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            En savoir plus sur le financement OPCO
          </Link>
        </div>
      </div>
    </section>
  );
}
