interface ShowMoreProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ShowMore({ open, setOpen }: ShowMoreProps) {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <button className="mx-auto py-4 px-8 text-xl border-2 border-invertbg rounded-full hoverbg" onClick={handleClick}>{open ? "show less" : "show more"}</button>
  );
}