import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoginMode=true;
isLoading=false;
error:any=null;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs:Observable<AuthResponseData>;
    this.isLoading=true;
    if(this.isLoginMode){
      //login
      authObs=this.authService.login(email,password);
                      
    }else{
     authObs= this.authService.signup(email,password)
            
    }

    authObs.subscribe(responseData=>{
      console.log(responseData);
      this.router.navigate(['recipes']);
      this.isLoading=false;
        },err=>{
          console.log(err);
          this.error=err;
          this.isLoading=false;
        });
   
    form.reset();

  }

}
