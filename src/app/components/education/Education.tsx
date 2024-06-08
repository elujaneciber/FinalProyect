import { EditableInput } from "@components/utils/EditableInput";
import { EducationEntity } from "@domain/models/EducationEntity";
import { FirestoreCollections } from "../../../utils/Constants";

export function Education({ content }: { content: EducationEntity }) {
  const FIELD_NAME = "name";
  const FIELD_INSTITUTION = "institution";
  const FIELD_DATE = "date";
  const collectionId = FirestoreCollections.EDUCATION;
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
      <div className="text-gray-500 w-full md:w-[34%]">
        <EditableInput
          className="font-semibold text-gray-600 w-full bg-transparent"
          collectionId={collectionId}
          defaultValue={content[FIELD_INSTITUTION]}
          docId={content.idDoc}
          field={FIELD_INSTITUTION}
          rows={1}
        />
        <EditableInput
          className="w-full bg-transparent"
          collectionId={collectionId}
          defaultValue={content[FIELD_DATE]}
          docId={content.idDoc}
          field={FIELD_DATE}
          rows={1}
        />
      </div>
      <div className="w-full md:w-[66%]">
        <EditableInput
          className="font-semibold text-lg w-full bg-transparent"
          collectionId={collectionId}
          defaultValue={content[FIELD_NAME]}
          docId={content.idDoc}
          field={FIELD_NAME}
          rows={2}
        />
      </div>
    </div>
  );
}
