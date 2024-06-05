import { DescriptionEntity } from "@domain/models/DescriptionEntity";

export interface IFirestoreDescription {
  get(): Promise<DescriptionEntity[]>;
}
