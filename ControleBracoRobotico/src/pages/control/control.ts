import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
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

 cintura: number;
 ombro: number;
 cotovelo: number;
 pulso_bd: number;
 pulso_g: number;
 garra: number;
 velocidade: number;
 RadioOpen: boolean;

  onChange(ev: any) {
    console.log('Changed', ev);
  }

  // ,public bluetoothSerial: BluetoothSerial
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlPage');
  }

  MostrarVelocidade(){
    var v = this.velocidade;

    if(v != null){
      if(v == 1){
          return "Lenta";
      }else if (v == 2){
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

  ConectarBlu(){


  }




  enviarDados2() {
    
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  

      // var data = new Uint8Array(6);
      // data[0] = 0x00;
      // data[1] = 0x06;
      // data[2] = 0xFD;
      // data[3] = 0x00;
      // data[4] = 0xA0;
      // data[5] = 0x91;

      // bluetoothSerial.subscribeRawData(function (data) {
      //     var bytes = new Uint8Array(data);
      //     if (bytes.length == 25) {
      //         var hexa = utilService.Uint8ArrayToHex(bytes);
      //         console.log(hexa);
      //     }
      //     console.log(bytes);
      // }, function (error) { alert(JSON.stringify(error)); });

      // $cordovaBluetoothSerial.clear().then(
      //     function (success) {
      //         $cordovaBluetoothSerial.write(data).then(
      //             function (success) {

      //             },
      //             function (err) {
      //                 $scope.showAlert = function () {
      //                     var alertPopup = $ionicPopup.alert({
      //                         title: 'Erreur Write : ',
      //                         template: JSON.stringify(err)
      //                     });
      //                     alertPopup.then(function (res) {
      //                     });
      //                 };
      //             }
      //         );
      //     },
      //     function (err) {
      //         var test = err;
      //     }
      // );

  }

}
