import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  city: any; 
  list: any;
  constructor (private weatherservice: WeatherServiceService){

  }
  getCurrentWeather(){
    this.weatherservice.getCurrentWeather(this.city)
      .then(data => {
        this.list = data;
      })
  }
}
