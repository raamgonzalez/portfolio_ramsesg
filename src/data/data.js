import { v4 as uuidv4} from 'uuid';


export const data = {

  rrss: [
		{
			id: uuidv4(),
			title: "instagram",
			href: "https://www.instagram.com/raam.gonzalez/",
		},
		{
			id: uuidv4(),
			title: "facebook",
			href: "https://www.facebook.com/raam.gonzalez/",
		},
		{
			id: uuidv4(),
			title: "github",
			href: "https://github.com/raamgonzalez",
		},
		{
			id: uuidv4(),
			title: "behance",
			href: "https://www.behance.net/ramsesgonzale",
		},
		{
			id: uuidv4(),
			title: "linkedin",
			href: "https://www.linkedin.com/in/ramsesoctaviogonzalez/",
		},
  ],

  projects: [
    {
      id: uuidv4(),
      name: "tienda de tecnología",
      description:
        "Tienda de venta de productos tecnologicos, aproveche para incorporar mock async",
      soft: ["html", "css", "javascript", "reactjs", "firebase", "axios", "sass"],
      media: "./media/projects/project_tecnophil.png",
      urlgit: "https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez",
      urldeploy: "https://ecommerce-react-34850.vercel.app/",
    },
    {
      id: uuidv4(),
      name: "website portfolio",
      description:
        "Web realizada con el fin de mostrar mis trabajos y desarrollo como programador",
      soft: ["html", "css", "javascript", "reactjs", "sass"],
      media: "./media/projects/test.jpg",
      urlgit: "https://github.com/raamgonzalez/portfolio.basicweb",
      urldeploy: "https://portfolio-basicweb.vercel.app/",
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
      media: "./media/projects/project_regulux.png",
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
      media: "./media/projects/project_camisetasdprimera.png",
      urlgit: "https://github.com/raamgonzalez/Ecommerce-Camisetas_Javascript",
      urldeploy: "https://ecommerce-camisetasde1.netlify.app/",
    },
    {
      id: uuidv4(),
      name: "tienda de camiseta",
      description:
        "Web para tienda de camisetas de futbol realizada en javascript vanilla",
      soft: ["html", "css", "javascript"],
      media: "./media/projects/test.jpg",
      urlgit: "https://github.com/raamgonzalez/Ecommerce-Tecnophil_Gonzalez",
      urldeploy:
        "https://ecommerce-react-34850-5g6qf957z-raamgonzalez.vercel.app/",
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