import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { authService } from "./auth.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: authService){}
    canActivate(route: ActivatedRouteSnapshot, 
                router: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean> {
        return this.authService.user.pipe(map(user => {
            return !!user;
        }));
    }
}