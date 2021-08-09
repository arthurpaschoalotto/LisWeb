import { CepService } from './cadastro-paciente-p2/cep/cep.service';
import { cadastropacienteComponent } from './cadastroPaciente-p1/cadastroPaciente-p1.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrospacientesComponent } from './cadastrospacientes/cadastrospacientes.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {NgxMaskModule} from'ngx-mask';
import { CadastroPacienteP2Component } from './cadastro-paciente-p2/cadastro-paciente-p2.component';
import { EnderecopacienteComponent } from './cadastro-paciente-p2/enderecopaciente/enderecopaciente.component';
import { ContatospacienteComponent } from './contatospaciente/contatospaciente.component';
import { AbalateralComponent } from './abalateral/abalateral.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    cadastropacienteComponent,
    CadastrospacientesComponent,
    CadastroPacienteP2Component,
    EnderecopacienteComponent,
    ContatospacienteComponent,
    AbalateralComponent,
    CabecalhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false //Para manter a mascara
    }),
    HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
