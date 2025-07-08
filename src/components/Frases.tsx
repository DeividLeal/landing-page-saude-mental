// components/Frases.tsx
"use client";
import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

interface Frase {
  autor: string;
  texto: string;
}

const Frases = () => {
  const [frases, setFrases] = useState<Frase[]>([]);
  const [fraseAtual, setFraseAtual] = useState<Frase | null>(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/frases-motivacionais`)
      .then((res) => res.json())
      .then((data) => {
        let frasesArr: Frase[] = [];
        if (Array.isArray(data)) {
          frasesArr = data;
        } else if (data && data.frase) {
          frasesArr = [{ autor: "Desconhecido", texto: data.frase }];
        }
        setFrases(frasesArr);
        setFraseAtual(frasesArr.length > 0 ? frasesArr[0] : null);
      })
      .catch((err) => console.error("Falha ao buscar frases:", err))
      .finally(() => setLoading(false));
  }, [apiUrl]);

  const mostrarNovaFrase = () => {
    if (frases.length > 1) {
      let novaFrase: Frase | null = null;
      do {
        novaFrase = frases[Math.floor(Math.random() * frases.length)];
      } while (novaFrase === fraseAtual && frases.length > 1);
      setFraseAtual(novaFrase);
    }
  };

  return (
    <section
      id="frases"
      className="py-20 bg-gradient-to-b from-blue-600 to-blue-400 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8 flex items-center justify-center gap-2 drop-shadow-lg">
          <SparklesIcon className="h-8 w-8 text-yellow-300 animate-bounce" />
          Pensamento do Dia
        </h2>
        <div className="transition-opacity duration-500 min-h-[144px] flex flex-col justify-center items-center">
          {loading ? (
            <p className="text-lg">Carregando uma frase inspiradora...</p>
          ) : fraseAtual ? (
            <>
              <blockquote className="text-3xl italic font-semibold text-yellow-100 drop-shadow-lg">
                &quot;{fraseAtual.texto}&quot;
              </blockquote>
              <p className="mt-4 text-xl font-medium text-yellow-200">
                - {fraseAtual.autor}
              </p>
            </>
          ) : (
            <p className="text-lg">Nenhuma frase encontrada.</p>
          )}
        </div>
        <button
          onClick={mostrarNovaFrase}
          disabled={loading || frases.length < 2}
          className="mt-8 bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-100 hover:text-blue-800 transition-all duration-200 disabled:bg-gray-300 disabled:text-gray-500"
        >
          Gerar Nova Frase
        </button>
      </div>
    </section>
  );
};

export default Frases;
