import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpEmployer } from 'src/app/shared/models/sign-up-employer.model';

@Component({
  selector: 'app-employer-sign-up',
  templateUrl: './employer-sign-up.component.html',
  styleUrls: ['./employer-sign-up.component.scss']
})
export class EmployerSignUpComponent implements OnInit {
  signUp!: SignUpEmployer;
  signUpForm!: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.signUp = new SignUpEmployer();
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
