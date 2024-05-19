interface ShowMoreProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ShowMore({ open, setOpen }: ShowMoreProps) {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <button
      className="hoverbg mx-auto rounded-full border-2 border-invertbg px-8 py-4 text-xl"
      onClick={handleClick}
    >
      {open ? "show less" : "show more"}
    </button>
  );
}
