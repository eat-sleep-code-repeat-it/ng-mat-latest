import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGoogleData } from '../interfaces/i-google-data';

@Injectable({
  providedIn: 'root'
})
export class GoogleDataService {

  constructor(private httpClient: HttpClient) { }
  public getGoogleMapData(): Observable<IGoogleData> {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.httpClient.get<IGoogleData>('https:www.google.com/googleMapData', options);
  }
}
