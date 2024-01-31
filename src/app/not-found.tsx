import Section from "components/global/Section";
import { SectionSubtitle, SectionTitle } from "components/global/SectionTitles";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section id="404" className="flex items-center justify-center">
      <SectionTitle text="404" />
      <SectionSubtitle className="my-4" text="sorry, this page doesn't exist" />
      <Link
        className="rounded-full border-2 px-10 py-2 text-xl transition-colors duration-250 hover:bg-invertbg hover:text-bg"
        href="/"
      >
        return home
      </Link>
    </Section>
  );
}
