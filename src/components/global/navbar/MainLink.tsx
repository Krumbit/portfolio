import CurrentTime from "components/utility/CurrentTime";
import DiscordStatus from "components/utility/DiscordStatus";
import { Link as ScrollLink } from "react-scroll";
import { NavLinkProps } from "types";

export default function MainLink({ scrollDuration }: NavLinkProps) {
  return (
    <div className="mx-4 flex h-full flex-col items-start justify-center">
      <h1 className="mt-4 text-3xl text-invertbg">
        <ScrollLink
          className="cursor-pointer"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={scrollDuration}
        >
          <div className="group flex">
            <span>krumb</span>
            <span className="transition-transform duration-250 ease-in-out group-hover:translate-x-1/2">
              it
            </span>
            <span className="z-10 transition-transform duration-250 ease-in-out group-hover:-translate-x-2full">
              .
            </span>
          </div>
        </ScrollLink>
      </h1>
      <div className="flex items-center justify-center gap-2">
        <DiscordStatus />
        <CurrentTime />
      </div>
    </div>
  );
}
