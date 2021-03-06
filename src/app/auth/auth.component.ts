import { Component } from "@angular/core";
import { tick } from "@angular/core/testing";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { error } from "console";
import { Observable } from "rxjs";
import { AuthResponseData, authService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error = null;
    

    constructor(private authService: authService, private router: Router){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm){
        if(!form.valid){
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;

        if(this.isLoginMode){
            authObs = this.authService.login(email, password);  
        }else {
            authObs = this.authService.SignUp(email, password);
        }

authObs.subscribe(resData => {
    console.log(resData);
    this.isLoading = false;
    this.router.navigate(['/recipes']);
},errorMessage => {
    console.log(errorMessage);
    this.error = errorMessage;
    this.isLoading = false;
}
);

        form.reset();
    }
}
