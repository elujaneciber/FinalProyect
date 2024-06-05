import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { IFirestoreExperience } from "@domain/repositories";
import { ExperienceEntity } from "@domain/models/ExperienceEntity";

export class FirestoreExperienceRepository implements IFirestoreExperience {
  private readonly collection = "experience";

  async get(): Promise<ExperienceEntity[]> {
    const ref = query(collection(db, this.collection));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map((doc) => doc.data() as ExperienceEntity);
  }
}
