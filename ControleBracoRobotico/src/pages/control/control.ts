import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

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

  // ,public bluetoothSerial: BluetoothSerial
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, bluetoothSerial: BluetoothSerial) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlPage');
  }


  enviarDados() {
    let alert = this.alertCtrl.create({
      title: 'Adhonay',
      subTitle: 'teste',
      buttons: ['sair']
    });
    alert.present();
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
