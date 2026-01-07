import { Highlight } from "@/components/common/Highlight";
import { SectionTitle } from "@/components/common/TitleSection";
import { CheckCheck } from "lucide-react";

export const Experience = () => {
  return (
    <section aria-label="Experiencia">
      <SectionTitle Icon={CheckCheck} title="Experiencia" />
      <div className="mb-3">
        <h4 className="text-xl sm:text-3xl font-extralight text-gray-400">
          Freelancer
        </h4>
        <span className="text-xs sm:text-base">2021 - Actualidad</span>
      </div>
      <div className="font-extralight text-sm lg:text-base px-2">
        <ul className="list-disc marker:text-pink-600 flex flex-col gap-2">
          <li>
            <Highlight>
              Desarrollo de soluciones de software de forma independiente y
              colaborativa
            </Highlight>
            , participando en proyectos personales y para terceros, abarcando
            desde la concepción de la idea hasta su puesta en producción y
            mantenimiento evolutivo.
          </li>
          <li>
            Diseño e implementación de plataformas digitales escalables,
            incluyendo{" "}
            <Highlight>
              sistemas bajo modelo SaaS y arquitecturas multi-tenant
            </Highlight>
            , orientadas a la gestión de productos, recursos y operaciones
            empresariales. Creación de sistemas de gestión integral para
            distintos sectores productivos y comerciales, con foco en la
            digitalización de procesos, control de inventarios, administración
            de lotes, registro de actividades y trazabilidad de la información.
          </li>
          <li>
            <Highlight>
              Desarrollo de soluciones administrativas y operativas a medida
              para empresas que no contaban con sistemas previos
            </Highlight>
            , contribuyendo a la organización interna, mejora de flujos de
            trabajo y centralización de datos críticos.
          </li>
          <li>
            <Highlight>Implementación de sistemas especializados </Highlight>{" "}
            para la gestión de servicios técnicos, permitiendo el seguimiento de
            clientes, activos, estados de trabajo y procesos de reparación de
            principio a fin.
          </li>
          <li>
            <Highlight>Liderazgo y coordinación de equipos</Highlight> de
            desarrollo, definiendo objetivos, planificando tareas y acompañando
            el proceso técnico hasta la entrega final del producto.
          </li>
          <li>
            <Highlight> Trabajo con arquitecturas modernas</Highlight> de
            frontend y backend, integrando distintos tipos de almacenamiento de
            datos y priorizando la escalabilidad, la seguridad y la
            mantenibilidad del software.
          </li>
          <li>
            {<Highlight>Aplicación de metodologías ágiles </Highlight>}para la
            gestión de proyectos, facilitando la comunicación con clientes y
            equipos, y asegurando entregas iterativas alineadas a las
            necesidades del negocio.
          </li>
          <li>
            <Highlight>
              {" "}
              Configuración y administración de entornos de despliegue y
              servidores,
            </Highlight>{" "}
            garantizando estabilidad, acceso seguro y continuidad operativa de
            las soluciones desarrolladas.
          </li>
          <li>
            Enfoque constante en la{" "}
            <Highlight>
              comprensión del negocio y los procesos reales del cliente
            </Highlight>
            , transformando necesidades operativas en soluciones tecnológicas
            eficientes y sostenibles.
          </li>
        </ul>
      </div>
    </section>
  );
};
