"use client"; // Isso faz o Next.js tratar este componente como um componente de cliente.

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const collaborators = [
  {
    name: "Hildi Dante",
    role: "Desenvolvedor",
    image: "/images/HildiDante.jpg",
    social: {
      instagram: "https://www.instagram.com/hildi_dante/",
      linkedin: "https://www.linkedin.com/in/hildi-dante-217202232",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "João Victor",
    role: "Desenvolvedor",
    image: "/images/JoãoVictor.jpg",
    social: {
      instagram: "https://www.instagram.com/victorpdl_/",
      linkedin: "https://www.linkedin.com/in/joão-victor-lucena-586069191",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Arthur Kairan",
    role: "Desenvolvedor",
    image: "/images/ArthurKairan.jpg",
    social: {
      instagram: "https://www.instagram.com/arthurkairan_/",
      linkedin: "https://www.linkedin.com/in/arthur-kairan",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Camilla Oliveira",
    role: "Desenvolvedora Backend",
    image: "/images/collaborator-4.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Lucas Noronha",
    role: "Desenvolvedor Frontend",
    image: "/images/collaborator-1.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Jasminy Santos",
    role: "Designer UI/UX",
    image: "/images/collaborator-2.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Marcela Oliveira",
    role: "Gerente de Projetos",
    image: "/images/collaborator-3.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Gaby Marques",
    role: "Desenvolvedora Backend",
    image: "/images/collaborator-4.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
];

export default function ClientSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {collaborators.map((collaborator, index) => (
        <SwiperSlide key={index}>
          <div className="text-center p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
              <img
                src={collaborator.image}
                alt={collaborator.name}
                className="rounded-full border-4 border-gray-900 object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{collaborator.name}</h3>
            <p className="text-gray-900 text-sm font-semibold mb-4">{collaborator.role}</p>
            
            <div className="flex space-x-4">
              <a
                href={collaborator.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={collaborator.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={collaborator.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
