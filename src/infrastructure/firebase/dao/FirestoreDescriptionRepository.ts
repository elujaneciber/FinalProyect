import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { DescriptionEntity } from "@domain/models/DescriptionEntity";
import { IFirestoreDescription } from "@domain/repositories/IFirestoreDescription";

export class FirestoreDescriptionRepository implements IFirestoreDescription {
  async get(): Promise<DescriptionEntity[]> {
    const ref = query(collection(db, "experience"));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map((doc) => doc.data() as DescriptionEntity);
  }
}
