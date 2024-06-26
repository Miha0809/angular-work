import { Category } from "./category.model";
import { City } from "./city.model";
import { Education } from "./Education.model";
import { Employer } from "./employer.model";
import { Experience } from "./experience.model";
import { Salary } from "./salary.model";
import { TypeOfEmployments } from "./type-of-employments.model";
import { VacancySuitable } from "./vacancy-suitable.model";

export class Vacancy {
  id?: number;
  title!: string;
  description!: string;
  employer!: Employer | null;
  category!: Category | null;
  typeOfEmployments!: TypeOfEmployments | null;
  experience!: Experience | null;
  vacancySuitable!: VacancySuitable | null;
  city!: City | null;
  salary!: Salary | null;
  education!: Education | null;
}