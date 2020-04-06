import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidTimeSeries, CovidDayValue } from './models/covid-time-series';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  private csvConfirmedUrl = 'assets/time_series_covid19_confirmed_global.csv';
  private csvDeathUrl = 'assets/time_series_covid19_deaths_global.csv';
  private csvRecovereddUrl = 'assets/time_series_covid19_recovered_global.csv';

  constructor(private http: HttpClient) { }

  public getCovidConfirmedTimeSerie(): Observable<CovidTimeSeries[]> {
    return this.http.get(this.csvConfirmedUrl, {responseType: 'text'})
    .pipe(
      map(data => {
        const csvData = this.extractData(data);
        return this.getUSCovidTimeSerie(csvData, 'Confirmed Cases USA');
      })
    );
  }

  public getCovidDeathTimeSerie(): Observable<CovidTimeSeries[]> {
    return this.http.get(this.csvDeathUrl, {responseType: 'text'})
    .pipe(
      map(data => {
        const csvData = this.extractData(data);
        return this.getUSCovidTimeSerie(csvData,'Death Cases USA');
      })
    );
  }

  public getCovidRecoveredTimeSerie(): Observable<CovidTimeSeries[]> {
    return this.http.get(this.csvRecovereddUrl, {responseType: 'text'})
    .pipe(
      map(data => {
        const csvData = this.extractData(data);
        return this.getUSCovidTimeSerie(csvData, 'Recovered Cases USA');
      })
    );
  }

  private getUSCovidTimeSerie(csvRecords: any[], lengend: string):  CovidTimeSeries[]{
    const series = [];
    let usCovidTimeSerie = new CovidTimeSeries();
    usCovidTimeSerie.name =  lengend;
    usCovidTimeSerie.series = [];
    for(let i = 1; i < csvRecords.length; i++) {
      if (csvRecords[i][1] === 'US') {
        for(let j = 4; j < csvRecords[0].length; j++) {
          const dayValue = new CovidDayValue();
          dayValue.name = csvRecords[0][j];
          dayValue.value = parseInt( csvRecords[i][j], 10);          
          usCovidTimeSerie.series.push(dayValue);
        }
        break;
      }
    }
    series.push(usCovidTimeSerie);
    return series;
  }
  private extractData(csvData: string): any[] {
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    return lines; //this.csvData = lines;
  }
}
