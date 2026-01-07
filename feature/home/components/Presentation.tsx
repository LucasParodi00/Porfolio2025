import { ButtonBody } from "@/components/common/ButtonBody";
import { Button } from "@/components/ui/button";
import { BsGithub, BsLinkedin } from "react-icons/bs";

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
        <p className="text-xs sm:text-[16px] mt-8 font-extralight text-black dark:text-white">
          Enfocado en mejorar procesos y descartar lo que no aporta valor,
          autodidacta, promoviendo el trabajo en equipo y siempre en busca de
          soluciones innovadoras que impulsen el éxito.
        </p>

        <div className="flex gap-10 mt-16 justify-center md:justify-start">
          <ButtonBody
            text="Linkedin"
            Icono={BsLinkedin}
            href="https://www.linkedin.com/in/parodi-lucas-ivan/"
            description="Linkedin de Parodi Lucas"
          />
          <ButtonBody
            text="GitHub"
            Icono={BsGithub}
            href="https://github.com/LucasParodi00"
            description="GitHub de Parodi Lucas"
          />
        </div>
      </main>
    </div>
  );
};
