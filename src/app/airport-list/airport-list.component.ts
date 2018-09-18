import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';


@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {
  datalist = [];

  constructor(
    private ariportServ: AirportService
  ) {
    const a = this.ariportServ.getAirportList();
    a.subscribe((data: any[]) => {
      this.datalist = data
    })
  }

  ngOnInit() {

  }

}
