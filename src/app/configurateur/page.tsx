import type { Metadata } from "next";
import { Suspense } from "react";
import { ConfigurateurWrapper } from "@/components/configurateur/ConfigurateurWrapper";

export const metadata: Metadata = {
  title: "Configurateur de Welcome Box — ApprenKit",
  description:
    "Configurez votre Welcome Box CFA en 4 étapes. Choisissez la base, la formation, uploadez votre logo et recevez votre devis OPCO sous 24h.",
};

export default function ConfigurateurPage() {
  return (
    <Suspense>
      <ConfigurateurWrapper />
    </Suspense>
  );
}
