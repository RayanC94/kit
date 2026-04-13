import { Package, Home, Star, ShieldCheck, Sparkles } from "lucide-react";

const customItems = [
  { emoji: "📦", label: "Emballage logotypé", sub: "personnalisé aux couleurs du CFA" },
  { emoji: "💻", label: "PC ou iPad", sub: "skin logotypée aux couleurs du CFA" },
  { emoji: "🎒", label: "Pochette & accessoires", sub: "broderie ou impression logo" },
  { emoji: "🧢", label: "Textile & merch", sub: "casquette, tote bag à vos couleurs" },
  { emoji: "🍳", label: "Article métier", sub: "couteau, mètre, ciseaux… logotypés" },
  { emoji: "✏️", label: "Stylo & papeterie", sub: "personnalisés article par article" },
];

const deliveryItems = [
  {
    icon: Package,
    title: "Emballage logotypé",
    desc: "Chaque box est livrée dans un emballage rigide personnalisé au logo de votre CFA ou de l'entreprise partenaire. Un unboxing mémorable pour le premier jour de l'apprenti.",
  },
  {
    icon: Home,
    title: "Livraison au choix",
    desc: "Livraison groupée directement au CFA pour distribution, ou envoi individuel à chaque apprenti à son domicile. Vous choisissez au moment de la commande.",
  },
  {
    icon: Star,
    title: "Tout est neuf",
    desc: "Chaque article est neuf, en emballage d'origine. Aucun article reconditionné. L'apprenti reçoit du matériel professionnel de qualité dès le premier jour.",
  },
];

export function DeliveryGuarantee() {
  return (
    <>
      {/* Personnalisation highlight */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent-foreground mb-6">
                <Sparkles className="h-4 w-4" />
                Notre différence
              </div>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">
                Tout est personnalisable.<br />
                <span className="text-primary">Vraiment tout.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                De l&apos;emballage logotypé jusqu&apos;au stylo, chaque article porte votre logo.
                Vos apprentis reçoivent une box qui représente votre établissement dès leur premier jour.
              </p>
              <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3">
                Les articles métier (couteau de cuisine, mètre ruban, ciseaux...) sont définis
                avec vous selon la formation. Il n&apos;y a pas de liste imposée — on part de votre besoin.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {customItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border bg-background p-4 flex flex-col gap-1 hover:border-primary hover:shadow-sm transition-all"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="font-semibold text-sm text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Livraison & Garantie */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Livraison clé en main · Tout neuf · Garanti 1 an
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
            {deliveryItems.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-white p-5 shadow-sm flex flex-row sm:flex-col items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Garantie banner */}
          <div className="rounded-2xl border border-primary/20 bg-white px-6 py-5 flex flex-col sm:flex-row items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">
                Garantie 1 an — PC et iPad : réparation en priorité, remplacement si irréparable
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Vol</span> (avec dépôt de plainte sous 48h) ·{" "}
                <span className="font-medium text-foreground">Casse accidentelle involontaire</span> (chute, impact) →
                réparation prioritaire, remplacement par équivalent neuf si réparation impossible.{" "}
                <span className="text-muted-foreground/70">
                  Ne couvre pas : perte, immersion, dégradation intentionnelle, usure normale.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
