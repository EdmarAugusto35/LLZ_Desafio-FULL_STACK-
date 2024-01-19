import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {AppMaterialModule} from "../../app-material/app-material.module";

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    AppMaterialModule
  ],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.css'
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
  }
}
