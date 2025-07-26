import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
import Logo from "@/components/Navbar/logo";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import ImageSection from "@/components/ImageSection";

export default function Home() {
  return (
    <div className="min-h-screen flex p-12 gap-6">
      <div className="w-3/4 relative">
        <Image
          src="/images/home-image.png"
          alt="home-sushi-image"
          fill
          className="object-cover rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        <Navbar />
        <Logo />

        <div className="absolute bottom-6 left-6 z-10">
          <ul className={"flex gap-4"}>
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

      <div className="w-1/4 flex flex-col gap-6">
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
          link={"/services/private-dining"}
        />
        <ImageSection
          text={"Catering"}
          src="/images/Subtract-3.png"
          alt="Sushi Workshops"
          link={"/services/private-dining"}
        />
      </div>
    </div>
  );
}
