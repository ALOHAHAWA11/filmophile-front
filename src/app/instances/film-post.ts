import {IFilmPost} from "./interfaces/film-post-interface";
import {FilmPreview} from "./film-preview";
import {Member} from "./film-member";
import {MemberPreview} from "./film-member-preview";

export class FilmPost extends FilmPreview implements IFilmPost {
  constructor(primaryKey?: number, nameFilm?: string, annotation?: string,
              country?: string, poster?: string, private _originalName?: string, private _genres?: string[],
              private _actors?: MemberPreview[], private _directors?: MemberPreview[], private _operators?: MemberPreview[],
              private _writers?: MemberPreview[], private _producers?: MemberPreview[], private _dateRelease?: string) {
    super(primaryKey, nameFilm, annotation, country, poster);
  }

  get originalName(): string {
    return this._originalName!;
  }

  get genres(): string[] {
    return this._genres!;
  }

  get actors(): MemberPreview[] {
    return this._actors!;
  }

  get directors(): MemberPreview[] {
    return this._directors!;
  }

  get operators(): MemberPreview[] {
    return this._operators!;
  }

  get writers(): MemberPreview[] {
    return this._writers!;
  }

  get producers(): MemberPreview[] {
    return this._producers!;
  }

  get dateRelease(): string {
    return this._dateRelease!;
  }
}
