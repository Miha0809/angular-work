import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-navigation',
  templateUrl: './applicant-navigation.component.html',
  styleUrls: ['./applicant-navigation.component.scss']
})
export class ApplicantNavigationComponent implements OnInit {
  // TODO: Applicant services
  constructor(private api: HttpClient) { }

  ngOnInit() {
  }

  logout() {
    
  }
}
