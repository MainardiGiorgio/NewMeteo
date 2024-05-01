import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor() { }
  public getCurrentWeather(city:string):Promise<any>{
    return fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid=6abda56703d30455542d7e49f3f3b385&units=metric&lang=it')
      .then(response => response.json())
      .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        return {
          temp: tempValue,
          name: nameValue,
          desc: descValue,
        };
      });
  };
}
