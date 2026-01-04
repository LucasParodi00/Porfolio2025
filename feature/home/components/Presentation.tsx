import { ButtonBody } from "@/components/common/ButtonBody";
import { Button } from "@/components/ui/button";
import { Github, LinkedinIcon } from "lucide-react";

export const Presentation = () => {
  return (
    <div className="min-h-[calc(100vh-90px)] flex justify-center items-center ">
      <main>
        <span className="text-5xl sm:text-6xl leading-none">Soy</span>
        <h1 className="text-8xl md:text-[120px] text-orange-600 font-semibold leading-[0.9]">
          Parodi Lucas
        </h1>
        <h2 className="text-xs sm:text-xl font-semibold tracking-wider ">
          Desarrollador Full Stack | Licenciado en Sistemas
        </h2>
        <p className="text-xs sm:text-[16px] mt-8 font-extralight">
          Enfocado en mejorar procesos y descartar lo que no aporta valor,
          autodidacta, promoviendo el trabajo en equipo y siempre en busca de
          soluciones innovadoras que impulsen el éxito.
        </p>

        <div className="flex gap-10 mt-16 justify-center md:justify-start">
          <ButtonBody
            text="Linkedin"
            Icono={LinkedinIcon}
            href="https://www.linkedin.com/in/parodi-lucas-ivan/"
          />
          <ButtonBody
            text="GitHub"
            Icono={Github}
            href="https://github.com/LucasParodi00"
          />
        </div>
      </main>
    </div>
  );
};
