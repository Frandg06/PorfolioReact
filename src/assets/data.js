export const data = {
  name: 'Francisco Diez Gutiérrez',
  short_name: 'Francisco Diez',

  hero_desc1:
    '+2 años de experiencia. <span className="text-highlighted">Técnico en desarrollo de aplicaciones web y en administración de sistemas</span>. León, España 🇪🇸. Especializado en el desarrollo de aplicaciones web únicas.',

  experience: [
    {
      title: 'ITGallery',
      label: 'Actualmente',
      date: 'Desde junio de 2024',
      desc: [
        'Durante mi etapa en ITGallery he trabajado como desarrollador Wep Full Stack, participando en el desarrollo y mantenimiento de funcionalidades de backend con Laravel, centrándome en la refactorización de código, la optimización del rendimiento y la integración de nuevas soluciones.',
        'En el frontend he implementado funcionalidades utilizando PHP (framework propio de la empresa) y jQuery, aplicando estilos con CSS, SCSS y Bootstrap. También he integrado PHPDocx para la generación dinámica de documentos —como facturas e informes—, automatizando procesos administrativos clave.',
        'Uno de los hitos principales fue el desarrollo completo de las plataformas de gestión para ARCOmadrid y ARCOLisboa, en las que trabajé en backend y configuré todo el frontend. Además, para asegurar la calidad del software, elaboré tests automatizados con PHPUnit.',
        'La gestión diaria de los diferentes proyectos se llevó a cabo mediante Jira y el control de versiones en Bitbucket, aplicando metodologías ágiles y flujos de trabajo eficientes.',
      ],
    },
    {
      title: 'Soluciones Smart de Territorio',
      label: null,
      date: 'Desde junio de 2023 hasta junio de 2024',
      desc: [
        'En Soluciones Smart de Territorio lideré el desarrollo del sistema de gestión de Servicios Sociales para la Junta de Castilla y León. Me encargué de definir el stack tecnológico, diseñar la arquitectura del software y crear desde cero la base de datos y el proyecto.',
        'Desde el primer día asumí la responsabilidad de la planificación técnica y la gestión del proyecto, coordinando tanto el desarrollo como la integración de funcionalidades con la Junta de Castilla y León.',
        'Además, participé en el mantenimiento y la mejora de la aplicación de incidencias ciudadanas del Ayuntamiento de León y colaboré directamente con clientes y equipos externos en la toma de requisitos y la validación de entregables.',
      ],
    },
    {
      title: 'Sica S.A. (Prácticas)',
      label: null,
      date: 'Desde marzo de 2023 hasta junio de 2023',
      desc: [
        'Durante mis prácticas en Sica S.A. trabajé en la optimización de un sistema de gestión energética, centrándome en la mejora del rendimiento del backend.',
        'Realicé la optimización de consultas SQL complejas, logrando reducir significativamente los tiempos de respuesta y el consumo de recursos. Además, llevé a cabo la refactorización del backend desarrollado en PHP con CodeIgniter, mejorando la eficiencia del sistema y su mantenibilidad.',
      ],
    },
  ],

  formation: [
    {
      title: 'Grado Superior en Administración de Sistemas Informáticos en Red',
      date: 'Septiembre de 2020 a julio de 2023',
      desc: [
        'Especialización en la gestión y administración de sistemas operativos cliente‑servidor, redes y seguridad informática.',
        'Primeros pasos prácticos en desarrollo web, combinando conocimientos de sistemas y programación.',
      ],
    },
    {
      title: 'Grado Superior en Desarrollo de Aplicaciones Web',
      date: 'Septiembre de 2024 a julio de 2026 (en curso)',
      desc: [
        'Actualmente amplío mis conocimientos en el desarrollo y mantenimiento de aplicaciones web dinámicas, orientadas a servicios empresariales y usuarios finales.',
      ],
    },
    {
      title: 'Formación complementaria',
      date: null,
      desc: [
        'Certificado en Esquema Nacional de Seguridad (RD 311/2022) por el Centro Criptológico Nacional (febrero 2024).',
        'Curso de despliegue de Laravel y bases de datos en AWS EC2 (mayo 2024, Udemy).',
        "Curso 'React: De cero a experto' (Hooks y MERN) (enero‑marzo 2023, Udemy).",
        "Curso 'Domina TailwindCSS – Desde cero a experto' (enero 2023, Udemy).",
      ],
    },
  ],

  projects: [
    {
      title: 'Hooky – SaaS para eventos sociales',
      desc: 'Diseñé y desarrollé una arquitectura de <span className="text-highlighted">microservicios</span> con <span className="text-highlighted">Laravel</span> (backend), <span className="text-highlighted">React</span> (frontends para usuarios y administración) y <span className="text-highlighted">Node.js</span> (<span className="text-highlighted">WebSockets</span> con <span className="text-highlighted">Socket.IO</span>), optimizada con <span className="text-highlighted">Cloudflare</span>. Implementé <span className="text-highlighted">chat y notificaciones en tiempo real</span> para eventos, además de una landing page en React con <span className="text-highlighted">pagos seguros vía Stripe</span>.',
      url: 'https://hookyapp.es',
      images: [
        '/img/hooky1.webp',
        //  '/img/hooky2.webp',
        //  '/img/hooky3.webp'
      ],
      tags: [
        'Laravel',
        'Node.js',
        'React',
        'PostgreSQL',
        'TanStack Query',
        'Cloudflare',
        'Socket.IO',
        'TailwindCSS',
        'CSS',
      ],
    },
    {
      title: 'Blog personal - Desarrollo web',
      label: 'Desarrollo',
      desc: 'He creado un espacio dedicado al <span className="text-highlighted">desarrollo web</span>, centrado en <span className="text-highlighted">Laravel</span> y <span className="text-highlighted">PHP</span>, pero también con contenido sobre otras tecnologías como <span className="text-highlighted">JavaScript</span> o <span className="text-highlighted">React</span>. El blog está construido con <span className="text-highlighted">Laravel</span>, <span className="text-highlighted">Inertia</span>, <span className="text-highlighted">React</span>, <span className="text-highlighted">TailwindCSS</span> y <span className="text-highlighted">shadcn/ui</span>, y usa <span className="text-highlighted">PostgreSQL</span> como base de datos.',
      url: 'https://blog.frandiez.es',
      images: ['/img/blog.webp'],
      tags: ['Laravel', 'React', 'Inertia.js', 'PHP', 'JavaScript', 'TailwindCSS', 'shadcn/ui', 'PostgreSQL'],
    },
    {
      title: 'Fran.Link - Acortador de enlaces',
      label: 'Beta',
      desc: 'He creado un acortador de URLs usando <span className="text-highlighted">Cloudflare Workers</span> y su sistema de <span className="text-highlighted">KV</span> para el almacenamiento rápido y escalable. En el worker uso <span className="yellow-400">Hono</span> como framework, y puedes elegir tu propio nombre personalizado para el enlace o dejar que se genere automáticamente un hash.',
      url: 'https://app.frandg.link',
      github: 'https://frandg.link/git-link',
      images: [
        '/img/fran_link_dark.webp',
        // '/img/fran_link.webp',
        // '/img/link_modal.webp'
      ],
      tags: ['React', 'Hono', 'Cloudflare', 'JavaScript', 'TailwindCSS', 'shadcn/ui'],
    },
  ],

  secondary_projects: [
    {
      title: 'ElTioManu',
      desc: 'El Tío Manu es una plataforma web desarrollada como catálogo en línea para un comercio local. Permite a los usuarios explorar cómodamente los productos ofrecidos.',
      url: 'https://eltiomanu.es',
      image: '/img/project1.png',
      tags: ['Laravel', 'Livewire', 'JavaScript', 'TailwindCSS', 'MySQL', 'PHP'],
    },
    {
      title: 'Prueba técnica – ITGallery',
      desc: 'Prueba realizada para acceder al puesto de trabajo en ITGallery. Desarrollo de un CRUD en Laravel y maquetación web a partir de Figma.',
      url: 'https://github.com/Frandg06/it_gallety_prueba',
      tags: ['Laravel', 'JavaScript', 'CSS', 'MySQL'],
    },
  ],

  stack: {
    backend: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'PHPUnit', 'Socket.IO'],
    frontend: ['JavaScript', 'React', 'jQuery', 'Livewire', 'HTML', 'Twig', 'CSS', 'SCSS', 'TailwindCSS', 'Bootstrap'],
    tools: ['Swagger', 'Git', 'Cloudflare', 'TanStack Query', 'Vercel'],
  },

  linkedin: 'https://www.linkedin.com/in/francisco-diez-gutierrez-a238041b0/',
  github: 'https://github.com/Frandg06',
  email: 'mailto:fdiez86@gmail.com',
};
