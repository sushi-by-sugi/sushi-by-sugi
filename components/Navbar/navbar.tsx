"use client";
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavbarProps {
  inline?: boolean;
}

export default function Navbar({ inline = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#181820]/50 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        className={`fixed top-0 left-0 h-dvh w-full md:w-full lg:w-[32rem] bg-[#181820] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-300 flex items-center gap-2 transition-colors duration-300 cursor-pointer text-lg"
              aria-label="Sluiten"
            >
              <CgClose className="h-6 w-6" />
              Sluiten
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-6 pb-10 flex flex-col justify-center items-center gap-6 text-white text-4xl sm:text-5xl md:text-6xl">
            <li className="w-full">
              <Link
                href="/"
                className="block text-center hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/menu"
                className="block text-center hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/reserveren"
                className="block text-center hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserveren
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/services/private-dining"
                className="block text-center hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Private dining
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/services/sushi-workshop"
                className="block text-center hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Workshops
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/services/sushi-catering"
                className="block text-center hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Catering
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/contact"
                className="block text-center hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="absolute top-6 left-6 right-6 z-40 flex justify-between items-center">
        <div className="bg-[#181820] p-6 text-2xl rounded-lg font-medium">
          <ul className="flex space-x-6 text-white">
            <li>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="cursor-pointer hover:text-gray-300 transition-colors duration-300 flex items-center gap-2"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <HiOutlineBars3 className="h-8 w-8" />
                Menu
              </button>
            </li>
            <li>
              <Link
                href="/reserveren"
                className="px-6 py-2 border-2 border-gray-400/50 hover:bg-white group-hover:border-transparent transition-all duration-300 rounded-lg"
              >
                Reserveren
              </Link>
            </li>
          </ul>
        </div>
        {inline && (
          <Link href="/">
            <Image
              src="/images/logos/logo-sushi-by-sugi.svg"
              alt="Sushi by Sugi"
              width={139}
              height={63.5}
              priority
            />
          </Link>
        )}
      </nav>
    </>
  );
}
