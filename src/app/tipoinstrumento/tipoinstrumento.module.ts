import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoinstrumentoRoutingModule } from './tipoinstrumento-routing.module';
import { TipoinstrumentoComponent } from './tipoinstrumento.component';


@NgModule({
  declarations: [
    TipoinstrumentoComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    TipoinstrumentoRoutingModule,
  ]
})
export class TipoinstrumentoModule { }
