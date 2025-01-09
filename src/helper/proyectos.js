export const projects = {
    streamtech: {
      nombre: "Stream Tech",
      descripcion: "Gestión de usuarios, productos y servicio técnico",
      referencia: "/proyectos/streamtech",
      imagen: "stream2.png",
      fecha: 'Noviembre 2024',
      repositorio: '',
      tecnologias: ['react', "laravel", "tailwind", "mysql", "git", "docker"],
      descripcion: `
    <p>
        El sistema fue desarrollado para gestionar usuarios, inventarios y el seguimiento de servicios técnicos.
        Inicialmente, el cliente registraba todos los productos y los servicios técnicos en una planilla de Excel,
        lo cual resultaba útil en sus inicios. Sin embargo, a medida que la empresa creció, esta solución se volvió
        insuficiente y trajo varias dificultades.
    </p>
    <h2>Problemas en el Área de Productos</h2>
    <ul>
        <li>Presentar un catálogo comprensible para los clientes.</li>
        <li>Buscar productos de manera eficiente.</li>
        <li>
            Verificar que se tratara del producto correcto (por ejemplo, si un vendedor veía "funda rosa A32"
            en la planilla, sin una imagen de referencia, no podía identificar el producto con certeza).
        </li>
        <li>Llevar un control de stock adecuado.</li>
    </ul>
    <h2>Problemas en el Servicio Técnico</h2>
    <ul>
        <li>Falta de control sobre los pagos abonados por los clientes y los costos asociados a las reparaciones.</li>
        <li>
            Dificultades para registrar y gestionar información importante, como las contraseñas o patrones
            de desbloqueo de los celulares, el cliente propietario del dispositivo y su estado (en revisión,
            listo para entrega, entregado, etc.).
        </li>
        <li>
            Pérdida de tiempo al identificar a los clientes y sus respectivos dispositivos cuando estos consultaban
            sobre el progreso de una reparación.
        </li>
    </ul>
    <h2>Solución</h2>
    <p>
        El desarrollo del sistema solucionó estos problemas, optimizando los procesos y mejorando la eficiencia
        tanto en el manejo de productos como en la gestión del servicio técnico.
    </p>
`
    },
    pulguitas: {
      nombre: "Pulguitas",
      descripcion: "Gestión de inventario, ventas online",
      referencia: "/proyectos/pulguitas",
      imagen: "pulguitas.png",
      fecha: 'Diciembre 2024',
      repositorio:'',
      tecnologias: ["react", "node", "tailwind", "mysql", "git", "docker"],
      descripcion: `<p>Pulguitas es un e-commerce que surge de la necesidad de vender productos en línea y llegar a más personas. La principal solución que ofrece es la venta online de productos, complementada con un panel administrativo que permite gestionar ventas, inventarios y clientes.</p>
<p>Antes de implementar este sistema, la gestión se realizaba únicamente con anotaciones en papel, lo que dificultaba el control de precios y la búsqueda de productos. Con Pulguitas, se optimizan estos procesos, facilitando la administración del negocio.</p>
<p>Además, el e-commerce integra la pasarela de pago Mercado Pago, lo que garantiza seguridad y versatilidad en los medios de pago. Este sistema es ampliamente utilizado en la región, consolidándose como una solución confiable y eficiente tanto para comerciantes como para clientes.</p>`
    },
    vetSales: {
      nombre: "Sistema local para PetShop",
      descripcion: "Inventario, ventas, envío de productos por WhatsApp",
      referencia: "/proyectos/vet-sales",
      imagen: "vetSales.webp",
      repositorio: 'https://github.com/LucasParodi00/VetSale',
      fecha: 'Marzo 2024 - Actualidad',
      descripcion: `<p>Vet Sales es un sistema de gestión integral diseñado específicamente para el sector de pet shops. Permite gestionar inventarios, ventas, compras, clientes, proveedores, y mucho más, siendo un producto genérico adaptable a cualquier negocio de este rubro.</p>
                    <p>La principal solución que ofrece es optimizar las ventas y el control de stock, áreas críticas para cualquier tienda de mascotas. Este sistema ya ha sido comercializado y actualizado en múltiples versiones, proporcionando a los clientes mejoras continuas y nuevas funcionalidades basadas en sus necesidades.</p>
                    <p>Cada instalación de Vet Sales opera desde mi servidor mediante un subdominio personalizado, que lleva el nombre de la empresa que lo adquiere, bajo el dominio de Vortix, mi marca. Esta infraestructura centralizada garantiza un servicio confiable y escalable para cada cliente.</p>`,
      tecnologias: ["react", "node", "tailwind", "mysql", "git", ],
    },
    gimnasio: {
      nombre: "Gestión de gimnasio",
      descripcion: "Clientes, pagos, historial",
      referencia: "/proyectos/gimnasio",
      repositorio:'',
      descripcion: `  <p>
    <strong>Gym Manager</strong> es un sistema de gestión integral diseñado específicamente para gimnasios. 
    Este software facilita la administración de clientes y profesores, además de ofrecer funcionalidades 
    clave como el control de pagos mensuales, registro de asistencias, y una planilla de observaciones para 
    monitorear problemas o necesidades especiales de los clientes.
  </p>
  <p>
    La principal solución que brinda <strong>Gym Manager</strong> es la optimización de la gestión operativa de 
    los gimnasios, permitiendo un seguimiento eficiente de los pagos y una relación más cercana con los clientes. 
    Este sistema ya ha sido implementado en diversos gimnasios, tanto de manera local como a través de servicios 
    en la nube, y recibe actualizaciones constantes que agregan mejoras y nuevas funcionalidades para los usuarios.
  </p>
  <p><strong>Gym Manager</strong> se adapta a las necesidades del cliente ofreciendo dos modalidades de instalación:</p>
  <ul>
    <li><strong>Local</strong>, mediante un único pago.</li>
    <li>
      <strong>En la nube</strong>, alojado en mi servidor y accesible mediante un subdominio personalizado que incluye 
      el nombre del gimnasio, bajo el dominio de <strong>Vortix</strong>, mi marca.
    </li>
  </ul>
  <p>
    Esta flexibilidad garantiza una solución confiable y escalable, ideal tanto para gimnasios pequeños como 
    para grandes cadenas que optan por una suscripción mensual.
  </p>`,
      imagen: "gym.webp",
      fecha: 'Junio 2023 - Actualidad',
      tecnologias: ["php", "js", "css", "mysql", "git", ],
    },
    vegetarian: {
      nombre: "Vegetarian",
      descripcion: `<p>Vegetarian es una empresa dedicada a la venta de alimentos vegetarianos congelados. La solución que implementé para ellos fue una página web que permite mostrar a los clientes los distintos productos disponibles, junto con sus precios, opciones de envío y detalles específicos de cada artículo.</p>
                    <p>Además, la web incluye funcionalidades para el control de stock y la gestión de pedidos. Cuenta con un carrito de reservas que envía automáticamente el detalle del pedido al WhatsApp de la empresa.</p>
                    <p>Esta solución fue de gran ayuda, ya que anteriormente la empresa no contaba con ningún tipo de sistema y gestionaba sus pedidos manualmente a través de WhatsApp. Esto generaba dificultades para localizar clientes y productos, ya fuera por unidad, al por mayor o en combos solicitados. También complicaba la actualización de precios y costos de envío, especialmente considerando que estos cambian con frecuencia, lo que hacía difícil mantener la información actualizada.</p>`,
      referencia: "/proyectos/vegetarian",
      imagen: "vegetarian.webp",
      fecha: '2022',
      repositorio: 'https://github.com/LucasParodi00/Vegetarian',
      tecnologias: ["codeigniter", "php", "js", "css", "mysql", "git", ],
    },
    hell: {
      nombre: "Hell",
      descripcion: `<p>El sistema del kiosco Hell fue desarrollado utilizando C#, .NET y una robusta base de datos en SQL Server. Se eligió esta combinación de tecnologías por su eficiencia y capacidad para manejar grandes volúmenes de datos de manera segura. Además, se implementó una arquitectura en 4 capas para garantizar buenas prácticas de programación y proteger la integridad de los datos.</p>
                    <p>La solución principal consistió en la gestión de inventario, ya que anteriormente la empresa no contaba con ningún sistema para ello. También se incluyó la funcionalidad de registro de ventas y compras a diferentes proveedores.</p>
                    <p>La cadena de kioscos cuenta con cuatro locales, y cada uno opera con una computadora que corre el sistema de manera local e independiente, ya que cada sucursal gestiona su propio inventario y ventas de forma individual.</p>`,
      referencia: "/proyectos/hell",

      repositorio: 'https://github.com/LucasParodi00/Kisosko-Hell',
      imagen: "hell.webp",
      fecha: '2022',
      tecnologias: ["csharp", "net", "sqlserver" ],
    },
    rockEdm: {
      fecha: '2021',
      nombre: "Rock & EDM Festival",
      descripcion: `<p>Web informativa</p>
                    <p>Este proyecto fue desarrollado como parte de un curso de Udemy enfocado en los fundamentos de HTML, CSS y JavaScript puro. Fue uno de los primeros proyectos que realicé, e incluyó la implementación de un banner con video, imágenes cargadas de forma perezosa (lazy loading) y una estructura CSS bien organizada.</p>
                    <p>La experiencia fue muy interesante y motivadora, ayudándome a dar mis primeros pasos en el mundo de la programación web mientras aprendía buenas prácticas y técnicas modernas.</p>`,
      referencia: "/proyectos/rock-edm",
      imagen: "rock.webp",
      repositorio: 'https://github.com/LucasParodi00/rock',
      tecnologias: ["php", "js", "css", ],
    },
  };
  