import { HTMLProps } from "react";

interface SectionTitlesProps extends HTMLProps<HTMLHeadingElement> {
  text: string;
}

function SectionTitle({ text, className, ...rest }: SectionTitlesProps) {
  return <h1 className={`md:text-8xl sm:text-7xl text-6xl text-primary ${className}`} {...rest}>{text}</h1>;
}

function SectionSubtitle({ text, className, ...rest }: SectionTitlesProps) {
  return <h2 className={`md:text-xl sm:text-lg text-invertbg text-opacity-60 ${className}`} {...rest}>{text}</h2>;
}

export { SectionTitle, SectionSubtitle };