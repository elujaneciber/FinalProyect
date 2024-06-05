import { FirestoreEducationRepository } from "@firebase/dao";
import { Education } from "./Education";

export async function Educations() {
  const firestoreEducation = new FirestoreEducationRepository();
  const education = await firestoreEducation.get();
  const sortEducations = education.sort((a, b) => a.order - b.order);

  return (
    <div className="bg-[#f2f0df] rounded-tl-3xl rounded-br-3xl p-8 pb-[2.25rem] mb-4">
      <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
        Educación
      </h3>
      {sortEducations.map((content, index) => (
        <Education key={index} content={content} />
      ))}
    </div>
  );
}
