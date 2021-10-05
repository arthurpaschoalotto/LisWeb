import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listainterfaceamentos',
  templateUrl: './listainterfaceamentos.component.html',
  styleUrls: ['./listainterfaceamentos.component.scss']
})
export class ListainterfaceamentosComponent implements OnInit {


  displayedColumns: string[] = ['position', 'exame', 'ativarexame', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  }


}
export interface PeriodicElement {
  exame: string;
  position: number;
  ativarexame: number;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, exame: 'Hemoglobina Glicada', ativarexame: 1.0079, status:'Ativo'},
  {position: 2, exame: 'Glicose', ativarexame: 4.0026, status:'Inativo'},
  {position: 3, exame: 'T4 - Livre', ativarexame: 6.941, status},
  {position: 4, exame: 'TSH', ativarexame: 9.0122, status},
  {position: 5, exame: 'Glicose pós-prandial', ativarexame: 10.811, status},
  {position: 6, exame: 'Perfil lipídico', ativarexame: 12.0107, status},
  {position: 7, exame: 'Teste de Gravidez', ativarexame: 14.0067, status},
];
