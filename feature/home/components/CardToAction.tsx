import { ButtonBody } from "@/components/common/ButtonBody";
import { Mail } from "lucide-react";

export const CardToAction = () => {
  return (
    <div className="border-y-2 my-10 py-20 px-5 border-black/20 dark:border-white/20  rounded-4xl flex flex-col md:flex-row items-center justify-between font-extralight gap-5 md:gap-0">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl md:text-4xl">
          ¿ Tienes un proyecto en mente ?
        </h4>
        <h5 className="text-lg md:text-2xl text-center sm:text-start">
          ¡ Trabajemos juntos !
        </h5>
      </div>
      <ButtonBody
        Icono={Mail}
        href="mailto:lucasparodi00@gmail.com"
        text="Contactame"
        description="Correo electronico de Parodi Lucas"
      />
    </div>
  );
};
