"use client";
import Image, { ImageProps } from "next/image";
import { ReactElement, useState } from "react";

interface PictureWithCreditProps extends ImageProps {
  credit: ReactElement<any>;
  creditHref?: string;
}

export default function PictureWithCredit({
  src,
  alt,
  width,
  height,
  credit,
  creditHref,
}: PictureWithCreditProps) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="mx-14 flex h-fit flex-row-reverse max-sm:flex-col max-sm:items-center max-sm:justify-center sm:items-end sm:align-bottom">
      <Image
        className={`h-64 w-auto cursor-pointer rounded-full border-invertbg shadow-lg transition-all duration-250 max-sm:h-52 ${
          clicked
            ? "border-4 border-opacity-100"
            : "border-2 border-opacity-0 hover:border-opacity-100"
        }`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={handleClick}
      />
      <a
        className={`my-4 flex h-10 w-fit flex-row items-center justify-center rounded-full bg-invertbg px-4 transition-all duration-250 ${
          clicked ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
        }`}
        target="_blank"
        rel="noopener noreferrer"
        href={creditHref}
      >
        {credit}
      </a>
    </div>
  );
}
