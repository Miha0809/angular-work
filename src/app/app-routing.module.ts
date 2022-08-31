import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './components/applicant/applicant.component';
import { ApplicantAuthrizationComponent } from './components/applicant/applicant-authrization/applicant-authrization.component';

import { EmployerProfileComponent } from './components/employer/employer-profile/employer-profile.component';
import { EmployerComponent } from './components/employer/employer.component';
import { EmployerAuthrizationComponent } from './components/employer/employer-authrization/employer-authrization.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: ApplicantComponent},
  {path: "employer", component: EmployerComponent},
  {path: "employer/authorization", component: EmployerAuthrizationComponent},
  {path: "employer/profile", component: EmployerProfileComponent},

  {path: "authorization", component: ApplicantAuthrizationComponent},
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
  EmployerComponent,
  EmployerAuthrizationComponent,
  EmployerProfileComponent,
  PageNotFoundComponent
];
