import { DescriptionEntity } from "@domain/models/DescriptionEntity";

export interface IFirestoreDescription {
  getById(data: { [x: string]: string }): Promise<DescriptionEntity>;
}
