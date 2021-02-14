webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the BadgesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BadgesPage = /** @class */ (function () {
    function BadgesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BadgesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BadgesPage');
    };
    BadgesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-badges',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/badges/badges.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>badges</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        Claude Debussy\n      </ion-card-title>\n      <p>\n        From the 1890s Debussy began to develop his own musical language,\n        which was largely independent of Wagner’s style, coloured in\n        part from the dreamy,sometimes morbid romanticism of the Symbolist movement.\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon name="musical-notes" item-start style="color:#d03e84"></ion-icon>\n      Albums\n      <ion-badge item-end>9</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-teitter" item-start style="color:#55acee" ></ion-icon>\n      Followers\n      <ion-badge item-end>260k</ion-badge>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/badges/badges.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BadgesPage);
    return BadgesPage;
}());

//# sourceMappingURL=badges.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxPage = /** @class */ (function () {
    function CheckboxPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckboxPage');
    };
    CheckboxPage.prototype.updateAzeitona = function () {
        console.log("O item Azeitona foi atualizado : " + this.azeitona);
    };
    CheckboxPage.prototype.updateMartini = function () {
        console.log("O item Martini foi atualizado : " + this.martini);
    };
    CheckboxPage.prototype.updateManhattan = function () {
        console.log("O item Manhattan foi atualizado : " + this.manhattan);
    };
    CheckboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkbox',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/checkbox/checkbox.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>checkbox</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>Azeitona</ion-label>\n      <ion-checkbox [(ngModel)] ="azeitona" (ionChange)="updateAzeitona()"></ion-checkbox>\n    </ion-item>\n\n     <ion-item>\n      <ion-label>Martini</ion-label>\n      <ion-checkbox [(ngModel)] ="martini" (ionChange)="updateMartini()"></ion-checkbox>\n    </ion-item>\n\n     <ion-item>\n      <ion-label>Manhattan</ion-label>\n      <ion-checkbox [(ngModel)] ="manhattan" (ionChange)="updateManhattan()"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/checkbox/checkbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CheckboxPage);
    return CheckboxPage;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardsPage = /** @class */ (function () {
    function CardsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardsPage');
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/cards/cards.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>cards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Pink Floyd\n    </ion-card-header>\n    <ion-card-content>\n      Pink Floyd performed at the London Live 8 concert with Roger Waters rejoining David Gilmour,Nick Mason and Richard Wright. It was the quartet’s first\nperformance together in over 24 years\n— the band’s last show with Waters was at Earls Court in London on\n17 June 1981.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/cards/cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputsPage = /** @class */ (function () {
    function InputsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = "";
        this.senha = "";
        this.mensagem = "";
    }
    InputsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputsPage');
    };
    InputsPage.prototype.enviar = function (campoLogin, campoSenha) {
        this.login = campoLogin;
        this.senha = campoSenha;
        this.mensagem = 'Seus dados foram enviados';
    };
    InputsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inputs',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/inputs/inputs.html"*/'<\n<ion-header>\n  <ion-navbar>\n    <ion-title>inputs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Usuário"  [(ngModel)]="campoLogin"> </ion-input>\n    </ion-item>\n\n    <ion-item>\n     <ion-input type="password" placeholder="Senha" [(ngModel)] ="campoSenha"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button (click)="enviar(campoLogin, campoSenha)" outline>Enviar</button>\n\n  <p> {{campoLogin}} </p>\n  <p>{{mensagem}}</p>\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/inputs/inputs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InputsPage);
    return InputsPage;
}());

//# sourceMappingURL=inputs.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListsPage = /** @class */ (function () {
    function ListsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListsPage');
    };
    ListsPage.prototype.enviar = function (item) {
        console.log("item Selecionado : ", item);
    };
    ListsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lists',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/lists/lists.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>lists</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item (click)="enviar(\'Saturno Planet\')">\n      <ion-icon name=\'planet\'></ion-icon>\n        Saturno Planet\n    </ion-item>\n\n    <ion-item (click)="enviar(\'Android\')">\n      <ion-icon name=\'logo-android\'></ion-icon>\n        Android\n    </ion-item>\n\n    <ion-item (click)="enviar(\'Apple\')">\n      <ion-icon name=\'logo-apple\'></ion-icon>\n        Apple\n    </ion-item>\n\n    <ion-item (click)="enviar(\'Contatos\')">\n      <ion-icon name=\'contacts\'></ion-icon>\n        Contatos\n    </ion-item>\n\n    <ion-item (click)="enviar(\'Bicicleta\')">\n      <ion-icon name=\'bicycle\'></ion-icon>\n        Bicicleta\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/lists/lists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListsPage);
    return ListsPage;
}());

