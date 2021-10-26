import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoginMode=true;
isLoading=false;
error:any=null;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return
    }

    this.isLoading=true;
    if(this.isLoginMode){
      //login
    }else{
      
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signup(email,password)
            .subscribe(responseData=>{
                console.log(responseData);
                this.isLoading=false;
                
            },err=>{
              console.log(err);
              
             
              this.isLoading=false;
              
            });
    }
   
    form.reset();

  }

}
