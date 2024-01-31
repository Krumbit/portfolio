import { navbarElements } from "data/global";
import SubLink from "./SubLink";
import { NavLinkProps } from "types";
import ThemeSwitcher from "./ThemeSwitcher";

export default function SubLinks({ scrollDuration }: NavLinkProps) {
  return (
    <ul className="max-md:hidden flex items-center text-invertbg text-xl mx-2">
      {navbarElements.map((item, index) => {
        return <SubLink key={index} item={item} scrollDuration={scrollDuration} />;
      })}
      <li>
        <ThemeSwitcher />
      </li>
    </ul>
  );
}