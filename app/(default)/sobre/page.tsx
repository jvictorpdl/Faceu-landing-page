export default function Sobre() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Sobre o <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Projeto</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Ferramentas computacionais acessíveis para ensino e prática da engenharia.
        </p>
      </section>

      {/* Grid de Seções */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Contextualização */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contextualização</h2>
          <p className="text-gray-700 leading-relaxed">
            A utilização de softwares especializados para resolver problemas de engenharia tem se tornado 
            cada vez mais comum. No entanto, muitas dessas ferramentas exigem licenças pagas, dificultando o acesso. 
            Nosso projeto visa otimizar ferramentas didáticas acessíveis e gratuitas, auxiliando no ensino de 
            componentes curriculares em instituições de ensino superior.
          </p>
        </div>

        {/* Objetivos */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Objetivos</h2>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Otimizar ferramentas computacionais didáticas para o ensino da engenharia.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Proporcionar um ambiente virtual via web para acesso dos usuários.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Viabilizar aplicações práticas para smartphones.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Contribuir com a melhoria do ensino de engenharia nas universidades.
            </li>
          </ul>
        </div>

        {/* Público-Alvo */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Público-Alvo</h2>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Profissionais e estudantes voltados à produção científica e tecnológica.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Estudantes e profissionais de ensino médio interessados na área de engenharia.
            </li>
          </ul>
        </div>
        
      </div>
    </main>
  );
}
