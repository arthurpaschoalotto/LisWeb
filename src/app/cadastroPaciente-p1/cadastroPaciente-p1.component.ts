import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';

export class Paciente{
  codigoinicial: number = 1000000;
  nomepaciente: String = "";
  datanascimentopaciente: Date | null = null;
  rgpaciente: number | null = null;
  cpfpaciente: number | null = null;
  sexopaciente: String = "";
  corpaciente: String = "";
  maepaciente: String = "";
  paipaciente: String = "";
  codigopaciente: number = this.codigoinicial + 1;
  dataatual = new Date();
  idadepaciente: String | null = null;
}

@Component({
    selector: 'app-cadastroPaciente-p1',
    templateUrl: './cadastroPaciente-p1.component.html',
    styleUrls: ['./cadastroPaciente-p1.component.scss']
})

export class cadastropacienteComponent {

  paciente: Paciente = new Paciente(); //chamou as variaveis

  @Output() aoSalvar = new EventEmitter<any>(); //Criar um evento


  onSubmit(f: NgForm){
    const valorSalvar =this.paciente; //atribui os valores input
    this.aoSalvar.emit(valorSalvar);
    this.codigopacientest();
    f.reset(); //reseta formulario
  }
  calculaIdade(){
    const tempo = moment(this.paciente.datanascimentopaciente);
    const anos = moment().diff(tempo, 'years');
    tempo.add(anos,"years");
    const meses = moment().diff(tempo, 'month');
    tempo.add(meses,"month");
    const dias = moment().diff(tempo, 'days');
    this.paciente.idadepaciente = anos + ' anos,' + meses + ' meses, ' + dias + ' dias.';

  }
  codigopacientest(){
    this.paciente.codigopaciente = this.paciente.codigopaciente + 1;
  }

  }
