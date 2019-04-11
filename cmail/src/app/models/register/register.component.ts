import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    'user_full_name': new FormControl(),
    'user_username': new FormControl(),
    'user_password': new FormControl(),
    'user_avatar': new FormControl()
  });

  constructor() { }

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
}
