import { AuthorizationEmployerService } from 'src/app/shared/services/authorizationEmployer.service';
import { Employer } from '../../../../shared/models/employer.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.scss']
})
export class EmployerRegisterComponent implements OnInit {
  register!: Employer;
  formRegister!: FormGroup;
  
  constructor(private api: AuthorizationEmployerService) { }

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
    this.api.register(this.register).subscribe();
  }
}
