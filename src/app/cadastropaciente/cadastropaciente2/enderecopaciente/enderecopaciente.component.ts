import { Component, OnInit } from '@angular/core';
import { Cep } from './cep.model';
import { CepService } from '../cep/cep.service';



@Component({
  selector: 'app-enderecopaciente',
  templateUrl: './enderecopaciente.component.html',
  styleUrls: ['./enderecopaciente.component.scss']
})
export class EnderecopacienteComponent implements OnInit {
  cep = new Cep();

  constructor(private CepService:CepService) { }

  ngOnInit(): void {
  }
  consulta(){
    this.CepService
    .consultar(this.cep.cep)
    .subscribe((cep:any) => {
      Object.assign(this.cep,cep)
      console.log(this.cep)
      console.log(cep)
    });
  }
}
