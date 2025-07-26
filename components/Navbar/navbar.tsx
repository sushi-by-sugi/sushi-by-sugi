"use client";
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  inline?: boolean;
}

export default function Navbar({ inline = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#181820]/50 backdrop-blur-xs z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-[#181820] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-gray-300 mb-6 flex items-center gap-1 transition-colors duration-300 cursor-pointer text-lg"
          >
            <CgClose />
            Sluiten
          </button>
          <ul className="space-y-4 text-white h-full flex flex-col justify-center items-center text-7xl">
            {/*<Link href="/services">Our Services</Link>*/}
            {/*<Link href="/services/sushi-catering">Sushi Catering</Link>*/}
            <li>
              <Link
                href="/services/private-dining"
                className="hover:text-gray-300 transition-colors duration-300 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Private dining
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="hover:text-gray-300 transition-colors duration-300 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
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
              >
                <HiOutlineBars3 className="h-8 w-8" />
                Menu
              </button>
            </li>
            <li>
              <Link
                href="/about"
                className="px-6 py-2 border-2 border-gray-400/50 hover:bg-white group-hover:border-transparent transition-all duration-300 rounded-lg"
              >
                <span className="text-white hover:text-black transition-colors duration-300">
                  Reserveren
                </span>
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
