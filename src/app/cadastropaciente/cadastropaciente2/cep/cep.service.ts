import { Cep } from '../enderecopaciente/cep.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CepService {
  resultado: Cep |null = null;
  cep = new Cep();
  constructor(private http:HttpClient) { }

  public consultar(cep:string): Observable<Cep>{
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`)

  }

}
// TODO: #15 Considerar mover para fora do componente (pasta shared?)