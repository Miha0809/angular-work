import { EmployerAuthorizeService } from 'src/app/shared/services/employer/employer-authorize.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.scss']
})
export class EmployerProfileComponent implements OnInit {
  constructor(private api: EmployerAuthorizeService) { }

  ngOnInit() {
    
  }
}
