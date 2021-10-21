import { Sort } from '@angular/material/sort';
import { Query } from './../model/query.model';
import { Paciente } from '../model/paciente.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  baseUrl = 'http://127.0.0.1:3000/pacientes'; //caminho backend

  query: Query[] = []; //chamando variaveis de busca

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { } //MatSnackBar mensagens de canto

  showMessage(msg: string): void { //localização duração de mensagens de aviso
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(paciente: Paciente): Observable<Paciente> { //Observable retornado do post, retorno de função assincrono quanto puder bd
    return this.http.post<Paciente>(this.baseUrl, paciente); //criando novo cadastro no backend com parametros do paciente
  }

  read(queries: Query[],page: number =1, sortActive: string ="id", sortDirection: string = "desc"): Observable<Paciente[]> { //criando parametros e puxando dados do backend
    let params = new HttpParams(); //cria paramaetros para leitura do backend

    queries.forEach(busca =>{
      params = params.append(busca.key,busca.value); //comunicação com backend key=busca value=valor do item
    })
    params = params.append('page', page); //chama paginação backend
    params = params.append('sort_active', sortActive); //Qual coluna sera ordenada
    params = params.append('sort_direction', sortDirection); //Ordem desc ou asc

    return this.http.get<Paciente[]>(this.baseUrl, {params}); //Passa qual operação sera realizada pelo backend
  }

  readById(id: number): Observable<Paciente> { //Trazer cadastro especifico
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Paciente>(url);
  }

  update(paciente: Paciente): Observable<Paciente> { //Alterações feita pelo id de cadastro criado
    const url = `${this.baseUrl}/${paciente.id}`;
    return this.http.put<Paciente>(url, paciente);
  }

  delete(id: number): Observable<Paciente> { //Delete de cadastro pelo id de cadastro criado
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Paciente>(url);
  }

  countPacientes(): Observable<number> { //Informa registros do backend (valor)
    return this.http.get<number>(this.baseUrl, {
      params: new HttpParams().set('totalCount', 'true'),
    });
  }
}
