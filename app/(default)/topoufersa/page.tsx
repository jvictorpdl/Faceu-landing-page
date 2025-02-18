'use client';

import { FaUserCircle } from 'react-icons/fa'; // Icone de usuário para os avatares

export default function TopoUfersa() {
  const openPdf = () => {
    const pdfUrl = process.env.PUBLIC_URL + "../.././pdfs/topoufersa.pdf";
    // const pdfUrl = process.env.PUBLIC_URL + "../.../../pdfs/topoufersa.pdf";
    window.open(pdfUrl, "_blank");
  };

  // Lista de autores com avatares e nomes
  const authors = [
    { name: "Alisson Gadelha de Medeiros", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Fernando Dutra Ribeiro", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Jarbas Nunes Vidal Filho", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "José Belarmino dos Santos Neto", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "José Daniel Jales Silva", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Miguel Ferreira Neto", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Nildo da Silva Dias", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Rafael Luan Do Nascimento", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Reudismam Rolim de Sousa", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Wesley de Oliveira Santos", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}

      <section className="text-center mb-12">
    <a
    href="https://topoufersa.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
    >
    <h1 className="text-5xl font-extrabold text-gray-900">
      <span className="bg-gradient-to-r from-green-700 to-blue-500 text-transparent bg-clip-text">
        TOPOUFERSA
      </span>
    </h1>
    </a>

  {/* Subtítulo com espaçamento ajustado */}
        <h3 className="text-2xl font-extrabold text-gray-600 mt-4">
            Potencializando o ensino de topografia com uma ferramenta prática, gratuita e de fácil acesso.
        </h3>
    </section>


      {/* Resumo sobre a ferramenta */}
      <section className="bg-white p-6 rounded-2xl shadow-lg mb-12 hover:shadow-2xl transition-shadow">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resumo sobre a ferramenta</h2>
        <p className="text-gray-700 leading-relaxed">
          O processamento de dados topográficos através de softwares especializados tem se tornado amplamente difundido, mas muitas dessas plataformas exigem licenças pagas, dificultando o acesso. O TOPOUFERSA foi desenvolvido para otimizar a interpretação de dados de levantamentos topográficos, proporcionando uma ferramenta prática e acessível, com foco no ensino de topografia em cursos de graduação.
          <br /><br />
          A ferramenta foi validada por meio da comparação com outros programas profissionais, bem como pelo teste de aceitabilidade no ambiente acadêmico. O software, implementado em TypeScript, utiliza tecnologias abertas como HTML e CSS, sendo possível hospedá-lo na web ou como aplicativo para smartphones.
        </p>
      </section>

      {/* Seção de Autores */}
      <section className="bg-white p-6 rounded-2xl shadow-lg mb-12 hover:shadow-2xl transition-shadow">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Autores envolvidos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {authors.map((author, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300"
            >
              <div className="mb-2">{author.avatar}</div>
              <p className="text-center text-gray-700 font-semibold">{author.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Botão para visualizar registro de software */}
      <section className="text-center mt-8">
        <button
          onClick={openPdf}
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Visualizar Registro de Software
        </button>
      </section>
        {/* Pré-visualização do PDF */}
  <div className="mt-8 flex justify-center">
    <iframe
      src="/pdfs/topoufersa.pdf" // Caminho do PDF na pasta "public"
      width="80%"
      height="500px"
      className="border rounded-lg shadow-lg"
    ></iframe>
  </div>
    </main>
  );
}
