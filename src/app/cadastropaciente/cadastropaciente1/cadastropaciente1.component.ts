import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Paciente } from '../../componentes/model/paciente.model';
import { PacienteService } from 'src/app/componentes/service/paciente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastropaciente1',
  templateUrl: './cadastropaciente1.component.html',
  styleUrls: ['./cadastropaciente1.component.scss']
})
export class Cadastropaciente1Component implements OnInit {
  @Input('paciente') paciente: Paciente;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
  ) {
    this.paciente = new Paciente({});
  }

  ngOnInit(): void {

  }
  public calculaIdade(): void{
    console.table(this.paciente);
    const tempo = moment(this.paciente.data_nascimento);
    const anos = moment().diff(tempo, 'years');
    tempo.add(anos,"years");
    const meses = moment().diff(tempo, 'month');
    tempo.add(meses,"month");
    const dias = moment().diff(tempo, 'days');
    this.paciente.idade_paciente = anos + ' anos, ' + meses + ' meses, ' + dias + ' dias.';
    console.log(this.paciente.idade_paciente);
  }

  createPaciente(): void {
    console.table(this.paciente)
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente criado com sucesso!');
     this.router.navigate(['/pacientes']);
    });
  }

  cancel(): void {
   this.router.navigate(['/pacientes']);
  }
}
