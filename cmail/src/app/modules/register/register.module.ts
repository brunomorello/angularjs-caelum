import { NgModule } from '@angular/core';
import { RegisterComponent } from "./register.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { RegisterRoutingModule } from './register-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    RegisterRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: []
})
export class RegisterModule { }
