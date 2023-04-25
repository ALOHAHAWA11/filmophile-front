import {IMemberPreview} from "./film-member-preview-interface";
import {FilmPreview} from "../film-preview";

export interface IMember extends IMemberPreview {

  getImage(): string;

  getInformation(): string;

  getBirthdate(): Date;

  getFilms(): FilmPreview;

}
