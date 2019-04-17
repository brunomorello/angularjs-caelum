import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    LoginRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
