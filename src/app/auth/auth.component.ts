import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit , OnDestroy{

@ViewChild(PlaceholderDirective) alertHost!:PlaceholderDirective;
isLoginMode=true;
isLoading=false;
error:any=null;
private closeSub!:Subscription;
  constructor(private authService:AuthService,private router:Router,private componentResolver:ComponentFactoryResolver) { }

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
          // this.error=err;
          this.showErrorAlert(err);
          this.isLoading=false;
        });
   
    form.reset();

  }

  onHandleError()
  {
    this.error=null;
  }

  private showErrorAlert(error:string)
  {
    //const alertCmp = new AlertComponent();
    const alertCmpFActory=this.componentResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFActory);
    componentRef.instance.message=error;
    this.closeSub = componentRef.instance.close.subscribe(()=>
    {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
    })
  }

  ngOnDestroy()
  {
    if(this.closeSub)
    {
      this.closeSub.unsubscribe();
    }
  }

}
