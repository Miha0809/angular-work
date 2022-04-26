import { Vacancy } from "./vacancy.model";

export class Employer {
    id?: number;
    countJobs!: number;
    name!: string;
    description!: string;
    email!: string;
    numberPhone!: string;
    vacancies?: Vacancy[] | null;
}