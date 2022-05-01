import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './components/applicant/applicant.component';
import { ApplicantAuthrizationComponent } from './components/applicant/applicant-authrization/applicant-authrization.component';
import { ApplicantSignInComponent } from './components/applicant/applicant-authrization/applicant-sign-in/applicant-sign-in.component';
import { ApplicantSignUpComponent } from './components/applicant/applicant-authrization/applicant-sign-up/applicant-sign-up.component';

import { EmployerComponent } from './components/employer/employer.component';
import { EmployerAuthrizationComponent } from './components/employer/employer-authrization/employer-authrization.component';
import { EmployerSignInComponent } from './components/employer/employer-authrization/employer-sign-in/employer-sign-in.component';
import { EmployerSignUpComponent } from './components/employer/employer-authrization/employer-sign-up/employer-sign-up.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: ApplicantComponent},
  {path: "applicant-authorization", component: ApplicantAuthrizationComponent},
  {path: "applicant-sign-in", component: ApplicantSignInComponent},
  {path: "applicant-sign-up", component: ApplicantSignUpComponent},
  {path: "employer", component: EmployerComponent},
  {path: "employer-authorization", component: EmployerAuthrizationComponent},
  {path: "employer-sign-in", component: EmployerSignInComponent},
  {path: "employer-sign-up", component: EmployerSignUpComponent},
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
  ApplicantSignInComponent,
  ApplicantSignUpComponent,
  EmployerComponent,
  EmployerAuthrizationComponent,
  EmployerSignInComponent,
  EmployerSignUpComponent,
  PageNotFoundComponent
];
