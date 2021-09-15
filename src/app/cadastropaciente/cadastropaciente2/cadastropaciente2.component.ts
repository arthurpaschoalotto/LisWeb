import { Component, OnInit } from '@angular/core';
import { Cadastropaciente1Component } from '../cadastropaciente1/cadastropaciente1.component';

@Component({
  selector: 'app-cadastropaciente2',
  templateUrl: './cadastropaciente2.component.html',
  styleUrls: ['./cadastropaciente2.component.scss']
})
export class Cadastropaciente2Component extends Cadastropaciente1Component implements OnInit {


  ngOnInit(): void {
  }

}
