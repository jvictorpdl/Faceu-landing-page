'use client';

import { FaUserCircle } from 'react-icons/fa'; // Ícone de usuário para os avatares
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Image from 'next/image';  // Certifique-se de importar o componente Image

// import alissonAvatar from '../../../public/images/members/alissonAvatar.png';

export default function TopoUfersa() {
  const openPdf = () => {
    const pdfUrl = process.env.PUBLIC_URL + '../.././pdfs/topoufersa.pdf';
    window.open(pdfUrl, '_blank');
  };

  // Lista de autores com avatares e nomes
  const authors = [
    { name: "Alisson Gadelha de Medeiros", avatar: '/images/members/alissonAvatar.png' },
    { name: "Fernando Dutra Ribeiro", avatar: '/images/members/fernando_dutra.jfif' }, // Sem avatar, deve mostrar o ícone
    { name: "Jarbas Nunes Vidal Filho", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "José Belarmino dos Santos Neto", avatar: null }, // Sem avatar, deve mostrar o ícone
    { name: "José Daniel Jales Silva", avatar: null }, // Sem avatar, deve mostrar o ícone
    { name: "Miguel Ferreira Neto", avatar: null }, // Sem avatar, deve mostrar o ícone
    { name: "Nildo da Silva Dias", avatar: <FaUserCircle size={40} className="text-gray-600" /> },
    { name: "Rafael Luan Do Nascimento", avatar: null }, // Sem avatar, deve mostrar o ícone
    { name: "Reudismam Rolim de Sousa", avatar: null }, // Sem avatar, deve mostrar o ícone
    { name: "Wesley de Oliveira Santos", avatar: null }, // Sem avatar, deve mostrar o ícone
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.a
          href="https://topoufersa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
        >
          <h1 className="text-6xl font-extrabold text-gray-900">
            <span className="bg-gradient-to-r from-green-700 to-blue-500 text-transparent bg-clip-text">
              TOPOUFERSA
            </span>
          </h1>
        </motion.a>

        <h3 className="text-xl font-medium text-gray-700 mt-4 max-w-3xl mx-auto">
          Ferramenta prática e gratuita para otimizar a interpretação de dados topográficos no ensino acadêmico.
        </h3>

        <motion.a
          href="https://topoufersa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="mt-6 inline-flex items-center px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
        >
          🚀 Acessar a Ferramenta
        </motion.a>
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


      <section className="bg-white p-8 rounded-2xl shadow-lg mb-12 hover:shadow-2xl transition-shadow">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Autores envolvidos</h2>
        <div className="overflow-x-auto flex space-x-6 py-4 bg-gray-50 px-4 rounded-lg shadow-md">
          {authors.map((author, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 transition-all transform hover:scale-105 hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-200 rounded-full shadow-md overflow-hidden">
                {/* Renderizar o ícone ou a imagem, dependendo da disponibilidade */}
                {author.avatar ? (
                  typeof author.avatar === 'string' ? (
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  ) : (
                    author.avatar // Ícone do React (FaUserCircle)
                  )
                ) : (
                  <FaUserCircle size={40} className="text-gray-600" /> // Ícone padrão caso avatar seja null
                )}
              </div>
              <span className="text-gray-800 font-semibold text-lg whitespace-nowrap max-w-xs">{author.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Botão para visualizar registro de software */}
      <section className="text-center mt-8">
        <motion.button
          onClick={openPdf}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <FiDownload className="mr-2" /> Baixar Registro de Software
        </motion.button>
      </section>

      {/* Pré-visualização do PDF */}
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pré-visualização do Registro</h2>
        <iframe
          src="/pdfs/topoufersa.pdf"
          width="80%"
          height="500px"
          className="border rounded-lg shadow-lg"
        ></iframe>
      </div>
    </main>
  );
}
