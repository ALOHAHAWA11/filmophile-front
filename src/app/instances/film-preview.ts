import {IFilmPreview} from "./interfaces/film-preview-interface";

export class FilmPreview implements IFilmPreview {

  constructor(private id?: number, private name?: string, private poster?: string, private dateRelease?: Date) {
  }

  public getDateRelease(): Date {
    return this.dateRelease!;
  }

  public getId(): number {
    return this.id!;
  }

  public getName(): string {
    return this.name!;
  }

  public getPoster(): string {
    return this.poster!;
  }

}
