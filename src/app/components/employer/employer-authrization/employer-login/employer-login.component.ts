import { EmployerAuthorizeService } from './../../../../shared/services/employer/employer-authorize.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/shared/models/login.model';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.scss']
})
export class EmployerLoginComponent implements OnInit {
  login!: Login;
  formLogin!: FormGroup;

  constructor(private api: EmployerAuthorizeService) { }

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
