import {IMemberPreview} from "./film-member-preview-interface";

export interface IMember extends IMemberPreview {

  get poster(): string;

  get country(): string;

  get information(): string;

  get birthday(): string;

  get roles(): string[];

}
