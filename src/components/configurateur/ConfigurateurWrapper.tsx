"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { StepBase } from "./StepBase";
import { StepSector } from "./StepSector";
import { StepCustomize } from "./StepCustomize";
import { StepContact } from "./StepContact";
import type { BoxBase } from "@/lib/boxes";

const STEPS = ["Base", "Formation", "Personnalisation", "Devis"];

export function ConfigurateurWrapper() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);

  // Box selection
  const [selectedBox, setSelectedBox] = useState<BoxBase | null>(null);
  // Sector selection
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  // Customize
  const [nbApprentis, setNbApprentis] = useState(1);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [commentaire, setCommentaire] = useState("");
  // Contact
  const [contact, setContact] = useState({
    nom: "",
    cfa: "",
    email: "",
    telephone: "",
  });

  // Pre-fill from URL params
  useEffect(() => {
    const boxParam = searchParams.get("box") as BoxBase | null;
    const secteurParam = searchParams.get("secteur");
    if (boxParam && (boxParam === "pc" || boxParam === "ipad")) {
      setSelectedBox(boxParam);
      if (!secteurParam) setStep(1); // jump to step 2
    }
    if (secteurParam) {
      setSelectedSector(secteurParam);
      if (boxParam) setStep(2); // jump to step 3
    }
  }, [searchParams]);

  function canGoNext() {
    if (step === 0) return selectedBox !== null;
    if (step === 1) return selectedSector !== null;
    if (step === 2) return nbApprentis >= 1;
    return false;
  }

  function goNext() {
    if (canGoNext() && step < STEPS.length - 1) setStep((s) => s + 1);
  }

  function goPrev() {
    if (step > 0) setStep((s) => s - 1);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-foreground mb-2">
          Configurez votre Welcome Box
        </h1>
        <p className="text-muted-foreground">
          Personnalisez la box de vos apprentis en 4 étapes — devis gratuit, sans engagement.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-10">
        <ProgressBar currentStep={step} totalSteps={STEPS.length} labels={STEPS} />
      </div>

      {/* Step content */}
      <div className="min-h-[400px]">
        {step === 0 && (
          <StepBase selected={selectedBox} onSelect={setSelectedBox} />
        )}
        {step === 1 && (
          <StepSector selected={selectedSector} onSelect={setSelectedSector} />
        )}
        {step === 2 && (
          <StepCustomize
            nbApprentis={nbApprentis}
            onNbApprentisChange={setNbApprentis}
            logoPreview={logoPreview}
            onLogoChange={setLogoPreview}
            commentaire={commentaire}
            onCommentaireChange={setCommentaire}
          />
        )}
        {step === 3 && (
          <StepContact
            boxId={selectedBox}
            secteurId={selectedSector}
            nbApprentis={nbApprentis}
            commentaire={commentaire}
            contact={contact}
            onContactChange={setContact}
          />
        )}
      </div>

      {/* Navigation */}
      {step < 3 && (
        <div className="mt-10 flex items-center justify-between border-t pt-6">
          <Button
            variant="ghost"
            onClick={goPrev}
            disabled={step === 0}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Précédent
          </Button>

          <Button
            onClick={goNext}
            disabled={!canGoNext()}
            className="gap-1"
          >
            {step === 2 ? "Voir le récapitulatif" : "Suivant"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
