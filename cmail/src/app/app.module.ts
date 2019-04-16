import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomRouterModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
