import { Component, OnInit } from '@angular/core';
import { ListaComidas } from 'src/app/mock/ListaComidas';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  listadeComidas = ListaComidas;

  ngOnInit(): void {
  }

}
