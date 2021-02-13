import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/ui/car/car.component';
import { VehicalDetailsComponent } from './components/vehical-details/vehical-details.component';
import { HeaderComponent } from './components/ui/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarComponent,
    VehicalDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
