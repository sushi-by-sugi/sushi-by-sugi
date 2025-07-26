import { MenuCategory, MenuItem } from "../types/menu";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Spicy Tuna Maki",
    price: "€8",
    description:
      "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
    imageSrc: "/images/menu-sushi.png",
    category: "maki",
  },
  {
    id: "2",
    title: "California Uramaki",
    price: "€9",
    description:
      "Fresh crab meat, avocado, and cucumber, rolled inside-out with toasted sesame seeds.",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "3",
    title: "Dragon Roll",
    price: "€12",
    description:
      "Tempura shrimp, avocado, and cucumber topped with eel and avocado slices.",
    imageSrc: "/images/menu-sushi.png",
    category: "special",
  },
];

export const categories: MenuCategory[] = ["maki", "uramaki", "special"];
