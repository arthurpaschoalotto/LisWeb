import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrospacientes',
  templateUrl: './cadastrospacientes.component.html',
  styleUrls: ['./cadastrospacientes.component.scss']
})
export class CadastrospacientesComponent{

  @Input() valorSalvar:any[] = []; //Permitir criar uma propriedade

  constructor() { }

  ngOnInit(): void {
  }

}
