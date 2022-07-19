import { Component } from "@angular/core";
import { tick } from "@angular/core/testing";
import { NgForm } from "@angular/forms";
import { error } from "console";
import { authService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    

    constructor(private authService: authService){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm){
        if(!form.valid){
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.isLoading = true;

        if(this.isLoginMode){
            // ...
        }else {
            this.authService.SignUp(email, password).subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
            },errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            }
            );
        }
        form.reset();
    }
}
