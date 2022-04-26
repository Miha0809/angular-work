import { SignUp } from '../../../shared/models/sign-up.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp!: SignUp;

  constructor() { }

  ngOnInit() {
    this.signUp = new SignUp();
  }

}
