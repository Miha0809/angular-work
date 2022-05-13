import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './components/applicant/applicant.component';
import { ApplicantAuthrizationComponent } from './components/applicant/applicant-authrization/applicant-authrization.component';
import { ApplicantLoginComponent } from './components/applicant/applicant-authrization/applicant-login/applicant-login.component';
import { ApplicantRegisterComponent } from './components/applicant/applicant-authrization/applicant-register/applicant-register.component';
import { EmployerProfileComponent } from './components/employer/employer-profile/employer-profile.component';

import { EmployerComponent } from './components/employer/employer.component';
import { EmployerAuthrizationComponent } from './components/employer/employer-authrization/employer-authrization.component';
import { EmployerLoginComponent } from './components/employer/employer-authrization/employer-login/employer-login.component';
import { EmployerRegisterComponent } from './components/employer/employer-authrization/employer-register/employer-register.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: ApplicantComponent},
  {path: "applicant-authorization", component: ApplicantAuthrizationComponent},
  // {path: "applicant-login", component: ApplicantLoginComponent},
  // {path: "applicant-register", component: ApplicantRegisterComponent},
  {path: "employer", component: EmployerComponent},
  {path: "employer-authorization", component: EmployerAuthrizationComponent},
  {path: "employer-profile", component: EmployerProfileComponent},
  // {path: "employer-login", component: EmployerLoginComponent},
  // {path: "employer-register", component: EmployerRegisterComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponents = [
  ApplicantComponent,
  ApplicantAuthrizationComponent,
  ApplicantLoginComponent,
  ApplicantRegisterComponent,
  EmployerComponent,
  EmployerAuthrizationComponent,
  EmployerProfileComponent,
  EmployerLoginComponent,
  EmployerRegisterComponent,
  PageNotFoundComponent
];
