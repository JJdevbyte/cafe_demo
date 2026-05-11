export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: "Coffee" | "Specialty" | "Pastry" | string;
  image: string;
  description: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Obsidian Cold Brew",
    price: "$8",
    category: "Coffee",
    image: "/menu-cold-brew.webp",
    description: "12-hour extraction with notes of dark chocolate and smoke."
  },
  {
    id: 2,
    name: "Velvet Flat White",
    price: "$6",
    category: "Coffee",
    image: "/menu-flat-white.webp",
    description: "Micro-foam silk over high-altitude espresso."
  },
  {
    id: 3,
    name: "Ceremonial Matcha",
    price: "$9",
    category: "Specialty",
    image: "/menu-matcha.webp",
    description: "Whisked stone-ground Uji matcha with oat milk."
  },
  {
    id: 4,
    name: "Artisanal Croissant",
    price: "$7",
    category: "Pastry",
    image: "/menu-croissant.webp",
    description: "82% butter fat, 48-hour lamination."
  },
  {
    id: 5,
    name: "Wild Berry Tart",
    price: "$12",
    category: "Pastry",
    image: "/menu-tart.webp",
    description: "Sable crust with organic mountain berries."
  },
  {
    id: 6,
    name: "Botanical Tonic",
    price: "$8",
    category: "Specialty",
    image: "/menu-tonic.webp",
    description: "Cold brew infused with rosemary and citrus zest."
  }
];
