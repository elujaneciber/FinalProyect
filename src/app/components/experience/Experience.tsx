import { ExperienceEntity } from "@domain/models/ExperienceEntity";

export function Experience({ content }: { content: ExperienceEntity }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
      <div className="text-gray-500 w-full md:w-[34%]">
        <p className="font-semibold text-gray-600">{content.company}</p>
        <p>{content.date}</p>
      </div>
      <div className="w-full md:w-[66%]">
        <h4 className="font-semibold text-lg">{content.position}</h4>
        <p className="text-gray-500">{content.description}</p>
      </div>
    </div>
  );
}
