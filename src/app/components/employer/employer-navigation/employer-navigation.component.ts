import { AuthorizationEmployerService } from './../../../shared/services/authorizationEmployer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-navigation',
  templateUrl: './employer-navigation.component.html',
  styleUrls: ['./employer-navigation.component.scss']
})
export class EmployerNavigationComponent implements OnInit {

  public get isLoggedIn() : boolean {
    return this.authorization.isAuthenticated();
  }

  constructor(private authorization: AuthorizationEmployerService) { }

  ngOnInit() {
  }

  logout() {
    this.authorization.logout();
  }
}
