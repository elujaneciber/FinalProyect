import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { IFirestoreExperience } from "@domain/repositories";
import { ExperienceEntity } from "@domain/models/ExperienceEntity";
import { FirestoreCollections } from "../../../utils/Constants";

export class FirestoreExperienceRepository implements IFirestoreExperience {
  private readonly collection = FirestoreCollections.EXPERIENCE;

  async get(): Promise<ExperienceEntity[]> {
    const ref = query(collection(db, this.collection));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map(
      (doc) => ({ ...doc.data(), idDoc: doc.id } as ExperienceEntity)
    );
  }
}
