export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pure Harvest",
    des: " Built a smart agriculture platform integrating AI for plant disease detection and soil analysis. Developed a farmer ecommerce system with secure authentication and fraud prevention",
    img: "/p1.png",
    iconLists: ["/re.svg", "/boostrap.svg", "/js.svg"],
    link: "https://pure-harvest-g.vercel.app/",
  },
  {
    id: 2,
    title: "Commercia",
    des: " Built a feature-rich electronics store with API-integrated product management and a custom-styled UI for enhanced user experience.",
    img: "/p2.webp",
    iconLists: ["/re.svg", "/sass.svg", "/js.svg"],
    link: "https://commercia-electronics.vercel.app/",
  },
  {
    id: 3,
    title: "NextFurnitures",
    des: "Developed a full-featured online furniture store with secure authentication, CMS-powered content, and responsive UI.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/c.svg", "strapi.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "NextCommerce",
    des: "Implemented a high-performance clothing store with server-side rendering (SSR) and CMS-driven content management for dynamic product updates.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "sanity.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  {
    id: 5,
    title: "Bouncer",
    des: " Built a modern e-commerce platform integrating dynamic product fetching via API. Designed a responsive UI with fast load times.",
    img: "/p5.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://bouncerr.vercel.app/",
  },
  {
    id: 6,
    title: "DoctorDate",
    des: " Developed a scalable doctor appointment platform with secure authentication and real-time scheduling. Optimized UI/UXfor seamless booking experience.",
    img: "/p6.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "strapi.svg", "c.svg"],
    link: "https://doctor-date.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Kareem was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Karim's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and strengthen your brand, Karim is the ideal partner.",
    name: "michel fam",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with Karim was an outstanding experience. His expertise, attention to detail, and commitment to excellence were evident in every aspect of the project. Karim consistently goes above and beyond to deliver top-quality results. If you're looking for a skilled and reliable developer to bring your vision to life, Karim is the perfect choice.",
    name: "Mohamed Osama",
    title: "FullStack in Blue Marketing",
  },
  {
    quote:
      "Working with Karim was an outstanding experience. His expertise in React.js and Next.js, combined with his keen eye for design and performance, made a huge impact on our project. Kareem's dedication, efficiency, and ability to solve complex front-end challenges set him apart. If you're looking for a developer who can bring both creativity and functionality to your website, Karim is the perfect fit.",
    name: "Mustafa Bedir",
    title: "FrontEnd Developer",
  },
  {
    quote:
      "Kareem is a highly skilled and passionate Frontend Developer with exceptional expertise in React.js and Next.js. His ability to craft seamless, high-performance user experiences is truly impressive. Throughout our collaboration, Kareem demonstrated professionalism, creativity, and a strong problem-solving mindset. If you're looking for a developer who can transform your vision into a stunning and functional digital experience, Kareem is the perfect choice.",
    name: "Mohamed Saleh",
    title: "Backend Developer",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a Website for a client, from initial concept to deployment on Host",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/kariimellsayed",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/kariimellsayed",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kariimellsayed/",
  },
];
