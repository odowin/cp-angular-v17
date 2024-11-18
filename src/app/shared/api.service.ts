import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cupcake } from './cupcake.model';
import { Accessory } from './accessory.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private cupcakesUrl = 'http://localhost:4000/cupcakes';
  private accessoriesUrl = 'http://localhost:4000/accessories';

  constructor(private http: HttpClient) {}

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.cupcakesUrl);
  }

  getAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.accessoriesUrl);
  }  
}
