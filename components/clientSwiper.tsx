"use client"; // Isso faz o Next.js tratar este componente como um componente de cliente.

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const collaborators = [
  {
    name: "João Bilu",
    role: "Desenvolvedor Frontend",
    image: "/images/collaborator-1.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Maria Braga",
    role: "Designer UI/UX",
    image: "/images/collaborator-2.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Carol Paiva",
    role: "Gerente de Projetos",
    image: "/images/collaborator-3.jpg",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com/in",
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
      navigation={{
        prevEl: '.swiper-button-prev', //sem uso para att futura
        nextEl: '.swiper-button-next',
      }}
      pagination={{
        clickable: true,
        el: '.swiper-pagination', //sem uso para att futura
        type: 'bullets',
        
      }}
      spaceBetween={50}
      slidesPerView={3}
    >
      {collaborators.map((collaborator, index) => (
        <SwiperSlide key={index}>
          <div className="text-center bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <img
              src={collaborator.image}
              alt={collaborator.name}
              className="rounded-lg mb-4 h-75 object-cover w-full"
            />
            <h3 className="text-lg font-bold text-gray-200">{collaborator.name}</h3>
            <p className="text-sm text-gray-400">{collaborator.role}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={collaborator.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={collaborator.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-500"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={collaborator.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-500"
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
