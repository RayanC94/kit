interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {labels.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1 flex-1">
            <div
              className={`
                flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold border-2 transition-all
                ${
                  i < currentStep
                    ? "bg-primary border-primary text-primary-foreground"
                    : i === currentStep
                    ? "bg-primary border-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-white border-border text-muted-foreground"
                }
              `}
            >
              {i < currentStep ? "✓" : i + 1}
            </div>
            <span
              className={`text-xs font-medium hidden sm:block ${
                i <= currentStep ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      {/* Progress line */}
      <div className="relative h-1.5 bg-border rounded-full mx-4 mb-2">
        <div
          className="absolute h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
