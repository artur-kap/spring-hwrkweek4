import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FindCarComponent } from './components/find-car/find-car.component';
import { GetCarComponent } from './components/get-car/get-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarComponent,
    CarDetailsComponent,
    CarListComponent,
    UpdateCarComponent,
    FindCarComponent,
    GetCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
