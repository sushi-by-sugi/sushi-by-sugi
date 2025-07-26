export interface MenuItem {
  id: string;
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  category: "maki" | "uramaki" | "special";
}

export type MenuCategory = "maki" | "uramaki" | "special";
