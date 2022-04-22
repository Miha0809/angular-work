import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './components/applicant/applicant.component';
import { EmployerComponent } from './components/employer/employer.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { SignInComponent } from './components/authorization/sign-in/sign-in.component';
import { SignUpComponent } from './components/authorization/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: ApplicantComponent},
  {path: "employer", component: EmployerComponent},
  {path: "authorization", component: AuthorizationComponent, children: [
    {path: "sign-in", component: SignInComponent},
    {path: "sign-up", component: SignUpComponent}
  ]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponents = [
  ApplicantComponent,
  EmployerComponent,
  AuthorizationComponent,
  SignInComponent,
  SignUpComponent,
  PageNotFoundComponent
];
