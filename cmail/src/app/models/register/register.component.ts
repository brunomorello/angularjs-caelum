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

    let formValues = this.registerForm.value;

    console.log(`formValid? ${formValues.status}`);
    console.log(formValues); 

    console.log(`user_full_name ${formValues.user_full_name}`);
    console.log(`user_username ${formValues.user_username}`);
    console.log(`user_password ${formValues.user_password}`);
    console.log(`user_avatar ${formValues.user_avatar}`);
    console.log(this.registerForm);
    
  }

}
