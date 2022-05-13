import { Component, OnInit } from '@angular/core';
import { AuthorizationEmployerService } from 'src/app/shared/services/authorizationEmployer.service';

@Component({
  selector: 'app-applicant-navigation',
  templateUrl: './applicant-navigation.component.html',
  styleUrls: ['./applicant-navigation.component.scss']
})
export class ApplicantNavigationComponent implements OnInit {

  public get isLoggedIn() : boolean {
    return this.authorization.isAuthenticated();
  }

  // TODO: Applicant services
  constructor(private authorization: AuthorizationEmployerService) { }

  ngOnInit() {
  }

}
