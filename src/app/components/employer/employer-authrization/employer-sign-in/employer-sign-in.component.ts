import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignIn } from 'src/app/shared/models/sign-in.model';

@Component({
  selector: 'app-employer-sign-in',
  templateUrl: './employer-sign-in.component.html',
  styleUrls: ['./employer-sign-in.component.scss']
})
export class EmployerSignInComponent implements OnInit {
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
