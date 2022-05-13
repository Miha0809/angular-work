import { environment } from './../environments/environment.prod';
import { API_URL } from './app-injection-tokens';
import { ACCESS_TOKEN_KEY, AuthorizationEmployerService } from './shared/services/authorizationEmployer.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routesComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { EmployerNavigationComponent } from './components/employer/employer-navigation/employer-navigation.component';
import { ApplicantNavigationComponent } from './components/applicant/applicant-navigation/applicant-navigation.component';



export function tokenGetter() : string {
  return <string>localStorage.getItem(ACCESS_TOKEN_KEY);
}

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
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        disallowedRoutes: environment.tokenWhitelistedDomains
      }
    })
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api
    },
    AuthorizationEmployerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
