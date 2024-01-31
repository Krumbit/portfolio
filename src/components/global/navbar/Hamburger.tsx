interface HamburgerProps {
  openState: boolean;
  clickHandler: () => void;
}

export default function Hamburger({ openState: open, clickHandler: handleClick }: HamburgerProps) {
  return (
    <div id="hamburger" className={open ? "open" : ""} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}