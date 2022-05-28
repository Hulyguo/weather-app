import { Component, Input } from '@angular/core';
import { WeatherResponse } from '../../models/location';
import { calculateWindDirection } from '../../utils/wind-utils';

@Component({
  selector: 'city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent {
  @Input() weather!: WeatherResponse;
  windDirection!: string;
  center!: any;
  
  ngOnChanges() {
    this.windDirection = calculateWindDirection(this.weather.wind.deg);
    const { lat, lon } = this.weather.coord;
    this.center = new google.maps.LatLng(lat, lon);
  }
}
