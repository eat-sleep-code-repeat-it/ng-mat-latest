import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {
  private csvUrl = 'assets/time_series_covid19_confirmed_global.csv';
  private csvData: any[] = [];
  private csvHeaders: string[] = [];
  constructor(private http: HttpClient) { }
  

  public readCsvData(): Observable<any[]> {
    return this.http.get(this.csvUrl, {responseType: 'text'})
    .pipe(
      map(data => {
        this.csvData = this.extractData(data);
        const json = this.getUSDataJson(this.csvData);
        return json;
      })
    );
  }
  private getUSDataJson(csvRecords: any[]){
    let UsJsonSerie = [];
    for(let i = 1; i < csvRecords.length; i++) {
      if (csvRecords[i][1] === 'US') {
        for(let j = 4; j < csvRecords[0].length; j++) {
          const keyValue = {};
          const column = csvRecords[0][j];
          keyValue[column] = parseInt( csvRecords[i][j], 10);
          UsJsonSerie.push(keyValue);
        }
        break;
      }
    }
    return UsJsonSerie;
  }

  private getHeaderArray(csvHeaderRow: string): string[] {  
    let headers = csvHeaderRow.split(',');
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
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

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
}
