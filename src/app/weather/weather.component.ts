import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  theWeather: any;
  temp: number = 0;
  hum: number = 0;
  press: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = '';
  units: string = 'metric';
  formSubmitted = false;


  constructor(private wServe: WeatherService){}

  ngOnInit(): void{
    this.getWeather()
  }

  getWeather(){
    this.wServe.getWeather(this.city, this.units).subscribe({
      next: (res: any) => {
        console.log(res);
        this.theWeather = res;
        console.log(this.theWeather);
        this.temp = this.theWeather.main.temp;
        this.hum = this.theWeather.main.humidity;
        this.press = this.theWeather.main.pressure;
        this.summary = this.theWeather.weather[0].description;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.theWeather.weather[0].icon + '@2x.png';
        this.formSubmitted = true;

      },
  
      error: (error: any) => console.log(error.message),
      complete: () => console.info('Completed')
  
    });
  }


  radioUnitChange(){
    if (this.units == 'metric'){
      this.units = 'imperial';
    } else{
      this.units = 'metric';
    }
    this.getWeather();
  }


}

