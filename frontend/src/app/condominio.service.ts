import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, first, Observable, tap} from "rxjs";
import {CondominioPage} from "./Condominio/model/CondominioPage";
import {Condominio} from "./Condominio/model/condominio";

@Injectable({
  providedIn: 'root'
})
export class CondominioService {

  constructor(private httpClient : HttpClient) { }

  private readonly API = 'http://localhost:8080/api/condominio'

  salvar(condominio: Partial<Condominio>){
    return this.create(condominio);
  }

  atualizar(condominio: Partial<Condominio>){
    return this.update(condominio);
  }

  deletar(cnpj: string){
    return this.remove(cnpj);
  }
  loadByCnpj(cnpj: string){
    return this.httpClient.get<Condominio>(`${this.API}/${cnpj}`);
  }

  getCondominio(page = 0, pageSize = 10): Observable<CondominioPage>{
    return this.httpClient.get<CondominioPage>(this.API,{params:{ page, pageSize }})
      .pipe(
        first(),
        delay(1000),
        tap(condo => console.log(condo))
      );
  }

  private create(registro: Partial<Condominio>){
    return this.httpClient.post<Condominio>(this.API,registro).pipe(first());
  }

  private update(registro: Partial<Condominio>){
    return this.httpClient.put<Condominio>(`${this.API}/${registro.cnpj}`, registro).pipe(first());
  }

  private remove(cnpj: string){
    return this.httpClient.delete<Condominio>(`${this.API}/${cnpj}`);
  }
}
