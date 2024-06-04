import { ExperienceEntity } from "@domain/models/ExperienceEntity";

export interface IFirestoreExperience {
  get(): Promise<ExperienceEntity[]>;
}
