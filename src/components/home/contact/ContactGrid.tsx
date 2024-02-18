import { contacts } from "data/home";
import ContactCard from "./ContactCard";

export default function ContactGrid() {
  return (
    <div className="mt-8 grid w-3/4 max-w-screen-lg grid-cols-2 gap-4 max-md:grid-cols-1">
      <ContactCard contact={contacts[0]} className="rounded-tl-3xl max-md:rounded-t-3xl" />
      <ContactCard contact={contacts[1]} className="md:rounded-tr-3xl" />
      <ContactCard
        contact={contacts[2]}
        className="rounded-b-3xl max-md:rounded-b-3xl md:col-span-2"
      />
    </div>
  );
}
