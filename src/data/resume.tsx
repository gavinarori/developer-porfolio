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
  avatarUrl: "/Gavin.jpg",
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
    tel: "+91 6294925956",
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
        url: "mailto:prasenjitt4e@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Gigitise",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/atomic.png",
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
      href: "",
      location: "Remote",
      title: "Delegate Developer",
      logoUrl: "/shopify.svg",
      start: "September 2024",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Dedan Kimathi University of Technology",
      href: "",
      degree: "Bachelor in science ",
      logoUrl: "/buildspace.jpg",
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
      title: "Smart India Hackathon",
      dates: "March 23rd - 25th, 2022",
      location: "Bhubaneswar, India",
      description:
        "Developed a learing portal with some free education content with the best paid contents too, the project was called as 'EducationX'.",
      image:
        "https://i.ibb.co/QDssrSq/smart-india-hackathon.jpg",
      mlh: "https://github.com/Synchrotek/E-LearningX",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 19th - 23rd, 2023",
      location: "Bhubaneswar, India",
      description:
        "Developed A collaborative coding web platform that enables Multiuser collboration on a coding project in real-time with features of group chat, to-do lists.",
      image:
        "https://i.ibb.co/fM326Bv/logo.png",
      mlh: "https://nexuslink01v.netlify.app/",
      links: [],
    },
  ],
  certificates: [
    {
      title: "Programming with JavaScript",
      provider: "Coursera",
      link: "https://coursera.org/certificate/xyz",
    },
    {
      title: "React Basics",
      provider: "Coursera",
      link: "https://coursera.org/certificate/abc",
    },
    {
      title: "Introduction to Front-End Developer",
      provider: "Coursera",
      link: "https://coursera.org/certificate/def",
    },
  ],
} as const;
