import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Site branding */}
          <div className="flex items-center justify-center ">
            <Link href="/" aria-label="Página inicial">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation links */}
          <nav className="flex space-x-6">
            {[
              { href: "#", label: "Sobre" },
              { href: "#", label: "Ferramentas" },
              { href: "#", label: "Pesquisas" },
              { href: "#", label: "Documentos" },
              { href: "#", label: "Contato" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-base font-semibold text-gray-900 hover:text-gray-600 ">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
