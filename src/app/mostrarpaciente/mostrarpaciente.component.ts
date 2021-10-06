import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-mostrarpaciente',
  templateUrl: './mostrarpaciente.component.html',
  styleUrls: ['./mostrarpaciente.component.scss']
})
export class MostrarpacienteComponent implements OnInit {

  hideNome = true;
  hideDataNascimento = true;
  hideIdade = true;
  hideRG = true;
  hideCPF = true;
  hideSexo = true;
  hideCor = true;
  hideNomeMae = true;
  hideNomePai = true;

  readonly = true;

  constructor() {
   }

  ngOnInit(): void {
  }

}
