import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SwapiService } from '../../services/swapi.service';
import { Species } from '../../models/species';

@Component({
  selector: 'lib-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'classification', 'designation', 'average_height', 'skin_colors', 
    'eye_colors', 'hair_colors', 'average_lifespan',  'homeworld', 'language',
    'created','edited' //, 'url', 'films', 'people'
  ];

  dataSource: MatTableDataSource<Species>;
  count = 0;
  next = '';
  prevous = '';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getSpecies().subscribe(result => {
      this.count = result.count;
      this.next = result.next;
      this.prevous = result.previous;
      this.dataSource = new MatTableDataSource<Species>(result.results);
      this.dataSource.sort = this.sort;;
    });    
  }
}
