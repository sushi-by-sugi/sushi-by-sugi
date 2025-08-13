export interface MenuItem {
  id: string;
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  category: MenuCategory;
}

export type MenuCategory = "maki" | "uramaki" | "nigiri";
