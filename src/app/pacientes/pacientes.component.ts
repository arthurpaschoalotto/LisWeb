import { Paciente } from './../componentes/model/paciente.model';
import { Component, OnInit, AfterViewInit,  ElementRef, ViewChild} from '@angular/core';
import { PacienteService } from '../componentes/service/paciente.service';
import { Query } from '../componentes/model/query.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  filter,
} from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { CadastropacienteComponent } from '../cadastropaciente/cadastropaciente.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements AfterViewInit {

  displayedColumns: string[] = ['Nome', 'RG', 'CPF', 'Email', 'Telefone', 'Celular'];
  dataSource: Paciente[] =[];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  @ViewChild(MatSort) sort: MatSort | any; //Pega o componente do html e disponibiliza pro tps

  queries: Query[] = [];
  page: number = 1;
  noMorePages: boolean = false;

  constructor(private pacienteService: PacienteService, public dialog: MatDialog) { }

  addSearch(key: string, value: string, isNumeric:boolean= false): void { //metodo de busca
    this.queries = this.queries.filter((q) => q.key !== key); //pra cada item do querry ele vai eliminar os diferentes da busca

    if(isNumeric){ //vai tirar tudo o que não for digito
      value = value.replace(/\D/g,'')
    }

    let query = new Query({ key, value, isNumeric });
    if (value != "") { //pra nao trazer buscas vazia
      this.queries.push(query);
    }
    this.page = 1; 
    this.loadBack(); //chama loadBack para recarregar
  }


  ngAfterViewInit(): void { //executar apos ser desenhado a pagina
    this.loadBack();
  }

  loadBack(queries: Query[] = this.queries, refresh: boolean = true): void{ //Ponte com service
    this.pacienteService.read(queries,this.page,this.sort.active,this.sort.direction).subscribe( (pacientes)=>{
      if (pacientes.length == 0){ //não mostra botão se não tiver mais itens do back
        this.noMorePages = true;
      }
      if(refresh){ //se refresh estiver ativo
        this.dataSource = pacientes; //usar dados do back para apresentar no front
        this.noMorePages = false; //continuar buscando os dados
      }
      else{ //se não estiver ativo será apenas paginação
        this.dataSource = this.dataSource.concat(pacientes); //concatena os dados para somar
      }
    })
  }

  nextPage(): void{
    this.page++; //adc +1 page
    this.loadBack(this.queries, false); //chama linha 66
  }


  sortData() { //ordenação dos dados
    this.page = 1; //adc +1 page
    this.loadBack(this.queries, true); //chama linha 62
    }
}
