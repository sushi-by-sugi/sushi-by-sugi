"use client";
import { useState } from "react";
import MenuList from "@/components/Menu/MenuList";
import PageLayout from "@/components/page-layout";
import type { MenuCategory } from "@/app/types/menu";
import { categories, menuItems } from "@/app/data/menuitems";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategory>("maki");

  return (
    <PageLayout
      imageSrc="/images/menu-sushi.png"
      imageAlt="Sushi menu image"
      heading="Menu"
    >
      <div className="overflow-auto h-full flex justify-center p-20 border-2 border-gray-400/50 rounded-2xl">
        <div className="flex items-center flex-col gap-12">
          {/* button section */}
          <div className="flex gap-4 text-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 border-2 border-gray-400/50 transition-all duration-300 rounded-lg
                  ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* menu items */}
          <div className="flex flex-col gap-12">
            <h1 className="text-3xl text-center">
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}
            </h1>
            <div className="h-full overflow-y-auto">
              <MenuList items={menuItems} selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
