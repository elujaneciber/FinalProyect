import { Punto } from "@components/utils";
import { FirestoreSkillsRepository } from "@firebase/dao";
import { Skill } from "./Skill";

export async function Skills() {
  const firestoreSkills = new FirestoreSkillsRepository();
  const skills = await firestoreSkills.get();
  const sortSkills = skills.sort((a, b) => a.order - b.order);

  return (
    <div className="bg-[#7c9a9262] rounded-tr-3xl rounded-bl-3xl p-8">
      <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
        Habilidades
      </h3>
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-16 mb-2">
        <div className="flex flex-col gap-2 text-gray-900 text-lg">
          {sortSkills.map((content, index) => (
            <Skill key={index} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
