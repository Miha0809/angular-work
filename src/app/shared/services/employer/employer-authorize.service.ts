import { Employer } from '../../models/employer.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/login.model';

@Injectable()
export class EmployerAuthorizeService {
	constructor(private http: HttpClient) { }

	isLoggined() {
		return this.http.get(`${environment.api}/AuthenticationEmployer/is_loggined`);
	}

	register(employer: Employer) {
		return this.http.post(`${environment.api}/AuthenticationEmployer/register`, employer);
	}

	login(login: Login) {
		return this.http.post(`${environment.api}/AuthenticationEmployer/login`, login);
	}

	logout() {
		return this.http.delete(`${environment.api}/AuthenticationEmployer/logout`);
	}
}
