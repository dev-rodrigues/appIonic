import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id  : "1",
        logradouro: "Rua Quinze de Novembro",
        numero: "2030",
        complemento: "Ap 202",
        bairro: "Santa Monica",
        cep: "22740362",
        cidade : {
          id:"1",
          nome:"Uberlândia",
          estado: {
            id: "1",
            nome:"Minas Gerais"
          }
        }
      },
      {
        id  : "2",
        logradouro: "Rua Alexandre Toledo Silva",
        numero: "1524",
        complemento: null,
        bairro: "Centro",
        cep: "22740362",
        cidade : {
          id:"3",
          nome:"São Paulo",
          estado: {
            id: "2",
            nome:"São Paulo"
          }
        }
      }
    ];
  }

}
