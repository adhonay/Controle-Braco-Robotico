import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http : HTTP) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlPage');
  }
  
  
  enviarDados() {
   
    const options = {
      cintura: this.cintura === undefined? 0 : this.cintura,
      ombro: this.ombro === undefined? 0: this.ombro,
      cotovelo: this.cotovelo === undefined? 0 : this.cotovelo,
      pulso_bd: this.pulso_bd === undefined? 0 : this.pulso_bd,
      pulso_g: this.pulso_g === undefined? 0 : this.pulso_g,
      garra: this.garra === undefined? 0: this.garra,
      velocidade: this.velocidade === undefined? 0 : this.velocidade,
      ip: this.ip === undefined ? "" : this.ip
    };

    var parametroFinal = options.cintura + "|" + options.ombro + "|" + options.cotovelo + "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
    
    
    this.http.get(this.ip+"/", options, function(response) {
      // prints 403
      console.log(response.status);
    
      //prints Permission denied
      console.log(response.error);
    });

  }
  MostrarVelocidade(){
    var v = this.velocidade;

    if(v != null){
      if(v == "1"){
          return "Lenta";
      }else if (v == "2"){
         return "Média";
      }else{
        return "Rápida";
      }
    }else{
      return "";
    }
  }

  VelocidadeVal() {
    
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione a Velocidade:');

    alert.addInput({
      type: 'radio',
      label: 'Lenta',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Media',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: 'Rapida',
      value: '3'
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.RadioOpen = false;
        this.velocidade = data;
      }
    });

    alert.present().then(() => {
      this.RadioOpen = true;
    });
  }

}
