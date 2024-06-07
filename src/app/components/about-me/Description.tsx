import { EditableInput } from "@components/utils/EditableInput";
import { FirestoreDescriptionRepository } from "@firebase/dao";

export const revalidate = 60;


export async function Description() {
  const firestoreDescription = new FirestoreDescriptionRepository();
  const description = await firestoreDescription.getById();

  return (
    <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-10">
      <div>
        <h1 className="text-4xl md:text-7xl">{description.lastname}</h1>
        <h1 className="text-5xl md:text-8xl font-bold">{description.name}</h1>
        <p className="md:text-3xl text-gray-500 pt-6">
          {description.profession}
        </p>
      </div>
      <h3 className="relative text-2xl font-semibold pb-4 pt-6 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
        Sobre mi
      </h3>
      <EditableInput
        field="description"
        defaultValue={description.description}
      />
    </section>
  );
}
