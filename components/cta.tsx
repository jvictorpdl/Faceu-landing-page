import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

import { FaEarthAmericas, FaHouseFloodWaterCircleArrowRight, FaArrowUpFromWaterPump } from "react-icons/fa6";
import { BiSolidDonateBlood } from "react-icons/bi";

export default function Cta() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-green-700 py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold leading-tight mb-8">Explore as Nossas Ferramentas de Engenharia</h2>
        <p className="text-xl mb-12">Ferramentas inovadoras desenvolvidas para otimizar o aprendizado e a prática de engenheiros e acadêmicos.</p>
        <div className="flex justify-center gap-8">
          <a
            href="/topoufersa"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg py-3 px-6 transition duration-200 transform hover:scale-105 flex items-center gap-2"
          >
            <FaEarthAmericas size={20} /> TOPOUFERSA
          </a>
          <a
            href="https://etaufersa.netlify.app"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg py-3 px-6 transition duration-200 transform hover:scale-105 flex items-center gap-2"
          >
            <BiSolidDonateBlood size={20} /> ETA UFERSA
          </a>
          <a
            href="https://eteufersa.vercel.app"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg py-3 px-6 transition duration-200 transform hover:scale-105 flex items-center gap-2"
          >
            <FaHouseFloodWaterCircleArrowRight size={20} /> ETE UFERSA
          </a>
          <a
            href="https://calimpe-h20.netlify.app/"
            className="bg-yellow-900 hover:bg-yellow-800 text-white font-semibold rounded-lg py-3 px-6 transition duration-200 transform hover:scale-105 flex items-center gap-2"
          >

            <FaArrowUpFromWaterPump size={20} /> CALIMPE H2O
          </a>
        </div>
      </div>
    </section>

  );
}
