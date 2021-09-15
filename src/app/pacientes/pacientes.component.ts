import { Component, OnInit } from '@angular/core';
import { Paciente } from '../componentes/model/paciente.model';
import { PacienteService } from '../componentes/service/paciente.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  displayedColumns: string[] = ['Nome', 'CPF', 'Telefone', 'Email'];
  dataSource: Paciente[] =[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.read().subscribe( (pacientes)=>{
      this.dataSource = pacientes;
    })
  }

}
