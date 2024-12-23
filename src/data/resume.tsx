import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gavin Arori",
  initials: "GA",
  url: "https://github.com/arorigavin",
  location: "Kenya",
  locationLink: "https://www.google.com/maps/place/Kenya",
  description:
    "I'm a developer from Kenya passionate about building innovative and user-friendly applications. I enjoy learning new technologies and collaborating on impactful projects.",
  summary:
    "I graduated with a Bachelor of Business Information Technology from Dedan Kimathi University of Technology in 2024. Currently, I'm focused on enhancing my skills in modern frameworks like Next.js and building practical projects.",
  avatarUrl: "https://avatars.githubusercontent.com/u/99688077?v=4",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "SpringBoot",
    "TailwindCSS",
    "Astro",
    "Vite",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "HTML",
    "CSS",
    "Redux Toolkit",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arorigavin@gmail.com",
    tel: "+254 114898175",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/StarKnightt",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prasenjitnayak/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/StarKnight_12",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@Star_Knight12",
        icon: Icons.youtube,
        navbar: true,
      },
      buyMeACoffee: {
        name: "buyMeACoffee",
        url: "https://buymeacoffee.com/prasen",
        icon: Icons.buyMeACoffee,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:arorigavin@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Gigitise",
      href: "https://github.com/Gigitise",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "https://avatars.githubusercontent.com/u/139589381?s=200&v=4",
      start: "January 2024",
      end: "April 2024",
      description:[
        "Developed and maintained the frontend for the Freelancer product, enhancing user experience and interface responsiveness.",
        "Contributed to the Client and Landing Page products, ensuring high performance and consistency.",
        "Implemented performance optimization techniques, improving page load times by 20%.",
        "Collaborated with backend developers to integrate RESTful APIs, enhancing application functionality."
      ]
        
    },
    {
      company: "Adamur",
      badges: [],
      href: "https://www.adamur.io",
      location: "Remote",
      title: "Delegate Developer",
      logoUrl: "https://avatars.githubusercontent.com/u/178998573?s=200&v=4",
      start: "September 2024",
      end: "Present",
      description:[
        "Built responsive and scalable front-end interfaces with React to enhance user experience.",
        "Developed and deployed real-world projects using JavaScript, React, Prisma, Express, and PostgreSQL.",
        "Integrated and managed databases efficiently with Prisma.",
        "Implemented server-side logic and APIs using Express for seamless functionality."
      ]
    },
  ],
  education: [
    {
      school: "Dedan Kimathi University of Technology",
      href: "https://www.dkut.ac.ke/",
      degree: "Bachelor in science ",
      logoUrl: "https://www.dkut.ac.ke/images/logo.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Resume Builder",
      href: "https://resume-builder-ten-opal.vercel.app/",
      dates: "May 2023 - Sept 2023",
      active: true,
      description:
        "It was my final year [Project](https://github.com/StarKnightt/ResumeBuilder) in our college, It is a interactive and versatile Dynamic CV Builder, completely build from scratch with backend functionallity .",
      technologies: [
        "CSS",
        "javascript",
        "MongoDB",
        "Express.js",
        "HTML",
        "Regex",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://resume-builder-ten-opal.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/ResumeBuilder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "",
      video:
        "https://video.gumlet.io/6745e593080b60408ca085f7/6745e5e5080b60408ca08984/download.mp4",
    },
    {
      title: "Coffee-Website",
      href: "https://coffee-websitee.vercel.app/",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "A web app, with the futurisitc yet nostalgic design of a coffee shop, with a menu and blend of retro vibes.",
      technologies: [
        "React.js",
        "Git",
        "TailwindCSS",
        "Framer-motion",
        "React-icons",
        "React-router-dom",
      ],
      links: [
        {
          type: "Website",
          href: "https://coffee-websitee.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/Coffee-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://video.gumlet.io/6745e593080b60408ca085f7/6745ea2d080b60408ca0bc08/download.mp4",
    },
    {
      title: "GitHub Buddy Finder",
      href: "https://buddy-find.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "This innovative web application helps developers connect with like-minded individuals based on their GitHub activity and language preferences.",
      technologies: [
        "React.js",
        "Octokit",
        "Rest API",
        "TailwindCSS",
        "react-icons",
        "react-router-dom",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://buddy-find.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/Buddy-Finder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://video.gumlet.io/6745e593080b60408ca085f7/6745ec82c84c6b7e105c3ee5/download.mp4",
    },
    {
      title: "Solar System",
      href: "https://solarrsystem.vercel.app/",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "This project is a visually stunning and interactive web application that provides information about the solar system and it's planet with music.",
      technologies: [
        "React.js",
        "font-awesome",
        "react-icons",
        "react-dom",
        "CSS3",
        "Vite",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://solarrsystem.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://video.gumlet.io/6745e593080b60408ca085f7/6745ef75b79a267f99668bda/download.mp4",
    },
  ],
  hackathons: [
    {
       title: "Hello Tractor E-commerce Hackathon 🌾",
    dates: "November 20th - 22nd, 2024",
    location: "Virtual - Africa Focus",
    description: 
      "Participated in the Hello Tractor E-commerce Hackathon aimed at building a secondary marketplace platform for buying and selling second-hand tractors, agri-implements, and connecting with trained tractor operators. Implemented key features including user registration, tractor listings, advanced filters, messaging system, seller dashboard, and admin panel.",
    image: "https://hellotractor.com/wp-content/uploads/2021/07/logo_medium.png",
    mlh: "https://github.com/Hello-Tractor-Community/ht-marketplace-hackathon-gavin-arori",
      links: [],
    }
  ],
  certificates: [
    {
      title: "Programming with JavaScript",
      provider: "Coursera",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLXiAUFRc5hMtcUuLk_bdIYZO3q_shTanAA&s",
      link: "https://coursera.org/share/24d832b3f40814d2c2fc90c5ed820515",
    },
    {
      title: "React Basics",
      provider: "Coursera",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLXiAUFRc5hMtcUuLk_bdIYZO3q_shTanAA&s",
      link: "https://coursera.org/share/13bace62b1054e22d6f46828a215c2d9",
    },
    {
      title: "Introduction to Front-End Developer",
      provider: "Coursera",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLXiAUFRc5hMtcUuLk_bdIYZO3q_shTanAA&s",
      link: "https://coursera.org/verify/N57Q84SHVJDW",
    },
    ,
    {
      title: "learn javascript and jquery from scratch",
      provider: "EDUONIX",
      logoUrl: "https://cdn.eduonix.com/assets/images/logo_sprite.png",
      link: "https://www.eduonix.com/certificate/7c683f09e7",
    },
    ,
    {
      title: "Introduction to CSS",
      provider: "Simplilearn",
      logoUrl: "https://www.simplilearn.com/ice9/new_logo.svgz",
      link: "https://simpli.app.link/nX4zreh9xrb",
    },
  ],
} as const;
