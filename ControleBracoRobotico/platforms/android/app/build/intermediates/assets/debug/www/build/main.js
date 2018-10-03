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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ControlPage = /** @class */ (function () {
    function ControlPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ControlPage.prototype.onChange = function (ev) {
        console.log('Changed', ev);
    };
    ControlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ControlPage');
    };
    ControlPage.prototype.enviarDados = function () {
        var options = {
            cintura: this.cintura === undefined ? 0 : this.cintura,
            ombro: this.ombro === undefined ? 0 : this.ombro,
            cotovelo: this.cotovelo === undefined ? 0 : this.cotovelo,
            pulso_bd: this.pulso_bd === undefined ? 0 : this.pulso_bd,
            pulso_g: this.pulso_g === undefined ? 0 : this.pulso_g,
            garra: this.garra === undefined ? 0 : this.garra,
            velocidade: this.velocidade === undefined ? 0 : this.velocidade,
            ip: this.ip === undefined ? "" : this.ip
        };
        var parametroFinal = options.cintura + "|" + options.ombro + "|" + options.cotovelo + "|" + options.pulso_bd + "|" + options.pulso_g + "|" + options.garra + "|" + options.velocidade;
        // this.http.get(this.ip+"/", options, function(response) {
        //   // prints 403
        //   console.log(response.status);
        //   //prints Permission denied
        //   console.log(response.error);
        // });
    };
    ControlPage.prototype.MostrarVelocidade = function () {
        var v = this.velocidade;
        if (v != null) {
            if (v == "1") {
                return "Lenta";
            }
            else if (v == "2") {
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
    ControlPage.prototype.VelocidadeVal = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                console.log('Radio data:', data);
                _this.RadioOpen = false;
                _this.velocidade = data;
            }
        });
        alert.present().then(function () {
            _this.RadioOpen = true;
        });
    };
    ControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-control',template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\control\control.html"*/'<!--\n  Generated template for the ControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Controle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content no-scroll"  >\n\n  \n    <ion-list>\n      <ion-list-header>\n        Cintura:\n        <ion-badge  item-end>{{ ((cintura == null? 0 : (cintura-10)/100)*100).toPrecision(3)+ "%"}}</ion-badge>\n      </ion-list-header>\n      <ion-item>\n        <label for="teste">aa</label>\n        <ion-range min="10" max="110" pin="true"  style=" color:black" [(ngModel)]="cintura">\n          <ion-icon range-left small>10</ion-icon>\n          <ion-icon range-right>110</ion-icon>\n        </ion-range>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list>\n        <ion-list-header>\n          Ombro:\n          <ion-badge  item-end>{{ ((ombro == null? 0 : (ombro-50)/90)*100).toPrecision(3)+ "%"}}</ion-badge>\n        </ion-list-header>\n        <ion-item>\n          <ion-range min="50" max="140" pin="true"  style=" color:black"  [(ngModel)]="ombro">\n            <ion-icon range-left small>50</ion-icon>\n            <ion-icon range-right>140</ion-icon>\n          </ion-range>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n          <ion-list-header>\n            Cotovelo:\n            <ion-badge  item-end>{{ ((cotovelo == null? 0 : (cotovelo-50)/120)*100).toPrecision(3)+ "%"}}</ion-badge>\n          </ion-list-header>\n          <ion-item>\n            <ion-range min="50" max="170" pin="true"  style=" color:black"  [(ngModel)]="cotovelo">\n              <ion-icon range-left small>50</ion-icon>\n              <ion-icon range-right>170</ion-icon>\n            </ion-range>\n          </ion-item>\n        </ion-list>\n  \n        <ion-list>\n            <ion-list-header>\n              Pulso Sobe-Desce:\n              <ion-badge  item-end>{{ ((pulso_bd == null? 0 : (pulso_bd-10)/140)*100).toPrecision(3)+ "%"}}</ion-badge>\n            </ion-list-header>\n            <ion-item>\n              <ion-range min="10" max="150" pin="true"  style=" color:black"  [(ngModel)]="pulso_bd">\n                <ion-icon range-left small>10</ion-icon>\n                <ion-icon range-right>150</ion-icon>\n              </ion-range>\n            </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <ion-list-header>\n                Pulso Gira:\n                <ion-badge  item-end>{{ ((pulso_g == null? 0 : (pulso_g-10)/140)*100).toPrecision(3)+ "%"}}</ion-badge>\n              </ion-list-header>\n              <ion-item>\n                <ion-range min="10" max="150" pin="true"  style=" color:black"  [(ngModel)]="pulso_g">\n                  <ion-icon range-left small>10</ion-icon>\n                  <ion-icon range-right>150</ion-icon>\n                </ion-range>\n              </ion-item>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                  Garra:\n                  <ion-badge  item-end>{{ ((garra == null? 0 : (garra-80)/70)*100).toPrecision(3)+ "%"}}</ion-badge>\n                </ion-list-header>\n                <ion-item>\n                  <ion-range min="80" max="150" pin="true"  style=" color:black" [(ngModel)]="garra">\n                    <ion-icon range-left small>80</ion-icon>\n                    <ion-icon range-right>150</ion-icon>\n                  </ion-range>\n                </ion-item>\n              </ion-list>\n\n              <ion-list>\n                  <ion-list-header>\n                      Velocidade:\n                      <ion-badge  item-end>{{MostrarVelocidade()}}</ion-badge>\n                    </ion-list-header>\n                  <ion-item>\n                      <button ion-button block color="danger" (click)="VelocidadeVal()">Velocidade</button>\n                 </ion-item>\n                </ion-list>\n  \n                <ion-list>\n                  <ion-list-header>\n                      Domínio Ip:\n                    </ion-list-header>\n                  <ion-item>\n                    <input type="text"  id="adhonay" [(ngModel)]="ip">\n                    <button ion-button class="BotaoEnviar" color="secondary" (click)="enviarDados()">Enviar</button>\n                 </ion-item>\n                </ion-list>\n                \n                \n\n\n  </ion-content>\n  \n  <style>\n    ion-list + ion-list {\n      margin-top: 0;\n    }\n  </style>'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\control\control.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], ControlPage);
    return ControlPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=control.js.map

/***/ }),

/***/ 195:
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n  <h2>Controlador de Braço Mecânico</h2>\n  <p>\n  Este aplicativo tem por finalidade controlar um braço mecânico através dos smartphones dos\n  usuários das plataformas android, iOS e Windows.\n  Para controlar o braço mecânico é necessários informar alguns dados que serão enviados\n  via bluetooth para o braço.\n </p>\n\n <img src="/assets/imgs/img.png"  height="230" width="230" class="logo">\n\n  <p>\n  Após o usuário informar esses dados, deve-se clicar em enviar e observar a movimentação do braço conforme\n  os parâmetros informados.\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"D:\Users\I$ync\Documents\ROBOTICA\ControleBracoRobotico-master\Controle-Braco-Robotico\Controle-Braco-Robotico\ControleBracoRobotico\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_control_control__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










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
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
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

/***/ 262:
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

},[196]);
//# sourceMappingURL=main.js.map