import {
  Database,
  Users,
  TrendingUp,
  Sprout,
  File,
  PawPrint,
  Store,
  ShoppingCart,
  Stethoscope,
  Wrench,
  Smartphone,
  CalendarCheck,
} from "lucide-react";
import { ProjectDetail } from "../types/projectDetail";

export const projectsDetail: ProjectDetail[] = [
  {
    slug: "tarefero",
    title: "Tarefero",
    Icon: Sprout,
    autor: "By Varlok",
    hero: {
      description:
        "Sistema de Gestión para Producción Agrícola que nació como un proyecto personal impulsado por la necesidad real del sector productivo.",
      badges: [
        { label: "Producción Activa", icon: Database },
        { label: "Usuarios Reales", icon: Users },
        { label: "Mejora Continua", icon: TrendingUp },
      ],
    },
    origin: {
      title: "Origen del Proyecto",
      paragraphs: [
        "Tarefero es un sistema de gestión agrícola que nació como un proyecto personal impulsado por la necesidad real del sector productivo. La iniciativa surgió a partir de la propuesta de un ingeniero agrónomo, con el objetivo inicial de desarrollar una solución específica para el sector yerbatero.",
        "Desde su concepción, el proyecto se enfocó en resolver problemáticas concretas del trabajo en campo, priorizando la trazabilidad, el control de labores y la gestión eficiente de los recursos humanos y productivos.",
      ],
      image: "/tarefero2.png",
    },
    evolution: [
      {
        step: 1,
        title: "Fase Inicial",
        description:
          "En una primera etapa, Tarefero fue diseñado exclusivamente para productores de yerba mate. Para validar la idea, se ofreció una versión demo gratuita a potenciales clientes del sector, lo que permitió obtener feedback directo y constante de usuarios reales.",
      },
      {
        step: 2,
        title: "Feedback Continuo",
        description:
          "Con el tiempo, la plataforma se volvió más flexible y escalable, permitiendo adaptarse no solo al sector yerbatero, sino también a pequeños y medianos productores agrícolas de distintos rubros, como café, cítricos, olivos y otras producciones regionales",
      },
      {
        step: 3,
        title: "Expansión",
        description:
          "Gracias a la constancia se pudo propagar ofrenciendo el servicio en distintos paises ademas de Argentina como ser Paraguay y Brasil.",
      },
    ],
    platform: {
      mobile: {
        description:
          "Aplicación móvil desarrollada en React Native para la carga de datos en campo.",
        features: [
          "Registrar trabajadores y cuadrillas",
          "Cargar labores e insumos",
          "Registrar horas trabajadas",
          "Visualizar chacras y lotes",
        ],
      },
      web: {
        description: "Panel administrativo web desarrollado en React.",
        features: [
          "Visualización de datos cargados desde móvil",
          "Gestión de labores",
          "Reportes y estadísticas",
          "Gestión de usuarios",
        ],
      },
    },
    stack: {
      backend: "NestJS, TypeScript",
      database: "PostgreSQL",
      frontend: "React, Tailwind CSS",
      mobile: "React Native",
      infrastructure: "Docker, Ubuntu",
      tools: "Git, GitHub, Postman",
    },
    methodology: {
      description:
        "El desarrollo de Tarefero se llevó a cabo utilizando la metodología Scrum. Dentro del equipo, cumplí el rol de Scrum Master, liderando a dos desarrolladores, y a la vez participé activamente como desarrollador del proyecto. ",
      roles: [
        {
          title: "Scrum Master / Desarrollador",
          description: "Lucas Parodi liderando equipo de 2 desarrolladores",
        },
        {
          title: "Stakeholder",
          description: "Ingeniero agrónomo impulsor del proyecto",
        },
        {
          title: "Product Owners",
          description: "Clientes reales",
        },
      ],
    },
    reach: [
      {
        title: "Alcance Regional",
        description: "Misiones, Corrientes y Entre Ríos",
      },
      {
        title: "Reuniones Internacionales",
        description: "Argentina, Brasil y Paraguay",
      },
    ],
    currentStatus:
      "Actualmente cuenta con usuarios activos que gestionan la trazabilidad diaria del campo.",
  },
  {
    slug: "sidd",
    title: "SIDD",
    Icon: File,
    autor: "By Varlok",
    hero: {
      description:
        "Sistema Integrado de Documentos Digitales orientado a la digitalización, gestión y compartición segura de documentación interna en oficinas gubernamentales.",
      badges: [
        { label: "En Producción", icon: Database },
        { label: "Gestión Documental", icon: Users },
        { label: "Automatización", icon: TrendingUp },
        { label: "Usuarios Reales", icon: Users },
      ],
    },

    origin: {
      title: "Origen del Proyecto",
      paragraphs: [
        "SIDD surge a partir de la necesidad concreta de una oficina gubernamental de contar con toda su documentación de forma digital, centralizada y accesible las 24 horas del día.",
        "El objetivo principal fue eliminar la dependencia del papel físico, resolver los problemas de archivado tradicional y facilitar el acceso compartido a la información entre los distintos miembros de la organización.",
      ],
      image: "/sidd.png",
    },

    evolution: [
      {
        step: 1,
        title: "Digitalización Inicial",
        description:
          "El sistema comenzó enfocándose en la digitalización y organización básica de documentos y carpetas internas.",
      },
      {
        step: 2,
        title: "Control de Accesos",
        description:
          "Se incorporó un sistema de roles y permisos para garantizar el acceso preciso a cada documento según el perfil del usuario.",
      },
      {
        step: 3,
        title: "Automatización e Integraciones",
        description:
          "Se integraron automatizaciones con n8n y un bot de WhatsApp para consultas rápidas sobre expedientes y documentos.",
      },
    ],

    platform: {
      web: {
        description:
          "Aplicación web desarrollada con Next.js para la gestión integral de documentos y usuarios.",
        features: [
          "Gestión completa del ciclo de vida del documento",
          "Sistema de roles y permisos",
          "Compartición de carpetas y archivos por correo",
          "Organización por áreas y carpetas",
          "Acceso 24/7 a la documentación",
        ],
      },
    },

    stack: {
      backend: "NestJS, TypeScript",
      database: "PostgreSQL",
      frontend: "Next.js, Tailwind CSS, shadcn/ui",
      mobile: "Responsive Web",
      infrastructure: "Docker, Ubuntu",
      tools: "Git, GitHub",
    },

    methodology: {
      description:
        "El proyecto fue desarrollado bajo la metodología ágil Scrum, con entregas iterativas y feedback constante de los usuarios finales.",
      roles: [
        {
          title: "Scrum Master / Desarrollador",
          description:
            "Lucas Parodi liderando el proceso ágil y participando activamente en el desarrollo.",
        },
        {
          title: "Stakeholder",
          description: "Profesional del área legal impulsor del proyecto.",
        },
        {
          title: "Product Owners",
          description:
            "Abogados, escribanos y contadores que trabajan en la oficina.",
        },
      ],
    },

    reach: [
      {
        title: "Implementación Institucional",
        description:
          "Sistema utilizado por los distintos miembros de una oficina gubernamental.",
      },
    ],

    currentStatus:
      "El sistema se encuentra en producción y es utilizado activamente para la gestión diaria de documentación interna.",
  },
  {
    slug: "pulguitas",
    title: "Pulguitas",
    Icon: PawPrint,

    hero: {
      description:
        "Pulguitas es un sistema genérico y multi-tenant orientado a petshops y servicios veterinarios, diseñado para centralizar la gestión comercial, operativa y médica en un solo ecosistema digital.",
      badges: [
        { label: "Multi-tenant", icon: Store },
        { label: "E-commerce", icon: ShoppingCart },
        { label: "Servicios Veterinarios", icon: Stethoscope },
      ],
    },

    origin: {
      title: "Origen del proyecto",
      paragraphs: [
        "El proyecto nace a partir de la solicitud de un potencial cliente que buscaba modernizar la gestión de su emprendimiento personal, compuesto por tres sucursales físicas de petshop y veterinaria.",
        "La necesidad principal era contar con una herramienta que permitiera controlar stock, productos, ventas y compras de forma centralizada, manteniendo independencia operativa entre sucursales.",
        "A partir de esta problemática real, se desarrolló una primera versión del sistema pensada exclusivamente para este cliente, sentando las bases de una solución escalable y robusta.",
      ],
      image: "/pulguitas.jpg",
    },

    evolution: [
      {
        step: 1,
        title: "Solución a medida",
        description:
          "Diseño e implementación inicial del sistema enfocado en un único cliente con tres sucursales, priorizando el control de stock, productos y ventas.",
      },
      {
        step: 2,
        title: "Escalabilidad y generalización",
        description:
          "Refactorización de la arquitectura para convertirlo en un sistema genérico y multi-tenant, capaz de ser utilizado por distintas empresas del rubro.",
      },
      {
        step: 3,
        title: "Plataforma integral",
        description:
          "Incorporación de e-commerce, gestión de servicios veterinarios, turnos online y pagos integrados, consolidando una solución completa para petshops y consultorios.",
      },
    ],

    platform: {
      web: {
        description:
          "Plataforma web pensada tanto para administradores como para clientes finales, con foco en usabilidad, seguridad y escalabilidad.",
        features: [
          "Gestión de productos, stock, compras y ventas",
          "Administración de múltiples sucursales",
          "Gestión de usuarios y roles",
          "Publicación de productos y servicios",
          "Compra online de productos",
          "Solicitud de turnos veterinarios según disponibilidad",
          "Pagos integrados mediante Mercado Pago",
        ],
      },
    },

    stack: {
      backend: "TypeScript, NestJS, Arquitectura orientada a objetos",
      frontend: "TypeScript, Next.js",
      database: "MongoDB, PostgreSQL",
      infrastructure: "Arquitectura multi-tenant, Ubuntu, Docker",
      tools: "Mercado Pago, Git, GitHub, Metodologías ágiles",
    },

    methodology: {
      description:
        "El desarrollo se realizó bajo una metodología ágil, con iteraciones constantes y feedback directo del cliente.",
      roles: [
        {
          title: "Full Stack Developer",
          description:
            "Participación activa en el diseño de la arquitectura, desarrollo backend y frontend, e integración de servicios externos.",
        },
        {
          title: "Scrum Master",
          description:
            "Coordinación del equipo de desarrollo, planificación de sprints y facilitación de la comunicación entre el equipo técnico y el cliente.",
        },
        {
          title: "Product Owner (Cliente)",
          description:
            "Cliente principal que definió requerimientos, prioridades y validó la evolución del producto.",
        },
      ],
    },

    currentStatus:
      "Producto en evolución, concebido como una solución comercial escalable para múltiples empresas del rubro comercial y veterinario.",
  },
  {
    slug: "stream-tech",
    title: "StreamTech",
    Icon: Smartphone,

    hero: {
      description:
        "Sistema de gestión y sitio web comercial desarrollado para Streamtech, una empresa dedicada a la venta y reparación de dispositivos electrónicos, principalmente celulares y tablets de múltiples marcas.",
      badges: [
        { label: "Gestión de Reparaciones", icon: Wrench },
        { label: "Venta de Dispositivos", icon: Store },
      ],
    },

    origin: {
      title: "Contexto y necesidad",
      paragraphs: [
        "Streamtech es una empresa enfocada en la venta y reparación de equipos electrónicos, con un fuerte volumen de dispositivos ingresando diariamente para diagnóstico y reparación.",
        "La empresa contaba con una visión clara del producto que necesitaba: un sistema interno para registrar y hacer seguimiento de los equipos en reparación, y una página web pública para exhibir los dispositivos y accesorios disponibles.",
        "Nuestro rol fue transformar estas ideas y diseños previamente definidos por el equipo de Streamtech en una solución técnica funcional, estable y lista para producción.",
      ],
      image: "/streamtech.jpg",
    },

    evolution: [
      {
        step: 1,
        title: "Sistema de registro de reparaciones",
        description:
          "Desarrollo de un sistema interno para el registro detallado de dispositivos ingresados al servicio técnico, permitiendo documentar clientes, equipos, problemas reportados y estados del proceso.",
      },
      {
        step: 2,
        title: "Sitio web comercial",
        description:
          "Implementación de una página web orientada a la exhibición de dispositivos y accesorios, fortaleciendo la presencia digital del negocio.",
      },
    ],

    platform: {
      web: {
        description:
          "Plataforma web compuesta por un sistema interno de gestión de reparaciones y un sitio público de exhibición comercial.",
        features: [
          "Registro de clientes y dispositivos",
          "Carga de información detallada del equipo y fallas",
          "Dibujo del patrón o contraseña del dispositivo",
          "Gestión de estados del servicio (iniciado, en proceso, finalizado, etc.)",
          "Listado de dispositivos y accesorios disponibles para la venta",
          "Interfaz clara y orientada al uso interno del equipo técnico",
        ],
      },
    },

    stack: {
      backend: "Laravel · API REST",
      frontend: "React · Tailwind CSS · Material Design",
      database: "MySQL",
      infrastructure: "Ubuntu Server · Nginx",
      tools: "Git · GitHub · Postman",
    },

    methodology: {
      description:
        "El proyecto se desarrolló bajo una metodología Scrum, con entregas iterativas y validación continua por parte del cliente.",
      roles: [
        {
          title: "Scrum Master",
          description:
            "Responsable de la planificación, seguimiento del proyecto y coordinación del equipo de desarrollo.",
        },
        {
          title: "Developer",
          description:
            "Desarrollo backend y frontend del sistema y del sitio web comercial.",
        },
        {
          title: "Product Owner (Streamtech)",
          description:
            "Equipo de Streamtech que definió requerimientos, funcionalidades y validó el producto final.",
        },
        {
          title: "UX/UI Designer",
          description:
            "Diseñador externo que colaboró en la definición de la experiencia de usuario y el diseño visual.",
        },
      ],
    },

    reach: [
      {
        title: "Despliegue y entrega",
        description:
          "El sistema fue desplegado en un servidor provisto por el cliente, configurando el entorno completo con Ubuntu Server y Nginx. A partir de la entrega, Streamtech asumió la administración, mantenimiento y costos del servidor y del sistema.",
      },
    ],

    currentStatus:
      "Proyecto entregado y en producción. El mantenimiento y la operación quedaron a cargo del equipo de Streamtech.",
  },
  {
    slug: "gym-negro",
    title: "Gym Negro",
    Icon: Users,

    hero: {
      description:
        "Sistema de control de asistencia y vencimientos desarrollado para GymNegro, orientado a simplificar la gestión diaria de socios y mejorar la experiencia de acceso al gimnasio.",
      badges: [
        { label: "Control de Asistencia", icon: CalendarCheck },
        { label: "Gestión de Socios", icon: Users },
        { label: "Proyecto Vendido", icon: TrendingUp },
      ],
    },

    origin: {
      title: "Problemática inicial",
      paragraphs: [
        "GymNegro necesitaba una solución simple y efectiva para registrar la asistencia diaria de sus socios, reemplazando métodos manuales que generaban errores y falta de control.",
        "Además, surgió la necesidad de que cada socio pudiera consultar de forma rápida el estado de su cuota mensual y conocer la fecha de su próximo vencimiento al momento de ingresar al gimnasio.",
        "A partir de esta problemática concreta, se propuso y desarrolló un sistema a medida que resolviera ambas necesidades en un único flujo de uso.",
      ],
      image: "/gymnegro.png",
    },

    evolution: [
      {
        step: 1,
        title: "Sistema de asistencia",
        description:
          "Implementación de un sistema que permite a los socios registrar su asistencia ingresando su documento, quedando el registro almacenado en la base de datos.",
      },
      {
        step: 2,
        title: "Consulta de vencimientos",
        description:
          "Incorporación de la funcionalidad que permite al socio visualizar automáticamente la fecha de vencimiento de su cuota mensual al momento de marcar asistencia.",
      },
    ],

    platform: {
      web: {
        description:
          "Aplicación web liviana y directa, pensada para ser utilizada en el acceso del gimnasio, priorizando rapidez y facilidad de uso.",
        features: [
          "Registro de asistencia por documento",
          "Consulta del estado de la cuota mensual",
          "Visualización del próximo vencimiento",
          "Gestión básica de socios",
          "Interfaz simple y funcional",
        ],
      },
    },

    stack: {
      backend: "PHP",
      frontend: "HTML · CSS",
      database: "MySQL",
      infrastructure: "Web Hosting compartido",
      tools: "Gestión manual de despliegue",
    },

    methodology: {
      description:
        "Proyecto desarrollado de forma individual, abarcando todas las etapas del proceso, desde el contacto inicial con el cliente hasta el desarrollo y despliegue del sistema.",
      roles: [
        {
          title: "Desarrollador Full Stack",
          description:
            "Análisis del problema, propuesta de solución, desarrollo completo del sistema y puesta en producción.",
        },
        {
          title: "Cliente (GymNegro)",
          description:
            "Definición de necesidades operativas y validación del funcionamiento del sistema.",
        },
      ],
    },

    reach: [
      {
        title: "Implementación local",
        description:
          "Sistema utilizado en el acceso del gimnasio para el control diario de asistencia de socios.",
      },
    ],

    currentStatus:
      "Proyecto entregado y vendido. El cliente asumió la administración, mantenimiento y costos del hosting y operación del sistema.",
  },
  {
    slug: "kiosko-hell",
    title: "Kiosko Hell",
    Icon: Store,

    hero: {
      description:
        "Sistema de gestión local desarrollado para Kiosko Hell, orientado al control de ventas, compras, stock y caja, diseñado para reemplazar la gestión manual y permitir un mayor control operativo del negocio.",
      badges: [
        { label: "Gestión Comercial", icon: Database },
        { label: "Control de Stock", icon: Store },
        { label: "Proyecto Vendido", icon: TrendingUp },
      ],
    },

    origin: {
      title: "Problemática inicial",
      paragraphs: [
        "Kiosko Hell llevaba el control de ventas, compras y stock de forma manual, apoyándose en la memoria del dueño y en registros en papel, lo que generaba errores y falta de visibilidad real del negocio.",
        "Al expandirse a una segunda sucursal, el dueño principal perdió la posibilidad de controlar directamente la operación diaria y el manejo de caja de los demás empleados.",
        "Ante esta situación, surgió la necesidad de implementar un sistema que permitiera centralizar el control del local, mejorar la organización interna y reducir errores operativos.",
      ],
      image: "/hell.jpg",
    },

    evolution: [
      {
        step: 1,
        title: "Sistema de gestión local",
        description:
          "Desarrollo de un sistema de escritorio que corre de forma local en una computadora, sin dependencia de la nube ni intercambio de información externa, adaptado exclusivamente a las necesidades del local.",
      },
      {
        step: 2,
        title: "Control comercial y de stock",
        description:
          "Incorporación de funcionalidades para gestionar productos, ventas, compras y reposición de stock, manteniendo un historial de variaciones de precios.",
      },
      {
        step: 3,
        title: "Usuarios y control de caja",
        description:
          "Implementación de un sistema de usuarios para registrar operaciones y mejorar el control de caja y la responsabilidad operativa de cada empleado.",
      },
    ],

    platform: {
      web: {
        description:
          "Sistema de escritorio de uso local, enfocado en la operación diaria del kiosko y el control interno del negocio.",
        features: [
          "Gestión de productos",
          "Registro de ventas",
          "Compras y reposición de stock",
          "Historial de precios",
          "Gestión de proveedores",
          "Control de usuarios y caja",
        ],
      },
    },

    stack: {
      backend: "C# · .NET",
      database: "SQL Server",
      frontend: "Aplicación de escritorio (.NET)",
      infrastructure: "Ejecución local en PC",
      tools: "Arquitectura en capas",
    },

    methodology: {
      description:
        "Proyecto desarrollado de forma individual, aplicando buenas prácticas de diseño para construir un sistema robusto y mantenible.",
      roles: [
        {
          title: "Desarrollador Full Stack",
          description:
            "Análisis de la problemática, diseño de la arquitectura, desarrollo completo del sistema y entrega al cliente.",
        },
        {
          title: "Cliente (Kiosko Hell)",
          description:
            "Definición de requerimientos operativos y validación del sistema.",
        },
      ],
    },

    reach: [
      {
        title: "Arquitectura en capas",
        description:
          "Implementación de una arquitectura en cuatro capas principales, separando responsabilidades y facilitando el mantenimiento del sistema.",
      },
    ],

    currentStatus:
      "Proyecto entregado y vendido. El sistema quedó bajo la responsabilidad del dueño, quien asumió el mantenimiento y la operación.",
  },
];
