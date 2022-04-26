import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      
    })
  }

}
