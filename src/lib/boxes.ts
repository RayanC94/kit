export type BoxBase = "pc" | "ipad";

export interface BoxItem {
  label: string;
  icon: string;
}

export interface BoxData {
  id: BoxBase;
  name: string;
  tagline: string;
  icon: string;
  badge: string;
  items: BoxItem[];
  color: string;
}

export const boxes: BoxData[] = [
  {
    id: "pc",
    name: "Box PC",
    tagline: "Idéale pour les formations nécessitant un ordinateur portable",
    icon: "💻",
    badge: "Le plus demandé",
    color: "blue",
    items: [
      { label: "PC portable i3N100 / 8 Go RAM / 256 Go SSD", icon: "💻" },
      { label: "Chargeur rapide USB-C", icon: "⚡" },
      { label: "Souris sans fil", icon: "🖱️" },
      { label: "Tapis de souris logotypé", icon: "🟦" },
      { label: "Casque Bluetooth", icon: "🎧" },
      { label: "Pochette ordinateur logotypée", icon: "🎒" },
      { label: "Stylo 4 couleurs logotypé", icon: "🖊️" },
      { label: "Casquette ou Tote bag logotypés", icon: "🧢" },
      { label: "Article métier spécifique à la formation", icon: "🎁" },
    ],
  },
  {
    id: "ipad",
    name: "Box iPad",
    tagline: "Idéale pour les formations créatives, de terrain ou de soins",
    icon: "📱",
    badge: "Format tablette",
    color: "amber",
    items: [
      { label: "iPad 10ème génération 64 Go", icon: "📱" },
      { label: "Protection / coque logotypée", icon: "🛡️" },
      { label: "Stylet Apple-compatible", icon: "✏️" },
      { label: "Clavier Bluetooth pour iPad", icon: "⌨️" },
      { label: "Casque Bluetooth", icon: "🎧" },
      { label: "Chargeur rapide USB-C", icon: "⚡" },
      { label: "Stylo 4 couleurs logotypé", icon: "🖊️" },
      { label: "Casquette ou Tote bag logotypés", icon: "🧢" },
      { label: "Article métier spécifique à la formation", icon: "🎁" },
    ],
  },
];

export function getBox(id: BoxBase): BoxData | undefined {
  return boxes.find((b) => b.id === id);
}
