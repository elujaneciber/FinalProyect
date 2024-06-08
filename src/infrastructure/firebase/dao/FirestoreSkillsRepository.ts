import { SkillEntity } from "@domain/models/SkillEntity";
import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { IFirestoreSkill } from "@domain/repositories/IFirestoreSkill";
import { FirestoreCollections } from "../../../utils/Constants";

export class FirestoreSkillsRepository implements IFirestoreSkill {
  private readonly collection = FirestoreCollections.SKILL;

  async get(): Promise<SkillEntity[]> {
    const ref = query(collection(db, this.collection));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map(
      (doc) => ({ ...doc.data(), idDoc: doc.id } as SkillEntity)
    );
  }
}
