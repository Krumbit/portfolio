"use client";
import Section from "components/global/Section";
import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ICONS, LINKS } from "data/constants";
import { extractTwitterUsername } from "util/helpers";
import PictureWithCredit from "./PictureWithCredit";

export default function About() {
  const [emoji, setEmoji] = useState("👋");
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setEmoji("👏");
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setEmoji("👋");
  };

  const handleMouseLeave = () => {
    setEmoji("👋");
    setIsClicked(false);
  };

  return (
    <Section id="about">
      <div className="mx-10 flex w-3/4 flex-col max-md:mx-8">
        <SectionTitle text="about me:" />
        <SectionSubtitle text="a little bit about myself" />
        <div className="my-10 text-3xl font-semilight leading-10 text-invertbg max-md:text-2xl max-sm:text-xl">
          Hey, I&apos;m Krumbit!{" "}
          <motion.div
            className="inline-block cursor-pointer"
            whileHover={!isClicked ? { rotate: [0, -10, 10, -10, 0], y: [-2, 2, -2, 2, -2] } : {}}
            animate={{ scale: emoji === "👏" ? 1.5 : 1 }}
            transition={{ scale: { duration: 0.1 }, default: { duration: 0.7 } }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {emoji}
          </motion.div>
          <br />
          I&apos;m a high school student with a passion for software development. Originally from
          Russia, my family moved to the United States when I was seven years old. Here, I became
          interested in programming and learning about the cool things you can do with code. You can
          find my skills, past projects, and methods to contact me on this portfolio!
        </div>
      </div>
      <PictureWithCredit
        src="/static/pfp.png"
        alt="Krumbit profile picture"
        height={256}
        width={256}
        credit={<IconCredit />}
        creditHref={LINKS.TwitterChels}
      />
    </Section>
  );
}

function IconCredit() {
  return (
    <>
      <span className="text-bg">
        icon by <strong>@{extractTwitterUsername(LINKS.TwitterChels)}</strong> on
      </span>
      <Image className="ml-2 dark:invert" src={ICONS.X} alt="X Logo" width={20} height={20} />
    </>
  );
}
