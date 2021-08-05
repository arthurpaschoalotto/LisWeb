import { cadastropacienteComponent } from './cadastroPaciente-p1/cadastroPaciente-p1.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //tem que ser declarado em todos TS que forem usar essa informação
  title = 'Lisweb';
  valorSalvar:any[] = [];

  salvar($event: any){ //Evento para armazenar o valor após salvar
    console.log($event);
    const valorSalvar = {...$event}
    this.valorSalvar.push(valorSalvar);
  }
}
