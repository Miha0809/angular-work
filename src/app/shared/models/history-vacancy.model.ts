import { Employer } from "./employer.model";
import { Vacancy } from "./vacancy.model";

export class HistoryVacancy {
  id?: number;
  employer!: Employer | null;
  vacancies!: Vacancy[] | null;
}