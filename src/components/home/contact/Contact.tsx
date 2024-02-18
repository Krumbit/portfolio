import Section from "components/global/Section";
import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import ContactGrid from "./ContactGrid";

export default function Contact() {
  return (
    <Section id="contact" className="items-center">
      <SectionTitle text="contact:" />
      <SectionSubtitle className="my-4" text="get in touch with me" />
      <ContactGrid />
    </Section>
  );
}
