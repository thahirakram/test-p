import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(
    private http: HttpClient
  ) { }

  getAirportList() {
    return this.http.get('http://localhost:4200/assets/airports.json');
  }
}
