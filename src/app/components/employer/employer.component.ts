import { AuthorizationEmployerService } from 'src/app/shared/services/authorizationEmployer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {

  public get isLoggedIn() {
    return this.authorization.isAuthenticated();
  }

  constructor(private authorization: AuthorizationEmployerService) { }

  ngOnInit() {
  }
}
