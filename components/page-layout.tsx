import type React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
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
    <div className="lg:h-screen w-screen p-6 md:p-10 lg:p-12 overflow-x-hidden">
      <div className="h-full min-h-0 flex flex-col gap-6 lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-[48vh] sm:h-[56vh] md:h-[60vh] lg:h-full">
          <Navbar inline={true} />
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl" />

          <div className="absolute bottom-6 left-6 z-10">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium max-w-md leading-tight">
              {heading}
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:h-full min-h-0 lg:overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
