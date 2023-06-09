import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string, units: string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&appid=d1fffeb319c9633a9c8544d4499167f3');
  }
}
