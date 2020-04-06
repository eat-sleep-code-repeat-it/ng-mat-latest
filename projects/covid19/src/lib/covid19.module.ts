import { NgModule } from '@angular/core';
import { Covid19Component } from './covid19.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [Covid19Component],
  imports: [
    BrowserModule, 
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  exports: [Covid19Component]
})
export class Covid19Module { }
