import { Subscription } from 'rxjs';
import { ApplicantAuthorizeService } from './../../../../shared/services/applicant/applicant-authorize.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Applicant } from 'src/app/shared/models/applicant.model';

@Component({
  selector: 'app-applicant-register',
  templateUrl: './applicant-register.component.html',
  styleUrls: ['./applicant-register.component.scss']
})
export class ApplicantRegisterComponent implements OnInit, OnDestroy {
  register!: Applicant;
  formRegister!: FormGroup;
  subscription!: Subscription;

  constructor(private api: ApplicantAuthorizeService) { }

  ngOnInit() {
    this.register = new Applicant();
    this.formRegister = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.subscription = this.api.register(this.register).subscribe(data => {
      console.table(data)
    },
    err => console.table(err));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}