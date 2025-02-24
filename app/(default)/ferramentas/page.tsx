import Cta from "@/components/cta";
import { FaEarthAmericas, FaHouseFloodWaterCircleArrowRight, FaArrowUpFromWaterPump } from "react-icons/fa6";
import { BiSolidDonateBlood } from "react-icons/bi";



export default function Ferramentas() {
  return (
    <div>

      {/* Header da Página */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Ferramentas do FACEU</h1>
          <p className="text-xl max-w-3xl mx-auto">Explore as ferramentas desenvolvidas para facilitar o ensino e a prática de engenharia, com foco em eficiência e inovação acadêmica.</p>
        </div>
      </section>

      {/* Ferramentas - Layout em Cards */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Nossas Ferramentas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 p-8">
              <FaEarthAmericas size={48} className="text-blue-700 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">TOPOUFERSA</h3>
              <p className="text-gray-700 mt-2">Ferramenta para cálculos avançados, focada em otimizar processos e gerar resultados precisos.</p>
              <a
                href="/topoufersa"
                className="mt-6 inline-block bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Acessar
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 p-8">
              <BiSolidDonateBlood size={48} className="text-green-700 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">ETA UFERSA</h3>
              <p className="text-gray-700 mt-2">Uma plataforma interativa para facilitar o ensino de engenharia e ciências aplicadas.</p>
              <a
                href="https://etaufersa.netlify.app"
                className="mt-6 inline-block bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Acessar
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 p-8">
              <FaHouseFloodWaterCircleArrowRight size={48} className="text-red-700 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">ETE UFERSA</h3>
              <p className="text-gray-700 mt-2">Ferramenta completa para cálculos e simulações voltadas para engenheiros e acadêmicos.</p>
              <a
                href="https://eteufersa.vercel.app"
                className="mt-6 inline-block bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Acessar
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 p-8">
              <FaArrowUpFromWaterPump size={48} className="text-yellow-700 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">CALIMPE-H20</h3>
              <p className="text-gray-700 mt-2">Plataforma para cálculos hidráulicos e simulações de sistemas hídricos e ambientais.</p>
              <a
                href="https://calimpe-h20.netlify.app/"
                className="mt-6 inline-block bg-yellow-700 text-white py-2 px-6 rounded-lg hover:bg-yellow-800 transition duration-200"
              >
                Acessar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <Cta /> */}

    </div>
  );
}
