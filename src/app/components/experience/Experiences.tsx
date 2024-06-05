import { FirestoreExperienceRepository } from "@firebase/dao";
import { Experience } from "./Experience";

export async function Experiences() {
  const firestoreExperience = new FirestoreExperienceRepository();
  const experiences = await firestoreExperience.get();
  const sortExperiences = experiences.sort((a, b) => a.order - b.order);

  return (
    <section className="col-span-12 md:col-span-8 xl:col-span-9">
      <div className="bg-[#caccb65e] rounded-tl-3xl rounded-br-3xl p-8 pb-[5.5rem]">
        <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Experiencia
        </h3>
        {sortExperiences.map((content, index) => (
          <Experience key={index} content={content} />
        ))}
      </div>
    </section>
  );
}