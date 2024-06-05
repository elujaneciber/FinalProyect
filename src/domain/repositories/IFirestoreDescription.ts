import { DescriptionEntity } from "@domain/models/DescriptionEntity";

export interface IFirestoreDescription {
  getById(): Promise<DescriptionEntity>;
}
