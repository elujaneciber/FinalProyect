import { EducationEntity } from "@domain/models/EducationEntity";

export function Education({ content }: { content: EducationEntity }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
    <div className="text-gray-500 w-full md:w-[34%]">
      <p className="font-semibold text-gray-600">{content.institution}</p>
      <p>{content.date}</p>
    </div>
    <div className="w-full md:w-[66%]">
      <h4 className="font-semibold text-lg">{content.name}</h4>
    </div>
  </div>
  );
}
