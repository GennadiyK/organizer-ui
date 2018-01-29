import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppHeaderComponent} from './shared/header/header.component';
import {AppMainNavComponent} from './shared/main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
