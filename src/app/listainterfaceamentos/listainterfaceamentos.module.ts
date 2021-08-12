import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListainterfaceamentosRoutingModule } from './listainterfaceamentos-routing.module';
import { ListainterfaceamentosComponent } from './listainterfaceamentos.component';


@NgModule({
  declarations: [
    ListainterfaceamentosComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    ListainterfaceamentosRoutingModule
  ]
})
export class ListainterfaceamentosModule { }
