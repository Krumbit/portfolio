import { NavLinkProps, NavbarElement } from "types";
import SubLink from "./SubLink";
import ThemeSwitcher from "./ThemeSwitcher";

interface SubLinksProps extends NavLinkProps {
  links: NavbarElement[];
}

export default function SubLinks({ links, scrollDuration }: SubLinksProps) {
  return (
    <ul className="mx-2 flex items-center text-xl text-invertbg max-md:hidden">
      {links.map((item, index) => {
        return <SubLink key={index} item={item} scrollDuration={scrollDuration} />;
      })}
      <li>
        <ThemeSwitcher />
      </li>
    </ul>
  );
}
