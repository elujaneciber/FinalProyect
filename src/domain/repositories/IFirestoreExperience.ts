import { ExperienceEntity } from "@domain/models/ExperienceEntity";

export interface IFirestoreExperience {
  getExperiences(): Promise<ExperienceEntity[]>;
}
