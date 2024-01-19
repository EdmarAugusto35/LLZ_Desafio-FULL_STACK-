import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {CondominioService} from "./condominio.service";
import {CondominioModule} from "./Condominio/condominio.module";
import {AppMaterialModule} from "./Condominio/shared/app-material/app-material.module";
import {CondominioListaFormComponent} from "./Condominio/condominio-lista-form/condominio-lista-form.component";
import {ListaCondominioComponent} from "./Condominio/condominio-lista-form/lista-condominio/lista-condominio.component";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CondominioModule,
    AppMaterialModule,
    CondominioListaFormComponent,
    ListaCondominioComponent,
    NgxMaskPipe,NgxMaskDirective
  ],
  providers: [CondominioService, provideNgxMask()]
})
export class AppModule {
}
