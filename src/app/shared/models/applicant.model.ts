import { Resume } from "./resume.model";
import { Role } from "./role.model";

export class Applicant {
  id?: number;
  fullName!: string;
  numberPhone!: string;
  email!: string;
  password!: string;
  role!: Role | null;
  resumes!: Resume[] | null;
}