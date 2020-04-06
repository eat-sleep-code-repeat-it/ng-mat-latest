import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { Covid19Component } from 'projects/covid19/src/public-api';


const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'starwar', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'covid19', component: Covid19Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
