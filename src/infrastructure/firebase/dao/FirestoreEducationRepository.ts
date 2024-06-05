import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { EducationEntity } from "@domain/models/EducationEntity";
import { IFirestoreEducation } from "@domain/repositories/IFirestoreEducation";

export class FirestoreEducationRepository implements IFirestoreEducation {
  async get(): Promise<EducationEntity[]> {
    const ref = query(collection(db, "education"));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map((doc) => doc.data() as EducationEntity);
  }
}
