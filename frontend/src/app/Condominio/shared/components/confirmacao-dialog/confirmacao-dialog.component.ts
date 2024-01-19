import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppMaterialModule} from "../../app-material/app-material.module";

@Component({
  selector: 'app-confirmacao-dialog',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './confirmacao-dialog.component.html',
  styleUrl: './confirmacao-dialog.component.css'
})
export class ConfirmacaoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) {
  }

  ngOnInit() {
  }

  onConfirm(resultado: boolean): void {
    this.dialogRef.close(resultado);
  }
}
