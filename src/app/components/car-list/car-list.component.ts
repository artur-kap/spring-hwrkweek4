import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../../car';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.sass']
})
export class CarListComponent implements OnInit {

  cars: Observable<Car[]>;

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.cars = this.carService.getCarsList();
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  carDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCar(id: number){
    this.router.navigate(['update', id]);
  }
}
