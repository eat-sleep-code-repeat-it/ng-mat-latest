import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SwapiService } from '../../services/swapi.service';
import { Starship } from '../../models/starship';

@Component({
  selector: 'lib-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'model', 'manufacturer', 'cost_in_credits', 'length', 
    'max_atmosphering_speed', 'crew', 'passengers',  'cargo_capacity', 'consumables',
    'hyperdrive_rating','MGLT','starship_class',
    'created','edited' //, 'url', 'pilots', 'films'
  ];
  dataSource: MatTableDataSource<Starship>;
  count = 0;
  next = '';
  prevous = '';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getStarship().subscribe(result => {
      this.count = result.count;
      this.next = result.next;
      this.prevous = result.previous;
      this.dataSource = new MatTableDataSource<Starship>(result.results);
      this.dataSource.sort = this.sort;;
    });    
  }
}
