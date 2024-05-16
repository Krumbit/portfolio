interface SectionProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={`flex min-h-[100lvh] flex-col justify-center ${className ?? ""}`}>
      {children}
    </section>
  );
}
