//Array de modulos

export const listMenu = [
  {
    namePrincipal: "Home",
    iconMenu: "home",
    path: "home",
    submenu: [{
      nameSubmenu: "Home",
      path: "home"
    }
    ]
  },
  {
    namePrincipal: "Global",
    iconMenu: "public",
    path: "tecnologia",
    submenu: [{
      nameSubmenu: "Tecnología",
      path: "tecnologia"
    },
    {
      nameSubmenu: "Uso de Azure DevOps, Scrum",
      path: "usoazure"
    },
    {
      nameSubmenu: "Distribucion de carpetas",
      path: "folderdistribution"
    }
    ]
  },
  {
    namePrincipal: "Infraestructura",
    iconMenu: "cloud_queue",
    submenu: [{
      nameSubmenu: "Recetas",
      path: "recetas"
    },
    {
      nameSubmenu: "HEALTH",
      path: "health"
    },
    {
      nameSubmenu: "Mapa de desarrollo",
      path: "developmap"
    },
    {
      nameSubmenu: "Uso de variables de ambiente Prod/Dev",
      path: "enviromentvariables"
    },
    {
      nameSubmenu: "Peticiones HTTP",
      path: "peticioneshttp"
    }
    ]
  },
  {
    namePrincipal: "Backend",
    iconMenu: "backup_table",
    path: "lineamientosGen",
    submenu: [{
      nameSubmenu: "lineamientos generales",
      path: "lineamientosGen"
    },
    {
      nameSubmenu: "APIs",
      path: "apis"
    },
    {
      nameSubmenu: "Buenas Practicas",
      path: "backbuenaspracticas"
    },
    {
      nameSubmenu: "Azure Functions",
      path: "azurefunctions"
    }
    ]
  },
  {
    namePrincipal: "Frontend",
    iconMenu: "code",
    path: "frontbuenaspracticas",
    submenu: [{
      nameSubmenu: "Buenas Practicas",
      path: "frontbuenaspracticas"
    },
    {
      nameSubmenu: "BEM",
      path: "bem"
    }
    ]
  },
  {
    namePrincipal: "Diseño",
    iconMenu: "brush",
    path: "reglasux",
    submenu: [{
      nameSubmenu: "Reglas UX",
      path: "reglasux"
    },
    {
      nameSubmenu: "Look and feel",
      path: "lookandfeel"
    },
    {
      nameSubmenu: "Paleta de Colores",
      path: "colorpalet"
    },
    {
      nameSubmenu: "Tipografía",
      path: "tipografia"
    },
    {
      nameSubmenu: "Manual de Marca",
      path: "brand"
    }
    ]
  },
];

// Titulos de modulo

export const tecnologyHead =
  {
    icon: "developer_board",
    title: "Tecnología",
    subtitle: "Aquí podrá consultar las tecnologías definidas para el desarrollo de las plataforma LOGYCA."
  };

  export const healthTokenHead =
  {
    icon: "health_and_safety",
    title: "Health Token",
    subtitle: "El health es fundamental en todo desarrollo LOGYCA para realizar el seguimiento y monitoreo de las plataformas"
  };

  export const developMap =
  {
    icon: "schema",
    title: "Mapa de desarrollo",
    subtitle: "En el siguiente mapa mental se define la estructura de todo desarrollo LOGYCA. Se sugiere estructurar las lluvias de ideas de reuniones y actualizarlos constantemente para no perder las sugerencias de los equipos. Estos mapas pueden ser utilizados como actas de reuniones y sirven de insumo para documentos posteriores."
  };

  //infor de tabla de tecnología

export const displayColumns = [
  "module", "language", "framework"
];

export const technologyYTableCell = [
  {
    module: "Backend",
    language: "Python",
    framework: "Fast API"
  },
  {
    module: "Backend",
    language: "Python",
    framework: "Flask"
  },
  {
    module: "Backend",
    language: "Python",
    framework: "Django"
  },
  {
    module: "Backend",
    language: ".Net",
    framework: ".NET 6"
  },
  {
    module: "Frontend",
    language: "TypeScript",
    framework: "Angular o React"
  },
  {
    module: "Frontend",
    language: "Javascript",
    framework: "Angular o React"
  },
  {
    module: "Frontend",
    language: "HTML 5",
    framework: "Uso de metodología BEM para organización de código HTML"
  },
  {
    module: "Frontend",
    language: "SCSS",
    framework: "Uso de metodología BEM para organización de código SCSS"
  },
  {
    module: "BD",
    language: "SQL",
    framework: "Azure Postgress SQL"
  },
  {
    module: "BD",
    language: "SQL",
    framework: "Azure SQL Server"
  },
  {
    module: "Analítica",
    language: "Python",
    framework: "Pandas"
  },
  {
    module: "Analítica",
    language: "SQL",
    framework: "Azure Postgress SQL"
  },
  {
    module: "Analítica",
    language: "SQL",
    framework: "Azure SQL Server"
  },
  {
    module: "Analítica",
    language: "DAX",
    framework: "Power BI / Azure Analysis Services"
  },

];