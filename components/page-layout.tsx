import type React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
import Logo from "@/components/Navbar/logo";

interface PageLayoutProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  children: React.ReactNode;
}

export default function PageLayout({
  imageSrc,
  imageAlt,
  heading,
  children,
}: PageLayoutProps) {
  return (
    <div className="h-screen w-screen p-12 overflow-hidden">
      <Navbar />
      <div className="h-full flex">
        <div className="w-1/2 relative">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />

          <Logo />

          <div className="absolute bottom-6 left-6 z-10">
            <h1 className="text-white text-4xl md:text-5xl font-bold max-w-md leading-tight">
              {heading}
            </h1>
          </div>
        </div>

        <div className="w-1/2 bg-white overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
