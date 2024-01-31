"use client";
import Image, { ImageProps } from "next/image";
import { ReactElement, useState } from "react";

interface PictureWithCreditProps extends ImageProps {
  credit: ReactElement;
  creditHref?: string;
}

export default function PictureWithCredit({ src, alt, width, height, credit, creditHref }: PictureWithCreditProps) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => { setClicked(!clicked); };

  return <div className="flex flex-row-reverse max-sm:flex-col max-sm:justify-center sm:items-end max-sm:items-center sm:align-bottom h-fit mx-14">
    <Image className={`rounded-full h-64 max-sm:h-52 w-auto cursor-pointer shadow-lg border-invertbg transition-all duration-250 ${clicked ? "border-opacity-100 border-4" : "border-opacity-0 border-2 hover:border-opacity-100"}`} src={src} alt={alt} width={width} height={height} onClick={handleClick}/>
    <a className={`flex flex-row items-center justify-center w-fit h-10 rounded-full px-4 my-4 bg-invertbg transition-all duration-250 ${clicked ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`} target="_blank" rel="noopener noreferrer" href={creditHref}>
      {credit}
    </a>
  </div>;
}