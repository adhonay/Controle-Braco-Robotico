import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/timeout';

// import { ResourceLoader } from '@angular/compiler';


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

 //contador de posicoes salvas
 contadorPosicao: any = 0;

 //vetor para armazenar sequencia de posicoes
 sequencia: any[];
 posicao: string;
 Dados: string;
 
  onChange(ev: any) {
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events,
              private alertCtrl: AlertController, public http: Http) {
              this.sequencia = [];
                // receber dados do ip, da outra tab
              events.subscribe('data:created', (data) => {
                  this.ip = data;
              });
        }
  //sempre q entrar na view mostrar tudo:
  ionViewDidEnter(){
  }

  getOpcoes() {
    return  {
      cintura: this.cintura === undefined? 10 : this.cintura,
      ombro: this.ombro === undefined? 50: this.ombro,
      cotovelo: this.cotovelo === undefined? 50 : this.cotovelo,
      pulso_bd: this.pulso_bd === undefined? 10 : this.pulso_bd,
      pulso_g: this.pulso_g === undefined? 10 : this.pulso_g,
      garra: this.garra === undefined? 80: this.garra,
      velocidade: this.velocidade === undefined? 0 : this.velocidade,
      ip: this.ip === undefined ? "" : this.ip
    };
  }
  enviarDados() {
   const options = this.getOpcoes();

    if(options.ip === ""){// se o ip for vazio mostrar esse alerta.
      let alert = this.alertCtrl.create({
        title: 'Domínio não preencido',
        buttons: ['OK']
      });
      alert.present();
    }else{
      //variavel que trata os valores recebido do front(em tempo real) 
    //  var parametroFinal = options.cintura + "|" + options.ombro + "|" + options.cotovelo + "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
    
     for(let i =0;i< this.sequencia.length ;i++){
     var  parametroFinal = this.sequencia[i];
     new Promise((resolve, reject) => {
      
        this.http.get(options.ip+ "/request/" + parametroFinal + "|255", {})
        .toPromise()
        .then((response) =>
        {
          this.delay(3*1000);
          if( i == this.sequencia.length -1 ){
          this.showMsg("Sequencia enviada com sucesso! Iniciando movimentação");
          }
        })
        .catch((error) =>
        {
          if(i == this.sequencia.length -1){
          this.showMsg('Erro ao enviar sequencia!');
          }
          
        });
      });
      
    }
  }
}

async delay(ms: number) {
   if(ms >= 2){
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
   }else{
    let alert = this.alertCtrl.create({
      title: 'Valor minimo 2 segundos!',
      buttons: ['OK']
    });
    alert.present();
   }
}

showMsg(msg: string) {
  let alert = this.alertCtrl.create({title: msg, buttons: ['OK']});
  alert.present();
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

/* Salvar uma posicao do braco na sequencia.
 */
  gravarPosicao() {
    if (this.contadorPosicao != 6) {
        const options = this.getOpcoes();
        var posicao = options.cintura + "|" + options.ombro + "|" + options.cotovelo + 
                      "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
        this.sequencia.push(posicao);

        this.increaseContador();
    }
  }
  removerPosicao() {
    
    if (this.sequencia.length >= 1) {
        this.sequencia.shift();
        this.contadorPosicao --;
    }
  }
  increaseContador() {
   return this.contadorPosicao != 6 ?  
          this.contadorPosicao ++ 
          : this.contadorPosicao;
  }
}
