// app/page.tsx

import Frases from "../components/Frases";
import Apoio from "../components/Apoio";
import Autocuidado from "../components/Autocuidado";
import ExercicioRespiracao from "../components/ExercicioRespiracao";

export default function Home() {
  return (
    <>
      {/* Componente de destaque/boas-vindas */}
      <Frases />

      {/* Seção para a rota /apoio-psicologico */}
      <Apoio />

      {/* Seção para a rota /autocuidado */}
      <Autocuidado />

      {/* Seção para a rota /exercicio-respiracao */}
      <ExercicioRespiracao />
    </>
  );
}
