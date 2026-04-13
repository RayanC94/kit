import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, cfa, email, telephone, box, secteur, nbApprentis, extras, commentaire } = body;

    if (!nom || !cfa || !email || !telephone) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
    }

    const message = `
NOUVELLE DEMANDE DE DEVIS — ApprenKit

━━━ INFORMATIONS DU CFA ━━━
Nom       : ${nom}
CFA       : ${cfa}
Email     : ${email}
Téléphone : ${telephone}

━━━ CONFIGURATION DE LA BOX ━━━
Base choisie      : ${box ?? "Non précisée"}
Formation/Secteur : ${secteur ?? "Non précisé"}
Nb apprentis      : ${nbApprentis}
Budget OPCO estimé: ${(nbApprentis * 500).toLocaleString("fr-FR")} €
${extras ? `Articles métier   : ${extras}` : ""}
${commentaire ? `\nNotes : ${commentaire}` : ""}

⚠️ Pensez à demander le logo (SVG ou PNG HD) lors de la validation.
    `.trim();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[Devis] ${cfa} — ${nbApprentis} apprenti(s) — ${box ?? "Box à préciser"}`,
        from_name: `${nom} (${cfa})`,
        replyto: email,
        message,
      }),
    });

    const data = await res.json();
    if (!data.success) {
      console.error("Web3Forms error:", data);
      return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
