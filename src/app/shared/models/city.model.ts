import { Street } from "./street.model";

export class City {
  id?: number;
  name!: string;
  street!: Street | null;
}