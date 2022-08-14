import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { authService } from "./auth.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: authService){}
    canActivate(route: ActivatedRouteSnapshot, 
                router: RouterStateSnapshot
    ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authService.user.pipe(take(1),map(user => {
            const isAuth = !!user;
            if(isAuth){
                return true;
            }
            return this.router.createUrlTree(['/auth']); 
        }));
    }
}