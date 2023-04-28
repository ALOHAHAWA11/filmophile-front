import {IGenre} from "./interfaces/genre-interface";

export class Genre implements IGenre{
  constructor(private id?: number, private name?: string) {
  }
  getId(): number {
    return this.id!;
  }

  getName(): string {
    return this.name!;
  }

  setName(value: string) {
    this.name = value
  }

  setId(value: number) {
    this.id = value
  }

}
