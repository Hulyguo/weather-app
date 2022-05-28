import { Component } from '@angular/core';
import { ApiWeatherService } from './core/services/api-weather.service';
import { CityWeatherComponent } from './shared/components/CityWeather/city-weather.component';
import { WeatherResponse } from './shared/models/location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiWeatherService, CityWeatherComponent]
})
export class AppComponent {
  weather!: WeatherResponse;

  handleSetWeather(weather: WeatherResponse) {
    this.weather = weather;
  }
}
