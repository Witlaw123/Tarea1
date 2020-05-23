import { Component, OnInit } from '@angular/core';
import {Apartado2} from './apartado2'

@Component({
  selector: 'app-apartado2',
  templateUrl: './apartado2.component.html',
  styleUrls: ['./apartado2.component.css']
})
export class Apartado2Component implements OnInit {

  apartado2 : any=[
    new Apartado2 (1, 'Juanito'),
    new Apartado2 (2, 'Pepito'),
    new Apartado2 (3, 'Fulanito')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
