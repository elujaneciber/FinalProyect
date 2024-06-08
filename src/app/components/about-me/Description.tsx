import { EditableInput } from "@components/utils/EditableInput";
import { FirestoreDescriptionRepository } from "@firebase/dao";
import { FirestoreCollections } from "../../../utils/Constants";

export const revalidate = 0;

export async function Description() {
  const FIELD_PROFESSION = "profession";
  const FIELD_DESCRIPTION = "description";
  const docId = "j5U9zEIVZxOzIQaGZlYH";
  const collectionId = FirestoreCollections.DESCRIPTION;
  const firestoreDescription = new FirestoreDescriptionRepository();
  const description = await firestoreDescription.getById();

  return (
    <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-10">
      <div>
        <h1 className="text-4xl md:text-7xl">{description.lastname}</h1>
        <h1 className="text-5xl md:text-8xl font-bold">{description.name}</h1>
        <EditableInput
          className="md:text-3xl text-gray-500 pt-6 w-full"
          collectionId={collectionId}
          defaultValue={description[FIELD_PROFESSION]}
          docId={docId}
          field={FIELD_PROFESSION}
          rows={2}
        />
      </div>
      <h3 className="relative text-2xl font-semibold pb-4 pt-6 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
        Sobre mi
      </h3>
      <EditableInput
        className="text-gray-500 text-xl w-full"
        collectionId={collectionId}
        defaultValue={description[FIELD_DESCRIPTION]}
        docId={docId}
        field={FIELD_DESCRIPTION}
        rows={8}
      />
    </section>
  );
}
