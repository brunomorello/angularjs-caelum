import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm, NgModel } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-inbox',
  templateUrl: './inbox.component.html',
  styles: []
})
export class InboxComponent implements OnInit {

  private _isNewEmailFormOpen = false;
  
  email = new Email();
  //two types to declare an array of a specific object
  // TypeScript
  emailList: Email[] = [];
  // Java Style
  // emailList: Array<Email> = [];

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailFormOpen() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(newMailForm: NgForm) { 
    
    if(newMailForm.invalid) return;

    // send email using API
    this.emailService.send(this.email)
      .subscribe(
        (response) => {

          console.log(response);
          console.log(response.responseAPI.created_at);

          this.email.creation_date = response.responseAPI.created_at;

          this.emailList.push(this.email);
          this.email = new Email();
          newMailForm.resetForm();
          this.toggleNewEmailFormOpen();
          
        }
      );



  }

}
