import {IFilmPost} from "./interfaces/film-post-interface";

export class FilmPost implements IFilmPost {
  constructor(private id?: number, private name?: string, private poster?: string, private dateRelease?: Date,
              private annotation?: string, private originalName?: string, private members?: string[], private genres?: string[]) {

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

  public getGenres(): string[] {
    return this.genres!;
  }

  public getMembers(): string[] {
    return this.members!;
  }

  public getOriginalName(): string {
    return this.originalName!;
  }

  public getAnnotation(): string {
    return this.annotation!;
  }


}
