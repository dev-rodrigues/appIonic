import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ['Frederico Rodrigues', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['frederico@gmail.com', [Validators.required, Validators.email]],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj: ['37128497021', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ['123', [Validators.required]],
        logradouro: ['Rua Via', [Validators.required]],
        complemento: ['ap 407', ],
        bairro: ['Taquara', []],
        numero: ['2030', [Validators.required]],
        cep: ['22740362', [Validators.required]],
        telefone1: ['965861568', [Validators.required]],
        telefone2: ['', []],
        telefone3: ['', []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      });
  }

  signupUser() {
    console.log("Enviou o formulario")
  }
}
