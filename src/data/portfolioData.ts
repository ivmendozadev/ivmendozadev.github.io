export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}

export interface Certification {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Expediente Electronico Chabely",
    summary: "Desarrollar un sistema de expedientes web, donde los médicos especialistas puedan dar de alta pacientes, realizar reportes, imprimirlos y consultarlos en cualquier momento",
    images: [
      "https://i.postimg.cc/kMjZZbXz/alta-paciente.png",
      "https://i.postimg.cc/90fk0W1L/gestion-de-pacientes.png",
      "https://i.postimg.cc/0jHBJLBP/historial-clinico.png"
    ],
    tags: ["HTML", "SQL", "PHP", "CSS", "mPDF"],
    details: {
      challenge: "La fundación requiere de un sistema web para sus pacientes que sea rápido y se puedan consultar los expedientes realizados en cualquier momento.",
      solution: "Diseñar e implementar un CRUD Web responsive, de fácil acceso y navegación utilizando las siguientes técnologías SQL, HTML, PHP para el desarrollo y Frameworks que ayuden a facilitar el mismo",
      impact: [
        "Se tendrá el expediente completo de los pacientes.",
        "Los médicos especialistas pueden consultar los expedientes de cada área y todos estaran informados.",
        "Consulta de reportes y modificación de datos en tiempo real.",
        "Acceso a la plataforma 24/7."
      ]
    }
  } //aquí va una , para agregar otro slide projects
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS CLOUD",
    summary: "Desarrollar un sistema de expedientes web, donde los médicos especialistas puedan dar de alta pacientes, realizar reportes, imprimirlos y consultarlos en cualquier momento",
    images: [
      "https://i.postimg.cc/kMjZZbXz/alta-paciente.png",
      "https://i.postimg.cc/90fk0W1L/gestion-de-pacientes.png",
      "https://i.postimg.cc/0jHBJLBP/historial-clinico.png"
    ],
    tags:[]
  }
];