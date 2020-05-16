import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Car} from '../../car';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.sass']
})
export class FindCarComponent implements OnInit {
  constructor(private carService: CarService,
              private router: Router) {
  }
  filteredCars: Observable<Car[]>;
  found = false;
  carColor = '';

  ngOnInit(): void {
  }

  onFind() {
    this.filteredCars = this.carService.getCarsListByColor(this.carColor);
  }

  list(){
    this.router.navigate(['cars']);
  }
}
