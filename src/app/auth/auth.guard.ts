import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, 
                router: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean> {}
}