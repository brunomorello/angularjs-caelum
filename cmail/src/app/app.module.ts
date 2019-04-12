import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './models/login/login.component';
import { RegisterComponent } from './models/register/register.component';
import { InboxComponent } from './models/inbox/inbox.component';
import { RoutingModule } from "./app.routes";
import { FormGroupComponent } from './components/form-group/form-group.component';
import { CmailFormFieldDirective } from './components/form-group/cmail-form-field.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    InboxComponent,
    FormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
