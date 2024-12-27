import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { NavLinkProps } from "types";
import DiscordStatus from "./DiscordStatus";
import CurrentTime from "./CurrentTime";

interface MainLinkProps extends NavLinkProps {
  link: string;
  linksToSamePage: boolean;
}

export default function MainLink({ link, linksToSamePage, scrollDuration }: MainLinkProps) {
  return (
    <div className="mx-4 flex h-full flex-col items-start justify-center">
      <h1 className="mt-2 text-3xl text-invertbg">
        {linksToSamePage ? (
          <ScrollLink
            className="cursor-pointer"
            to={link}
            spy={true}
            smooth={true}
            offset={0}
            duration={scrollDuration}
          >
            <KrumbitSiteAnimation />
          </ScrollLink>
        ) : (
          <Link href={link}>
            <KrumbitSiteAnimation />
          </Link>
        )}
      </h1>
      <div className="flex items-center justify-center gap-2">
        <DiscordStatus />
        <CurrentTime />
      </div>
    </div>
  );
}

const KrumbitSiteAnimation = () => {
  return (
    <div className="group flex">
      <span>krumb</span>
      <span className="transition-transform duration-250 ease-in-out group-hover:translate-x-1/2">
        it
      </span>
      <span className="z-10 transition-transform duration-250 ease-in-out group-hover:-translate-x-2full">
        .
      </span>
    </div>
  );
};
