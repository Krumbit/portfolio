"use client";
import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import Image from "next/image";
import { ICONS, LINKS } from "util/constants";
import { extractTwitterUsername } from "util/helpers";
import PictureWithCredit from "../utility/PictureWithCredit";
import Section from "components/global/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about">
      <div className="mx-10 flex w-3/4 flex-col max-md:mx-8">
        <SectionTitle text="about me:" />
        <SectionSubtitle text="a little bit about myself" />
        <div className="my-10 text-3xl font-semilight leading-10 text-invertbg max-md:text-2xl max-sm:text-xl">
          Hey, I&apos;m Krumbit!{" "}
          <motion.div
            className="inline-block"
            whileHover={{ rotate: [0, -10, 10, -10, 0], y: [-2, 2, -2, 2, -2] }}
            transition={{ duration: 0.7 }}
          >
            👋
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
