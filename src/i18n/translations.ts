export type Lang = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobre:  'Sobre mí',
      exp:    'Experiencia',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      disponible: 'Disponible',
    },
    hero: {
      tags: [
        'Ingeniero Civil Informático',
        'Amante del café y la tecnología',
        'Desarrollador de Software',
        'Siempre aprendiendo',
      ],
      photo: 'Tu foto aquí',
    },
    marquee: [
      'Go', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes',
      'PostgreSQL', 'React', 'Linux', 'Bash',
    ],
    sobre: {
      num:   '01 — Sobre mí',
      title: 'Quién soy',
      bio:   'Desarrollador <strong>Backend y DevOps</strong> con experiencia en Node.js, Go, infraestructura Linux, Docker y Kubernetes. Hábil en desarrollo full-stack con React, Angular y Next.js, con enfoque en <strong>optimización de rendimiento</strong> y arquitecturas escalables. Inglés C1 — disponible para trabajo remoto.',
      meta: {
        locLabel: 'Ubicación',  loc: 'Viña del Mar, Chile',
        emailLabel: 'Email',
        rolLabel: 'Rol',        rol: 'Ingeniero Civil Informático',
        lngLabel: 'Idiomas',    lng: 'Español (nativo) · Inglés C1',
        staLabel: 'Estado',     sta: 'Disponible · Chile, Remoto',
      },
    },
    skills: {
      num: '02 — Habilidades',
      title: 'Stack Técnico',
      categories: [
        { name: 'Lenguajes',  tags: ['Go','Python','JavaScript','TypeScript','C','SQL','Bash'] },
        { name: 'Frontend',   tags: ['React','Angular','Next.js','Tailwind CSS'] },
        { name: 'Backend',    tags: ['Node.js','Express.js','Nest.js','PostgreSQL','MongoDB','Prisma','TypeORM','REST APIs'] },
        { name: 'DevOps & Infra', tags: ['Linux','Docker','Kubernetes','CI/CD','Nginx','GitHub Actions','systemd','TCP/IP · DNS'] },
      ],
    },
    exp: {
      num: '03 — Experiencia',
      title: 'Trayectoria',
      items: [
        {
          date: 'Jul 2025 — Dic 2025',
          badge: 'Pasantía',
          role: 'Desarrollador de Software',
          company: 'Forcast / DobProtocol · Remoto',
          bullets: [
            'Contribuí a la decisión arquitectónica de integrar Stellar como capa blockchain adicional, reduciendo tiempos de carga de 13 minutos a 3–5 segundos.',
            'Implementé funcionalidades frontend y backend en el ecosistema DobProtocol usando Node.js, TypeScript y React.',
          ],
        },
        {
          date: 'Mar 2024 — Jul 2025',
          badge: 'Remoto',
          role: 'Desarrollador Frontend',
          company: 'Cloud And Digital · Remoto',
          bullets: [
            'Mejoré rendimiento de carga y SEO de sitios cliente mediante refactorización y Core Web Vitals con React y Next.js.',
            'Contribuí al desarrollo de una plataforma web educativa implementando funcionalidades frontend en todo el ciclo del proyecto.',
          ],
        },
      ],
    },
    proyectos: {
      num: '04 — Proyectos',
      title: 'Proyectos',
      verRepo: 'Ver repositorio',
      items: [
        {
          date: 'Ago 2023 — Dic 2024',
          badge: 'Proyecto',
          role: 'Cluster de Infraestructura Computacional',
          company: 'Universidad Adolfo Ibáñez · Viña del Mar',
          href: 'https://github.com/AldoJimenezW/cluster-kubernetes-guide',
          bullets: [
            'Diseñé y desplegué un cluster de 12 nodos de alta disponibilidad con Ubuntu Server y Kubernetes para investigación universitaria.',
            'Automaticé mantenimiento con scripts Bash, reduciendo intervención manual y mejorando la confiabilidad del entorno Linux.',
            'Diagnostiqué y resolví incidentes de red y servidor, manteniendo disponibilidad operacional para usuarios académicos.',
          ],
        },
      ],
    },
    edu: {
      num: '05 — Formación',
      title: 'Educación',
      subtitle: '& Certificaciones',
      col1: 'Educación',
      col2: 'Certificaciones',
      degrees: [
        { name: 'Ingeniería Civil Informática', inst: 'Universidad Adolfo Ibáñez', year: '2019 – 2025 · Viña del Mar, Chile' },
        { name: 'Backend / DevOps Bootcamp',    inst: 'Boot.dev',                  year: '2024 – Presente' },
      ],
      certs: [
        { name: 'EF SET English Certificate C1 Advanced', inst: 'EF SET · 61/100',  year: '2025' },
        { name: 'Claude Code in Action',                   inst: 'Anthropic',        year: '2026' },
        { name: 'Enterprise Design Thinking Practitioner', inst: 'IBM',              year: '2025' },
        { name: 'Introduction to Linux LFS101',            inst: 'Linux Foundation', year: '2026' },
      ],
    },
    contacto: {
      num: '06 — Contacto',
      big: 'Hablemos.',
      links: [
        { label: 'Email',    value: 'ajimenezw@protonmail.com', href: 'mailto:ajimenezw@protonmail.com' },
        { label: 'LinkedIn', value: 'Aldo Jiménez Wiehoff',     href: 'https://www.linkedin.com/in/aldo-jimenez-wiehoff/' },
        { label: 'GitHub',   value: 'github.com/AldoJimenezW',  href: 'https://github.com/AldoJimenezW' },
      ],
    },
    footer: 'Diseñado y desarrollado con ♥',
  },

  en: {
    nav: {
      inicio: 'Home',
      sobre:  'About',
      exp:    'Work',
      proyectos: 'Projects',
      contacto: 'Contact',
      disponible: 'Available',
    },
    hero: {
      tags: [
        'Computer Engineer',
        'Coffee and Tech Lover',
        'Software Developer',
        'Always Learning',
      ],
      photo: 'Your photo here',
    },
    marquee: [
      'Go', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes',
      'PostgreSQL', 'React', 'Linux', 'Bash',
    ],
    sobre: {
      num:   '01 — About',
      title: 'Who I am',
      bio:   '<strong>Backend and DevOps</strong> developer with experience in Node.js, Go, Linux infrastructure, Docker, and Kubernetes. Skilled in full-stack development with React, Angular, and Next.js, focused on <strong>performance optimization</strong> and scalable architectures. C1 English — available for remote work.',
      meta: {
        locLabel: 'Location',  loc: 'Viña del Mar, Chile',
        emailLabel: 'Email',
        rolLabel: 'Role',      rol: 'Computer Engineer (Ingeniería Civil Informática)',
        lngLabel: 'Languages', lng: 'Spanish (native) · English C1',
        staLabel: 'Status',    sta: 'Available · Chile, Remote',
      },
    },
    skills: {
      num: '02 — Skills',
      title: 'Tech Stack',
      categories: [
        { name: 'Languages',      tags: ['Go','Python','JavaScript','TypeScript','C','SQL','Bash'] },
        { name: 'Frontend',       tags: ['React','Angular','Next.js','Tailwind CSS'] },
        { name: 'Backend',        tags: ['Node.js','Express.js','Nest.js','PostgreSQL','MongoDB','Prisma','TypeORM','REST APIs'] },
        { name: 'DevOps & Infra', tags: ['Linux','Docker','Kubernetes','CI/CD','Nginx','GitHub Actions','systemd','TCP/IP · DNS'] },
      ],
    },
    exp: {
      num: '03 — Experience',
      title: 'Experience',
      items: [
        {
          date: 'Jul 2025 — Dec 2025',
          badge: 'Internship',
          role: 'Software Developer',
          company: 'Forcast / DobProtocol · Remote',
          bullets: [
            'Contributed to an architectural decision to integrate Stellar as an additional blockchain layer, reducing load times from 13 minutes to 3–5 seconds.',
            'Implemented frontend and backend features across the DobProtocol ecosystem using Node.js, TypeScript, and React.',
          ],
        },
        {
          date: 'Mar 2024 — Jul 2025',
          badge: 'Remote',
          role: 'Frontend Developer',
          company: 'Cloud And Digital · Remote',
          bullets: [
            'Improved page load performance and SEO visibility for client websites by refactoring code and applying Core Web Vitals with React and Next.js.',
            'Contributed to the development of an educational web platform, implementing frontend features throughout the project lifecycle.',
          ],
        },
      ],
    },
    proyectos: {
      num: '04 — Projects',
      title: 'Projects',
      verRepo: 'View repository',
      items: [
        {
          date: 'Aug 2023 — Dec 2024',
          badge: 'Project',
          role: 'Computational Infrastructure Cluster',
          company: 'Universidad Adolfo Ibáñez · Viña del Mar',
          href: 'https://github.com/AldoJimenezW/cluster-kubernetes-guide',
          bullets: [
            'Architected and deployed a 12-node high-availability cluster using Ubuntu Server and Kubernetes for university research workloads.',
            'Automated recurring system maintenance through custom Bash scripts, reducing manual intervention and improving Linux reliability.',
            'Diagnosed and resolved networking and server incidents, maintaining operational availability for academic users.',
          ],
        },
      ],
    },
    edu: {
      num: '05 — Education',
      title: 'Education',
      subtitle: '& Certifications',
      col1: 'Education',
      col2: 'Certifications',
      degrees: [
        { name: 'B.S. Computer Engineering (Ingeniería Civil Informática)', inst: 'Universidad Adolfo Ibáñez', year: '2019 – 2025 · Viña del Mar, Chile' },
        { name: 'Backend / DevOps Bootcamp', inst: 'Boot.dev', year: '2024 – Present' },
      ],
      certs: [
        { name: 'EF SET English Certificate C1 Advanced', inst: 'EF SET · 61/100',  year: '2025' },
        { name: 'Claude Code in Action',                   inst: 'Anthropic',        year: '2026' },
        { name: 'Enterprise Design Thinking Practitioner', inst: 'IBM',              year: '2025' },
        { name: 'Introduction to Linux LFS101',            inst: 'Linux Foundation', year: '2026' },
      ],
    },
    contacto: {
      num: '06 — Contact',
      big: "Let's Talk.",
      links: [
        { label: 'Email',   value: 'ajimenezw@protonmail.com', href: 'mailto:ajimenezw@protonmail.com' },
        { label: 'LinkedIn',value: 'Aldo Jiménez Wiehoff',     href: 'https://www.linkedin.com/in/aldo-jimenez-wiehoff/' },
        { label: 'GitHub',  value: 'github.com/AldoJimenezW',  href: 'https://github.com/AldoJimenezW' },
      ],
    },
    footer: 'Designed & developed with ♥',
  },
} as const;
