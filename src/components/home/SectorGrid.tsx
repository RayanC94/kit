import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/lib/sectors";

export function SectorGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Une box adaptée à chaque formation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            En plus des équipements communs, chaque box inclut des articles spécifiques
            à la filière de votre apprenti.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              href={`/configurateur?secteur=${sector.id}`}
              className="group rounded-2xl border bg-white p-5 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{sector.icon}</div>
              <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {sector.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {sector.description}
              </p>
              <div className="mt-3 space-y-1">
                {sector.extras.slice(0, 2).map((extra) => (
                  <p key={extra.label} className="text-xs text-muted-foreground">
                    + {extra.label}
                  </p>
                ))}
                {sector.extras.length > 2 && (
                  <p className="text-xs text-primary font-medium">
                    +{sector.extras.length - 2} autre(s)
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/configurateur"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Configurer ma box maintenant
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
