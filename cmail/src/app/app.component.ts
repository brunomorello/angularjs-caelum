import { Component } from '@angular/core';
import { Email } from './models/email';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmail';
  private _isNewEmailFormOpen = false;
  
  email = new Email();
  //two types to declare an array of a specific object
  // TypeScript
  emailList: Email[] = [];
  // Java Style
  // emailList: Array<Email> = [];

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailFormOpen() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(newMailForm: NgForm) { 
    
    if(newMailForm.invalid) return;

    this.emailList.push(this.email);
    this.email = new Email();
    newMailForm.resetForm();
    this.toggleNewEmailFormOpen();
  }

}
