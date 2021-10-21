import { Paciente } from './../componentes/model/paciente.model';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteService } from '../componentes/service/paciente.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastropaciente',
  templateUrl: './cadastropaciente.component.html',
  styleUrls: ['./cadastropaciente.component.scss']
})

export class CadastropacienteComponent implements OnInit {
  paciente: Paciente;
  id: number;

  constructor( //injeção de dependencia, se trata de importações proprias
    private router: Router,
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
  ) {
    this.paciente = new Paciente({}); //criando paciente

    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
    if (this.id > 0) {
      this.load(this.id); //id > 0 carrega o paciente
    }
  }

  update(): void {
    this.pacienteService.update(this.paciente).subscribe(() => {
     // this.pacienteService.showMessage('Paciente atualizado com sucesso!');
    });
    this.router.navigate(['/pacientes']);
  }

  load(id: number): void {
    this.pacienteService
      .readById(id)

      .subscribe((paciente) => {
        this.paciente = paciente;
      });
  }

  ngOnInit(): void {
  }

  // TODO: #14 Despersonificar nome das funcoes, deixar generico o nome
  createPaciente(): void {
    if (this.id > 0){
      this.update();
    }
    else{
      console.table(this.paciente)
      this.pacienteService.create(this.paciente).subscribe(() => {
       //this.pacienteService.showMessage('Paciente criado com sucesso!');
        this.router.navigate(['/recepcao/pacientes']);
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/recepcao/pacientes']); //retorna /pacientes
   }
}
