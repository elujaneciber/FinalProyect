import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { EducationEntity } from "@domain/models/EducationEntity";
import { IFirestoreEducation } from "@domain/repositories/IFirestoreEducation";
import { FirestoreCollections } from "../../../utils/Constants";

export class FirestoreEducationRepository implements IFirestoreEducation {
  private readonly collection = FirestoreCollections.EDUCATION;

  async get(): Promise<EducationEntity[]> {
    const ref = query(collection(db, this.collection));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map(
      (doc) => ({ ...doc.data(), idDoc: doc.id } as EducationEntity)
    );
  }
}
