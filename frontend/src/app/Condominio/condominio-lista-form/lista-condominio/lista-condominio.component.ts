import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppMaterialModule} from "../../shared/app-material/app-material.module";
import {Condominio} from "../../model/condominio";
import {NgxMaskDirective, NgxMaskPipe} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-lista-condominio',
  standalone: true,
  imports: [AppMaterialModule, NgxMaskDirective, ReactiveFormsModule, NgxMaskPipe],
  templateUrl: './lista-condominio.component.html',
  styleUrl: './lista-condominio.component.css'
})
export class ListaCondominioComponent implements OnInit {

  @Input() condominios: Condominio[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['cnpj', 'email', 'razaosocial', 'acoes'];
  constructor() {
  }
  ngOnInit() {
  }

  onAdd() {
   this.add.emit(true);
  }

  onEdit(condominio: Condominio){
    this.edit.emit(condominio);
  }

  onDelete(condominio: Condominio){
    this.delete.emit(condominio);
  }


}
