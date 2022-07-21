import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

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
    constructor(private http: HttpClient){}

    SignUp(email: string, password: string){
        return this.http.post<AuthResponseData>('',{
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
            '',{
            email: email,
            password: password,
            returnSecureToken: true
            }
        )
            .pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An error occured';
            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                errorMessage = 'This email exist already';
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
}