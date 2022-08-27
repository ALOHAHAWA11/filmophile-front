import {IMember} from "./interfaces/film-member-interface";
import {MemberPreview} from "./film-member-preview";

export class Member extends MemberPreview implements IMember {

  constructor(_primaryKey?: number, _nameMember?: string, private _poster?: string, private _country?: string,
              private _information?: string, private _birthday?: string, private _roles?: string[]) {
    super(_primaryKey, _nameMember);
  }

  get poster(): string {
    return this._poster!;
  }

  get country(): string {
    return this._country!;
  }

  get information(): string {
    return this._information!;
  }

  get birthday(): string {
    return this._birthday!;
  }

  get roles(): string[] {
    return this._roles!;
  }


}
