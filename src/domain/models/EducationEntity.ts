export class EducationEntity {
  readonly institution: string;
  readonly date: string;
  readonly name: string;
  readonly order: number;

  constructor(data: EducationEntity) {
    this.institution = data.institution;
    this.date = data.date;
    this.name = data.name;
    this.order = data.order;
  }

  static create(data: EducationEntity): EducationEntity {
    return new EducationEntity(data);
  }
}
