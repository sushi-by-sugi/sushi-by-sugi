import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <Link href="/">
        <Image
          src="/images/logos/logo-sushi-by-sugi.svg"
          alt="Sushi by Sugi"
          width={278.25}
          height={127}
          priority
        />
      </Link>
    </div>
  );
}
