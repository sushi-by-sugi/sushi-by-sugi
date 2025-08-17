import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
import Logo from "@/components/Navbar/logo";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import ImageSection from "@/components/ImageSection";

export default function Home() {
  return (
    <div className="min-h-[100svh] flex flex-col lg:flex-row gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-12">
      <div className="lg:w-3/4 w-full relative overflow-hidden rounded-2xl min-h-[55svh] sm:min-h-[65svh]">
        <Image
          src="/images/home-image.png"
          alt="home-sushi-image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <Navbar />
        <Logo />

        <div className="absolute bottom-6 left-6 z-10">
          <ul className="flex gap-4">
            <li className="border-2 border-gray-400/50 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-white hover:border-transparent transition-all duration-300 group">
              <Link href="/">
                <FaInstagram className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" />
              </Link>
            </li>
            <li className="border-2 border-gray-400/50 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-white hover:border-transparent transition-all duration-300 group">
              <Link href="/">
                <FaTiktok className="h-4 w-4 text-white group-hover:text-black transition-colors duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden w-full flex flex-col gap-4">
        <Link
          href="/services/private-dining"
          aria-label="Private dining"
          className="block"
        >
          <div className="relative w-full h-40 rounded-2xl overflow-hidden">
            <Image
              src="/images/Subtract.png"
              alt="Private dining"
              fill
              sizes="100vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-end p-3">
              <h3 className="text-white text-xl font-medium drop-shadow-md">
                Private dining
              </h3>
            </div>
          </div>
        </Link>

        <Link
          href="/services/sushi-workshop"
          aria-label="Sushi Workshops"
          className="block"
        >
          <div className="relative w-full h-40 rounded-2xl overflow-hidden">
            <Image
              src="/images/Subtract-2.png"
              alt="Sushi Workshops"
              fill
              sizes="100vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-end p-3">
              <h3 className="text-white text-xl font-medium drop-shadow-md">
                Sushi Workshops
              </h3>
            </div>
          </div>
        </Link>

        <Link
          href="/services/sushi-catering"
          aria-label="Sushi Catering"
          className="block"
        >
          <div className="relative w-full h-40 rounded-2xl overflow-hidden">
            <Image
              src="/images/Subtract-3.png"
              alt="Sushi Catering"
              fill
              sizes="100vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-end p-3">
              <h3 className="text-white text-xl font-medium drop-shadow-md">
                Catering
              </h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex lg:w-1/4 w-full flex-col gap-6">
        <ImageSection
          text={"Private dining"}
          src="/images/Subtract.png"
          alt="Private dining"
          link={"/services/private-dining"}
        />
        <ImageSection
          text={"Sushi Workshops"}
          src="/images/Subtract-2.png"
          alt="Sushi Workshops"
          link={"/services/sushi-workshop"}
        />
        <ImageSection
          text={"Catering"}
          src="/images/Subtract-3.png"
          alt="Sushi Catering"
          link={"/services/sushi-catering"}
        />
      </div>
    </div>
  );
}
