import { ButtonBody } from "@/components/common/ButtonBody";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadIcon, Presentation, User } from "lucide-react";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <section aria-label="Sobre Mi">
      <Card>
        <CardHeader>
          <CardTitle className="uppercase text-sm sm:text-lg flex gap-2">
            <User />
            Sobre mi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="sm:grid grid-cols-6 gap-10">
            <div className="rounded-lg overflow-hidden relative h-72 col-span-2 w-64 mx-auto mb-5 sm:w-full sm:m-0 ">
              <Image
                src="/perfil.png"
                alt="Parodi Lucas"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-6 col-span-4">
              <p className="font-extralight text-sm  md:text-left ">
                Argentino, desarrollador web full stack y actualmente trabajo
                como freelancer. Soy autodidacta, responsable y tengo un buen
                desempeño en trabajo en equipo. Me enfoco en mejorar mis
                procesos y descartar lo que no aporta valor. He tenido la
                oportunidad de desarrollar proyectos tanto personales como para
                emprendimientos, lo que me ha llevado a darme cuenta de que este
                es el camino que quiero seguir. Estoy listo para asumir nuevos
                desafíos y seguir creciendo, tanto profesional como
                personalmente.
              </p>

              <div className="flex gap-4 flex-wrap justify-center md:justify-start ">
                <ButtonBody
                  Icono={DownloadIcon}
                  href="/CV-ParodiLucas.pdf"
                  text="Descargar CV"
                  description="Descargar CV de Parodi Lucas"
                  target="_blank"
                />
                <ButtonBody
                  description="Presentacion de Parodi Lucas"
                  Icono={Presentation}
                  href="/presentacion"
                  text="Presentacion"
                  target="_parent"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
