export const DISCORD_USER_ID = "379863241423192064" as const;

export const TIME_FORMAT_OPTIONS = {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
} as const satisfies Intl.DateTimeFormatOptions;

export const LINKS = {
  BaseURL: "https://www.krumb.it",
  Discord: `https://discordapp.com/users/${DISCORD_USER_ID}`,
  Email: "mailto:krumbit@krumb.it",
  Github: "https://github.com/Krumbit",
  GitRepo: "https://github.com/Krumbit/portfolio",
  Twitter: "https://twitter.com/krumbit",
  TwitterChels: "https://twitter.com/chelqea",
} as const;

export const ICONS = {
  Github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  X: "static/icons/X.svg",
  ExternalLink: "static/icons/ExternalLink.svg",
  Envelope: "static/icons/Envelope.svg",
} as const;
