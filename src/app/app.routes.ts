import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';
import { ThirdComponent } from './third/third.component';


export const routes: Routes = [

  { path: 'first', component: FirstComponent, },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'third/:id', component: ThirdComponent }
];
