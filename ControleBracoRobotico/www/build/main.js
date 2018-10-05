webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_control__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__control_control__["a" /* ControlPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Control" tabIcon="md-cog"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HTTP } from '@ionic-native/http';


// import { NgModel } from '@angular/forms';
/**
 * Generated class for the ControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ControlPage = /** @class */ (function () {
    function ControlPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    ControlPage.prototype.onChange = function (ev) {
        console.log('Changed', ev);
    };
    ControlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ControlPage');
    };
    ControlPage.prototype.enviarDados = function () {
        var _this = this;
        //constante que recebe os valores do front, caso  o usuario não modificar o valor , o defaut e o valor minimo do angulo
        var options = {
            cintura: this.cintura === undefined ? 10 : this.cintura,
            ombro: this.ombro === undefined ? 50 : this.ombro,
            cotovelo: this.cotovelo === undefined ? 50 : this.cotovelo,
            pulso_bd: this.pulso_bd === undefined ? 10 : this.pulso_bd,
            pulso_g: this.pulso_g === undefined ? 10 : this.pulso_g,
            garra: this.garra === undefined ? 80 : this.garra,
            velocidade: this.velocidade === undefined ? 0 : this.velocidade,
            ip: this.ip === undefined ? "" : this.ip
        };
        if (options.ip === "") {
            var alert = this.alertCtrl.create({
                title: 'Domínio não preencido',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            //variavel que trata os valores recebido do front(em tempo real) 
            var parametroFinal = options.cintura + "|" + options.ombro + "|" + options.cotovelo + "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
            debugger;
            //objeto que faz o get, primeiro paramentro e a url, segundo e corpo que esta vazio, terceira e função que retorna um alert caso deu certo ou errado. 
            //ESSE OBJETO VAI FICAR DENTRO DE UMA REPETIÇÃO SEM O ALERT QUE NO CASO E O TERCEIRO PARAMETRO PRA NÃO FICAR MOSTRANDO TODA HORA QUE FOI ENVIADO COM SUCESSO.
            // ESSE LOOP VAI TER O TAMANHO DO NUMERO DE SEQUENCIAS ADICIONADA EM UMA LISTA MOSTADA PELA VARIAVEL "parametroFinal" onde cada posicao e uma combinação
            // e oque vai mudar nesse objeto Promise vai ser em vez de ser "parametrofinal" ser uma posicao da lista em questão. o resto o get vai ser executado sozinho.
            //não esquecer de dar um tempo de espera pra cada vez que o loop executa o get !
            return new Promise(function (resolve, reject) {
                _this.http.get(options.ip + "/request/" + parametroFinal + "|255", {})
                    .toPromise()
                    .then(function (response) {
                    var alert = _this.alertCtrl.create({ title: 'Sequencia enviada com sucesso!', buttons: ['OK'] });
                    alert.present();
                })
                    .catch(function (error) {
                    var alert = _this.alertCtrl.create({ title: 'Erro ao enviar sequencia!', buttons: ['OK'] });
                    alert.present();
                });
            });
        }
    };
    ControlPage.prototype.MostrarVelocidade = function () {
        var v = this.velocidade;
        if (v != null) {
            if (v == "0") {
                return "Lenta";
            }
            else if (v == "1") {
                return "Média";
            }
            else {
                return "Rápida";
            }
        }
        else {
            return "";
        }
    };
    ControlPage.prototype.dominio = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.ip = JSON.stringify(data.ip).replace('"', '').replace('"', '');
                    }
                }
            ]
        });
        alert.present();
    };
    ControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-control',template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\control\control.html"*/'<!--\n  Generated template for the ControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Controle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content no-scroll"  >\n\n  \n    <ion-list>\n      <ion-list-header>\n        Cintura:\n        <ion-badge  item-end>{{ ((cintura == null? 0 : (cintura-10)/100)*100).toPrecision(3)+ "%"}}</ion-badge>\n      </ion-list-header>\n      <ion-item>\n        <label for="teste">aa</label>\n        <ion-range min="10" max="110" pin="true"  style=" color:black" [(ngModel)]="cintura">\n          <ion-icon range-left small>10</ion-icon>\n          <ion-icon range-right>110</ion-icon>\n        </ion-range>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list>\n        <ion-list-header>\n          Ombro:\n          <ion-badge  item-end>{{ ((ombro == null? 0 : (ombro-50)/90)*100).toPrecision(3)+ "%"}}</ion-badge>\n        </ion-list-header>\n        <ion-item>\n          <ion-range min="50" max="140" pin="true"  style=" color:black"  [(ngModel)]="ombro">\n            <ion-icon range-left small>50</ion-icon>\n            <ion-icon range-right>140</ion-icon>\n          </ion-range>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n          <ion-list-header>\n            Cotovelo:\n            <ion-badge  item-end>{{ ((cotovelo == null? 0 : (cotovelo-50)/120)*100).toPrecision(3)+ "%"}}</ion-badge>\n          </ion-list-header>\n          <ion-item>\n            <ion-range min="50" max="170" pin="true"  style=" color:black"  [(ngModel)]="cotovelo">\n              <ion-icon range-left small>50</ion-icon>\n              <ion-icon range-right>170</ion-icon>\n            </ion-range>\n          </ion-item>\n        </ion-list>\n  \n        <ion-list>\n            <ion-list-header>\n              Pulso Sobe-Desce:\n              <ion-badge  item-end>{{ ((pulso_bd == null? 0 : (pulso_bd-10)/140)*100).toPrecision(3)+ "%"}}</ion-badge>\n            </ion-list-header>\n            <ion-item>\n              <ion-range min="10" max="150" pin="true"  style=" color:black"  [(ngModel)]="pulso_bd">\n                <ion-icon range-left small>10</ion-icon>\n                <ion-icon range-right>150</ion-icon>\n              </ion-range>\n            </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <ion-list-header>\n                Pulso Gira:\n                <ion-badge  item-end>{{ ((pulso_g == null? 0 : (pulso_g-10)/140)*100).toPrecision(3)+ "%"}}</ion-badge>\n              </ion-list-header>\n              <ion-item>\n                <ion-range min="10" max="150" pin="true"  style=" color:black"  [(ngModel)]="pulso_g">\n                  <ion-icon range-left small>10</ion-icon>\n                  <ion-icon range-right>150</ion-icon>\n                </ion-range>\n              </ion-item>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                  Garra:\n                  <ion-badge  item-end>{{ ((garra == null? 0 : (garra-80)/70)*100).toPrecision(3)+ "%"}}</ion-badge>\n                </ion-list-header>\n                <ion-item>\n                  <ion-range min="80" max="150" pin="true"  style=" color:black" [(ngModel)]="garra">\n                    <ion-icon range-left small>80</ion-icon>\n                    <ion-icon range-right>150</ion-icon>\n                  </ion-range>\n                </ion-item>\n              </ion-list>\n\n              <ion-list>\n                <ion-list-header>\n                  Velocidade:\n                  <ion-badge item-end color="danger">{{MostrarVelocidade() == "" ? "Lenta" : MostrarVelocidade()}}</ion-badge>\n                </ion-list-header>\n                <ion-item>\n                  <ion-range min="0" max="2" step="1" snaps="true" [(ngModel)]="velocidade" >\n                    <ion-icon range-left small color="secondary" name="remove"></ion-icon>\n                    <ion-icon range-right color="danger" name="add"></ion-icon>\n                  </ion-range>\n                </ion-item>\n             \n              </ion-list>\n              \n                <ion-list>\n                    \n                  <ion-item>\n                    <button ion-button round small color="dark" (click)="dominio()">Domínio</button> \n                    <button ion-button round small color="secondary" (click)="enviarDados()">Enviar</button>\n                 </ion-item>\n                </ion-list>\n                \n                \n\n\n  </ion-content>\n  \n  <style>\n    ion-list + ion-list {\n      margin-top: 0;\n    }\n  </style>'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\control\control.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _d || Object])
    ], ControlPage);
    return ControlPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=control.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        HomePage_1;
    }
    HomePage_1 = HomePage;
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n  <h2>Controlador de Braço Mecânico</h2>\n  <p>\n  Este aplicativo tem por finalidade controlar um braço mecânico através dos smartphones dos\n  usuários das plataformas android, iOS e Windows.\n </p>\n\n <img src="/assets/imgs/img.png"  height="230" width="230" class="logo">\n\n  <p>\n  Após o usuário informar esses dados, deve-se clicar em enviar e observar a movimentação do braço conforme\n  os parâmetros informados.\n  </p>\n\n  <!-- <p>\n    Entre com Domínio especifico:\n    </p>\n  <button ion-button block color="dark" (click)="dominio()">Domínio</button> -->\n</ion-content>\n'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_control_control__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HTTP } from '@ionic-native/http';
// import { Http, Headers, RequestOptions } from '@angular/http';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_control_control__["a" /* ControlPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_control_control__["a" /* ControlPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map