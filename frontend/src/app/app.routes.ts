import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'condominio'},
  {path: 'condominio',
    loadChildren: () => import('./Condominio/condominio.module').then(m => m.CondominioModule)
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutes{}
