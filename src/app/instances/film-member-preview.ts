import {IMemberPreview} from "./interfaces/film-member-preview-interface";

export class MemberPreview implements IMemberPreview {
  constructor(private _primaryKey?: number, private _nameMember?: string) {
  }

  get primaryKey(): number {
    return  this._primaryKey!;
  }

  get nameMember(): string {
    return this._nameMember!;
  }
}
