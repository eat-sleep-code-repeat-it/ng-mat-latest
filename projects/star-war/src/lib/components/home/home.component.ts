import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SwapiService } from '../../services/swapi.service';
import { IEndpoint } from '../../models/endpoint';


@Component({
  selector: 'starwar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  endPoints:IEndpoint;
  currentView = '';
  constructor(private router: Router, private swService: SwapiService) {
    router.events.subscribe(val => {
      if (location.pathname != '') {
        this.currentView = location.pathname;
      } else {
        this.currentView = '';
      }
    });
  }

  ngOnInit(): void {
    this.swService.getEndpoints().subscribe(result => this.endPoints= result );
  }

  navTo(toRoute: string){
    this.router.navigate([ toRoute ])
  }
}
