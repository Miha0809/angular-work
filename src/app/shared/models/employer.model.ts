import { Role } from "./role.model";
import { Vacancy } from "./vacancy.model";

export class Employer {
  id?: number;
  countJobs!: number;
  nameCompany!: string | null;
  fullName!: string | null;
  numberPhone!: string | null;
  email!: string;
  password!: string | null;
  description!: string | null;
  role!: Role | null;
  vacancies!: Vacancy[] | null;
}