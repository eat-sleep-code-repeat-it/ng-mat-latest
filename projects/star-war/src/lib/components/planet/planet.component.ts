import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Planet } from '../../models/planet';
import { MatSort } from '@angular/material/sort';
import { SwapiService } from '../../services/swapi.service';


@Component({
  selector: 'lib-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'rotation_period', 'population', 'surface_water', 'terrain', 
    'orbital_period', 'gravity', 'climate',  'diameter',
    'created','edited' //, 'url', 'films', 'residents'
  ];
  dataSource: MatTableDataSource<Planet>;
  count = 0;
  next = '';
  prevous = '';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getPlanet().subscribe(result => {
      this.count = result.count;
      this.next = result.next;
      this.prevous = result.previous;
      this.dataSource = new MatTableDataSource<Planet>(result.results);
      this.dataSource.sort = this.sort;;
    });    
  }
}
