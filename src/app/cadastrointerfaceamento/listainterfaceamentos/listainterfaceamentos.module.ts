import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListainterfaceamentosRoutingModule } from './listainterfaceamentos-routing.module';
import { ListainterfaceamentosComponent } from './listainterfaceamentos.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListainterfaceamentosComponent,
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgModule,
    CommonModule,
    ListainterfaceamentosRoutingModule
  ]
})
export class ListainterfaceamentosModule { }
