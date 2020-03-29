import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PeopleResponse } from '../models/people';
import { IEndpoint } from '../models/endpoint';
import { FilmResponse } from '../models/film';
import { VehicleResponse } from '../models/vehicle';
import { SpeciesResponse } from '../models/species';
import { StarshipResponse } from '../models/starship';
import { PlanetResponse } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.co/api/';
  swapi = {
    "people": "https://swapi.co/api/people/", 
    "planets": "https://swapi.co/api/planets/", 
    "films": "https://swapi.co/api/films/", 
    "species": "https://swapi.co/api/species/", 
    "vehicles": "https://swapi.co/api/vehicles/", 
    "starships": "https://swapi.co/api/starships/"
  };
  // https://swapi.co/api/starships/?format=json
  public firstPage: string = '';
  public prevPage: string = '';
  public nextPage: string = '';
  public lastPage: string = '';
  constructor(private http: HttpClient) { }

  getEndpoints(): Observable<IEndpoint> {
    return this.http.get<IEndpoint>(this.apiUrl)
  }
  
  public getPeople(url?: string): Observable<PeopleResponse> {
    let params = new HttpParams().set('format', 'json');
    return this.http.get<PeopleResponse>(`${this.swapi.people}`, { params: params })
  }
  public getFilms(url?: string): Observable<FilmResponse> {
    let params = new HttpParams().set('format', 'json');
    return this.http.get<FilmResponse>(`${this.swapi.films}`, { params: params })
  }
  public getVehicle(url?: string): Observable<VehicleResponse> {
    let params = new HttpParams().set('format', 'json');
    return this.http.get<VehicleResponse>(`${this.swapi.vehicles}`, { params: params })
  }
  public getPlanet(url?: string): Observable<PlanetResponse> {
    let params = new HttpParams().set('format', 'json');
    return this.http.get<PlanetResponse>(`${this.swapi.planets}`, { params: params })
  }
  public getSpecies(url?: string): Observable<SpeciesResponse> {
    let params = new HttpParams().set('format', 'json');
    return this.http.get<SpeciesResponse>(`${this.swapi.species}`, { params: params })
  }
  public getStarship(url?: string): Observable<StarshipResponse> {
    console.log('this.swapi.starships', this.swapi.starships);
    let params = new HttpParams().set('format', 'json');
    return this.http.get<StarshipResponse>(`${this.swapi.starships}`, { params: params })
  }
}