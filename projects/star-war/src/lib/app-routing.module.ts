import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { StarshipComponent } from './components/starship/starship.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpeciesComponent } from './components/species/species.component';

const routes: Routes = [
  { path: 'starwar',  component: HomeComponent,
    children: [
      { path: 'film', component: FilmComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'starship', component: StarshipComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'planet', component: PlanetComponent },
      { path: 'species', component: SpeciesComponent },
      { path: 'home', component: HomeComponent }
    ]
  }
];

/*
const routes: Routes = [
  { path: '', component: StarshipComponent},
  
  { path: 'starwar/film', component: FilmComponent },
  { path: 'starwar/vehicle', component: VehicleComponent },
  { path: 'starwar/starship', component: StarshipComponent },
  { path: 'starwar/people', component: PeopleComponent },
  { path: 'starwar/plannet', component: PlannetComponent },
  { path: 'starwar/species', component: SpeciesComponent },
  { path: 'starwar/home', component: HomeComponent }
];
*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
