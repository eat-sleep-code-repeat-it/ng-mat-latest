import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PeopleResponse } from '../models/swapi-result';

const swapiEndpoints = {
    "people": "https://swapi.co/api/people/", 
    "planets": "https://swapi.co/api/planets/", 
    "films": "https://swapi.co/api/films/", 
    "species": "https://swapi.co/api/species/", 
    "vehicles": "https://swapi.co/api/vehicles/", 
    "starships": "https://swapi.co/api/starships/"
};

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.co/api/';
  public firstPage: string = '';
  public prevPage: string = '';
  public nextPage: string = '';
  public lastPage: string = '';
  constructor(private http: HttpClient) { }

  getEndpoints(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
  public getPeople(url?: string): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${this.apiUrl}/people/`);
  }

  public getPeoplePagination(url?: string){

    if(url){
      return this.http.get<PeopleResponse>(url,{ observe: 'response' })
      .pipe(
        tap(res => {
        this.retrieve_pagination_links(res);
      }));
    }

    return this.http.get<PeopleResponse>(`${this.apiUrl}/people/`, { observe: 'response' })
    .pipe(
      tap(res => {
        this.retrieve_pagination_links(res); 
      })
    );
  }

  public retrieve_pagination_links(response){
    const linkHeader = this.parse_link_header(response.headers.get('Link'));
    this.firstPage = linkHeader["first"];
    this.lastPage =  linkHeader["last"];
    this.prevPage =  linkHeader["prev"];
    this.nextPage =  linkHeader["next"];
  }
  parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    }); 
    return links;
  }
}
