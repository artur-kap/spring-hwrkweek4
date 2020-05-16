import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateCarComponent} from './components/update-car/update-car.component';
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {CreateCarComponent} from './components/create-car/create-car.component';
import {CarListComponent} from './components/car-list/car-list.component';
import {FindCarComponent} from './components/find-car/find-car.component';
import {GetCarComponent} from './components/get-car/get-car.component';


const routes: Routes = [
  { path: '', redirectTo: 'car', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'add', component: CreateCarComponent },
  { path: 'update/:id', component: UpdateCarComponent },
  { path: 'details/:id', component: CarDetailsComponent },
  { path: 'find', component: FindCarComponent },
  { path: 'findid', component: GetCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
