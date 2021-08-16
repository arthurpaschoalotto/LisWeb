import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']

})
export class MenuComponent implements OnInit {

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
