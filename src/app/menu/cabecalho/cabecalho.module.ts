import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabecalhoRoutingModule } from './cabecalho-routing.module';
import { CabecalhoComponent } from './cabecalho.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    NgModule,
    CommonModule,
    CabecalhoRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ]
})
export class CabecalhoModule { }
