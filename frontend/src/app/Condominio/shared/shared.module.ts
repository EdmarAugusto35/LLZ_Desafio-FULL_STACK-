import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorDialogComponent} from "./components/error-dialog/error-dialog.component";
import {AppMaterialModule} from "./app-material/app-material.module";
import {ConfirmacaoDialogComponent} from "./components/confirmacao-dialog/confirmacao-dialog.component";
import {CategoryPipe} from "../pipes/CategoryPipe";




@NgModule({
  declarations: [],
  exports: [ErrorDialogComponent,CategoryPipe,ConfirmacaoDialogComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmacaoDialogComponent
  ]
})
export class SharedModule { }
