"use client";
import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

interface DicaAutocuidado {
  dica: string;
}

const Autocuidado = () => {
  const [dicas, setDicas] = useState<string[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!apiUrl) {
      setErro("API URL não configurada.");
      return;
    }
    const fetchDicas = async () => {
      try {
        const res = await fetch(`${apiUrl}/autocuidado`);
        if (!res.ok) throw new Error("Erro na resposta da API");
        const data = await res.json();
        if (Array.isArray(data)) {
          setDicas(
            data.map((item: any) =>
              typeof item === "string" ? item : item.dica
            )
          );
        } else if (Array.isArray(data.praticas)) {
          setDicas(
            data.praticas.map((item: any) =>
              typeof item === "string" ? item : item.dica
            )
          );
        } else {
          setDicas([]);
        }
      } catch {
        setErro("Erro ao carregar dicas.");
      }
    };
    fetchDicas();
  }, [apiUrl]);

  if (erro) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Erro ao Carregar Dicas</h2>
        <p className="text-lg text-red-500">{erro}</p>
      </div>
    );
  }

  if (!erro && dicas.length === 0)
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-lg">Carregando dicas...</p>
      </div>
    );

  return (
    <section
      id="autocuidado"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-lg tracking-tight">
          Dicas de Autocuidado
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dicas.map((dica, idx) => (
            <div
              key={idx}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-4">
                <HeartIcon className="h-8 w-8 text-pink-400 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <p className="mt-2 text-lg text-gray-700 font-medium">{dica}</p>
              <span className="absolute top-4 right-4 text-xs text-blue-200 group-hover:text-pink-400 transition-colors select-none">
                #{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Autocuidado;
