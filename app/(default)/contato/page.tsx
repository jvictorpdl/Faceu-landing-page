import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contato() {
  return (
    <div>

      {/* Header da Página */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">Tem alguma dúvida, sugestão ou precisa de mais informações? Estamos à disposição para ajudar!</p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Fale Conosco</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Formulário de Contato */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie sua Mensagem</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-gray-700">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Seu e-mail"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="mensagem" className="block text-gray-700">Mensagem</label>
                  <textarea
                    id="mensagem"
                    rows="4"
                    className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Escreva sua mensagem"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Outros Canais</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaEnvelope size={24} className="text-blue-600 mr-4" />
                  <span className="text-gray-700">contato@faceu.ufersa.br</span>
                </div>
                <div className="flex items-center">
                  <FaPhone size={24} className="text-blue-600 mr-4" />
                  <span className="text-gray-700">(84) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt size={24} className="text-blue-600 mr-4" />
                  <span className="text-gray-700">Campus da UFERSA - Av. dos Universitários, 123 - Mossoró, RN</span>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/faceu"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FaLinkedin size={28} />
                  </a>
                  <a
                    href="https://github.com/faceu"
                    className="text-black hover:text-gray-700"
                  >
                    <FaGithub size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
