// components/Footer.tsx
"use client";
import { GithubIcon, LinkedinIcon } from "@heroicons/react/24/outline"; // npm install @heroicons/react

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
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-white transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/deividcaldas"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-white transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8a6 6 0 016 6v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a6 6 0 016-6h8zm-8 0V6a4 4 0 118 0v2"
              />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
