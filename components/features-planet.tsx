import ClientSwiper from "./clientSwiper"; // Importe o componente de cliente

export default function FeaturesPlanet() {
  return (
    <section id = 'equipe'>
    <section className="relative bg-gray-900 py-12">
      <div className="mx-auto max-w-full px-4 sm:px-6">
        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
            Nosso Povo
          </h2>
        </div>
        {/* Aqui está o carrossel sendo chamado */}
        <ClientSwiper />
      </div>
    </section>
    </section>
  );
}
