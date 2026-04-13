import Link from "next/link";
import { Package, MessageCircle } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "33600000000";

export function Footer() {
  return (
    <footer className="border-t bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Package className="h-4 w-4" />
              </div>
              <span>
                Appren<span className="text-primary">Kit</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              La Welcome Box personnalisée pour vos apprentis, financée jusqu&apos;à 500€ par votre OPCO.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/nos-boxes", label: "Nos Welcome Boxes" },
                { href: "/comment-ca-marche", label: "Comment ça marche ?" },
                { href: "/configurateur", label: "Configurer ma box" },
                { href: "/contact", label: "Nous contacter" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Contact direct</h3>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              WhatsApp — Réponse sous 24h
            </a>
            <p className="text-xs text-muted-foreground">
              Devis gratuit · Sans engagement · Livraison clé en main
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ApprenKit. Tous droits réservés.</p>
          <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
            Mentions légales & CGV
          </Link>
        </div>
      </div>
    </footer>
  );
}
