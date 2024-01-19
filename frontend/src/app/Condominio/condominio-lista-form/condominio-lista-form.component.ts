import {Component, OnInit, ViewChild} from '@angular/core';
import {Condominio} from "../model/condominio";
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {CondominioService} from "../../condominio.service";
import {catchError, Observable, of, tap} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {SharedModule} from "../shared/shared.module";
import {ErrorDialogComponent} from "../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ListaCondominioComponent} from "./lista-condominio/lista-condominio.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmacaoDialogComponent} from "../shared/components/confirmacao-dialog/confirmacao-dialog.component";
import {CondominioPage} from "../model/CondominioPage";
import {MatPaginator, PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-condominio-list-form',
  standalone: true,
  imports: [
    AppMaterialModule,
    SharedModule,
    AsyncPipe,
    NgIf,
    ListaCondominioComponent,
  ],
  templateUrl: './condominio-lista-form.component.html',
  styleUrl: './condominio-lista-form.component.css'
})
export class CondominioListaFormComponent implements OnInit {

  condominios$: Observable<CondominioPage> | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageIndex = 0;
  pageSize = 10;

  constructor(private condominioService: CondominioService,
              public dialog: MatDialog,
              private router: Router,
              private _snackBar: MatSnackBar,
              private activaRoute: ActivatedRoute
  ) {
    this.refresh();
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit() {
  }

    refresh(pageEvent: PageEvent = {length: 0, pageIndex: 0, pageSize: 10}) {
      this.condominios$ = this.condominioService.getCondominio(pageEvent.pageIndex, pageEvent.pageSize)
        .pipe(
          tap(() => {
            this.pageIndex = pageEvent.pageIndex;
            this.pageSize = pageEvent.pageSize;
          }),
          catchError(error => {
            this.onError('Erro ao carregar lista.')
            return of({condominios: [], totalElements: 0, totalPages: 0})
          })
        );
    }
  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.activaRoute});
  }

  onEdit(condominio: Condominio) {
    this.router.navigate(['editar', condominio.cnpj], {relativeTo: this.activaRoute});
  }

  onDelete(condominio: Condominio) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: 'Tem certeza que deseja deletar esse Condomínio ? ',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.condominioService.deletar(condominio.cnpj).subscribe(
            () => {
              this.refresh();
              this._snackBar.open('Condomínio deletado com Sucesso!!', 'x',
                {
                  duration: 6000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center'
                },);
            },
            error => this.onError('Error ao tentar deletar condomínio')
          );
        }
      }
    );
  }
}
