import { Paciente } from './../componentes/model/paciente.model';
import { Component, OnInit, AfterViewInit,  ElementRef, ViewChild} from '@angular/core';
import { PacienteService } from '../componentes/service/paciente.service';
import { Query } from '../componentes/model/query.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  filter,
} from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements AfterViewInit {

  displayedColumns: string[] = ['Nome', 'RG', 'CPF', 'Email', 'Telefone', 'Celular'];
  dataSource: Paciente[] =[];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  @ViewChild(MatSort) sort: MatSort | any;

  queries: Query[] = [];
  page: number = 1;
  noMorePages: boolean = false;

  constructor(private pacienteService: PacienteService) { }

  addSearch(key: string, value: string, isNumeric:boolean= false): void {
    this.queries = this.queries.filter((q) => q.key !== key);

    if(isNumeric){
      value = value.replace(/\D/g,'')
    }

    let query = new Query({ key, value, isNumeric });
    if (value != "") {
      this.queries.push(query);
    }
    console.table(this.queries);
    this.loadBack();
  }


  ngAfterViewInit(): void {
    this.loadBack();
  }

  loadBack(queries: Query[] = this.queries, refresh: boolean = true): void{ //Ponte com service
    this.pacienteService.read(queries,this.page,this.sort.active,this.sort.direction).subscribe( (pacientes)=>{
      if (pacientes.length == 0){
        this.noMorePages = true;
      }
      if(refresh){
        this.dataSource = pacientes;
        this.noMorePages = false;
      }
      else{
        this.dataSource = this.dataSource.concat(pacientes);
      }
    })
  }

  nextPage(): void{
    this.page++;
    this.loadBack(this.queries, false);
  }


  sortData() {
    this.page = 1;
    this.loadBack(this.queries, true);
    }
}
