import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  userId = '';
  password = '';
  errorMessage = '';

  constructor(private activeRoute: ActivatedRoute, private httpClient: HttpClient,
    private route: Router) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap);

    this.userId = this.activeRoute.snapshot.paramMap.get('id');
    
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

    this.httpClient
      .post('http://localhost:3200/login', data)
      .subscribe(
        (response: any) => {
          
          console.log(response);
          localStorage.setItem("cmail-token", response.token)
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
