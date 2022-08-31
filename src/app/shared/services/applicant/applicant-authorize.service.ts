import { Applicant } from 'src/app/shared/models/applicant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantAuthorizeService {
  constructor(private http: HttpClient) { }

	isLoggined() {
		return this.http.get(`${environment.api}/AuthenticationApplicant/is_loggined`);
	}

	register(applicant: Applicant) {
		return this.http.post(`${environment.api}/AuthenticationApplicant/register`, applicant);
	}

	login(login: Login) {
		return this.http.post(`${environment.api}/AuthenticationApplicant/login`, login);
	}

	logout() {
		return this.http.delete(`${environment.api}/AuthenticationApplicant/logout`);
	}
}
