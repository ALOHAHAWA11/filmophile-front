import {IFilmPost} from "./interfaces/film-post-interface";

export class FilmPost implements IFilmPost {
  constructor(private id?: number, private name?: string, private poster?: string, private dateRelease?: Date,
              private annotation?: string, private originalName?: string, private members?: any, private genres?: any) {

  }

  public setId(value: number) {
    this.id = value
  }

  public setName(value: string) {
    this.name = value
  }

  public setPoster(value: string) {
    this.poster = value
  }

  public setDateRelease(value: Date) {
    this.dateRelease = value
  }

  public setAnnotation(value: string) {
    this.annotation = value
  }


  public setOriginalName(value: string) {
    this.originalName = value
  }


  public setMembers(value: any) {
    this.members = value
  }

  public setGenres(value: any) {
    this.genres = value
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

  public getMembers(): any {
    return this.members!;
  }

  public getOriginalName(): string {
    return this.originalName!;
  }

  public getAnnotation(): string {
    return this.annotation!;
  }


}
