import { SkillEntity } from "@domain/models/SkillEntity";
import { Punto } from "@components/utils";
import { EditableInput } from "@components/utils/EditableInput";

export function Skill({ content }: { content: SkillEntity }) {
  const FIELD_ITEM = "item";
  const collectionId = "skill";
  return (
    <div className="flex items-center gap-3">
      <Punto />
      <EditableInput
        className="w-full bg-transparent"
        collectionId={collectionId}
        defaultValue={content[FIELD_ITEM]}
        docId={content.idDoc}
        field={FIELD_ITEM}
        rows={1}
      />
    </div>
  );
}
