import { EmployerAuthorizeService } from '../../../shared/services/employer/employer-authorize.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employer-navigation',
  templateUrl: './employer-navigation.component.html',
  styleUrls: ['./employer-navigation.component.scss']
})
export class EmployerNavigationComponent implements OnInit, OnDestroy {
  isLoggined!: Boolean;
  subscription!: Subscription;
  
  constructor(private api: EmployerAuthorizeService,
              private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.api.isLoggined().subscribe(data => {
      this.isLoggined = !data.toString();
    },
    err => console.table(err));
  }

  logout() {
    this.api.logout();
    this.router.navigate(["/"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
