import { CepService } from './../cep/cep.service';
import { Paciente } from './../../../componentes/model/paciente.model';
import { Component, OnInit, Input } from '@angular/core';
import { Cep } from './cep.model';
import { Cadastropaciente1Component } from '../../cadastropaciente1/cadastropaciente1.component';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/componentes/service/paciente.service';

@Component({
  selector: 'app-enderecopaciente',
  templateUrl: './enderecopaciente.component.html',
  styleUrls: ['./enderecopaciente.component.scss']
})
export class EnderecopacienteComponent implements OnInit {
  cep: Cep;
  @Input('paciente') paciente: Paciente;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private cepService: CepService
  ) {
    this.paciente = new Paciente({});
    this.cep = new Cep();
  }

  ngOnInit(): void {

  }
  consulta(){
    this.cepService
    .consultar(this.cep.cep)
    .subscribe((cep:any) => {
      Object.assign(this.cep,cep)
      console.log(this.cep)
      console.log(cep)
    });
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
