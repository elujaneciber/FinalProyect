import { db } from "@firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { DescriptionEntity } from "@domain/models/DescriptionEntity";
import { IFirestoreDescription } from "@domain/repositories/IFirestoreDescription";

export class FirestoreDescriptionRepository implements IFirestoreDescription {
  private readonly collection = "description";
  private readonly descriptionId = "j5U9zEIVZxOzIQaGZlYH";

  async getById(): Promise<DescriptionEntity> {
    const ref = doc(db, this.collection, this.descriptionId);
    const docSnapshot = await getDoc(ref);
    return docSnapshot.data() as DescriptionEntity;
  }
}
