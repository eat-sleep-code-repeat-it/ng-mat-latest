import { Component, OnInit, ViewChild } from '@angular/core';
import { People } from '../../models/people';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'lib-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'gender', 'birth_year', 'height', 'mass', 
    'hair_color', 'skin_color',  'eye_color', 'created','edited',
    'homeworld'
  ];
  dataSource: MatTableDataSource<People>;
  count = 0;
  next = '';
  prevous = '';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getPeople().subscribe(result => {
      this.count = result.count;
      this.next = result.next;
      this.prevous = result.previous;
      this.dataSource = new MatTableDataSource<People>(result.results);
      this.dataSource.sort = this.sort;;
    });    
  }
}
