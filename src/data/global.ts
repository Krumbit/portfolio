import { Project } from "types";

export const projects: Project[] = [
  {
    name: "Tasks",
    description:
      "A back-end heavy to-do list app built with NextJS and Supabase. Features authentication, task management, and more.",
    cover: "/static/projects/tasks.png",
    link: "https://github.com/Krumbit/tasks",
    github: true,
    tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Clerk"],
  },
  {
    name: "Zentic Network",
    description: "A fully-custom utility Discord bot for the Zentic Network community.",
    cover: "/static/projects/zenticBot.png",
    link: "https://www.zentic.cc/",
    tags: ["TypeScript", "Node.js", "Discord.js", "MongoDB"],
  },
  {
    name: "Tic-Tac-Toe Bot",
    description:
      "A simple Discord bot created for my AP Computer Science Principles final project that lets you play Tic-Tac-Toe with your friends.",
    cover: "/static/projects/tictactoe.png",
    link: "https://github.com/Krumbit/TicTacToeBot",
    github: true,
    tags: ["TypeScript", "Node.js", "Discord.js"],
  },
  {
    name: "Cookie Clicker Plugin",
    description:
      "A small project I did for fun and Java practice - my own version of the Cookie Clicker game but in Minecraft.",
    cover: "/static/projects/cookieClicker.png",
    link: "https://github.com/Krumbit/CookieClicker",
    github: true,
    tags: ["Java", "Bukkit", "Maven"],
  },
];
