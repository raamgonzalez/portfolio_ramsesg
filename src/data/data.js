import { v4 as uuidv4} from 'uuid';


export const data = {

  rrss: [
		{
			id: uuidv4(),
			name: "whatsapp",
			href: "https://wa.me/1155789343",
      state: true
		},
		{
			id: uuidv4(),
			name: "facebook",
			href: "https://www.facebook.com/raam.gonzalez/",
      state: false

		},
		{
			id: uuidv4(),
			name: "github",
			href: "https://github.com/raamgonzalez",
      state: true
		},
		{
			id: uuidv4(),
			name: "behance",
			href: "https://www.behance.net/ramsesgonzale",
      state: true
		},
		{
			id: uuidv4(),
			name: "linkedin",
			href: "https://www.linkedin.com/in/ramsesoctaviogonzalez/",
      state: true
		},
    {
			id: uuidv4(),
			name: "instagram",
			href: "https://www.instagram.com/raam.gonzalez/",
      state: false
		},
  ],

  projects: [
    {
      id: uuidv4(),
      name: "tienda de tecnología",
      description:
        "Tienda de venta de productos tecnologicos, aproveche para incorporar mock async",
      soft: ["html", "css", "javascript", "reactjs", "firebase", "axios", "sass"],
      media: "./media/projects/project_tecnophil.jpg",
      urlgit: "https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez",
      urldeploy: "https://ecommerce-react-34850.vercel.app/",
    },
    {
      id: uuidv4(),
      name: "website portfolio",
      description:
        "Web realizada con el fin de mostrar mis trabajos y desarrollo como programador",
      soft: ["html", "css", "javascript", "reactjs", "sass"],
      media: "./media/projects/project_portfolio.jpg",
      urlgit: "https://github.com/raamgonzalez/portfolio_pp",
      urldeploy: "https://portfolio-k6lvtsq3w-raamgonzalez.vercel.app/",
    },
    {
      id: uuidv4(),
      name: "blog arquitectura",
      description:
        "Blog de Arquitectura que contiene una consola de admin y cards con obras de arquitectura y arquitectos.",
      soft: ["html", "css", "python", "django"],
      media: "./media/projects/test.jpg",
      urlgit: "https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez",
      urldeploy:
        "https://ecommerce-react-34850-5g6qf957z-raamgonzalez.vercel.app/",
    },
    {
      id: uuidv4(),
      name: "landing-page lamparas",
      description:
        "Pagina web realizada para curso de programación fullstack python.",
      soft: ["html", "css"],
      media: "./media/projects/project_regulux.jpg",
      urlgit:
        "https://github.com/FerBarreyro/TPO-Desarrollo-WEB-Equipo-14-Comisi-n-22523.github.io",
      urldeploy: "https://reguluxlamp.netlify.app/",
    },
    {
      id: uuidv4(),
      name: "tienda de camiseta",
      description:
        "Web para tienda de camisetas de futbol realizada en javascript vanilla",
      soft: ["html", "css", "javascript"],
      media: "./media/projects/project_camisetasdprimera.jpg",
      urlgit: "https://github.com/raamgonzalez/Ecommerce-Camisetas_Javascript",
      urldeploy: "https://ecommerce-camisetasde1.netlify.app/",
    },
    {
      id: uuidv4(),
      name: "todolist",
      description:
        "Todolist realizado en Vue con Vite. Trabaja como una app para seguir tareas",
      soft: ["html", "css", "javascript", "vue", "vite"],
      media: "./media/projects/project_todolist.jpg",
      urlgit: "https://github.com/raamgonzalez/Todolist_vue",
      urldeploy:
        "https://raamgonzalez.github.io/Todolist_vue/",
    },
    {
      id: uuidv4(),
      name: "appclima",
      description:
        "Aplicacion del clima realizado en Vue con Vite. Tiene sincronización con API de clima.",
      soft: ["html", "css", "javascript", "vue", "vite"],
      media: "./media/projects/project_appclima.jpg",
      urlgit: "https://github.com/raamgonzalez/weather__app-vue",
      urldeploy:
        "https://raamgonzalez.github.io/weather__app-vue/",
    },
  ],

  softwares: [
    {
      id: uuidv4(),
      title: "html",
      state: true,
    },
    {
      id: uuidv4(),
      title: "css",
      state: true,
    },
    {
      id: uuidv4(),
      title: "javascript",
      state: true,
    },
    {
      id: uuidv4(),
      title: "python",
      state: true,
    },
    {
      id: uuidv4(),
      title: "django",
      state: true,
    },
    {
      id: uuidv4(),
      title: "sass",
      state: true,
    },
    {
      id: uuidv4(),
      title: "reactjs",
      state: true,
    },
    {
      id: uuidv4(),
      title: "cli",
      state: true,
    },
    {
      id: uuidv4(),
      title: "figma",
      state: true,
    },
    {
      id: uuidv4(),
      title: "photoshop",
      state: true,
    },
    {
      id: uuidv4(),
      title: "astro",
      state: false,
    },
    {
      id: uuidv4(),
      title: "firebase",
      state: false,
    },
    {
			id: uuidv4(),
			title: "jquery",
			state: false,
      },
    {
			id: uuidv4(),
			title: "jest",
			state: false,
    },
  ],
};