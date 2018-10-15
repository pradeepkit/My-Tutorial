(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n    <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/service/service.component */ "./src/app/components/service/service.component.ts");
/* harmony import */ var _components_training_training_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/training/training.component */ "./src/app/components/training/training.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_training_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// SERVICES 


//import { AuthService } from './services/auth.service';
//import { AuthGuard } from './guards/auth.guard';

var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'service', component: _components_service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"] },
    { path: 'team', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"] },
    { path: 'training', component: _components_training_training_component__WEBPACK_IMPORTED_MODULE_10__["TrainingComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] /* ,canActivate:[AuthGuard]*/ },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"] /*, canActivate:[AuthGuard]*/ }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
                _components_service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"],
                _components_training_training_component__WEBPACK_IMPORTED_MODULE_10__["TrainingComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                _services_training_service__WEBPACK_IMPORTED_MODULE_18__["TrainingService"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_19__["ValidateService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about{\r\n    padding: 60px 0 60px;\r\n    height: 700px;\r\n}\r\n.about h1{\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: white;\r\n}\r\n.bgimg{\r\n\tbackground-image: url('banner1.png');\r\n\twidth: 100%;\r\n\tbackground-size: 100% 100%;\r\n\theight: 660px;\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n.about h2{\r\n    text-align: justify;\r\n    padding: 50px 0 60px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"about bgimg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 mx-auto text-center\">\n        <h1 class=\"section-heading\">About Us</h1>\n        <h2 class=\"text-warning \">Enabling Meaningful Skill Upgrade on the Technologies in demand by IT Services sector. The program right now offers \"Full Stack Development\" track, which includes various topics across Foundation, Front-End, Backend technologies.</h2>\n        <a class=\"btn btn-success getstart text-white btn-lg text-uppercase\" [routerLink] = \"['/register']\">Get Started!</a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.contact{\r\n\tcolor: white;\r\n\r\n}\r\n.contact h1{\r\n\tfont-size: 50px;\r\n\tfont-weight: bold;\r\n}\r\nlabel{\r\n\ttext-transform: uppercase;\r\n\tfont-weight: bold;\r\n}\r\n.bgimg{\r\n\tbackground-image: url('banner1.png');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-attachment: fixed;\r\n\tbackground-size: 100% 100%;\r\n\t\r\n\tpadding: 60px 0px 60px;\r\n\theight: 700px;\r\n}\r\nbutton{\r\n\tfont-weight: bold;\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bgimg \">\n    <div class=\"container contact  text-center\">\n      <h1 class=\"text-uppercase\">Contect</h1>\n      <p>For queries or request related to our services - feel free to write to us at </p>\n      <div class=\"row text-left\">\n        <div class=\"col-lg-12 col-md-12 col-sm-10 col-12 d-block m-auto\">\n            <form (submit)=\"onContactSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Full Name :</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" placeholder=\"Full Name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email :</label>\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email\" name=\"email\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"comment\">Comments :</label>\n                    <textarea class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" rows=\"5\"></textarea>\n                </div>\n                <div>\n                  <button type=\"submit\" class=\"btn btn-warning btn-lg \">Submit</button>\n                </div>\n            </form>\n              \n        </div>\n        \n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(validateService, router) {
        this.validateService = validateService;
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onContactSubmit = function () {
        var user = {
            name: this.name,
            email: this.email,
            comment: this.comment
        };
        // Require Fields 
        if (!this.validateService.validateContact(user)) {
            alert('Please fill in all fields');
        }
        //  Validate Email 
        if (!this.validateService.validateEmail(user.email)) {
            alert('Please use a valid email ');
        }
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n\theight:60px;\r\n}\r\n.footer h6{\r\n\tline-height: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-dark text-white\">\n  <h6 class=\"text-center\">A stopover for Meaningful Skill Upgrades in Web Technologies and Digital Marketing   <i>Sitemap</i> </h6>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgimg{\r\n\tbackground-image: url('banner1.png');\r\n\twidth: 100%;\r\n\tbackground-size: 100% 100%;\r\n\theight: 660px;\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n\r\n}\r\n.headerset{\r\n\tpadding-top: 100px;\r\n\tbox-sizing: border-box;\r\n}\r\n.headerset h2{\r\n\tfont-size: 42px;\r\n}\r\n.headerset h1{\r\n\tfont-size: 60px;\r\n\tfont-weight: bold;\r\n}\r\n.headerset button{\r\n\tmargin-top: 10px;\r\n}\r\n.regbtn{\r\n\tpadding: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n  <div class=\"bgimg\">\n    <div class=\"container text-center text-white headerset\">\n      <h2>Welcome To Our FSD Program </h2>\n      <h1>It's Great plateform to learn yourself</h1>\n      <div class=\"regbtn\">\n       <a class=\"btn btn-warning text-white btn-lg text-uppercase \" [routerLink] = \"['register']\">Register</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.bgimg{\r\n    background-image: url('banner1.png');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.login{\r\n    padding: 60px 0 60px;\r\n    height: 700;\r\n}\r\n\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n\r\n/*\r\n * Card component\r\n */\r\n\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.btn.btn-login {\r\n    \r\n    background-color: rgb(104, 145, 162);\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n}\r\n\r\n.btn.btn-login:hover,\r\n.btn.btn-login:active,\r\n.btn.btn-login:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg\">\n<div class=\" login \">\n  <div class=\"card card-container\">\n    <h1 class=\"page-header text-center\"> Login</h1>\n    <form (submit)=\"onLoginSubmit()\"> \n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required autofocus>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]= \"password\" name=\"password\" required autofocus>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n          <label>\n              <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-login\" type=\"submit\">Login</button>\n      <a href=\"/login\" class=\"forgot-password\">\n        Forgot the password?\n      </a>\n    </form>\n  <div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AuthService } from '../../services/auth.service';


var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    //private authService: AuthService,
    router, flashMessage) {
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var user = {
            username: this.username,
            password: this.password
        };
        // this.authService.authenticateUser(user).subscribe(data => {
        //     if(data.success) {
        //       this.authService.storeUserData(data.token, data.user);
        //       this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
        //       this.router.navigate(['dashboard']);
        //     } else {
        //       this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        //       this.router.navigate(['login']);
        //     }
        // });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink] = \"['/']\" class=\"navbar-brand font-weight-bold\">DIYSWIM</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsenavbar\"><span class=\"navbar-toggler-icon\"></span></button>\n    </div>\n    <div class=\"collapse navbar-collapse text-center\"  id=\"collapsenavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink] = \"['service']\" class=\"nav-link\">Services</a></li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink] = \"['training']\" class=\"nav-link\">Training</a></li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink] = \"['about']\" class=\"nav-link\">About us</a></li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink] = \"['team']\" class=\"nav-link\">Team</a></li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink] = \"['contact']\" class=\"nav-link\">Contact</a></li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink] = \"['register']\" class=\"nav-link\">Register</a></li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink] = \"['login']\" class=\"nav-link\">Login</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register{\r\n    padding: 60px 0 60px;\r\n    height: 700px;\r\n}\r\n.register h1 {\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n.register label{\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n.bgimg{\r\n    background-image: url('banner1.png');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: 100% 100%;\r\n}\r\ninput {\r\n    font-weight: bold;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bgimg text-white\">\n  <div class=\"container register\">\n    <h1 class=\"page-header text-center\">Register</h1>\n    <form (submit)=\"onRegisterSubmit()\"> \n        \n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-warning \" value=\"Submit\">\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AuthService } from '../../services/auth.service';


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, 
    //private authService: AuthService,
    router, flashMessage) {
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        //   this.authService.registerUser(user).subscribe(data => {
        //   if(data.success) {
        //     this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        //     this.router.navigate(['/login']);
        //   } else {
        //     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //     this.router.navigate(['/register']);
        //   }
        // });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/service/service.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/service/service.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ourservices{\r\n\tpadding: 60px 0px 60px;\r\n\theight: 700px;\r\n}\r\n.ourservices h1{\r\n\tfont-size: 50px;\r\n\tfont-weight: bold;\r\n\ttext-transform: uppercase;\r\n}\r\n.rowsetting{\r\n\tmargin: 80px 0px !important;\r\n}\r\n.imgsetting{\r\n\tborder-radius: 50%;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n}\r\n.fa-line-chart{\r\n\tmargin-top: 25px;\r\n}\r\n.fa-desktop{\r\n\tmargin-top: 25px;\r\n}\r\n.fa-money{\r\n\tmargin-top: 25px;\r\n}\r\n.rowsetting p{\r\n\tpadding: 10px;\r\n\tcolor: #6c757d !important;\r\n\ttext-align: justify;\r\n}\r\n.rowsetting h2{\r\n\tmargin-top: 20px;\r\n\tfont-weight: bold;\r\n\tfont-size: 30px;\r\n}"

/***/ }),

/***/ "./src/app/components/service/service.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/service/service.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container ourservices text-center\">\n    <h1 class=\"text-uppercase\">Services</h1>\n    <p>We are provide Full Stack Development - MSU programs and Learn Digital Marketing & Marketplaces and also learn Crowd Funding</p>\n\n    <div class=\"row rowsetting\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto\">\n        <div class=\"imgsetting d-block m-auto bg-warning\"><i class=\"fa fa-line-chart fa-3x text-white\"></i></div>\n        <h2>Digital Marketing </h2>\n        <p>Learn Digital Marketing of your Services, Values, Brands for Digital Channels – Mobile, Social Media, and Search Engines. Training includes Operations management for Marketplaces for Listing, Selling, Shipping,</p>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto\">\n          <div class=\"imgsetting d-block m-auto bg-warning\"><i class=\"fa fa-desktop fa-3x text-white\"></i></div>\n          <h2>FSD Program </h2>\n          <p>Enabling Meaningful Skill Upgrade on the Technologies in demand by IT Services sector.The advent of new Technologies, faster processing, and cloud-based environments is adding speed to the SDLC. </p>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto\">\n            <div class=\"imgsetting d-block m-auto bg-warning\"><i class=\"fa fa-money fa-3x text-white\"></i></div>\n            <h2>Crowd Funding</h2>\n            <p>Learn the collaborative process to collect less costly funds for your Ideas of Product, Services, and Initiatives. This is an attempt to collate and share everything (What-How-Who-When-Where) about CrowdFunding.</p>\n    </div>\n   </div>\n  </section>"

/***/ }),

/***/ "./src/app/components/service/service.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/service/service.component.ts ***!
  \*********************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/components/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/components/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/team/team.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team{\r\n\theight: 700px;\r\n\tpadding: 60px 0px 60px;\r\n\twidth: 100%;\r\n}\r\n.team h1{\r\n\tfont-size: 50px;\r\n\tfont-weight: bold;\r\n}\r\n.teamsetting{\r\n\tmargin-top: 70px !important;\r\n}"

/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"team\">\n    <div class=\"container text-center\">\n      <h1 class=\"text-uppercase\">Our Amazing team</h1>\n      <p>This is our team members</p>\n      \n      <div class=\"row teamsetting\">\n        <div class=\"col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto\">\n            <figure class=\"figure\">\n               <img src=\"assets/images/team/team-member-1.jpg\" class=\"figure-img img-fluid rounded-circle\" width=\"250px\" height=\"250px\">\n               <figcaption>\n                 <h4>Ravi Bansal</h4>\n                 <p class=\"figure-caption\">Founder & Instructor</p>\n               </figcaption> \n            </figure>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto\">\n            <figure class=\"figure\">\n               <img src=\"assets/images/team/team-member-1.jpg\" class=\"figure-img img-fluid rounded-circle\" width=\"250px\" height=\"200px\">\n               <figcaption>\n                 <h4>Gagan Deep Bagga</h4>\n                 <p class=\"figure-caption\">Instructor and Management</p>\n               </figcaption> \n            </figure>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto\">\n            <figure class=\"figure\">\n               <img src=\"assets/images/team/team-member-3.jpg\" class=\"figure-img img-fluid rounded-circle\" width=\"250px\" height=\"250px\">\n               <figcaption>\n                 <h4>Himali Bansal</h4>\n                 <p class=\"figure-caption\">Director/CEO</p>\n               </figcaption> \n            </figure>\n        </div>\n      </div> \n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/components/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/components/training/training.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/training/training.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".training{\r\n\twidth: 100%;\r\n\theight: 1000px;\r\n\tpadding: 60px 0px 60px;\r\n}\r\n.training h1{\r\n\tfont-size: 50px;\r\n\tfont-weight: bold;\r\n}\r\n.card img{\r\n\twidth: 100%;\r\n\theight:200px;\r\n}\r\n.card{\r\n\tmargin-top: 40px;\r\n}\r\n.card h2{\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n.card{\r\n\twidth: 100%;\r\n\t\r\n}\r\n.card-body{\r\n\r\n\tbackground-color: lightgreen;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/training/training.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/training/training.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"training bg-light\">\n  <div class=\"container text-center\">\n    <h1 class=\"text-uppercase\">Training</h1>\n    <p>This is our program that you learn in FSD - MSU Program</p>\n    \n    <div class=\"row\" >\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto\" *ngFor=\" let r of result\">\n        <div class=\"card\">\n          <img src=\"{{ r.image }}\" class=\"card-img img-fluid\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">{{r.title}}</h2>\n            <p class=\"card-text\">{{r.body}}</p>\n          </div>\n        </div>\n      </div>\n\n      <!--\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto\">\n          <div class=\"card\">\n            <img src=\"assets/images/training/frontend.png\" class=\"card-img img-fluid\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Frontend Technology </h2>\n              <p class=\"card-text\">We are learn Angular.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto\">\n            <div class=\"card\">\n              <img src=\"assets/images/training/backend.jpg\" class=\"card-img img-fluid\">\n              <div class=\"card-body\">\n                <h2 class=\"card-title\">Backend Technology</h2>\n                <p class=\"card-text\">Here We learn Node JS and MongoDB.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto\">\n        <div class=\"card\">\n          <img src=\"assets/images/training/sdlc.jpg\" class=\"card-img img-fluid\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">SDLC Technology</h2>\n            <p class=\"card-text\">learn Software Developement life cycle. </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto\">\n          <div class=\"card\">\n            <img src=\"assets/images/training/project.jpg\" class=\"card-img img-fluid\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Project</h2>\n              <p class=\"card-text\">Here We create a live Project</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto\">\n            <div class=\"card\">\n              <img src=\"assets/images/training/placement.jpg\" class=\"card-img img-fluid\">\n              <div class=\"card-body\">\n                <h2 class=\"card-title\">Placement</h2>\n                <p class=\"card-text\">Chance to Get awesome placement</p>\n              </div>\n            </div>\n          </div>\n          -->\n    </div>\n    \n </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/training/training.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/training/training.component.ts ***!
  \***********************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_training_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/training.service */ "./src/app/services/training.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(_trainingData) {
        this._trainingData = _trainingData;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.result = this._trainingData.data;
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/components/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/components/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [_services_training_service__WEBPACK_IMPORTED_MODULE_1__["TrainingService"]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/services/training.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/training.service.ts ***!
  \**********************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingService = /** @class */ (function () {
    function TrainingService() {
        this.data = [
            {
                image: "../../../assets/images/portfolio/foundation.png",
                title: "Foundation Technology",
                body: "Here learn HTML CSS JavaScript etc.."
            },
            {
                image: "../../../assets/images/portfolio/frontend.png",
                title: "Frontend Technology",
                body: "We are learn Angular."
            },
            {
                image: "../../../assets/images/portfolio/backend.jpg",
                title: "Backend Technology",
                body: "Here We learn Node JS and MongoDB."
            },
            {
                image: "../../../assets/images/portfolio/sdlc.jpg",
                title: "SDLC Technology",
                body: "learn Software Developement life cycle."
            },
            {
                image: "../../../assets/images/portfolio/project.jpg",
                title: "Project",
                body: "Here We create a live Project"
            },
            {
                image: "../../../assets/images/portfolio/placement.jpg",
                title: "Placement",
                body: "Chance to Get awesome placement"
            }
        ];
    }
    TrainingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateContact = function (user) {
        if (user.name == undefined || user.email == undefined || user.comment == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\diyswim\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map