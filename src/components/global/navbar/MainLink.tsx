import CurrentTime from "components/utility/CurrentTime";
import DiscordStatus from "components/utility/DiscordStatus";
import { Link as ScrollLink } from "react-scroll";
import { NavLinkProps } from "types";

export default function MainLink({ scrollDuration }: NavLinkProps) {
  return (
    <div className="flex flex-col h-full items-start justify-center mx-4">
      <h1 className="mt-4 text-3xl text-invertbg">
        <ScrollLink className="cursor-pointer" to="hero" spy={true} smooth={true} offset={0} duration={scrollDuration}>
          <div className="flex group">
            <span>krumb</span>
            <span className="group-hover:translate-x-1/2 transition-transform duration-250 ease-in-out">it</span>
            <span className="group-hover:-translate-x-2full z-10 transition-transform duration-250 ease-in-out" >.</span>
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