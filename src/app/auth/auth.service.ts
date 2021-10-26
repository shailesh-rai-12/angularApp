import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signup(email:string,password:string){
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFORCc4b0T7kNFJ_edjFNtmkX8RHzGR0s',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError( err =>{
          let errorMessage='An unknown error occurred';
          if(!err.error || !err.error.error)
          {
            return throwError(errorMessage)
          }
          switch(err.error.error.message){
            case 'EMAIL_EXISTS': errorMessage='The Email Already Exists!';
        }
        return throwError(errorMessage);
    })
    );
  }
}
