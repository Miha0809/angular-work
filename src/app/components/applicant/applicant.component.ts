import { CityServicesService } from './../../shared/services/city-services.service';
import { City } from './../../shared/models/city.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {
  city!: City;
  cities: any = [];

  constructor(private api: CityServicesService) { }

  ngOnInit() {
    this.api.getCities().subscribe(data => {
      this.cities = data;

      for (let i = 0; i < 29694; i++)
      {
        if (this.cities[i].object_category == "Місто")
        {
          this.city = new City();
          this.city.name = this.cities[i].object_name;
          this.city.comment = null;
          console.table(this.city);
          // this.api.setCity(this.city);
        }
      }
    })
  }
}
