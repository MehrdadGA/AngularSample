import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take, exhaustMap } from "rxjs/operators";
import { authService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authService: authService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.authService.user.subscribe();
        
    return this.authService.user.pipe(take(1), exhaustMap(user => {
        if(!user){
            return next.handle(req);
        }
        const modifiedreq = req.clone({params: new HttpParams().set('auth', user.token)}); 
        return next.handle(modifiedreq);
    }));
    }
}