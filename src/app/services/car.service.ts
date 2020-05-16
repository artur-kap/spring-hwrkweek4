import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Car} from '../car';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(private http: HttpClient) {
  }

  getCar(id: number): Observable<any> {
    return this.http.get(`/cars/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createCar(car: Object): Observable<Object> {
    return this.http.post(`/cars`, car);
  }

  // tslint:disable-next-line:ban-types
  updateCar(id: number, value: any): Observable<Object> {
    return this.http.put(`/cars`, value);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`cars/${id}`, {responseType: 'text'})
      .pipe(
        tap(_ => console.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Car>('deleteCar')));
  }

  getCarsList(): Observable<any> {
    return this.http.get(`/cars`);
  }

  getCarsListByColor(color: string): Observable<any> {
    return this.http.get(`/cars/color/${color}`)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Car[]>('getCars', []))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
