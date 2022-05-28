import { Sys, Weather, WeatherDetails, Wind } from "./weather";

export interface City {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: Coordinates;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherResponse {
  base: string;
  cod: number;
  clouds: {
    all: number;
  },
  coord: Coordinates;
  dt: number;
  id: number;
  main: WeatherDetails;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  wind: Wind;
  weather: Weather[];
  rain?: {
    "1h": number;
  }
}