import {
  WeatherResponse
} from "src/app/shared/models/location";

export const mockWeatherResponse: WeatherResponse = {
  "coord": {
    "lon": 24.35,
    "lat": 55.7333
  },
  "weather": [
      {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 12.29,
    "feels_like": 11.25,
    "temp_min": 12.29,
    "temp_max": 12.29,
    "pressure": 1002,
    "humidity": 64,
    "sea_level": 1002,
    "grnd_level": 996
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.11,
    "deg": 245,
    "gust": 6.24
  },
  "clouds": {
    "all": 76
  },
  "dt": 1653747181,
  "sys": {
    "country": "LT",
    "sunrise": 1653702682,
    "sunset": 1653763721
  },
  "timezone": 10800,
  "id": 596128,
  "name": "Panevezys",
  "cod": 200
}
