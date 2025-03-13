import { Contact, NavbarElement, Skill } from "types";
import { ICONS, LINKS } from "data/constants";

export const skills: Skill[] = [
  {
    name: "JavaScript",
    description:
      "Powerful scripting programming language primarily used for creating dynamic content on the web.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    description:
      "Superset of JavaScript that adds static typing and other features to enhance code quality and maintainability.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "NodeJS",
    description:
      "Server-side JavaScript runtime that allows building scalable network applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Bun",
    description: "JavaScript runtime with an emphasis on speed, utility, and DX.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
  },
  {
    name: "React",
    description:
      "JavaScript library for building reactive user interfaces based on resuable components.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    description:
      "React framework for building server-side rendered and statically generated web applications.",
    image: "static/skills/nextjs.svg",
    lightThemeImage: "static/skills/nextjsLight.svg",
  },
  {
    name: "TailwindCSS",
    description:
      "Utility-first CSS framework designed for rapid development and easy customization of modern web interfaces.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Python",
    description:
      "Powerful, high-level, general-purpose programming language known for its simplicity and readability.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    description: "A NoSQL database that uses a document-oriented model to store data.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    description:
      "Reliable, open-source RDBMS with SQL compliance, extensibility, and advanced features for data management.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    description:
      "Distributed version control system used for tracking changes in source code during software development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    description: "Platform for developing, shipping, and running applications in containers.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "TanStack Query",
    description:
      "FKA React Query, a powerful data fetching library, providing cache management and seamless state synchronization.",
    image: "static/skills/reactquery.svg",
  },
  {
    name: "discord.js",
    description:
      "JavaScript library for building Discord bots and applications, enabling interaction with the Discord API.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg",
  },
  {
    name: "MariaDB",
    description: "Fork of MySQL, a relational database management system.",
    image: "static/skills/mariadb.svg",
    lightThemeImage: "static/skills/mariadbLight.svg",
  },
  {
    name: "Java",
    description: "Versatile and widely-used object-oriented programming language.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C#",
    description:
      "Multi-paradigm programming language developed by Microsoft for building Windows applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Figma",
    description:
      "Collaborative design tool enabling teams to create, prototype, and iterate on digital interfaces in real-time.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

export const contacts: Contact[] = [
  {
    name: "Discord",
    link: LINKS.Discord,
    image: "static/icons/Discord.svg",
    handle: "@krumbit",
  },
  {
    link: LINKS.X,
    image: ICONS.X,
    handle: "@krumbit",
  },
  {
    name: "Email",
    link: `mailto:${LINKS.Email}`,
    image: ICONS.Envelope,
    handle: LINKS.Email,
  },
];

export const homeNavbarElements: NavbarElement[] = [
  {
    name: "about",
    target: "about",
    offsetDropdownScroll: true,
  },
  {
    name: "projects",
    target: "projects",
    offsetDropdownScroll: true,
  },
  {
    name: "skills",
    target: "skills",
    offsetDropdownScroll: true,
  },
  {
    name: "contact",
    target: "contact",
    offsetDropdownScroll: false,
  },
];
