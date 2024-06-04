import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { IFirestoreExperience } from "@domain/repositories";
import { EducationEntity } from "@domain/models/EducationEntity";

export class FirestoreEducationRepository implements IFirestoreExperience {
  async get(): Promise<EducationEntity[]> {
    const ref = query(collection(db, "education"));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map((doc) => doc.data() as EducationEntity);
  }
}
