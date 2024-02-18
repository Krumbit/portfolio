import Image from "next/image";
import Link from "next/link";
import { Contact } from "types";

interface ContactCardProps {
  contact: Contact;
  className?: string;
}

export default function ContactCard({ contact, className }: ContactCardProps) {
  return (
    <Link
      className={`px-auto hoverbg flex h-32 items-center justify-center gap-2 border-2 border-invertbg ${className}`}
      href={contact.link}
    >
      <Image
        className="aspect-square w-10 invert dark:invert-0"
        src={contact.image}
        alt={contact.name}
        width={100}
        height={100}
      />
      <span className="text-3xl max-md:text-2xl">{contact.name}</span>
    </Link>
  );
}
