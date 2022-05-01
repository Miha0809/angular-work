import { SignIn } from './../../../../shared/models/sign-in.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant-sign-in',
  templateUrl: './applicant-sign-in.component.html',
  styleUrls: ['./applicant-sign-in.component.scss']
})
export class ApplicantSignInComponent implements OnInit {
  signIn!: SignIn;
  formSignIn!: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.signIn = new SignIn();
    this.formSignIn = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    console.table(this.formSignIn);
    console.table(this.signIn);
  }
}
