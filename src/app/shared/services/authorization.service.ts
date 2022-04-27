import { SignUp } from '../models/sign-up.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private readonly BASE_URL: string = "";

  constructor(private http: HttpClient) { }

  setSignUp(signUp: SignUp) {
    return this.http.post(this.BASE_URL, signUp);
  }
}
