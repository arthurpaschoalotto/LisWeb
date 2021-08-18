import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbalateralRoutingModule } from './abalateral-routing.module';
import { AbalateralComponent } from './abalateral.component';


@NgModule({
  declarations: [
    AbalateralComponent
  ],
  imports: [
    NgModule,
    CommonModule,
    AbalateralRoutingModule
  ]
})
export class AbalateralModule { }
