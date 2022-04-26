import { Experience } from './enums/experience.enum';
import { TypeOfEmployments } from "./enums/type-of-employments.model.enum";
import { VacancyIsSuitableFor } from './enums/vacancy-is-suitable-for.enum';
import { Education } from './enums/education.enum';

import { Category } from './category.model';
import { City } from './city.model';
import { Salary } from './salary.model';

export class Vacancy {
    id?: number;
    name!: string;
    description!: string;
    categories!: Category[];
    typeOfEmployments!: TypeOfEmployments[];
    experiences!: Experience[];
    vacancyIsSuitableFors?: VacancyIsSuitableFor[] | null;
    city!: City;
    salary?: Salary | null;
    education!: Education;
}