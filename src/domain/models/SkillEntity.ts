export class SkillEntity {
  readonly item: string;
  readonly order: number;

  constructor(data: SkillEntity) {
    this.item = data.item;
    this.order = data.order;
  }

  static create(data: SkillEntity): SkillEntity {
    return new SkillEntity(data);
  }
}
