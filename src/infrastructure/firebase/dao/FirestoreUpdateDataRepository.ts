import { db } from "@firebase/config";
import { collection, doc, updateDoc } from "firebase/firestore";
import { IFirestoreUpdateData } from "@domain/repositories";

export class FirestoreUpdateDataRepository implements IFirestoreUpdateData {
  saveById(collectionId: string, docId: string, data: { [x: string]: string }) {
    const ref = doc(collection(db, collectionId), docId);
    updateDoc(ref, { ...data });
  }
}
