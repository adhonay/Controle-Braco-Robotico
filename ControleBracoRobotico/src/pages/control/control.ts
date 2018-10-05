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

//declaração de variaveis 
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
   
    //constante que recebe os valores do front, caso  o usuario não modificar o valor , o defaut e o valor minimo do angulo
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
    
    if(options.ip === ""){// se o ip for vazio mostrar esse alerta.
      let alert = this.alertCtrl.create({
        title: 'Domínio não preencido',
        buttons: ['OK']
      });
      alert.present();
    }else{
      //variavel que trata os valores recebido do front(em tempo real) 
     var parametroFinal = options.cintura + "|" + options.ombro + "|" + options.cotovelo + "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
    
     debugger; 
     //objeto que faz o get, primeiro paramentro e a url, segundo e corpo que esta vazio, terceira e função que retorna um alert caso deu certo ou errado. 

     //ESSE OBJETO VAI FICAR DENTRO DE UMA REPETIÇÃO SEM O ALERT QUE NO CASO E O TERCEIRO PARAMETRO PRA NÃO FICAR MOSTRANDO TODA HORA QUE FOI ENVIADO COM SUCESSO.
     // ESSE LOOP VAI TER O TAMANHO DO NUMERO DE SEQUENCIAS ADICIONADA EM UMA LISTA MOSTADA PELA VARIAVEL "parametroFinal" onde cada posicao e uma combinação
     // e oque vai mudar nesse objeto Promise vai ser em vez de ser "parametrofinal" ser uma posicao da lista em questão. o resto o get vai ser executado sozinho.
     //não esquecer de dar um tempo de espera pra cada vez que o loop executa o get !
      return new Promise((resolve, reject) => {
        this.http.get(options.ip+ "/request/" + parametroFinal + "|255", {})
        .toPromise()
        .then((response) =>
        {
          
          let alert = this.alertCtrl.create({title: 'Sequencia enviada com sucesso!',buttons: ['OK']});
          alert.present();
        })
        .catch((error) =>
        {
          let alert = this.alertCtrl.create({title: 'Erro ao enviar sequencia!',buttons: ['OK']});
          alert.present();
        });
      });
  }
}
  MostrarVelocidade(){//mostrar texto front de velocidade no front
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

  dominio() {//abre um alert pro usuario digitar o dominio.
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
