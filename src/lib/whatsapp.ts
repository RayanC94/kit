export interface WhatsAppConfig {
  nom: string;
  cfa: string;
  email: string;
  telephone: string;
  box: string;
  secteur: string;
  nbApprentis: number;
  extras?: string;
}

export function buildWhatsAppLink(config: WhatsAppConfig): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "33600000000";
  const text = `Bonjour, je suis ${config.nom} du CFA ${config.cfa}.

Je souhaite un devis pour ${config.nbApprentis} apprenti(s).
Box choisie : ${config.box}
Formation : ${config.secteur}
${config.extras ? `Articles spécifiques : ${config.extras}` : ""}
Mon email : ${config.email}
Mon téléphone : ${config.telephone}

Pourriez-vous me faire une proposition ?`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
