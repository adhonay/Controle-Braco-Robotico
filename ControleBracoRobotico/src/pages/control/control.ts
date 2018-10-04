import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
// import { NgModel } from '@angular/forms';

/**
 * Generated class for the ControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-control',
  templateUrl: 'control.html',
  
})

export class ControlPage {

 cintura: any;
 ombro: any;
 cotovelo: any;
 pulso_bd: any;
 pulso_g: any;
 garra: any;
 velocidade: any;
 RadioOpen: boolean;
 ip: any;
 
  onChange(ev: any) {
    console.log('Changed', ev);
  }
  debugger;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public http: Http) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlPage');
  }
  
  
  enviarDados() {
   
    const options = {
      cintura: this.cintura === undefined? 10 : this.cintura,
      ombro: this.ombro === undefined? 50: this.ombro,
      cotovelo: this.cotovelo === undefined? 50 : this.cotovelo,
      pulso_bd: this.pulso_bd === undefined? 10 : this.pulso_bd,
      pulso_g: this.pulso_g === undefined? 10 : this.pulso_g,
      garra: this.garra === undefined? 80: this.garra,
      velocidade: this.velocidade === undefined? 0 : this.velocidade,
      ip: this.ip === undefined ? "" : this.ip
    };
    
    if(options.ip === ""){
      let alert = this.alertCtrl.create({
        title: 'Domínio não preencido',
        buttons: ['OK']
      });
      alert.present();
    }else{
     var parametroFinal = options.cintura + "|" + options.ombro + "|" + options.cotovelo + "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
    
     debugger;  
      return new Promise((resolve, reject) => {
        this.http.get(options.ip+ "/request/" + parametroFinal + "|255", {})
        .toPromise()
        .then((response) =>
        {
          console.log('API Response : ', response.json());
          let alert = this.alertCtrl.create({title: response.json()});
          alert.present();
          resolve(response.json());
        })
        .catch((error) =>
        {
          let alert = this.alertCtrl.create({title: error.status});
          alert.present();
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });
  }
}
  MostrarVelocidade(){
    var v = this.velocidade;

    if(v != null){
    
      if(v == "0"){
          return "Lenta";
      }else if (v == "1"){
         return "Média";
      }else{
        return "Rápida";
      }
    }else{
      return "";
    }
  }

  dominio() {
    let alert = this.alertCtrl.create({
      title: 'Domínio',
      message: 'Entre com domínio que deseja enviar os dados:',
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
          }
        }
      ]
    });

    alert.present();
  }

}
