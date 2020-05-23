import { Component, OnInit } from '@angular/core';
import {Apartado3} from './apartado3'


@Component({
  selector: 'app-apartado3',
  templateUrl: './apartado3.component.html',
  styleUrls: ['./apartado3.component.css']
})
export class Apartado3Component implements OnInit {

  apartado1 : any=[
    new Apartado3 (1, 'Juanito'),
    new Apartado3 (2, 'Pepito'),
    new Apartado3 (3, 'Fulanito')
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
