export interface IFilmPreview {
  get primaryKey(): number;

  get nameFilm(): string;

  get annotation(): string;

  get country(): string;

  get poster(): string;
}
