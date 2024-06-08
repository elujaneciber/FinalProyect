export interface IFirestoreUpdateData {
  saveById(
    collectionId: string,
    docId: string,
    data: { [x: string]: string }
  ): void;
}
