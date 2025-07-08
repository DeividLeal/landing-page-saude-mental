// components/Footer.tsx
"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // npm install react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-10 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} Mente Sã. Todos os direitos
          reservados.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Projeto desenvolvido para o Módulo 5, consumindo a API do Módulo 4.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/DeividLeal"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/deividcaldas"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
