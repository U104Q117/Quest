import { routes } from './../app.routes';
import { Component } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterOutlet, } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { FormsModule } from '@angular/forms';
import { ExampleService } from '../@service/example.service';

@Component({
  selector: 'app-third',
  imports: [FormsModule,
  ],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss'
})
export class ThirdComponent {
  question: string = '';
  constructor(
    private exampleService: ExampleService,
    private router: Router,

  ) {}
  ngOnInit(): void {

  }
}

