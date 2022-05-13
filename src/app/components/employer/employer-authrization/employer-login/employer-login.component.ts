import { AuthorizationEmployerService } from 'src/app/shared/services/authorizationEmployer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/shared/models/login.model';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.scss']
})
export class EmployerLoginComponent implements OnInit, OnDestroy {
  login!: Login;
  formLogin!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private api: AuthorizationEmployerService) { }

  ngOnInit() {
    this.login = new Login();
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    this.subscriptions.push(
      this.api.login(this.login.email, this.login.password).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }
}
