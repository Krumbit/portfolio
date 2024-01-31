import Image from "next/image";
import Link from "next/link";
import { Contact } from "types";

interface ContactCardProps {
  contact: Contact;
  className?: string;
}

export default function ContactCard({ contact, className }: ContactCardProps) {
  return (
    <Link className={`h-32 flex items-center justify-center gap-2 border-2 border-invertbg px-auto hoverbg ${className}`} href={contact.link}>
      <Image className="w-10 aspect-square invert dark:invert-0" src={contact.image} alt={contact.name} width={100} height={100}/>
      <span className="text-3xl max-md:text-2xl">{contact.name}</span>
    </Link>
  );
}