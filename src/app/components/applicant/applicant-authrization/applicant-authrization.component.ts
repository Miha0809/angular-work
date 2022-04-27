import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-applicant-authrization',
  templateUrl: './applicant-authrization.component.html',
  styleUrls: ['./applicant-authrization.component.scss']
})
export class ApplicantAuthrizationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      
    })
  }
}
