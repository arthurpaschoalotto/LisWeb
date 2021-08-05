import { cadastropacienteComponent } from './cadastroPaciente-p1/cadastroPaciente-p1.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrospacientesComponent } from './cadastrospacientes/cadastrospacientes.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {NgxMaskModule} from'ngx-mask';
import { CabecalhohomeComponent } from './cabecalhohome/cabecalhohome.component';
import { CadastroPacienteP2Component } from './cadastro-paciente-p2/cadastro-paciente-p2.component';
import { EnderecopacienteComponent } from './cadastro-paciente-p2/enderecopaciente/enderecopaciente.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    cadastropacienteComponent,
    CadastrospacientesComponent,
    CabecalhohomeComponent,
    CadastroPacienteP2Component,
    EnderecopacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false //Para manter a mascara
    }),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
