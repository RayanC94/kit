import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20 md:py-32">
      <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Financé jusqu&apos;à 500€ par votre OPCO
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            La Welcome Box qui{" "}
            <span className="text-primary">équipe vos apprentis</span>{" "}
            dès le 1er jour
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
            PC ou iPad, accessoires, article métier — tout personnalisé avec le logo de votre CFA.
            Clé en main, livré directement chez vous.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/configurateur"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 text-base px-8")}
            >
              Configurer ma box
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/comment-ca-marche"
              className={cn(buttonVariants({ size: "lg", variant: "ghost" }), "gap-1 text-base")}
            >
              Comment ça marche ?
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Devis gratuit · Livraison clé en main · Remboursement OPCO accompagné
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          {[
            { emoji: "💻", label: "PC i3N100" },
            { emoji: "📱", label: "iPad 10" },
            { emoji: "🎧", label: "Casque BT" },
            { emoji: "🖱️", label: "Souris" },
            { emoji: "🎒", label: "Pochette" },
            { emoji: "🧢", label: "Merch logotypé" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 rounded-2xl border bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1 rounded-2xl border border-dashed bg-white/60 px-5 py-4">
            <span className="text-2xl">🎁</span>
            <span className="text-xs font-medium text-muted-foreground">+ Article métier</span>
          </div>
        </div>
      </div>
    </section>
  );
}
