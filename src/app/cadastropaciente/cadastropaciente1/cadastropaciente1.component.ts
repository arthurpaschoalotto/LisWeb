import { Component, OnInit } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export class Paciente{
  datanascimentopaciente: Date | null = null;
  idadepaciente: String | null = null;
}

@Component({
  selector: 'app-cadastropaciente1',
  templateUrl: './cadastropaciente1.component.html',
  styleUrls: ['./cadastropaciente1.component.scss']
})
export class Cadastropaciente1Component implements OnInit {

  paciente: Paciente = new Paciente();

  constructor() { }

  ngOnInit(): void {

  }
  public calculaIdade(): void{
    console.log(this.paciente.idadepaciente);
    const tempo = moment(this.paciente.datanascimentopaciente);
    const anos = moment().diff(tempo, 'years');
    tempo.add(anos,"years");
    const meses = moment().diff(tempo, 'month');
    tempo.add(meses,"month");
    const dias = moment().diff(tempo, 'days');
    this.paciente.idadepaciente = anos + ' anos, ' + meses + ' meses, ' + dias + ' dias.';
    console.log(this.paciente.idadepaciente);
  }
}
