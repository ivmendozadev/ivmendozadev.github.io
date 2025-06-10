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
  }, //aquí va una , para agregar otro slide projects
  {
    id: 2,
    title: "AWS CERTIFCATION",
    summary: "AWS Certified Cloud Practitioner - GD0S1T7C9ME1Q594",
    images: [
      "https://i.postimg.cc/brWRPbJ9/AWS-Certified-Cloud-Practitioner-certificate.png",
    ],
    tags: ["AWS"],
    details: {
      challenge: "",
      solution: "",
      impact: []
    }
  },
    {
    id: 3,
    title: "Fundamentos en la nube 4.0",
    summary: "Fundamentos para la nube en la Industria 4.0 con tecnología Microsoft",
    images: [
      "https://i.postimg.cc/Njf0tn3b/Fundamentos-para-la-nube-en-la-industria-4-0-Microsoft.png",
    ],
    tags: ["Microsoft"],
    details: {
      challenge: "",
      solution: "",
      impact: []
    }
  },
  {
  id: 4,
    title: "Ciclo de Vida Sofware",
    summary: "NTT DATA 19 Agosto 2024",
    images: [
      "https://i.postimg.cc/cH8Hj8pS/Ciclo-de-Vida-Software-NTTDATA.png",
    ],
    tags: ["NTT DATA"],
    details: {
      challenge: "",
      solution: "",
      impact: []
    }
  },
  {
  id: 5,
    title: "Diploma Platzi - Diciembre 2020",
    summary: "Estrategías para aprender en línea efectivamente",
    images: [
      "https://i.postimg.cc/cH8Hj8pS/Ciclo-de-Vida-Software-NTTDATA.png",
    ],
    tags: ["Platzi"],
    details: {
      challenge: "",
      solution: "",
      impact: []
    }
  },
  {
  id: 5,
    title: "Carta de Recomendación",
    summary: "Fundación Chabely Mayo 2021",
    images: [
      "https://i.postimg.cc/wxLMQL55/Carta-de-Recomendaci-n-Chabely.png",
    ],
    tags: ["Platzi"],
    details: {
      challenge: "",
      solution: "",
      impact: []
    }
  }, 
  
  
];