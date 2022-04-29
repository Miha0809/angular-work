import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUp } from './../../../../shared/models/sign-up.model';

@Component({
  selector: 'app-applicant-sign-up',
  templateUrl: './applicant-sign-up.component.html',
  styleUrls: ['./applicant-sign-up.component.scss']
})
export class ApplicantSignUpComponent implements OnInit {
  signUp!: SignUp;
  signUpForm!: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.signUp = new SignUp();
    this.signUpForm = new FormGroup({
      nameCompany: new FormControl('', [Validators.required]),
      countJobs: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      numberPhone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {

  }
}