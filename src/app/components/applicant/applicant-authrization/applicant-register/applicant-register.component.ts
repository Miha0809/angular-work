import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Applicant } from 'src/app/shared/models/applicant.model';

@Component({
  selector: 'app-applicant-register',
  templateUrl: './applicant-register.component.html',
  styleUrls: ['./applicant-register.component.scss']
})
export class ApplicantRegisterComponent implements OnInit {
  register!: Applicant;
  formRegister!: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.register = new Applicant();
    this.formRegister = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {

  }
}