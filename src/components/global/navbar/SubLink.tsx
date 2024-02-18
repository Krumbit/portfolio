import { Link as ScrollLink } from "react-scroll";
import { NavLinkProps, NavbarElement } from "types";

interface SubLinkProps extends NavLinkProps {
  item: NavbarElement;
}

export default function SubLink({ item, scrollDuration }: SubLinkProps) {
  return (
    <li className="ulanim m-3 cursor-pointer">
      <ScrollLink to={item.target} smooth={true} offset={0} duration={scrollDuration}>
        {item.name}
      </ScrollLink>
    </li>
  );
}
