import { Component, OnInit } from '@angular/core';
import {Apartado1} from './apartado1'

@Component({
  selector: 'app-apartado1',
  templateUrl: './apartado1.component.html',
  styleUrls: ['./apartado1.component.css']
})
export class Apartado1Component implements OnInit {


  apartado1 : any=[
    new Apartado1 (1, 'Juanito'),
    new Apartado1 (2, 'Pepito'),
    new Apartado1 (3, 'Fulanito'),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
