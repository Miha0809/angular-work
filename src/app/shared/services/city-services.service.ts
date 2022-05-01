import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityServicesService {
  private readonly BASE_URL: string = "https://localhost:7161/api/city";
  
  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get("https://raw.githubusercontent.com/Adushar/UkraineCitiesAndVillages/main/CitiesAndVillages%20-%2014%20March.json");
  }
}
