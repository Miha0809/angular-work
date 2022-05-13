import { Login } from '../../../../shared/models/login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant-login',
  templateUrl: './applicant-login.component.html',
  styleUrls: ['./applicant-login.component.scss']
})
export class ApplicantLoginComponent implements OnInit {
  login!: Login;
  formLogin!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.login = new Login();
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    console.table(this.formLogin);
    console.table(this.login);
  }
}
