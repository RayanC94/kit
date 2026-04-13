import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, cfa, email, telephone, box, secteur, nbApprentis, extras, commentaire } = body;

    if (!nom || !cfa || !email || !telephone) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const contactEmail = process.env.CONTACT_EMAIL ?? "contact@apprenkit.fr";

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0F172A;">
        <div style="background: #1B4FBF; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle demande de devis — ApprenKit</h1>
        </div>
        <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">

          <h2 style="font-size: 18px; margin-top: 0;">Informations du CFA</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 40%;">Nom</td>
              <td style="padding: 8px 0; font-weight: 600;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">CFA</td>
              <td style="padding: 8px 0; font-weight: 600;">${cfa}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1B4FBF;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Téléphone</td>
              <td style="padding: 8px 0;"><a href="tel:${telephone}">${telephone}</a></td>
            </tr>
          </table>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />

          <h2 style="font-size: 18px;">Configuration de la box</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 40%;">Base choisie</td>
              <td style="padding: 8px 0; font-weight: 600;">${box ?? "Non précisée"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Formation / Secteur</td>
              <td style="padding: 8px 0; font-weight: 600;">${secteur ?? "Non précisé"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Nombre d'apprentis</td>
              <td style="padding: 8px 0; font-weight: 600; font-size: 18px; color: #1B4FBF;">${nbApprentis}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Budget OPCO estimé</td>
              <td style="padding: 8px 0; font-weight: 600;">${(nbApprentis * 500).toLocaleString("fr-FR")} €</td>
            </tr>
            ${extras ? `<tr><td style="padding: 8px 0; color: #64748b;">Articles métier</td><td style="padding: 8px 0;">${extras}</td></tr>` : ""}
          </table>

          ${
            commentaire
              ? `
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <h2 style="font-size: 18px;">Notes complémentaires</h2>
            <p style="background: #f1f5f9; padding: 12px 16px; border-radius: 8px; margin: 0;">${commentaire}</p>
          `
              : ""
          }

          <div style="margin-top: 32px; background: #FEF3C7; border: 1px solid #F59E0B; padding: 16px; border-radius: 8px;">
            <p style="margin: 0; font-weight: 600; color: #92400E;">⚠️ Logo à demander</p>
            <p style="margin: 8px 0 0; color: #92400E; font-size: 14px;">
              Le client a uploadé un logo en prévisualisation. Pensez à demander le fichier source (SVG ou PNG HD) lors de la validation de la commande.
            </p>
          </div>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "ApprenKit <devis@apprenkit.fr>",
      to: [contactEmail],
      replyTo: email,
      subject: `[Devis] ${cfa} — ${nbApprentis} apprenti(s) — ${box ?? "Box à préciser"}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
