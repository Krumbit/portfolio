import Image from "next/image";
import Link from "next/link";
import { ICONS, LINKS } from "util/constants";

/* eslint-disable react/jsx-no-comment-textnodes */
export default function Footer() {
  return (
    <div className="mx-14 flex items-center justify-between border-t border-primary-dark py-4 max-md:flex-col">
      <span className="mr-4 text-center text-lg italic text-comment max-lg:text-base max-md:m-0">
        /* designed and created with ❤️ by Krumbit. all rights reserved. */
      </span>
      <SourceCodeButton />
    </div>
  );
}

function SourceCodeButton() {
  return (
    <Link
      className="flex h-auto w-fit items-center justify-center gap-4 rounded-xl border-2 border-primary bg-primary bg-opacity-5 px-4 py-2 transition-all duration-250 hover:bg-opacity-10 max-md:mt-4 max-md:w-full"
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
