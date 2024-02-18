import { navbarElements } from "data/global";
import SubLink from "./SubLink";
import { NavLinkProps } from "types";
import ThemeSwitcher from "./ThemeSwitcher";

export default function SubLinks({ scrollDuration }: NavLinkProps) {
  return (
    <ul className="mx-2 flex items-center text-xl text-invertbg max-md:hidden">
      {navbarElements.map((item, index) => {
        return <SubLink key={index} item={item} scrollDuration={scrollDuration} />;
      })}
      <li>
        <ThemeSwitcher />
      </li>
    </ul>
  );
}
