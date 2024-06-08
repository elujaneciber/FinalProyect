export class SkillEntity {
  readonly idDoc: string;
  readonly item: string;
  readonly order: number;

  constructor(data: SkillEntity) {
    this.idDoc = data.idDoc;
    this.item = data.item;
    this.order = data.order;
  }

  static create(data: SkillEntity): SkillEntity {
    return new SkillEntity(data);
  }
}
