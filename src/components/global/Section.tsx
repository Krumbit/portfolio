interface SectionProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={`min-h-[100lvh] flex flex-col justify-center ${className}`}>
      {children}
    </section>
  );
}
