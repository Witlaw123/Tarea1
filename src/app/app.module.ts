import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Apartado1Component } from './apartado1/apartado1.component';
import { Apartado2Component } from './apartado2/apartado2.component';
import { Apartado3Component } from './apartado3/apartado3.component';
import { Apartado4Component } from './apartado4/apartado4.component';

@NgModule({
  declarations: [
    AppComponent,
    Apartado1Component,
    Apartado2Component,
    Apartado3Component,
    Apartado4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
