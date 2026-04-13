"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, ImageIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface StepCustomizeProps {
  nbApprentis: number;
  onNbApprentisChange: (n: number) => void;
  logoPreview: string | null;
  onLogoChange: (preview: string | null) => void;
  commentaire: string;
  onCommentaireChange: (c: string) => void;
}

export function StepCustomize({
  nbApprentis,
  onNbApprentisChange,
  logoPreview,
  onLogoChange,
  commentaire,
  onCommentaireChange,
}: StepCustomizeProps) {
  const [dragOver, setDragOver] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        onLogoChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    },
    [onLogoChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".svg", ".webp"] },
    maxFiles: 1,
    onDragEnter: () => setDragOver(true),
    onDragLeave: () => setDragOver(false),
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Personnalisation</h2>
      <p className="text-muted-foreground mb-8">
        Précisez le nombre d&apos;apprentis et uploadez le logo de votre CFA.
      </p>

      <div className="space-y-8">
        {/* Nb apprentis */}
        <div className="space-y-2">
          <Label htmlFor="nb-apprentis" className="text-base font-semibold">
            Nombre d&apos;apprentis à équiper
          </Label>
          <Input
            id="nb-apprentis"
            type="number"
            min={1}
            max={9999}
            value={nbApprentis}
            onChange={(e) => onNbApprentisChange(Math.max(1, parseInt(e.target.value) || 1))}
            className="max-w-xs text-base"
            placeholder="ex: 25"
          />
          <p className="text-xs text-muted-foreground">
            Budget OPCO estimé : {(nbApprentis * 500).toLocaleString("fr-FR")}€ (500€ × {nbApprentis})
          </p>
        </div>

        {/* Logo upload */}
        <div className="space-y-2">
          <Label className="text-base font-semibold">Logo de votre CFA</Label>
          <p className="text-sm text-muted-foreground">
            Prévisualisation uniquement — le fichier final sera demandé lors de la validation.
          </p>

          {logoPreview ? (
            <div className="relative inline-block">
              <div className="rounded-xl border-2 border-primary bg-white p-4 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoPreview}
                  alt="Logo CFA"
                  className="h-20 w-20 object-contain rounded-lg"
                />
                <div>
                  <p className="font-medium text-sm text-foreground">Logo chargé ✓</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Il sera appliqué sur tous les articles logotypés
                  </p>
                  <button
                    type="button"
                    onClick={() => onLogoChange(null)}
                    className="mt-2 text-xs text-destructive hover:underline flex items-center gap-1"
                  >
                    <X className="h-3 w-3" /> Supprimer
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className={`
                cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all
                ${isDragActive || dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"}
              `}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  {isDragActive ? (
                    <Upload className="h-6 w-6 text-primary" />
                  ) : (
                    <ImageIcon className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {isDragActive ? "Déposez ici..." : "Déposer votre logo"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    PNG, JPG, SVG — ou cliquez pour parcourir
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Commentaire */}
        <div className="space-y-2">
          <Label htmlFor="commentaire" className="text-base font-semibold">
            Informations complémentaires{" "}
            <span className="font-normal text-muted-foreground">(optionnel)</span>
          </Label>
          <Textarea
            id="commentaire"
            value={commentaire}
            onChange={(e) => onCommentaireChange(e.target.value)}
            placeholder="Couleurs spécifiques, articles particuliers souhaités, date de rentrée souhaitée..."
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}
