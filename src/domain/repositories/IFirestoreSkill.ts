import { SkillEntity } from "@domain/models/SkillEntity";

export interface IFirestoreSkill {
  get(): Promise<SkillEntity[]>;
}
