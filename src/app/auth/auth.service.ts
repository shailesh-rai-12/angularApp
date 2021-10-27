import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user = new BehaviorSubject<User>(null!);

  constructor(private http:HttpClient,private router:Router) { }

  signup(email:string,password:string)
  {
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFORCc4b0T7kNFJ_edjFNtmkX8RHzGR0s',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
          catchError(this.handleError),
          tap(resData=>
            {
              this.handleAuthentication
              (
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
              );
            })
          )

    //   catchError( err =>{
    //       let errorMessage='An unknown error occurred';
    //       if(!err.error || !err.error.error)
    //       {
    //         return throwError(errorMessage)
    //       }
    //       switch(err.error.error.message)
    //       {
    //         case 'EMAIL_EXISTS': errorMessage='The Email Already Exists!';
    //       }
    //     return throwError(errorMessage);
    // })
    //           );
  }

  login(email:string,password:string)
  {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFORCc4b0T7kNFJ_edjFNtmkX8RHzGR0s',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(this.handleError),
      tap(resData=>
        {
          this.handleAuthentication
              (
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
              );
        })
      );
  }

  logout()
  {

  }

  private handleAuthentication(email:string,userId:string,token:string,expiresIn:number)
  {
    const expirationDate =new Date(new Date().getTime()+ +expiresIn * 1000)
    const user = new User(email,userId,token,expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes:HttpErrorResponse){
    let errorMessage='An unknown error occurred';
          if(!errorRes.error || !errorRes.error.error)
          {
            return throwError(errorMessage)
          }
          switch(errorRes.error.error.message)
          {
            case 'EMAIL_EXISTS': errorMessage='The Email Already Exists!';
                                  break;
            case 'EMAIL_NOT_FOUND':errorMessage="Either Email or Password is Incorrect";
                                  break;
            case 'INVALID_PASSWORD':errorMessage="Either Email or Password is Incorrect";
                                  break;
          }
        return throwError(errorMessage);
  }
}
