import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { RoutingModule } from "./app.routes";
import { FormGroupComponent } from './components/form-group/form-group.component';
import { CmailFormFieldDirective } from './components/form-group/cmail-form-field.directive';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsComponent } from './components/shared-components/shared-components.component';

@NgModule({
  declarations: [
    AppComponent,    
    RegisterComponent,
    InboxComponent,    
    SharedComponentsComponent
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
