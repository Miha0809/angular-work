import { VacancySuitable } from './vacancy-suitable.model';
import { Applicant } from "./applicant.model";
import { Category } from "./category.model";
import { City } from "./city.model";
import { Education } from "./Education.model";
import { Experience } from "./experience.model";
import { Salary } from "./salary.model";
import { TypeOfEmployments } from "./type-of-employments.model";

export class Resume {
  id?: number;
  applicant!: Applicant | null;
  category!: Category | null;
  city!: City | null;
  education!: Education | null;
  experience!: Experience | null;
  salary!: Salary | null;
  typeOfEmployments!: TypeOfEmployments | null;
  vacancySuitable!: VacancySuitable | null;
  dateTime!: string;
}