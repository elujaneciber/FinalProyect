import { SkillEntity } from "@domain/models/SkillEntity";
import { db } from "@firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { IFirestoreSkill } from "@domain/repositories/IFirestoreSkill";


export class FirestoreSkillsRepository implements IFirestoreSkill {
  async get(): Promise<SkillEntity[]> {
    const ref = query(collection(db, "experience"));
    const querySnapshot = await getDocs(ref);
    return querySnapshot.docs.map((doc) => doc.data() as SkillEntity);
  }
}
