import { Component, OnInit } from '@angular/core';
import {Apartado4} from './apartado4'


@Component({
  selector: 'app-apartado4',
  templateUrl: './apartado4.component.html',
  styleUrls: ['./apartado4.component.css']
})
export class Apartado4Component implements OnInit {

  apartado4 : any=[
    new Apartado4 (1, 'Juanito'),
    new Apartado4 (2, 'Pepito'),
    new Apartado4 (3, 'Fulanito')
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
