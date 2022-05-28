export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherDetails {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  sea_level: number;
  grnd_level: number;
}