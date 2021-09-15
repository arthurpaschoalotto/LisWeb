import { Paciente } from './../componentes/model/paciente.model';
import { Component, OnInit } from '@angular/core';

import { PacienteService } from '../componentes/service/paciente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastropaciente',
  templateUrl: './cadastropaciente.component.html',
  styleUrls: ['./cadastropaciente.component.scss']
})
export class CadastropacienteComponent implements OnInit {
  paciente: Paciente;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
  ) {
    this.paciente = new Paciente({});
  }

  ngOnInit(): void {
  }
  createPaciente(): void {
    console.table(this.paciente)
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente criado com sucesso!');
      this.router.navigate(['/pacientes']);
    });
  }
}