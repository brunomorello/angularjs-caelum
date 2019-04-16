import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from "./inbox.component";
import { InboxRoutingModule } from './inbox-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
