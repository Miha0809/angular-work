import { AuthorizationEmployerService } from 'src/app/shared/services/authorizationEmployer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.scss']
})
export class EmployerProfileComponent implements OnInit {

  public get isLoggedIn() {
    return this.auth.isAuthenticated();
  }
  
  constructor(private auth: AuthorizationEmployerService) { }

  ngOnInit() {
  }

}
