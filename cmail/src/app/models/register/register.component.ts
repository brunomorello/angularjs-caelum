import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponseBase } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

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
