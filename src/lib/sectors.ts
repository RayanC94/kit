export interface SectorItem {
  label: string;
}

export interface Sector {
  id: string;
  name: string;
  icon: string;
  description: string;
  extras: SectorItem[];
}

export const sectors: Sector[] = [
  {
    id: "cuisine",
    name: "Cuisine / Hôtellerie",
    icon: "🍳",
    description: "CAP Cuisine, Bac Pro Restauration, BTS Hôtellerie...",
    extras: [
      { label: "Couteau de chef professionnel logotypé" },
      { label: "Planche à découper avec logo entreprise" },
      { label: "Tablier professionnel logotypé" },
    ],
  },
  {
    id: "informatique",
    name: "Informatique / Digital",
    icon: "💻",
    description: "BTS SIO, Licence Pro, BUT Informatique...",
    extras: [
      { label: "Hub USB-C multiport" },
      { label: "Webcam HD 1080p" },
      { label: "Support de téléphone de bureau" },
    ],
  },
  {
    id: "commerce",
    name: "Commerce / Vente",
    icon: "🛒",
    description: "BTS MCO, BTS NDRC, Licence Commerce...",
    extras: [
      { label: "Badge professionnel nominatif" },
      { label: "Carnet de rendez-vous cuir logotypé" },
      { label: "Porte-documents élégant logotypé" },
    ],
  },
  {
    id: "btp",
    name: "BTP / Construction",
    icon: "🏗️",
    description: "CAP Maçonnerie, BTS Bâtiment, BUT Génie Civil...",
    extras: [
      { label: "Mètre ruban professionnel logotypé" },
      { label: "Gilet de sécurité logotypé" },
      { label: "Carnet de chantier étanche logotypé" },
    ],
  },
  {
    id: "sante",
    name: "Santé / Médico-social",
    icon: "🏥",
    description: "BTS SP3S, DE Infirmier, Aide-soignant...",
    extras: [
      { label: "Stéthoscope professionnel" },
      { label: "Carnet de soins logotypé" },
      { label: "Trousse de soin logotypée" },
    ],
  },
  {
    id: "coiffure",
    name: "Coiffure / Esthétique",
    icon: "✂️",
    description: "CAP Coiffure, BP Esthétique, BTS Esthétique...",
    extras: [
      { label: "Ciseaux professionnels de coiffure" },
      { label: "Trousse à outils logotypée" },
      { label: "Tablier professionnel logotypé" },
    ],
  },
  {
    id: "transport",
    name: "Transport / Logistique",
    icon: "🚛",
    description: "CAP Conducteur, BTS Transport, Licence Logistique...",
    extras: [
      { label: "Lampe frontale professionnelle" },
      { label: "Carnet de bord logotypé" },
      { label: "Gilet de sécurité logotypé" },
    ],
  },
  {
    id: "autre",
    name: "Autre formation",
    icon: "🎓",
    description: "Formation non listée ci-dessus",
    extras: [{ label: "Articles métier définis avec le CFA" }],
  },
];

export function getSector(id: string): Sector | undefined {
  return sectors.find((s) => s.id === id);
}
