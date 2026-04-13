import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { boxes } from "@/lib/boxes";

export function BoxShowcase() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Deux boxes, une promesse
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la base adaptée à votre formation. Chaque box est ensuite personnalisée
            avec votre logo et les articles métier de votre secteur.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {boxes.map((box) => (
            <div
              key={box.id}
              className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-4xl mb-3">{box.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{box.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{box.tagline}</p>
                </div>
                <Badge variant="secondary" className="shrink-0 bg-primary/10 text-primary border-primary/20">
                  {box.badge}
                </Badge>
              </div>

              <ul className="space-y-2">
                {box.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-lg bg-accent/20 px-4 py-3 text-sm text-accent-foreground font-medium">
                ✨ Tout article avec logo est personnalisé avec votre charte graphique
              </div>

              <Link
                href={`/configurateur?box=${box.id}`}
                className={cn(buttonVariants(), "gap-2 w-full justify-center mt-auto")}
              >
                Choisir la {box.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Devis personnalisé · Remboursement OPCO jusqu&apos;à 500€/apprenti · Livraison au CFA
        </p>
      </div>
    </section>
  );
}
