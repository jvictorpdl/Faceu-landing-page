import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Veja as Nossas Ferramentas! 
            </h2>
            <div className="mx-auto flex max-w-xs flex-wrap justify-center gap-4 sm:max-w-none">
              <a
                href="https://topoufersa.netlify.app"
                className="px-4 py-2 rounded-lg text-white font-bold shadow bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] hover:bg-[length:100%_150%] transition-all duration-200"
              >
                TOPONUFERSA
              </a>
              <a
                href="https://etaufersa.netlify.app"
                className="px-4 py-2 rounded-lg text-white font-bold shadow bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] hover:bg-[length:100%_150%] transition-all duration-200"
              >
                ETA UFERSA
              </a>
              <a
                href="https://eteufersa.vercel.app"
                className="px-4 py-2 rounded-lg text-white font-bold shadow bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] hover:bg-[length:100%_150%] transition-all duration-200"
              >
                ETE UFERSA
              </a>
              <a
                href="https://autodepura.netlify.app"
                className="px-4 py-2 rounded-lg text-white font-bold shadow bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] hover:bg-[length:100%_150%] transition-all duration-200"
              >
                AUTO DEPURA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
