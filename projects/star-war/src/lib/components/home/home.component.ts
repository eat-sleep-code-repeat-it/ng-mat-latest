import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'starwar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getEndpoints().subscribe(result =>{
      console.log(result);
    });
  }

}
