import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from "rxjs";
import {CondominioService} from "../../condominio.service";
import {Condominio} from "../model/condominio";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class condominioResolver implements Resolve<Condominio> {
  constructor(private service: CondominioService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Condominio> {
    if (route.params && route.params['cnpj']) {
      return this.service.loadByCnpj(route.params['cnpj']);
    }
    return of({cnpj: '', razaosocial: '', email: ''});
  }
  
}
