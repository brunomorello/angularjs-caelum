import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    'user-full-name': new FormControl(),
    'user-username': new FormControl(),
    'user-password': new FormControl(),
    'user-avatar': new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
