import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { City, Coordinates, WeatherResponse } from 'src/app/shared/models/location';
import { catchError, Observable, throwError } from 'rxjs';

import { API_ENDPOINT, API_KEY } from 'src/app/config/api';

@Injectable()
export class ApiWeatherService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
    
  public getByCoordinates({ lat, lon }: Coordinates): Observable<WeatherResponse> {
    
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', API_KEY)
      .set('units', 'metric');

    return this.http.get<WeatherResponse>(API_ENDPOINT, { params });
  }
}
