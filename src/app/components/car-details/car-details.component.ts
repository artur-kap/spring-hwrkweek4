import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../car';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.sass']
})
export class CarDetailsComponent implements OnInit {

  id: number;
  car: Car;

  constructor(private route: ActivatedRoute, private router: Router,
              private carService: CarService) {
  }

  ngOnInit(): void {
    this.car = new Car();

    this.id = this.route.snapshot.params.id;

    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data);
        this.car = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['cars']);
  }
}
