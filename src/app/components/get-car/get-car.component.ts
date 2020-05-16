import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';
import {Car} from '../../car';

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styleUrls: ['./get-car.component.css']
})
export class GetCarComponent implements OnInit {

  car: Car;
  carId = '';
  found = false;
  isError = false;

  constructor(private carService: CarService,
              private router: Router) {
  }


  ngOnInit(): void {
  }

  onFind() {
    const defaultValue = parseInt(this.carId, 10);

    this.carService.getCar(defaultValue)
      .subscribe(data => {
        console.log(data);
        this.car = data;
        this.isError = false;
      }, error => {
        console.log(error);
        this.isError = true;
        this.car = null;
      });
  }

  list() {
    this.router.navigate(['cars']);
  }
}
