import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent}
];
