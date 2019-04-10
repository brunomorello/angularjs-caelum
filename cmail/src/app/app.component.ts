import { Component } from '@angular/core';
import { Email } from './models/email';

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

  handleNewEmail(event: Event) {    
    event.preventDefault();
    this.emailList.push(this.email);
    this.email = new Email();
  }
}
