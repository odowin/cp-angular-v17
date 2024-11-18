import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cupcake } from './cupcake.model'; // Modèle Cupcake

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4000/cupcakes'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les cupcakes
  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.apiUrl);
  }
}
