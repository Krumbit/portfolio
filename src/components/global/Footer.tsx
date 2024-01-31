import Image from "next/image";
import Link from "next/link";
import { ICONS, LINKS } from "util/constants";

/* eslint-disable react/jsx-no-comment-textnodes */
export default function Footer() {
  return (
    <div className="flex max-md:flex-col items-center justify-between mx-14 py-4 border-t border-primary-dark">
      <span className="text-comment text-lg max-lg:text-base italic mr-4 max-md:m-0 text-center">/* designed and created with ❤️ by Krumbit. all rights reserved. */</span>
      <SourceCodeButton />
    </div>
  );
}

function SourceCodeButton() {
  return (
    <Link className="w-fit max-md:w-full h-auto flex items-center justify-center gap-4 max-md:mt-4 px-4 py-2 bg-primary bg-opacity-5 transition-all duration-250 hover:bg-opacity-10 border-2 border-primary rounded-xl" href={LINKS.GitRepo}>
      <Image className="w-6 aspect-square dark:invert" src={ICONS.Github} alt="GitHub Icon" width={100} height={100} />
      <span className="text-lg max-lg:text-base text-center text-primary" >Source Code</span>
    </Link>
  );
}