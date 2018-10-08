import { Component } from '@angular/core';
import { NavController, Events, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
ip: any;

  constructor(public navCtrl: NavController, public events: Events, private alertCtrl: AlertController,) {

    HomePage
  }

  send(data){
    this.events.publish('data:created', data);
}


setDominio() {//abre um alert pro usuario digitar o dominio.
  let alert = this.alertCtrl.create({
    title: 'Domínio',
    message: 'Entre com domínio que deseja enviar os Dados:',
    inputs: [
      {
        name: 'ip',
        placeholder: 'ip:porta/'
        
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          console.log('Saved clicked');
          this.ip = JSON.stringify(data.ip).replace('"','').replace('"','');
          this.send(this.ip);
        }
      }
    ]
  });

  alert.present();
}
}

