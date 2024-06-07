import { SkillEntity } from "@domain/models/SkillEntity";
import { Punto } from "@components/utils";

export function Skill({ content }: { content: SkillEntity }) {
  return (
    <div className="flex items-center gap-3">
      
      <span>{content.item}</span>
    </div>
  );
}