//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the RangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RangePage = /** @class */ (function () {
    function RangePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RangePage');
    };
    RangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-range',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/range/range.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>range</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-list-header>\n      Ajuste os controles\n    </ion-list-header>\n\n    <ion-item>\n      <ion-range [(ngModel)] ="brightness">\n        <ion-icon range-left small name="sunny"></ion-icon>\n        <ion-icon range-right name="sunny"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-range\n      min="-200"\n      max="200" pin="true"\n      [(ngModel)] = "contrast"\n      color ="secondary">\n        <ion-icon range-left small name="contrast"></ion-icon>\n        <ion-icon range-right name="contrast"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-range\n      dualKnobs="false"\n      pin="true"\n      [(ngModel)] ="structure"\n      color="dark">\n        <ion-icon range-left small name="brush"></ion-icon>\n        <ion-icon range-right name="brush"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-range\n        min="1000" max="2000" step="100"\n        snaps="true"\n        [(ngModel)] = "warmth" color = "danger">\n\n        <ion-icon range-left small color="danger" name="thermometer"></ion-icon>\n        <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/range/range.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RangePage);
    return RangePage;
}());

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastPage = /** @class */ (function () {
    function ToastPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ToastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToastPage');
    };
    ToastPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: "Mmm, buttered toast",
            duration: 2000,
            position: position
        });
        toast.present(toast);
    };
    ToastPage.prototype.showToastWithCloseButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Your files were successfully saved',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ToastPage.prototype.showLongToast = function () {
        var toast = this.toastCtrl.create({
            message: "Mmm, buttered toast",
            duration: 2000
        });
        toast.present();
    };
    ToastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toast',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/toast/toast.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>toast</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block (click)="showToast(\'top\')">Show Toast Top\nPosition</button>\n<button ion-button block (click)="showToast(\'middle\')">Show Toast\nMiddle Position</button>\n<button ion-button block (click)="showToast(\'bottom\')">Show Toast\nBottom Position</button>\n<button ion-button block (click)="showLongToast()">Show Long Toast</button>\n\n<button ion-button block (click)="showToastWithCloseButton()">Show\nToast W/ Close Button</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/toast/toast.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastPage);
    return ToastPage;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TogglesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the TogglesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TogglesPage = /** @class */ (function () {
    function TogglesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TogglesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TogglesPage');
    };
    TogglesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toggles',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/toggles/toggles.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>toggles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n<ion-list-header>\nConfiguração\n</ion-list-header>\n<ion-item>\n<ion-label>Rodas de liga leve</ion-label>\n<ion-toggle value="foo" checked="true"></ion-toggle>\n</ion-item>\n<ion-item>\n<ion-label>Teto Solar</ion-label>\n<ion-toggle color="energized"></ion-toggle>\n</ion-item>\n<ion-item>\n<ion-label>Freios ABS</ion-label>\n<ion-toggle color="danger" checked="true"></ion-toggle>\n</ion-item>\n<ion-item>\n\n<ion-label>Airbag Cortina</ion-label>\n<ion-toggle color="royal" checked="true"></ion-toggle>\n</ion-item>\n<ion-item>\n<ion-label>Frigobar</ion-label>\n<ion-toggle color="danger"></ion-toggle>\n</ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/toggles/toggles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TogglesPage);
    return TogglesPage;
}());

