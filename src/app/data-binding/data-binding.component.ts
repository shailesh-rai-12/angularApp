import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  user:string='Shaktimaan';
  weather:string='Update status';
  status:boolean=Math.random()>0.5?true:false;
  input:string='Test';
  comments:string[]=['comment-1','comment-2','comment-3','comment-4']
  constructor() {
    // setTimeout(()=>{
    //   this.status=true;
    // },3000);

  }
  ngOnInit(): void {}
  
  clearInput(){
    this.input='';
  }
  
  getWeatherStatus(){
    this.weather=['Sunny','Rainy','Cloudy','Stormy'][Math.floor(Math.random()*4)];
  }

  commentPush(){
    this.comments.push(this.input);
  }
  // onKeyboardStroke(event:Event){
    
  //   this.input=(<HTMLInputElement>event.target).value;
  // }

}
