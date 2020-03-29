import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SwapiService } from '../../services/swapi.service';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'lib-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'model', 'manufacturer', 'cost_in_credits', 'length', 
    'max_atmosphering_speed', 'crew', 'passengers',  'cargo_capacity', 'consumables',
    'vehicle_class',
    'created','edited' //, 'url', 'pilots', 'films'
  ];
  dataSource: MatTableDataSource<Vehicle>;
  count = 0;
  next = '';
  prevous = '';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private swService: SwapiService) { }

  ngOnInit(): void {
    this.swService.getVehicle().subscribe(result => {
      this.count = result.count;
      this.next = result.next;
      this.prevous = result.previous;
      this.dataSource = new MatTableDataSource<Vehicle>(result.results);
      this.dataSource.sort = this.sort;;
    });    
  }
}
