import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logos/logo-light-mode.svg"

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="FACEU">
      <Image src={logo} alt="Logo" width={150} height={150} />
    </Link>
  );
}
