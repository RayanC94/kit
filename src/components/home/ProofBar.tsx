import { Users, Euro, Package, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "800 000+",
    label: "apprentis en France / an",
  },
  {
    icon: Euro,
    value: "Jusqu'à 500€",
    label: "financés par votre OPCO",
  },
  {
    icon: Package,
    value: "30 à 45 jours",
    label: "de la commande à la livraison",
  },
  {
    icon: ShieldCheck,
    value: "Garantie 1 an",
    label: "vol & casse accidentelle",
  },
];

export function ProofBar() {
  return (
    <section className="border-y bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
