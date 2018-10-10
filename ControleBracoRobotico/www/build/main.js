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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// import { ResourceLoader } from '@angular/compiler';
var ControlPage = /** @class */ (function () {
    function ControlPage(navCtrl, navParams, events, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.http = http;
        //contador de posicoes salvas
        this.contadorPosicao = 0;
        this.sequencia = [];
        // receber dados do ip, da outra tab
        events.subscribe('data:created', function (data) {
            _this.ip = data;
        });
    }
    ControlPage.prototype.onChange = function (ev) {
    };
    //sempre q entrar na view mostrar tudo:
    ControlPage.prototype.ionViewDidEnter = function () {
    };
    ControlPage.prototype.getOpcoes = function () {
        return {
            cintura: this.cintura === undefined ? 10 : this.cintura,
            ombro: this.ombro === undefined ? 50 : this.ombro,
            cotovelo: this.cotovelo === undefined ? 50 : this.cotovelo,
            pulso_bd: this.pulso_bd === undefined ? 10 : this.pulso_bd,
            pulso_g: this.pulso_g === undefined ? 10 : this.pulso_g,
            garra: this.garra === undefined ? 80 : this.garra,
            velocidade: this.velocidade === undefined ? 0 : this.velocidade,
            ip: this.ip === undefined ? "" : this.ip
        };
    };
    ControlPage.prototype.enviarDados = function () {
        var _this = this;
        var options = this.getOpcoes();
        if (options.ip === "") {
            var alert_1 = this.alertCtrl.create({
                title: 'Domínio não preencido',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var _loop_1 = function (i) {
                parametroFinal = this_1.sequencia[i];
                new Promise(function (resolve, reject) {
                    _this.http.get(options.ip + "/request/" + parametroFinal + "|255", {})
                        .toPromise()
                        .then(function (response) {
                        _this.delay(3 * 1000);
                        if (i == _this.sequencia.length - 1) {
                            _this.showMsg("Sequencia enviada com sucesso! Iniciando movimentação");
                        }
                    })
                        .catch(function (error) {
                        if (i == _this.sequencia.length - 1) {
                            _this.showMsg('Erro ao enviar sequencia!');
                        }
                    });
                });
            };
            var this_1 = this, parametroFinal;
            //variavel que trata os valores recebido do front(em tempo real) 
            //  var parametroFinal = options.cintura + "|" + options.ombro + "|" + options.cotovelo + "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
            for (var i = 0; i < this.sequencia.length; i++) {
                _loop_1(i);
            }
        }
    };
    ControlPage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(ms >= 2)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        alert_2 = this.alertCtrl.create({
                            title: 'Valor minimo 2 segundos!',
                            buttons: ['OK']
                        });
                        alert_2.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ControlPage.prototype.showMsg = function (msg) {
        var alert = this.alertCtrl.create({ title: msg, buttons: ['OK'] });
        alert.present();
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
    /* Salvar uma posicao do braco na sequencia.
     */
    ControlPage.prototype.gravarPosicao = function () {
        if (this.contadorPosicao != 6) {
            var options = this.getOpcoes();
            var posicao = options.cintura + "|" + options.ombro + "|" + options.cotovelo +
                "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
            this.sequencia.push(posicao);
            this.increaseContador();
        }
    };
    ControlPage.prototype.removerPosicao = function () {
        if (this.sequencia.length >= 1) {
            this.sequencia.shift();
            this.contadorPosicao--;
        }
    };
    ControlPage.prototype.increaseContador = function () {
        return this.contadorPosicao != 6 ?
            this.contadorPosicao++
            : this.contadorPosicao;
    };
    ControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-control',template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\control\control.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Controle</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="outer-content no-scroll">\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Cintura:\n\n      <ion-badge item-end>{{ ((cintura == null? 0 : (cintura-10)/100)*100).toPrecision(3)+ "%"}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <label for="teste">aa</label>\n\n      <ion-range min="10" max="110" pin="true" style=" color:black" [(ngModel)]="cintura">\n\n        <ion-icon range-left small>10</ion-icon>\n\n        <ion-icon range-right>110</ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Ombro:\n\n      <ion-badge item-end>{{ ((ombro == null? 0 : (ombro-50)/90)*100).toPrecision(3)+ "%"}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-range min="50" max="140" pin="true" style=" color:black" [(ngModel)]="ombro">\n\n        <ion-icon range-left small>50</ion-icon>\n\n        <ion-icon range-right>140</ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Cotovelo:\n\n      <ion-badge item-end>{{ ((cotovelo == null? 0 : (cotovelo-50)/120)*100).toPrecision(3)+ "%"}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-range min="50" max="170" pin="true" style=" color:black" [(ngModel)]="cotovelo">\n\n        <ion-icon range-left small>50</ion-icon>\n\n        <ion-icon range-right>170</ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Pulso Sobe-Desce:\n\n      <ion-badge item-end>{{ ((pulso_bd == null? 0 : (pulso_bd-10)/140)*100).toPrecision(3)+ "%"}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-range min="10" max="150" pin="true" style=" color:black" [(ngModel)]="pulso_bd">\n\n        <ion-icon range-left small>10</ion-icon>\n\n        <ion-icon range-right>150</ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Pulso Gira:\n\n      <ion-badge item-end>{{ ((pulso_g == null? 0 : (pulso_g-10)/140)*100).toPrecision(3)+ "%"}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-range min="10" max="150" pin="true" style=" color:black" [(ngModel)]="pulso_g">\n\n        <ion-icon range-left small>10</ion-icon>\n\n        <ion-icon range-right>150</ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Garra:\n\n      <ion-badge item-end>{{ ((garra == null? 0 : (garra-80)/70)*100).toPrecision(3)+ "%"}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-range min="80" max="150" pin="true" style=" color:black" [(ngModel)]="garra">\n\n        <ion-icon range-left small>80</ion-icon>\n\n        <ion-icon range-right>150</ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Velocidade:\n\n      <ion-badge item-end color="danger">{{MostrarVelocidade() == "" ? "Lenta" : MostrarVelocidade()}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-range min="0" max="2" step="1" snaps="true" [(ngModel)]="velocidade">\n\n        <ion-icon range-left small color="secondary" name="remove"></ion-icon>\n\n        <ion-icon range-right color="danger" name="add"></ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button full outline (click)="gravarPosicao()">Gravar posição</button> <br>\n\n     <p class = "botoes" *ngIf="contadorPosicao != 6 ">\n\n        {{contadorPosicao}} de 6 Sequências gravadas.\n\n      </p>\n\n      <p class ="botoes" *ngIf="contadorPosicao == 6 ">\n\n          Máximo de sequência atingidas! \n\n        </p>\n\n    <button ion-button full outline (click)="removerPosicao()">Remover posição</button> <br>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n\n\n  <ion-item>\n\n       <!-- <button ion-button round small color="dark" (click)="dominio()">Domínio</button>  -->\n\n      <!-- <button ion-button round small color = "secondary">Gravar posição</button> -->\n\n     <!-- <button ion-button medium icon-only color="secondary" >\n\n        <ion-icon name="cloud-upload"></ion-icon>\n\n      </button> -->\n\n      <div class="botoes">\n\n\n\n      <button ion-button medium icon-only color="dark" round large (click)="enviarDados()">\n\n        <ion-icon name="play"></ion-icon>\n\n      </button>\n\n      </div>\n\n      <!-- <button ion-button medium icon-only color="secondary" >\n\n        <ion-icon name="search"></ion-icon>\n\n      </button> -->\n\n      <!-- <button ion-button round small color="secondary" (click)="enviarDados()">Executar sequência</button> -->\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n</ion-content>\n\n\n\n<style>\n\n  ion-list+ion-list {\n\n    margin-top: 0;\n\n  }\n\n</style>'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\control\control.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ControlPage);
    return ControlPage;
}());

//# sourceMappingURL=control.js.map

/***/ }),

/***/ 197:
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
    function HomePage(navCtrl, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        HomePage_1;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.send = function (data) {
        this.events.publish('data:created', data);
    };
    HomePage.prototype.setDominio = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.ip = JSON.stringify(data.ip).replace('"', '').replace('"', '');
                        _this.send(_this.ip);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="no-scroll" >\n\n  <h2>Controlador de Braço Mecânico</h2>\n\n  <p>\n\n  Este aplicativo tem por finalidade controlar um braço mecânico através dos smartphones dos\n\n  usuários das plataformas Android, iOS e Windows.\n\n </p>\n\n\n\n <img text-center src="/assets/imgs/img.png"  height="230" width="230" class="logo">\n\n\n\n  <p>\n\n  Após o usuário informar esses dados, deve-se clicar em enviar e observar a movimentação do braço conforme\n\n  os parâmetros informados.\n\n  </p>\n\n\n\n   <p>\n\n    Entre com Domínio especifico:\n\n    </p>\n\n  <button ion-button block color="dark"  round medium (click)="setDominio()">Domínio</button> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_control_control__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_control_control__["a" /* ControlPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map