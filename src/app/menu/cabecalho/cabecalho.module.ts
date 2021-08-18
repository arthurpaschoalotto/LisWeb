import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabecalhoRoutingModule } from './cabecalho-routing.module';
import { CabecalhoComponent } from './cabecalho.component';


@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    NgModule,
    CommonModule,
    CabecalhoRoutingModule
  ]
})
export class CabecalhoModule { }
