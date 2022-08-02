import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, throwError } from 'rxjs';
import { user, user } from "./user.model";

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class authService{
    user = new BehaviorSubject<user>(null);


    constructor(private http: HttpClient){}

    SignUp(email: string, password: string){
        return this.http.post<AuthResponseData>('',{
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError), tap(resData) => {
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
              );
        });
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
            '',{
            email: email,
            password: password,
            returnSecureToken: true
            }
        )
        .pipe(
            catchError(this.handleError),
            tap(resData => {
              this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
              );
            })
          );
    }

    private handleAuthentication(
        email: string,
        userId: string,
        token: string,
        expiresIn: number
      ) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
      }
    

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An error occured';
            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                errorMessage = 'This email exist already';
                break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'this email does not exist';
                break;
                case 'INVALID_PASSWORD':
                    errorMessage = 'this password is not correct';
                break; 
            }
            return throwError(errorMessage);
        }
    }
