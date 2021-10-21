import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Paciente } from '../componentes/model/paciente.model';
import { PacienteService } from 'src/app/componentes/service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from "@angular/core";
import { NgForm } from '@angular/forms';
import 'moment/locale/pt-br';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';



@Component({
  selector: 'app-mostrarpaciente',
  templateUrl: './mostrarpaciente.component.html',
  styleUrls: ['./mostrarpaciente.component.scss']
})
export class MostrarpacienteComponent implements OnChanges {
  paciente: Paciente;
  id: number;
  @Input() pacienteInput: any;

  constructor(
    private router: Router, //router
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    ){
      this.paciente = new Paciente({}); //alternativa memory leak //Dont repeat yourself DRY

      this.id = this.route.snapshot.paramMap.get('id') as unknown as number;//abertura por id
      if (this.id > 0) {
        this.load(this.id); //id > 0 carrega o paciente
      }
    }


  ngOnChanges(): void {
    this.id = this.pacienteInput;
    if(this.id > 0){
      this.load(this.id);
    }
    console.log(this.id)
  }

  load(id: number): void { //Dont repeat yourself DRY //abertura por id
    this.pacienteService
      .readById(id)

      .subscribe((paciente) => {
        this.paciente = paciente;
      });
  }

  public calculaIdade(): void{
    const tempo = moment(this.paciente.data_nascimento); //converte data
    const diff = moment.duration(moment().diff(tempo)) //calcula diferença da data nascimento para data atual
    this.paciente.idade_paciente = diff.years() + ' anos, ' + diff.months() + ' meses, ' + diff.days() + ' dias.'; //apresenta valor por diff
  }
}
