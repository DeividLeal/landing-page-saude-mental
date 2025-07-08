"use client"; // Necessário pois usamos State (para o menu) e eventos de clique.

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para rolar suavemente até a seção desejada
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Fecha o menu após clicar
  };

  return (
    <header className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-tight drop-shadow">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-blue-800 transition-colors"
          >
            Mente Sã
          </a>
        </div>

        {/* Navegação para Desktop */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("apoio")}
            className="relative px-3 py-1 font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded transition"
          >
            Apoio
          </button>
          <button
            onClick={() => scrollToSection("autocuidado")}
            className="relative px-3 py-1 font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded transition"
          >
            Autocuidado
          </button>
          <button
            onClick={() => scrollToSection("frases")}
            className="relative px-3 py-1 font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded transition"
          >
            Frases
          </button>
          <button
            onClick={() => scrollToSection("respiracao")}
            className="relative px-3 py-1 font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded transition"
          >
            Respiração
          </button>
        </nav>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow animate-fade-in-down">
          <button
            onClick={() => scrollToSection("apoio")}
            className="block w-full text-left py-3 px-6 text-base hover:bg-blue-50 hover:text-blue-700 transition"
          >
            Apoio Psicológico
          </button>
          <button
            onClick={() => scrollToSection("autocuidado")}
            className="block w-full text-left py-3 px-6 text-base hover:bg-blue-50 hover:text-blue-700 transition"
          >
            Dicas de Autocuidado
          </button>
          <button
            onClick={() => scrollToSection("frases")}
            className="block w-full text-left py-3 px-6 text-base hover:bg-blue-50 hover:text-blue-700 transition"
          >
            Frases Motivacionais
          </button>
          <button
            onClick={() => scrollToSection("respiracao")}
            className="block w-full text-left py-3 px-6 text-base hover:bg-blue-50 hover:text-blue-700 transition"
          >
            Exercício de Respiração
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
