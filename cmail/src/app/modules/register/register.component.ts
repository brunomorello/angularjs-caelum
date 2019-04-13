import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { User } from "./../../models/dto/output/user";
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    'user_full_name': new FormControl('', [Validators.required, Validators.minLength(2)]),
    'user_username': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'user_password': new FormControl('', [Validators.required]),
    'user_avatar': new FormControl('', [Validators.required], this.validateAvatar.bind(this)),
    'user_phone_number': new FormControl('', [
      Validators.required, 
      Validators.pattern('[0-9]{4}-[0-9]{4}[0-9]?'),
      Validators.minLength(8),
      Validators.maxLength(10)
    ])
  });

  errorMessage = '';

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  handleRegisterUser() {

    if(this.registerForm.invalid) {
      this.validateFields(this.registerForm);
      return;
    }

    // 1st way to do
    for(let prop in this.registerForm.value) {
      console.log(`${prop}: ${this.registerForm.get(prop).value}`);
    }

    // 2nd way to do
    Object.keys(this.registerForm.value).forEach((prop) => {      
      console.log(`${prop} = ${this.registerForm.value[prop]} `);
    });

    console.log(this.registerForm);

    const data = new User(this.registerForm.value);

    console.log(`data ${JSON.stringify(data)}`);

    this.httpClient
      .post('http://localhost:3200/users', data)
      .subscribe(
        (response) => {
          console.log(`Register executed with success!`);
          console.log(response); 

          this.registerForm.reset();
          
          setTimeout(() => {
            this.router.navigate(['login', response['id']]);
          },1200);
        },
        (httpError: HttpErrorResponse) => {
          console.log(httpError);
          this.errorMessage = httpError.error.body;
        }
      )
  }

  validateFields(form: FormGroup) {

    for(let prop in form.value) {
      form.get(prop).markAsTouched();
    }

  }

  validateAvatar(field: FormControl) {

    return this.httpClient
      .head(field.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? console.log(response) : { invalidURL: true}
        }),
        catchError((error) => {
          return [{ invalidURL: true }]
        })
      )
  }

}
