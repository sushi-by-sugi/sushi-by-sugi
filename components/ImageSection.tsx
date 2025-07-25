import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

interface ImageSectionProps {
  src: string;
  alt: string;
  text: string;
}

export default function ImageSection({ src, alt, text }: ImageSectionProps) {
  return (
    <div className={`flex-1 relative`}>
      <Image src={src} alt={alt} fill className="object-cover rounded-2xl" />
      <button
        className={
          "absolute right-0 bottom-0 text-3xl rounded-tl-2xl flex gap-4 items-end"
        }
      >
        {text}{" "}
        <Link
          className={
            "border-2 border-gray-500 rounded-full p-1 w-8 h-8 flex items-center justify-center hover:bg-white hover:border-transparent transition-all duration-300 group"
          }
          href="/"
        >
          <GoArrowRight className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" />
        </Link>
      </button>
    </div>
  );
}
