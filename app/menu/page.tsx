"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      <div className="lg:overflow-auto [scrollbar-gutter:stable] lg:h-full flex justify-center p-20 border-2 border-gray-400/50 rounded-2xl">
        <div className="flex items-center flex-col gap-12">
          <div className="flex gap-4 text-xl">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden px-6 py-2 border-2 border-gray-400/50 transition-colors duration-300 rounded-lg cursor-pointer ${
                    isActive ? "text-black" : "hover:bg-white hover:text-black"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryHighlight"
                      className="absolute inset-0 rounded-lg bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                        mass: 0.6,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="flex flex-col gap-12">
            <h1 className="text-3xl text-center">
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}
            </h1>

            <div className="h-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedCategory}
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <MenuList
                    items={menuItems}
                    selectedCategory={selectedCategory}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
