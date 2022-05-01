import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpApplicant } from '../../../../shared/models/sign-up-applicant.model';

@Component({
  selector: 'app-applicant-sign-up',
  templateUrl: './applicant-sign-up.component.html',
  styleUrls: ['./applicant-sign-up.component.scss']
})
export class ApplicantSignUpComponent implements OnInit {
  signUp!: SignUpApplicant;
  signUpForm!: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.signUp = new SignUpApplicant();
    this.signUpForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {

  }
}