import { Component, EventEmitter, Output } from '@angular/core';
import { ApiWeatherService } from 'src/app/core/services/api-weather.service';
import { City, Coordinates, WeatherResponse } from '../../models/location';
import cities from '../../../data/cities.json';

@Component({
  selector: 'city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
  providers: []
})
export class CitySearchComponent {
  @Output() onCityFetched = new EventEmitter<WeatherResponse>();
  lastFetchedCoord: Coordinates | undefined;
  
  storedCities: City[] = [];
  selectedCity: City | undefined;
  latitude: number | undefined;
  longitude: number | undefined;

  constructor(private apiWeatherService: ApiWeatherService) {
    this.storedCities = cities;
  }

  setPreset() {
    if (this.selectedCity === undefined) return alert('Select a city');

    const { lat, lon } = this.selectedCity.coord;

    this.latitude = lat;
    this.longitude = lon;
  }
  fetchData() {
    if (!this.latitude || !this.longitude) return alert('Please select a city');

    this.apiWeatherService.getByCoordinates({lat: this.latitude, lon: this.longitude })
      .subscribe({
        next: res => this.onCityFetched.emit(res),
        error: () => alert('An error has occurred, please refresh the page'),
      });
  }
}
