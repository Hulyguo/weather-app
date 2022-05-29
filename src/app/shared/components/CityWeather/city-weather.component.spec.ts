import { TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { CityWeatherComponent } from './city-weather.component';

describe('CityWeatherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatCardModule
      ],
      declarations: [
        CityWeatherComponent
      ],
    });
  });

  it('should render the component', () => {
    const fixture = TestBed.createComponent(CityWeatherComponent);
    const cityWeather = fixture.componentInstance;
    expect(cityWeather).toBeTruthy();
  });
});
