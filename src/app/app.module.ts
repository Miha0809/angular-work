import { SignUp } from './shared/models/sign-up.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routesComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployerNavigationComponent } from './components/employer/employer-navigation/employer-navigation.component';
import { ApplicantNavigationComponent } from './components/applicant/applicant-navigation/applicant-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantNavigationComponent,
    EmployerNavigationComponent,
    routesComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [SignUp],
  bootstrap: [AppComponent]
})
export class AppModule { }
