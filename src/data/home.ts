import { Contact, Project, Skill } from "types";
import { ICONS, LINKS } from "util/constants";

export const projects: Project[] = [
  {
    id: 0,
    name: "Zentic Network",
    description: "A fully-custom utility Discord bot for the Zentic Network community.",
    cover: "/static/projects/zenticBot.png",
    link: "https://www.zentic.cc/",
  },
  {
    id: 1,
    name: "Tic-Tac-Toe Bot",
    description:
      "A simple Discord bot created for my AP Computer Science Principles final project that lets you play Tic-Tac-Toe with your friends.",
    cover: "/static/projects/tictactoe.png",
    link: "https://github.com/Krumbit/TicTacToeBot",
    github: true,
  },
  {
    id: 2,
    name: "Cookie Clicker Plugin",
    description:
      "A small project I did for fun and Java practice - my own version of the Cookie Clicker game but in Minecraft.",
    cover: "/static/projects/cookieClicker.png",
    link: "https://github.com/Krumbit/CookieClicker",
    github: true,
  },
  // {
  //   id: 3,
  //   name: "My Portfolio",
  //   description: "The website you're looking at right now",
  //   cover: "/static/projects/portfolio.png"
  // }
];

export const skills: Skill[] = [
  {
    id: 0,
    name: "JavaScript",
    description:
      "A powerful scripting programming language primarily used for creating dynamic content on the web.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 1,
    name: "TypeScript",
    description:
      "A superset of JavaScript that adds static typing and other features to enhance code quality and maintainability.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 2,
    name: "NodeJS",
    description:
      "A server-side JavaScript runtime that allows building scalable network applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 3,
    name: "React",
    description:
      "A JavaScript library for building reactive user interfaces based on resuable components,",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Next.js",
    description:
      "A React framework for building server-side rendered and statically generated web applications.",
    image: "static/skills/nextjs.svg",
    lightThemeImage: "static/skills/nextjsLight.svg",
  },
  {
    id: 5,
    name: "C#",
    description:
      "A multi-paradigm programming language developed by Microsoft for building Windows applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    id: 6,
    name: "Java",
    description: "A versatile and widely-used object-oriented programming language.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: 7,
    name: "Python",
    description:
      "A powerful, high-level, general-purpose programming language known for its simplicity and readability.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: 8,
    name: "MongoDB",
    description: "A NoSQL database that uses a document-oriented model to store data.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 9,
    name: "MariaDB",
    description: "A fork of MySQL, a relational database management system.",
    image: "static/skills/mariadb.svg",
    lightThemeImage: "static/skills/mariadbLight.svg",
  },
  {
    id: 10,
    name: "Git",
    description:
      "A distributed version control system used for tracking changes in source code during software development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 11,
    name: "Docker",
    description: "A platform for developing, shipping, and running applications in containers.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export const contacts: Contact[] = [
  {
    name: "Discord",
    link: LINKS.Discord,
    image: "static/icons/Discord.svg",
  },
  {
    name: "Twitter",
    link: LINKS.Twitter,
    image: ICONS.X,
  },
  {
    name: "Email",
    link: LINKS.Email,
    image: ICONS.Envelope,
  },
];
