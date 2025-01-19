import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface arrayAllPokemons {
  results: Array<any>
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private urlBase: string = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  constructor(private http: HttpClient) { }

  getAll(): Observable<arrayAllPokemons> {
    return this.http.get<arrayAllPokemons>(this.urlBase)
  }

}
