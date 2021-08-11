import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfaceamentoRoutingModule } from './interfaceamento-routing.module';
import { InterfaceamentoComponent } from './interfaceamento.component';


@NgModule({
  declarations: [
    InterfaceamentoComponent
  ],
  imports: [
    CommonModule,
    InterfaceamentoRoutingModule,
    NgModule,
  ]
})
export class InterfaceamentoModule { }
