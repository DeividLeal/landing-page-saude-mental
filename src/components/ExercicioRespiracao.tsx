"use client";
import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

// Interface ajustada conforme a resposta da API
interface Exercicio {
  nome: string;
  descricao: string;
}

const ExercicioRespiracao = () => {
  const [exercicio, setExercicio] = useState<Exercicio | null>(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/exercicio-respiracao`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.exercicios) && data.exercicios.length > 0) {
          setExercicio(data.exercicios[0]);
        }
      })
      .catch((err) => console.error("Falha ao buscar exercício:", err))
      .finally(() => setLoading(false));
  }, [apiUrl]);

  return (
    <section
      id="respiracao"
      className="py-20 bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-700 drop-shadow-lg tracking-tight flex items-center justify-center gap-2">
          <SparklesIcon className="h-8 w-8 text-blue-400 animate-pulse" />
          Exercício de Respiração Guiada
        </h2>
        {loading ? (
          <p className="text-lg text-blue-700">Carregando exercício...</p>
        ) : exercicio ? (
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-blue-100 transition-all duration-300 hover:shadow-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              {exercicio.nome}
            </h3>
            <p className="text-lg mb-6 text-gray-700">{exercicio.descricao}</p>
            <div className="flex justify-center mt-6">
              <span className="inline-block bg-blue-50 text-blue-500 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition">
                Inspire, segure, expire e relaxe!
              </span>
            </div>
          </div>
        ) : (
          <p className="text-lg text-red-500">Nenhum exercício encontrado.</p>
        )}
      </div>
    </section>
  );
};

export default ExercicioRespiracao;
