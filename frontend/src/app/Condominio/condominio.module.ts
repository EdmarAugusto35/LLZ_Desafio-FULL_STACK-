import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from "./shared/app-material/app-material.module";
import {CondominioRoutingModule} from "./condominio-routing.module";
import {SharedModule} from "./shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    CondominioRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskPipe,NgxMaskDirective
  ],
  providers:[provideNgxMask()]
})
export class CondominioModule { }
