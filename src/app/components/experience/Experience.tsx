import { EditableInput } from "@components/utils/EditableInput";
import { ExperienceEntity } from "@domain/models/ExperienceEntity";

export function Experience({ content }: { content: ExperienceEntity }) {
  const collectionId = "experience";
  const FIELD_DATE = "date";
  const FIELD_DESCRIPTION = "description";
  const FIELD_COMPANY = "company";
  const FIELD_POSITION = "position";

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
      <div className="text-gray-500 w-full md:w-[34%]">
        <EditableInput
          className="font-semibold text-gray-600 w-full bg-transparent"
          collectionId={collectionId}
          defaultValue={content[FIELD_COMPANY]}
          docId={content.idDoc}
          field={FIELD_COMPANY}
          rows={1}
        />
        <EditableInput
          className="w-full bg-transparent"
          collectionId={collectionId}
          defaultValue={content[FIELD_DATE]}
          docId={content.idDoc}
          field={FIELD_DATE}
          rows={3}
        />
      </div>
      <div className="w-full md:w-[66%]">
        <EditableInput
          className="font-semibold text-lg w-full bg-transparent"
          collectionId={collectionId}
          defaultValue={content[FIELD_POSITION]}
          docId={content.idDoc}
          field={FIELD_POSITION}
          rows={1}
        />
        <EditableInput
          className="text-gray-500 w-full bg-transparent"
          collectionId={collectionId}
          defaultValue={content[FIELD_DESCRIPTION]}
          docId={content.idDoc}
          field={FIELD_DESCRIPTION}
          rows={14}
        />
      </div>
    </div>
  );
}
