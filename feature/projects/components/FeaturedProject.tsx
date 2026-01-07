import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const FeaturedProject = () => {
  return (
    <Link href={"https://varlok.com"} target="_blank">
      <div className="relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-2xl bg-card">
        <div className="relative overflow-hidden">
          {/* Grid pattern de fondo sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

          <div className="relative grid lg:grid-cols-2 gap-12 px-2 py-10 lg:p-16">
            {/* Columna izquierda: Logo y badge */}
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Proyecto Principal
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative bg-muted backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-primary/30 transition-all duration-300">
                  <Image
                    src="/varlok.jpg"
                    alt="Varlok Logo"
                    width={280}
                    height={280}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Varlok</h3>
                <p className="text-muted-foreground text-sm">
                  Emprendimiento Tecnologico
                </p>
              </div>
            </div>

            {/* Columna derecha: Contenido */}
            <div className="flex flex-col justify-between space-y-8 text-xs">
              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-pretty">
                    <span className="text-foreground font-semibold">
                      Varlok
                    </span>{" "}
                    es un emprendimiento de desarrollo tecnológico iniciado a
                    comienzos de 2025, nacido a partir de una visión clara y
                    ambiciosa: crear soluciones digitales escalables, sólidas y
                    orientadas a generar impacto real.
                  </p>

                  <p className="text-pretty">
                    Su proyecto insignia es{" "}
                    <span className="text-primary font-semibold">Tarefero</span>
                    , un sistema de gestión pensado especialmente para el sector
                    agroindustrial, con foco en la actividad yerbatera,
                    desarrollado para optimizar procesos, mejorar la
                    organización y aportar valor al trabajo en el campo.
                  </p>

                  <p className="text-pretty">
                    Varlok se proyecta como una empresa dedicada al desarrollo
                    de software, marketing digital y SEO profesional, construida
                    con dedicación, esfuerzo constante y una mirada estratégica
                    a largo plazo, con el objetivo de crecer de forma
                    sostenible, estable y escalable.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="h-1 w-1 rounded-full bg-border" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Información del fundador */}
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Fundador
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    Parodi Lucas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </Link>
  );
};
