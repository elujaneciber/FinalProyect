export class DescriptionEntity {
  readonly description: string;
  readonly lastname: string;
  readonly name: string;
  readonly profession: string;

  constructor(data: DescriptionEntity) {
    this.description = data.description;
    this.lastname = data.lastname;
    this.name = data.name;
    this.profession = data.profession;
  }

  static create(data: DescriptionEntity): DescriptionEntity {
    return new DescriptionEntity(data);
  }
}
