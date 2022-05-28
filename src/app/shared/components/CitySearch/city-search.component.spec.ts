import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiWeatherService } from 'src/app/core/services/api-weather.service';
import { CitySearchComponent } from '../CitySearch/city-search.component';

import data from '../../../data/cities.json';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { City } from '../../models/location';

describe('CitySearchComponent', () => {
  const cities: City[] = data;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        RouterTestingModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatDividerModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      declarations: [
        CitySearchComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        ApiWeatherService
      ]
    });
  });

  it('should render the component', () => {
    const fixture = TestBed.createComponent(CitySearchComponent);
    const cityWeather = fixture.componentInstance;
    expect(cityWeather).toBeTruthy();
  });

  it('should show alert if preset not selected', () => {
    const fixture = TestBed.createComponent(CitySearchComponent);
    spyOn(window, 'alert');
    const setPresetButton = fixture.debugElement.query(
      debugEl => (debugEl.nativeElement as HTMLElement).innerHTML === 'Set preset'
    );
    
    setPresetButton.triggerEventHandler('click', null);
    expect(window.alert).toHaveBeenCalledOnceWith('Select a city');
  });
  
  it('should set component longitude and latitude on setPreset', async () => {
    const fixture = TestBed.createComponent(CitySearchComponent);
    fixture.componentInstance.selectedCity = cities[0];
    fixture.componentInstance.setPreset();

    expect(fixture.componentInstance.selectedCity).toBeDefined();
    expect(fixture.componentInstance.longitude).toBe(25.2798);
    expect(fixture.componentInstance.latitude).toBe(54.689159);
  });

  // I'm not sure how testing should be implemented correctly 
  // For inputs with 2 way binding in angular, was trying to write some event driven
  // Tests from the user perspective but to no avail :/
});
