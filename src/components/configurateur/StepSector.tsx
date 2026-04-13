import { Check } from "lucide-react";
import { sectors } from "@/lib/sectors";

interface StepSectorProps {
  selected: string | null;
  onSelect: (id: string) => void;
}

export function StepSector({ selected, onSelect }: StepSectorProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Formation de vos apprentis</h2>
      <p className="text-muted-foreground mb-8">
        Sélectionnez le secteur. Nous étudierons avec vous les articles métier adaptés lors du devis.
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sectors.map((sector) => (
          <button
            key={sector.id}
            type="button"
            onClick={() => onSelect(sector.id)}
            className={`
              relative text-left rounded-xl border-2 p-5 transition-all hover:border-primary hover:shadow-sm
              ${selected === sector.id ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-white"}
            `}
          >
            {selected === sector.id && (
              <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </div>
            )}

            <div className="text-3xl mb-3">{sector.icon}</div>
            <h3 className="font-semibold text-sm text-foreground">{sector.name}</h3>
          </button>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground bg-muted/50 rounded-lg px-4 py-3">
        💡 Les articles spécifiques à votre formation (couteau de chef, mètre ruban, ciseaux...) seront
        définis avec vous lors de l&apos;élaboration du devis. Tout est personnalisable.
      </p>
    </div>
  );
}
