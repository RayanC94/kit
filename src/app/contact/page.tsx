import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — ApprenKit",
  description:
    "Contactez ApprenKit pour votre demande de Welcome Box personnalisée pour vos apprentis.",
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "33600000000";

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Une question, un besoin spécifique, une formation non listée ?<br />
            Contactez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-green-200 bg-green-50 p-8 text-center hover:border-green-400 hover:shadow-md transition-all"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">WhatsApp</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Réponse rapide, directe et personnalisée.
              </p>
              <p className="mt-3 font-semibold text-green-700">Démarrer la conversation →</p>
            </div>
          </a>

          <a
            href="mailto:contact@apprenkit.fr"
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">Email</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Pour les demandes détaillées. Réponse sous 24h.
              </p>
              <p className="mt-3 font-semibold text-primary">contact@apprenkit.fr</p>
            </div>
          </a>
        </div>

        <div className="rounded-2xl bg-foreground p-8 text-center text-background">
          <h2 className="text-xl font-bold mb-2">Prêt à configurer ?</h2>
          <p className="text-background/70 text-sm mb-5">
            Utilisez notre configurateur pour obtenir un devis complet en 2 minutes.
          </p>
          <Link
            href="/configurateur"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "gap-2 text-foreground font-semibold"
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
