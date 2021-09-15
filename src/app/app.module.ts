import { TipoinstrumentoComponent } from './tipoinstrumento/tipoinstrumento.component';
import { ListainterfaceamentosComponent } from './cadastrointerfaceamento/listainterfaceamentos/listainterfaceamentos.component';
import { InterfaceamentoComponent } from './cadastrointerfaceamento/interfaceamento/interfaceamento.component';
import { MenuComponent } from './menu/menu.component';
import { AbalateralComponent } from './menu/abalateral/abalateral.component';
import { CabecalhoComponent } from './menu/cabecalho/cabecalho.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { cadastrointerfaceamento } from './cadastrointerfaceamento/cadastrointerfaceamento.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TreeControl } from '@angular/cdk/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app-routing.module';
import { SidebaradmComponent } from './sidebaradm/sidebaradm.component';
import { CadastropacienteComponent } from './cadastropaciente/cadastropaciente.component';
import { Cadastropaciente1Component } from './cadastropaciente/cadastropaciente1/cadastropaciente1.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { Cadastropaciente2Component } from './cadastropaciente/cadastropaciente2/cadastropaciente2.component';
import { EnderecopacienteComponent } from './cadastropaciente/cadastropaciente2/enderecopaciente/enderecopaciente.component'
import { HttpClientModule } from '@angular/common/http';
import { MY_DATE_FORMATS } from './formdata';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {MatTabsModule} from '@angular/material/tabs';
import { PlanosaudepacienteComponent } from './cadastropaciente/cadastropaciente2/planosaudepaciente/planosaudepaciente.component';
import { InfadcpacienteComponent } from './cadastropaciente/cadastropaciente2/infadcpaciente/infadcpaciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';

registerLocaleData(localePt, 'pt')

const appRoutes: Routes=[
  {path:'', component:MenuComponent},
  {path:'cadastrointerf', component:cadastrointerfaceamento},

];

@NgModule({
  declarations: [
    AbalateralComponent,
    CabecalhoComponent,
    AppComponent,
    InterfaceamentoComponent,
    ListainterfaceamentosComponent,
    cadastrointerfaceamento,
    TipoinstrumentoComponent,
    MenuComponent,
    SidebaradmComponent,
    CadastropacienteComponent,
    Cadastropaciente1Component,
    Cadastropaciente2Component,
    EnderecopacienteComponent,
    PlanosaudepacienteComponent,
    InfadcpacienteComponent,
    PacientesComponent
  ],
  imports: [
    MatTabsModule,
    MatMomentDateModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTreeModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatRadioModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),
    routing
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}},
    { provide: LOCALE_ID , useValue: 'pt'},
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS , useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
