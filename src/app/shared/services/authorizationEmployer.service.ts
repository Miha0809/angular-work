import { Employer } from './../models/employer.model';
import { Router } from '@angular/router';
import { API_URL } from '../../app-injection-tokens';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Token } from '../models/token.model';
import { JwtHelperService } from '@auth0/angular-jwt';

export const ACCESS_TOKEN_KEY: string = "access_token";

@Injectable()
export class AuthorizationEmployerService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private api: string,
    private jwtHelper: JwtHelperService,
    private router: Router) { }

  employers() {
    console.log(`${this.api}/Employer`);
    return this.http.get(`${this.api}/Employer`);
  }

  register(register: Employer) {
    return this.http.post(`${this.api}/Employer`, register);
  }

  login(email: string, password: string) : Observable<Token> {
    return this.http.post<Token>(`${this.api}/AuthrizationEmployer/Login`, {
      email, password
    }).pipe(
      tap(token => {
        this.router.navigate(["employer"]);
        localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return <boolean>(token && !this.jwtHelper?.isTokenExpired(token));
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate([""]);
  }
}
