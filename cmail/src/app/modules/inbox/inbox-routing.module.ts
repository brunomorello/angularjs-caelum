import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';

const inboxRouting: Routes = [
  {path: '', component: InboxComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(inboxRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class InboxRoutingModule { }
