import {IFilmPreview} from "./film-preview-interface";

export interface IFilmPost extends IFilmPreview {
  getGenres(): string[];

  getOriginalName(): string;

  getMembers(): string[];

}
