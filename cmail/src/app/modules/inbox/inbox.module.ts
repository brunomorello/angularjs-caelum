import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from "./inbox.component";
import { InboxRoutingModule } from './inbox-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    InboxComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    InboxRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ]
})
export class InboxModule { }
