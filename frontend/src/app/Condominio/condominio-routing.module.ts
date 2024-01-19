import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CondominioListaFormComponent} from "./condominio-lista-form/condominio-lista-form.component";
import {CondominioFormComponent} from "./condominio-form/condominio-form.component";
import {condominioResolver as CondominioResolver} from "./guards/condominio.resolver"

const routes: Routes = [
  {path: '', component: CondominioListaFormComponent},
  {path: 'novo', component: CondominioFormComponent, resolve: {condominio: CondominioResolver}},
  {path: 'editar/:cnpj', component: CondominioFormComponent, resolve: {condominio: CondominioResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominioRoutingModule {
}
