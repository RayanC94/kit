import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-24">
      <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — texte */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Financé jusqu&apos;à 500€ par votre OPCO
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              La Welcome Box qui{" "}
              <span className="text-primary">équipe vos apprentis</span>{" "}
              dès le 1er jour
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              PC ou iPad, accessoires, article métier — tout personnalisé avec le logo de votre CFA.
              Emballage logotypé, livraison au CFA ou directement chez l&apos;apprenti.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

            <p className="mt-6 text-sm text-muted-foreground">
              Devis gratuit · Garantie 1 an · Livraison 30–45 jours
            </p>
          </div>

          {/* Right — image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/exemple-kit.png"
                alt="Exemple de Welcome Box personnalisée pour apprentis CFA"
                width={680}
                height={510}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Badge flottant — petit, discret */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 shadow-md">
                <span className="text-xs">✨</span>
                <span className="text-xs font-medium text-muted-foreground">
                  Exemple de kit
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
