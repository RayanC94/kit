import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { BoxShowcase } from "@/components/home/BoxShowcase";
import { DeliveryGuarantee } from "@/components/home/DeliveryGuarantee";
import { SectorGrid } from "@/components/home/SectorGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ProcessSteps />
      <BoxShowcase />
      <DeliveryGuarantee />
      <SectorGrid />

      {/* Final CTA section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Prêt à équiper vos apprentis ?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Configurez votre box en 2 minutes. Nous vous revenons avec un devis
            au format OPCO sous 24h.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
