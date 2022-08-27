import {IFilmPreview} from "./film-preview-interface";
import {Member} from "../film-member";
import {MemberPreview} from "../film-member-preview";

export interface IFilmPost extends IFilmPreview {
  get genres(): string[];

  get dateRelease(): string;

  get originalName(): string;

  get actors(): MemberPreview[];

  get directors(): MemberPreview[];

  get operators(): MemberPreview[];

  get writers(): MemberPreview[];

  get producers(): MemberPreview[];
}
