import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Starship } from '../../models/starship';

@Component({
  selector: 'lib-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  starShips: Starship[];
  count = 0;
  next = '';
  prevous = '';

  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getStarship().subscribe(resp => {
      if (!!resp) {
        this.starShips = resp.results;
        this.count = resp.count
        this.next = resp.next;
        this.prevous = resp.previous;
      }      
    });
  }

}
