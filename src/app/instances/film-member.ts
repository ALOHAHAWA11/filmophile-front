import {IMember} from "./interfaces/member-interface";

export class FilmMember implements IMember {
  constructor(private id?: number, private name?: string, private birthdate?: Date, private information?: string,
              private image?: string) {
  }
  getBirthdate(): Date {
    return this.birthdate!;
  }

  getId(): number {
    return this.id!;
  }

  getImage(): string {
    return this.image!;
  }

  getInformation(): string {
    return this.information!;
  }

  getName(): string {
    return this.name!;
  }

  setBirthdate(value: Date): void {
    this.birthdate = value
  }

  setId(value: number): void {
    this.id = value
  }

  setImage(value: string): void {
    this.image = value
  }

  setInformation(value: string): void {
    this.information = value
  }

  setName(value: string): void {
    this.name = value
  }


}
