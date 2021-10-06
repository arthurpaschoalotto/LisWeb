import { Paciente } from './../../../componentes/model/paciente.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/componentes/service/paciente.service';


@Component({
  selector: 'app-infadcpaciente',
  templateUrl: './infadcpaciente.component.html',
  styleUrls: ['./infadcpaciente.component.scss']
}) // TODO: #17 Nome do componente esta correto? Camelizado? "Infadc"?
export class InfadcpacienteComponent implements OnInit {
  @Input('paciente') paciente: Paciente;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
  ) {
    this.paciente = new Paciente({})
  }

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
