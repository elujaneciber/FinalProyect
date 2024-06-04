export class ExperienceEntity {
  readonly company: string;
  readonly date: string;
  readonly description: string;
  readonly orden: number;
  readonly position: string;

  constructor(data: ExperienceEntity) {
    this.company = data.company;
    this.date = data.date;
    this.description = data.description;
    this.orden = data.orden;
    this.position = data.position;
  }

  static create(data: ExperienceEntity): ExperienceEntity {
    return new ExperienceEntity(data);
  }
}
