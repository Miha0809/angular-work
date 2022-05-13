import { IUser } from './interfaces/iuser';

export class Applicant implements IUser {
  id!: number;
  fullName!: string;
  numberPhone!: string;
  email!: string;
  password!: string;
}