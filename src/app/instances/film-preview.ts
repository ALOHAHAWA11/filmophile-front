import {IFilmPreview} from "./interfaces/film-preview-interface";

export class FilmPreview implements IFilmPreview {

  constructor(private _primaryKey?: number, private _nameFilm?: string, private _annotation?: string,
              private _country?: string, private _poster?: string) {
  }
  public get primaryKey() : number {
    return this._primaryKey!;
  }

  public get nameFilm(): string {
    return this._nameFilm!;
  }

  public get annotation(): string {
    return this._annotation!;
  }

  public get country(): string {
    return this._country!;
  }

  public get poster(): string {
    return this._poster!;
  }

}
