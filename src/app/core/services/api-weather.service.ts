import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Coordinates, WeatherResponse } from 'src/app/shared/models/location';
import { Observable, throwError } from 'rxjs';

import { API_ENDPOINT, API_KEY } from 'src/app/config/api';

@Injectable()
export class ApiWeatherService {
  constructor(private http: HttpClient) {}
    
  public getByCoordinates({ lat, lon }: Coordinates): Observable<WeatherResponse> {
    
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', API_KEY)
      .set('units', 'metric');

    return this.http.get<WeatherResponse>(API_ENDPOINT, { params });
  }
}
