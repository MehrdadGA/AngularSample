import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authService: authService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.authService.user.subscribe();
        return next.handle(req);
    }
}