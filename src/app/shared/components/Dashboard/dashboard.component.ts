import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from 'src/app/core/services/api-weather.service';

import dashboard from '../../../data/dashboard.json';
import { City, WeatherResponse } from '../../models/location';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities!: City[];
  weather!: WeatherResponse[];
  
  constructor(private apiWeatherService: ApiWeatherService) {
    this.cities = dashboard;
  }

  ngOnInit(): void {
    this.weather = [];
    for (let city of this.cities) {
      const { lat, lon } = city.coord;
      this.apiWeatherService.getByCoordinates({lat, lon }).subscribe(res => {
        this.weather.push(res);
      });
    }
  }
}
