import Image from "next/image";
import Link from "next/link";
import { ICONS, LINKS } from "data/constants";

export default function SourceCodeButton() {
  return (
    <Link
      className="flex h-auto w-fit items-center justify-center gap-4 rounded-xl border-2 border-primary bg-primary bg-opacity-5 px-4 py-2 transition-colors duration-250 hover:bg-opacity-15 max-md:mt-4 max-md:w-full"
      href={LINKS.GitRepo}
    >
      <Image
        className="aspect-square w-6 dark:invert"
        src={ICONS.Github}
        alt="GitHub Icon"
        width={100}
        height={100}
      />
      <span className="text-center text-lg text-primary max-lg:text-base">Source Code</span>
    </Link>
  );
}
