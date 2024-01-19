import {Component, OnInit} from '@angular/core';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CondominioService} from "../../condominio.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location, NgIf} from "@angular/common"
import {ActivatedRoute} from "@angular/router";
import {Condominio} from "../model/condominio";
import {AppModule} from "../../app.module";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";



@Component({
  selector: 'app-condominio-form',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule, NgIf, AppModule, NgxMaskDirective],
  templateUrl: './condominio-form.component.html',
  styleUrl: './condominio-form.component.css',
  providers:[provideNgxMask()]
})
export class CondominioFormComponent implements OnInit {

  emailError = new FormControl('', [Validators.required, Validators.email]);
  form: FormGroup = this.formBuilder.group({
    cnpj: ['',[Validators.required, Validators.minLength(14), Validators.maxLength(18)]],
    razaosocial: ['', [Validators.required]],
    email: this.emailError,
  });

  constructor(private formBuilder: FormBuilder,
              private service: CondominioService,
              private _snackBar: MatSnackBar,
              private location: Location,
              private route: ActivatedRoute
  ) {
  }

  isEditMode = false;
  ngOnInit() {
    const condominio: Condominio = this.route.snapshot.data['condominio'];
    this.isEditMode = this.route.snapshot.url.some(segment => segment.path === 'editar');
    if (condominio && this.isEditMode) {
      this.form.setValue({
        cnpj: condominio.cnpj,
        razaosocial: condominio.razaosocial,
        email: condominio.email
      });
    }
  }

  onUpdate() {
    this.service.atualizar(this.form.value).subscribe(data => this.onSeucces(), error => this.onError());
  }
  onSubmit() {
    this.service.salvar(this.form.value).subscribe(data => this.onSeucces(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSeucces() {
    this._snackBar.open('Condomínio salvo com sucesso', '', {duration: 6000});
    this.location.back();
  }

  private onError() {
    this._snackBar.open('Error ao salvar Condomínio', '', {duration: 3000})
  }

  getErrorMessageEmail() {
    if (this.emailError.hasError('required')) {
      return 'Você deve inserir um valor';
    }
    return this.emailError.hasError('email') ? 'E-mail inválido' : '';
  }

  getErrorMessageCnpj(cnpjCampo: String) {
    const campoCnpj = this.form.get(cnpjCampo as string);
    if (campoCnpj?.hasError('required')) {
      return 'Você deve inserir um valor';
    }
    if (campoCnpj?.hasError('minlength')) {
      const requiredLength = campoCnpj?.errors ? campoCnpj.errors['minlength']['requiredLength'] : 18
      return `Tamnho minimo precisa ser de ${requiredLength} caracteres.`;
    }
    return 'Campo inválido';
  }

  getErrorMessageRazao(razaoCampo: String) {
    const campoRazao = this.form.get(razaoCampo as string);
    if (campoRazao?.hasError('required')) {
      return 'Você deve inserir um valor';
    }
    return 'Campo inválido';
  }


  onCnpjInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let cleanedValue = inputElement.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cleanedValue = cleanedValue.substr(0, 14); // Garante que tenha no máximo 14 caracteres
    this.form.controls['cnpj'].setValue(cleanedValue);
  }
}
