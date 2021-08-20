import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-abalateral',
  templateUrl: './abalateral.component.html',
  styleUrls: ['./abalateral.component.scss'],
  animations: [
    trigger('isExpanded',[
      state('true', style({
        'width': '40%',

      })),
      state('false', style({
        'width': '100%',

      })),
      transition('true <=> false', animate(300)),

    ])
  ]
})
export class AbalateralComponent implements OnInit {

  isExpanded: boolean = true;

  onAnimate(){
    this.isExpanded == true ? this.isExpanded = false : this.isExpanded = true;
    //this.isExpanded = !this.isExpanded
  }

  ngOnInit(): void {
  }


  constructor() {

  }

}
