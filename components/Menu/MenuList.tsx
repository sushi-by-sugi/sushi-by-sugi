import { MenuItem as MenuItemType, MenuCategory } from "@/app/types/menu";
import MenuItem from "./MenuItem";

interface MenuListProps {
  items: MenuItemType[];
  selectedCategory: MenuCategory;
}

export default function MenuList({ items, selectedCategory }: MenuListProps) {
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory,
  );

  return (
    <div className="h-full">
      <ul className="flex flex-col gap-8 pb-6">
        {filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </ul>
    </div>
  );
}
