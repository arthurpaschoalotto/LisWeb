import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

@Component({
  selector: 'app-abalateral',
  templateUrl: './abalateral.component.html',
  styleUrls: ['./abalateral.component.scss']
})
export class AbalateralComponent implements OnInit {

  isExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
