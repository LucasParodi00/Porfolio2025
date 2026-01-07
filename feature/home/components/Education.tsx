import { GraduationCap, Calendar, Building2 } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/common/TitleSection";

interface IEducation {
  title: string;
  establishment: string;
  date: string;
  src: string;
  description: string;
  type: "university" | "online" | "diploma";
}

const educationData: IEducation[] = [
  {
    title: "Diplomatura en Ciencia de Datos",
    establishment: "Universidad Nacional del Nordeste",
    date: "2024 - 2025",
    src: "/unne.png",
    description:
      "Formación en ciencia de datos con Python, enfocada en análisis exploratorio, estadística aplicada y modelos de aprendizaje automático y profundo, aplicada a la resolución de problemas reales.",
    type: "diploma",
  },
  {
    title: "Analista Programador Universitario",
    establishment: "Universidad Nacional del Nordeste",
    date: "2019 - 2024",
    src: "/unne.png",
    description:
      "Formación orientada al desarrollo de software, abarcando programación, bases de datos, análisis de sistemas, diseño de aplicaciones y buenas prácticas para la construcción de soluciones tecnológicas eficientes y escalables.",
    type: "university",
  },
  {
    title: "Git y GitHub",
    establishment: "Udemy",
    date: "2024",
    src: "/udemy.png",
    description:
      "Formación específica en control de versiones con Git y uso de GitHub, abarcando manejo de repositorios, ramas, merges, resolución de conflictos y buenas prácticas para el trabajo colaborativo en proyectos de software.",
    type: "online",
  },
  {
    title: "Desarrollador Web Full Stack",
    establishment: "Talentos Digitales",
    date: "2024",
    src: "/td.png",
    description:
      "Formación en desarrollo web full stack con React para frontend y Node.js con Express para backend, manejo básico de Git y control de versiones, aplicando conceptos fundamentales para la creación de aplicaciones web.",
    type: "online",
  },
  {
    title: "Desarrollo Web",
    establishment: "Udemy",
    date: "2022 - 2023",
    src: "/udemy.png",
    description:
      "Capacitación práctica en desarrollo web full stack utilizando React, Node.js y Firebase, implementación de autenticación (Google Auth), manejo de estados y componentes, estilado con Tailwind CSS y uso de componentes de Google, aplicando buenas prácticas para el desarrollo de aplicaciones web modernas.",
    type: "online",
  },
  {
    title: "Desarrollo Web con PHP",
    establishment: "Udemy",
    date: "2021",
    src: "/udemy.png",
    description:
      "Formación inicial en desarrollo web, abarcando HTML, CSS, Sass y PHP, implementación de sistemas de autenticación, manejo de formularios y bases de datos, y desarrollo de aplicaciones utilizando el framework CodeIgniter, incorporando fundamentos clave de la programación web.",
    type: "online",
  },
];

export const Education = () => {
  return (
    <section
      id="educacion"
      aria-labelledby="education-heading"
      className="container mx-auto max-w-5xl py-16  md:py-24"
    >
      <SectionTitle Icon={GraduationCap} title="Formacion" />
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <EducationCard key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </section>
  );
};

const EducationCard = ({
  title,
  establishment,
  date,
  src,
  description,
  type,
}: IEducation) => {
  const typeLabels = {
    university: "Universidad",
    online: "Curso Online",
    diploma: "Diplomatura",
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent>
        <article className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className="shrink-0">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-white ring-1 ring-border transition-all group-hover:ring-2 group-hover:ring-primary/20 flex justify-between items-center">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Logo de ${establishment}`}
                width={64}
                height={64}
                className="object-contain p-2"
              />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-2">
                <div className="space-y-1 flex-1 min-w-0">
                  <h3 className="text-sm font-semibold leading-tight text-balance sm:text-[16px]">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm">{establishment}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {typeLabels[type]}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                <time dateTime={date}>{date}</time>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};
