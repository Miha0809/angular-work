import { EmployerAuthorizeService } from 'src/app/shared/services/employer/employer-authorize.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Employer } from 'src/app/shared/models/employer.model';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.scss']
})
export class EmployerRegisterComponent implements OnInit {
  register!: Employer;
  formRegister!: FormGroup;
  subscription!: Subscription;
  
  constructor(private api: EmployerAuthorizeService) { }

  ngOnInit() {
    this.register = new Employer();
    this.formRegister = new FormGroup({
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
    this.subscription = this.api.register(this.register).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
