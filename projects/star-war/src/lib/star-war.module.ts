import { NgModule } from '@angular/core';
import { StarWarComponent } from './star-war.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetComponent } from './components/planet/planet.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { StarshipComponent } from './components/starship/starship.component';
import { SpeciesComponent } from './components/species/species.component';



@NgModule({
  declarations: [
    StarWarComponent,
    HomeComponent,
    FilmComponent,
    PeopleComponent,
    PlanetComponent,
    VehicleComponent,
    StarshipComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  exports: [StarWarComponent]
})
export class StarWarModule { }
