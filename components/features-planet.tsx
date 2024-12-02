import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CollaboratorImg1 from "@/public/images/collaborator-1.jpg";
import CollaboratorImg2 from "@/public/images/collaborator-2.jpg";
import CollaboratorImg3 from "@/public/images/collaborator-3.jpg";
import CollaboratorImg4 from "@/public/images/collaborator-4.jpg";

const collaborators = [
  {
    name: "João Bilu",
    role: "Desenvolvedor Frontend",
    image: CollaboratorImg1,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Maria Braga",
    role: "Designer UI/UX",
    image: CollaboratorImg2,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Carol Paiva",
    role: "Gerente de Projetos",
    image: CollaboratorImg3,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Camilla Oliveira",
    role: "Desenvolvedora Backend",
    image: CollaboratorImg4,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Lucas Noronha",
    role: "Desenvolvedor Frontend",
    image: CollaboratorImg1,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Jasminy Santos",
    role: "Designer UI/UX",
    image: CollaboratorImg2,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Marcela Oliveira",
    role: "Gerente de Projetos",
    image: CollaboratorImg3,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Gaby Marques",
    role: "Desenvolvedora Backend",
    image: CollaboratorImg4,
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
];

export default function CollaboratorsSlider() {
  return (
    <section className="relative bg-gray-900 py-12">
      <div className="mx-auto max-w-full px-4 sm:px-6">
        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
            Nosso Povo
          </h2>
        </div>
        <div className="relative">
          {/* Slider Container */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide w-full">
            {/* Slide Item */}
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] flex-shrink-0 rounded-lg bg-gray-800 p-4 shadow-lg"
              >
                <Image
                  src={collaborator.image}
                  alt={`Collaborator ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-gray-200">
                    {collaborator.name}
                  </h3>
                  <p className="text-sm text-gray-400">{collaborator.role}</p>
                </div>
                {/* Social Media Links */}
                <div className="mt-4 flex justify-center gap-4">
                  {collaborator.social.instagram && (
                    <a
                      href={collaborator.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200"
                    >
                      <FaInstagram size={24} />
                    </a>
                  )}
                  {collaborator.social.linkedin && (
                    <a
                      href={collaborator.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {collaborator.social.twitter && (
                    <a
                      href={collaborator.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200"
                    >
                      <FaTwitter size={24} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
