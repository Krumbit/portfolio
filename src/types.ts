import { ImageProps } from "next/image";

export interface NavbarElement {
  name: string;
  target: string;
}

export interface Project {
  name: string;
  description: string;
  cover: ImageProps["src"];
  link?: string;
  github?: boolean;
}

export interface Skill {
  name: string;
  description: string;
  image: ImageProps["src"];
  lightThemeImage?: ImageProps["src"];
}

export interface Contact {
  name: string;
  link: string;
  image: ImageProps["src"];
}

export interface ClassNameProp {
  className?: string;
}

export interface NavLinkProps {
  scrollDuration: number;
}
