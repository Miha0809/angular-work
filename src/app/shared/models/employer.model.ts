import { IUser } from "./interfaces/iuser";
import { Vacancy } from "./vacancy.model";

export class Employer implements IUser {
    id!: number;
    countJobs!: number;
    nameCompany!: string;
    fullName!: string;
    numberPhone!: string;
    email!: string;
    password!: string;
    description!: string;
    vacancies?: Vacancy[] | null;
}