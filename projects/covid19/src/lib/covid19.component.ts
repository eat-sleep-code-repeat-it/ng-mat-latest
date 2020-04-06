import { Component, OnInit } from '@angular/core';
import { Covid19Service } from './covid19.service';

@Component({
  selector: 'lib-covid19',
  templateUrl: './covid19.component.html',
  styles: []
})
export class Covid19Component implements OnInit {
  confirmedView: any[] = [1200, 200];
  confirmedSeriesData: any[];
  confirmedColorScheme = {
    domain: ['#7aa3e5', '#a8385d', '#aae3f5']
  };

  deathView: any[] = [1200, 200];
  deathSeriesData: any[];
  deathColorScheme = {
    domain: ['#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  recoveredView: any[] = [1200, 200];
  recoveredSeriesData: any[];
  recoveredColorScheme = {
    domain: ['#5AA454','#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Cases';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor(private covidService: Covid19Service) {
    
  }

  ngOnInit(): void {
    this.covidService.getCovidConfirmedTimeSerie().subscribe(data => {
      this.confirmedSeriesData = data;
      Object.assign(this, { data });
    });

    this.covidService.getCovidDeathTimeSerie().subscribe(data => {
      this.deathSeriesData = data;
      Object.assign(this, { data });
    });

    this.covidService.getCovidRecoveredTimeSerie().subscribe(data => {
      this.recoveredSeriesData = data;
      Object.assign(this, { data });
    });    
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
