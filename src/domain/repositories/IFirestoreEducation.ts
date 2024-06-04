import { EducationEntity } from "@domain/models/EducationEntity";

export interface IFirestoreEducation {
  get(): Promise<EducationEntity[]>;
}
