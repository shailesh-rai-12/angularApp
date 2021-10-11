import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
  
  user:string='Shaktimaan';
  weather:string='Update status';
  getWeatherStatus(){
    let status:string[]=['Sunny','Rainy','Cloudy','Stormy'];
    this.weather=status[Math.floor(Math.random()*4)];
  }

}
