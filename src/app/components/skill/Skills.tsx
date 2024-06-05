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

          <div className="flex items-center gap-3">
            <Punto />
            <span>Trabajo en equipo</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Mentalidad Lean</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Pensamiento abstracto</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Adaptabilidad</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-900 text-lg">
          <div className="flex items-center gap-3">
            <Punto />
            <span>Resolución de problemas</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Rápido aprendizaje</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Actitud competitiva</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Pensamiento pragmático</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Principios agiles</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-900 text-lg">
          <div className="flex items-center gap-3">
            <Punto />
            <span>Manejo de consolas de audio</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Operación de sistemas de luces</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Implementación de soluciones tecnológicas</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Programación front-end y back-end (en formación)</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-900 text-lg">
          <div className="flex items-center gap-3">
            <Punto />
            <span>Programación orientada a objetos (POO)</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>Java</span>
          </div>
          <div className="flex items-center gap-3">
            <Punto />
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
}