//# sourceMappingURL=toggles.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alerts/alerts.module": [
		277,
		20
	],
	"../pages/badges/badges.module": [
		278,
		19
	],
	"../pages/cards/cards.module": [
		280,
		18
	],
	"../pages/checkbox/checkbox.module": [
		279,
		17
	],
	"../pages/inputs/inputs.module": [
		281,
		16
	],
	"../pages/lists/lists.module": [
		282,
		15
	],
	"../pages/principal/principal.module": [
		286,
		11
	],
	"../pages/range/range.module": [
		283,
		14
	],
	"../pages/toast/toast.module": [
		284,
		13
	],
	"../pages/toggles/toggles.module": [
		285,
		12
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(287);
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
    function HomePage(navCtrl, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */];
    }
    HomePage.prototype.novaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n  <button ion-button menuToggle>\n    <ion-icon name="menu">\n    </ion-icon>\n  </button>\n\n  <ion-title>\n  Exemplos Componentes\n  </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Pagina Home do projeto.\n  <p>Teste Navegação</p>\n  <br>\n  <button ion-button [navPush]="pushPage" [navParams]="params">\n    Principal com nav Push</button>\n    <br>\n  <button ion-button color="dark" (click)="novaPagina">Principal com NavController</button>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="secondary">\n    <ion-title>Rodapé</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alerts_alerts__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inputs_inputs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_checkbox_checkbox__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cards_cards__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_range_range__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_toast_toast__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_badges_badges__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_toggles_toggles__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_principal_principal__ = __webpack_require__(287);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inputs_inputs__["a" /* InputsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__["a" /* ListsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_checkbox_checkbox__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_range_range__["a" /* RangePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_toast_toast__["a" /* ToastPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_badges_badges__["a" /* BadgesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_toggles_toggles__["a" /* TogglesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_principal_principal__["a" /* PrincipalPage */]
            ], imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alerts/alerts.module#AlertsPageModule', name: 'AlertsPage', segment: 'alerts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/badges/badges.module#BadgesPageModule', name: 'BadgesPage', segment: 'badges', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkbox/checkbox.module#CheckboxPageModule', name: 'CheckboxPage', segment: 'checkbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inputs/inputs.module#InputsPageModule', name: 'InputsPage', segment: 'inputs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lists/lists.module#ListsPageModule', name: 'ListsPage', segment: 'lists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/range/range.module#RangePageModule', name: 'RangePage', segment: 'range', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toast/toast.module#ToastPageModule', name: 'ToastPage', segment: 'toast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toggles/toggles.module#TogglesPageModule', name: 'TogglesPage', segment: 'toggles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inputs_inputs__["a" /* InputsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__["a" /* ListsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_checkbox_checkbox__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_range_range__["a" /* RangePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_toast_toast__["a" /* ToastPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_badges_badges__["a" /* BadgesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_toggles_toggles__["a" /* TogglesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_principal_principal__["a" /* PrincipalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_alerts_alerts__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inputs_inputs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lists_lists__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_checkbox_checkbox__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_range_range__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_toast_toast__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_badges_badges__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_toggles_toggles__ = __webpack_require__(107);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you mightneed.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Alerts', component: __WEBPACK_IMPORTED_MODULE_5__pages_alerts_alerts__["a" /* AlertsPage */] },
            { title: 'Inputs', component: __WEBPACK_IMPORTED_MODULE_6__pages_inputs_inputs__["a" /* InputsPage */] },
            { title: 'Lists', component: __WEBPACK_IMPORTED_MODULE_7__pages_lists_lists__["a" /* ListsPage */] },
            { title: 'CheckBox', component: __WEBPACK_IMPORTED_MODULE_8__pages_checkbox_checkbox__["a" /* CheckboxPage */] },
            { title: 'Cards', component: __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__["a" /* CardsPage */] },
            { title: 'Range', component: __WEBPACK_IMPORTED_MODULE_10__pages_range_range__["a" /* RangePage */] },
            { title: 'Toast', component: __WEBPACK_IMPORTED_MODULE_11__pages_toast_toast__["a" /* ToastPage */] },
            { title: 'Badges', component: __WEBPACK_IMPORTED_MODULE_12__pages_badges_badges__["a" /* BadgesPage */] },
            { title: 'Toggles', component: __WEBPACK_IMPORTED_MODULE_13__pages_toggles_toggles__["a" /* TogglesPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/app/app.html"*/'\n<ion-menu [content]=\'content\'>\n<ion-header>\n<ion-toolbar>\n<ion-title>Menu</ion-title>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list>\n<button ion-item *ngFor=\'let page of pages\'\n(click)=\'openPage(page)\' menuClose>\n{{page.title}}\n</button>\n</ion-list>\n</ion-content>\n</ion-menu>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    PrincipalPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/principal/principal.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>principal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button color="secondary" round navPop>Voltar com navPop</button>\n  <br>\n  <button ion-button color="danger" (click)="voltar()" >Voltar com NavController</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/principal/principal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], PrincipalPage);
    return PrincipalPage;
    var _a, _b;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertsPage = /** @class */ (function () {
    function AlertsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = '';
    }
    AlertsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertsPage');
    };
    AlertsPage.prototype.mostrarAlert = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "prompt",
            message: "Digite seu nome",
            inputs: [
                {
                    name: "nome",
                    placeholder: "Nome"
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    handler: function (data) {
                        console.log("Clicou no Cancelar");
                    }
                },
                {
                    text: "Entrar",
                    handler: function (data) {
                        _this.user = "Bem vindo " + data.nome + "!";
                        console.log("Clicou Entrar");
                    }
                }
            ]
        });
        prompt.present();
    };
    AlertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerts',template:/*ion-inline-start:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/alerts/alerts.html"*/'<!--\n  Generated template for the AlertsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>alerts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<button ion-button color = "dark" (click)="mostrarAlert()"\n round> Mostrar Alert </button>\n  <p>{{user}}</p>\n </ion-content>\n\n\n'/*ion-inline-end:"/home/savinnsk/Downloads/im/DevStudies/activityBooks/devMobileCollege/dev/appmenu/src/pages/alerts/alerts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertsPage);
    return AlertsPage;
}());

//# sourceMappingURL=alerts.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map