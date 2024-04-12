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
      className={`px-aut o hoverbg group flex h-32 flex-col items-center justify-center border-2 border-invertbg ${className}`}
      href={contact.link}
    >
      <div className="flex items-center gap-x-2">
        <Image
          className="aspect-square w-10 invert dark:invert-0"
          src={contact.image}
          alt={contact.name}
          width={100}
          height={100}
        />
        <span className="text-3xl max-md:text-2xl">{contact.name}</span>
      </div>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-250 ease-in-out group-hover:grid-rows-[1fr]">
        <span className="overflow-hidden text-gray-600 dark:text-gray-400">{contact.handle}</span>
      </div>
    </Link>
  );
}
