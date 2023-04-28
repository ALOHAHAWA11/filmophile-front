
export interface IMember  {
  getId(): number;
  getName(): string;

  getImage(): string;

  getInformation(): string;

  getBirthdate(): Date;

  setId(value: number): void;
  setName(value: string): void;

  setImage(value: string): void;

  setInformation(value: string): void;

  setBirthdate(value: Date): void;
}
