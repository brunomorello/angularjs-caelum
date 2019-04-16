import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { CmailFormFieldDirective } from './form-group/cmail-form-field.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    CmailFormFieldDirective
  ]
})
export class SharedComponentsModule { }