import Image from "next/image";
import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              SOBRE O FACEU
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 text-justify"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                O projeto FACEU (Ferramentas de Aplicações Computacionais de Engenharias/UFERSA) surge para atender uma necessidade crucial na formação de engenheiros e no trabalho de profissionais da área: a disponibilização de ferramentas de cálculo didático-pedagógicas de acesso livre e gratuito. Esses algoritmos e ferramentas são desenvolvidos para auxiliar na resolução de problemas complexos e no desenvolvimento de projetos de engenharia, simplificando rotinas de cálculo e aumentando a precisão e a eficiência. FACEU é voltado tanto para estudantes de engenharia quanto para profissionais de áreas correlatas.
              </p>
              {/* <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"> */}
              {/* <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                > */}
              {/* <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Saiba mais sobre nós{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a> */}
              {/* <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Saiba mais sobre nós
                  </a> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  faceu.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  Seja bem vindo ao FACEU! Estamos aqui para ajudá-lo a estudar e otimizar seu tempo de trabalho. 🫡
                </span>{" "}

                <br />
                <br />

                <span className="animate-[code-2_10s_infinite] text-gray-200">
                  Ao acessar nossas ferramentas, insira suas variaveis de entrada.
                </span>
                <span className="animate-[code-3_10s_infinite] ">
                  --Utilize nossas soluções para simplificar o processo.
                </span>{" "}

                <br />
                <br />

                <span className="animate-[code-4_10s_infinite] text-gray-200">
                  Depois de inserir seus dados, aguarde um momento. Nossas ferramentas irão processá-los e fornecer resultados precisos para você.
                </span>
                <span className="animate-[code-5_10s_infinite] ">
                  --Receba resultados otimizados! 😉
                </span>
                <br />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
