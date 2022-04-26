import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly BASE_URL: string = "https://localhost:7161/api/city";

  constructor(private http: HttpClient) {
  }
  
  

}
