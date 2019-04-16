import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from "src/app/services/login.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  userId = '';
  password = '';
  errorMessage = '';

  constructor(private loginService: LoginService,
    private route: Router) { }

  ngOnInit() {
  }

  handleLogin(loginForm: NgForm) {

    if(!loginForm.valid) {

      console.log(loginForm);

      loginForm.control.get('userId').markAsTouched();
      loginForm.control.get('password').markAsTouched();
      return;
    }
    
    let data = {
      email: loginForm.value.userId,
      password: "123"
    }
    
      this.loginService.authenticate(data)
        .subscribe(
        (response: any) => {          
          console.log(response);
          this.route.navigate(['/inbox']);          
        },
        (httpError: HttpErrorResponse) => {
          console.log(httpError);
          this.errorMessage = httpError.error.message;
        }
      )

    //console.log(loginForm);
    
  }

}
