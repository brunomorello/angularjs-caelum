import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './models/login/login.component';
import { RegisterComponent } from './models/register/register.component';
import { InboxComponent } from './models/inbox/inbox.component';
import { RoutingModule } from "./app.routes";
import { FormGroupComponent } from './components/form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    InboxComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
