export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Etl AbInitio Developer",
    company: "NTT DATA.",
    dates: "07/2021 - 04/2025",
    description: [
      "•	Documenté nuevos estándares y mejores prácticas para procesos de manejo de datos y desarrollos ETL",
      "•	Desarrollé Scripts que automatizaron la ejecución de ETLS y limpieza de datos.",
      "•	Analista de datos en el área de Data Fundations manejaba de herramientas como Ab Initio (Metadata Hub, GDE,EME, Express It, Control Center), Autosys, Python y Linux Bash Shell Scripting junto con bases de datos como MongoDB, SQL Server, Oracle SQL Developer y PostgreSQL.",
      "•	Usó Ab Initio (Metadata Hub, EME, Express>IT, Control Center) para el procesamiento y transformación de datos.",
      "•	Desarrolle y modifique grafos para el escaneo de metadata utilizando GDE Abinitio.",
      "•	Usó Autosys para la automatización de flujos de trabajo y procesos ETL/ELT.",
      "•	Desarrollé Scripts de procesos batch en entornos Linux y la administración de flujos de trabajo en Autosys mediante la creación de JILLs.",
      "•	Levantamiento y seguimiento de incidencias, CR’S, REQU’S con Service Now además de atender liberaciones para ambiente productivo."

    ]
  },
  {
    title: "Technical Support",
    company: "Instituto Renacimiento",
    dates: "04/2021 - 06/2021",
    description: [
      "•	Realizaba mantenimiento a los equipos de cómputo de la institución, así como a otros dispositivos como impresoras y proyectores.",
      "•	Administraba la red de la escuela.",
      "•	Realizaba instalación y configuración de software y hardware.",
      "•	Gestionaba e inventariaba los recursos tecnológicos del instituto.",
      "•	Realizaba seguimiento y solucionaba los problemas técnicos."
    ]
  },
    {
    title: "Web Developer",
    company: "Fundación Chabely",
    dates: "01/2021 - 04/2021",
    description: [
      "•	Diseño y creación de la base datos con MySQL.",
      "•	Diseñe la UI del sitio web",
      "•	•	Programé los modulos de la página utilizando para backend el lenguaje PHP y para front end HTML5 y bootsrap 5 para que el sitio fuera responsive."
    ]
  }
];