import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ClassNameProp } from "types";

export default function ThemeSwitcher({ className }: ClassNameProp) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();
  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Image
      className={mounted ? `hoverbg cursor-pointer rounded-full p-2 ${className}` : ""}
      src={!mounted ? getIcon(undefined) : getIcon(resolvedTheme)}
      width={50}
      height={50}
      alt="Dark mode switch"
      onClick={switchTheme}
    />
  );
}

function getIcon(theme?: string) {
  let icon;
  switch (theme) {
    case "dark":
      icon = "static/icons/Sun.svg";
      break;
    case "light":
      icon = "static/icons/Moon.svg";
      break;
    default:
      icon = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; // Transparent pixel
      break;
  }

  return icon;
}
