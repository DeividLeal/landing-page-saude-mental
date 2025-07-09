"use client";
import { useEffect, useState } from "react";
import { LifebuoyIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

// Ajuste a interface conforme sua API
interface ApoioItem {
  nome: string;
  descricao: string;
  telefone: string;
  site?: string | null;
}

const Apoio = () => {
  const [itensApoio, setItensApoio] = useState<ApoioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/apoio-psicologico`)
      .then((res) => res.json())
      .then((data) =>
        setItensApoio(Array.isArray(data.canais) ? data.canais : [])
      )
      .catch(() => setErro("Erro ao carregar dados de apoio."))
      .finally(() => setLoading(false));
  }, [apiUrl]);

  if (loading) {
    return (
      <section id="apoio" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <p>Carregando...</p>
        </div>
      </section>
    );
  }

  if (erro) {
    return (
      <section id="apoio" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{erro}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="apoio"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-lg flex items-center justify-center gap-2">
          <LifebuoyIcon className="h-8 w-8 text-blue-400 animate-pulse" />
          Encontre Apoio Psicológico
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto">
          {itensApoio.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-4">
                <LifebuoyIcon className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">
                {item.nome}
              </h3>
              <p className="mb-3 text-gray-700">{item.descricao}</p>
              <p className="mb-2 font-semibold text-blue-600">
                Telefone: {item.telefone}
              </p>
              {item.site && (
                <a
                  href={item.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-white bg-blue-500 px-4 py-2 rounded-full font-bold shadow hover:bg-blue-600 transition"
                >
                  Acessar site
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apoio;
