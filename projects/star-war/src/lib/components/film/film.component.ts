import { Component, OnInit, ViewChild } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Starship } from '../../models/starship';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'lib-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  displayedColumns: string[] = [
    'episode_id', 'title', 'director', 'producer',  'release_date',
    'created','edited'
  ];
  dataSource: MatTableDataSource<Starship>;
  count = 0;
  next = '';
  prevous = '';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getFilms().subscribe(result => {
      this.count = result.count;
      this.next = result.next;
      this.prevous = result.previous;
      this.dataSource = new MatTableDataSource<Starship>(result.results);
      this.dataSource.sort = this.sort;;
    });    
  }
}
