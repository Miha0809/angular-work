import { ApplicantNavigationComponent } from './components/applicant/applicant-navigation/applicant-navigation.component';
import { ApplicantLoginComponent } from './components/applicant/applicant-authrization/applicant-login/applicant-login.component';
import { ApplicantRegisterComponent } from './components/applicant/applicant-authrization/applicant-register/applicant-register.component';

import { EmployerNavigationComponent } from './components/employer/employer-navigation/employer-navigation.component';
import { EmployerLoginComponent } from './components/employer/employer-authrization/employer-login/employer-login.component';
import { EmployerRegisterComponent } from './components/employer/employer-authrization/employer-register/employer-register.component';
import { routesComponents } from './app-routing.module';


export const components: any[] = [
  routesComponents,
  ApplicantNavigationComponent,
  ApplicantLoginComponent,
  ApplicantRegisterComponent,
  EmployerNavigationComponent,
  EmployerLoginComponent,
  EmployerRegisterComponent,
]