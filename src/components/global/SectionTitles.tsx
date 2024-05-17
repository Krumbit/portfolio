import { HTMLProps } from "react";

interface SectionTitlesProps extends HTMLProps<HTMLHeadingElement> {
  text: string;
}

function SectionTitle({ text, className, ...rest }: SectionTitlesProps) {
  return (
    <h1 className={`text-5xl text-primary sm:text-7xl md:text-8xl ${className}`} {...rest}>
      {text}
    </h1>
  );
}

function SectionSubtitle({ text, className, ...rest }: SectionTitlesProps) {
  return (
    <h2 className={`text-invertbg text-opacity-60 sm:text-lg md:text-xl ${className}`} {...rest}>
      {text}
    </h2>
  );
}

export { SectionTitle, SectionSubtitle };
