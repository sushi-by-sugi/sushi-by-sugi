import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-6 z-40 bg-[#181820] p-6 text-2xl rounded-lg font-medium">
      <ul className="flex space-x-6 text-white">
        <li>
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-300 flex items-center gap-2"
          >
            <HiOutlineBars3 className="h-8 w-8" />
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="px-6 py-2 border-2 border-gray-400 hover:bg-white group-hover:border-transparent transition-all duration-300 rounded-lg"
          >
            <span className="text-white hover:text-black transition-colors duration-300">
              Reserveren
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
