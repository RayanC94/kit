import { Check } from "lucide-react";
import { boxes, type BoxBase } from "@/lib/boxes";

interface StepBaseProps {
  selected: BoxBase | null;
  onSelect: (box: BoxBase) => void;
}

export function StepBase({ selected, onSelect }: StepBaseProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Choisissez votre base</h2>
      <p className="text-muted-foreground mb-8">
        Tout le contenu commun est inclus. Vous pourrez ajouter les articles métier à l&apos;étape suivante.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {boxes.map((box) => (
          <button
            key={box.id}
            type="button"
            onClick={() => onSelect(box.id)}
            className={`
              relative text-left rounded-2xl border-2 p-6 transition-all hover:border-primary hover:shadow-md
              ${selected === box.id ? "border-primary bg-primary/5 shadow-md" : "border-border bg-white"}
            `}
          >
            {selected === box.id && (
              <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" />
              </div>
            )}

            <div className="text-4xl mb-3">{box.icon}</div>
            <h3 className="text-xl font-bold text-foreground mb-1">{box.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{box.tagline}</p>

            <ul className="space-y-1.5">
              {box.items.map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-primary">✓</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </div>
  );
}
