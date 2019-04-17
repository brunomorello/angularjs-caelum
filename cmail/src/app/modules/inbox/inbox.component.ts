import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm, NgModel } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-inbox',
  templateUrl: './inbox.component.html',
  styles: [`
    ul {
      margin: 0;
      padding: 0;
      flex-grow: 1;
    }
  `]
})
export class InboxComponent implements OnInit {

  private _isNewEmailFormOpen = false;
  
  email = new Email({to: '', subject: '', content: '', creationDate: new Date()});
  //two types to declare an array of a specific object
  // TypeScript
  emailList: Email[] = [];
  // Java Style
  // emailList: Array<Email> = [];
  
  private _errorToRetrieveEmailListAPI = false;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.list()
      .subscribe(
        emailListAPI => {
          this.emailList = emailListAPI;
        },
        error => {
          this._errorToRetrieveEmailListAPI = true;
        }
      )
  }

  get errorToRetrieveEmails() {
    return this._errorToRetrieveEmailListAPI;
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
        email => {

          console.log(email);

          this.emailList.push(this.email);
          this.email = new Email(email);
          newMailForm.resetForm();
          this.toggleNewEmailFormOpen();
          
        }
      );
  }

}
