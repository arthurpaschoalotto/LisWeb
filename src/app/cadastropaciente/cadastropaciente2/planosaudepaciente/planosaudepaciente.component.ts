import { Paciente } from './../../../componentes/model/paciente.model';
import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import { PacienteService } from 'src/app/componentes/service/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planosaudepaciente',
  templateUrl: './planosaudepaciente.component.html',
  styleUrls: ['./planosaudepaciente.component.scss']
})
export class PlanosaudepacienteComponent implements OnInit {
  @Input('paciente') paciente: Paciente;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
  ) {
    this.paciente = new Paciente({})
  }
  convenios: string[] = [
    "Santa Casa", "UNIMED", "Prever"
  ];
  
  ngOnInit(): void {
  }

  createPaciente(): void {
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente criado com sucesso!');
     this.router.navigate(['/pacientes']);
    });
  }

  cancel(): void {
   this.router.navigate(['/pacientes']);
  }
}

