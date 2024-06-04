import { Photo, Description } from "@components/about-me";
import { Experiences } from "@components/experience/Experiences";
import { ContactMe } from "@components/contact/ContactMe";
import { References } from "@components/reference/References";
import { Languages } from "@components/language/Languages";
import { Educations } from "@components/education/Educations";
import { Skills } from "@components/skill/Skills";

export default async function Page() {
  return (
    <article className="max-w-[1400px] mx-auto py-6">
      <div className="grid grid-cols-12 gap-4 mb-5">
        <Photo src="/emanuel.png" />
        <Description />
      </div>
      <div className="grid grid-cols-12 gap-4 mb-5">
        <section className="col-span-12 md:col-span-4 xl:col-span-3">
          <ContactMe />
          <References />
          <Languages />
        </section>
        <Experiences />
      </div>
      <Educations />
      <Skills />
    </article>
  );
}
