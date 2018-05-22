webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
throw new Error("Cannot find module \"@aaman/main/window.service\"");
throw new Error("Cannot find module \"@aaman/main/loader.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
throw new Error("Cannot find module \"environments/environment\"");
throw new Error("Cannot find module \"@aaman/main/template\"");
throw new Error("Cannot find module \"@aaman/main/user-profile\"");
throw new Error("Cannot find module \"@aaman/main/firm\"");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ApiService = (function () {
    function ApiService(http, windowService, loaderService, notifications) {
        this.http = http;
        this.windowService = windowService;
        this.loaderService = loaderService;
        this.notifications = notifications;
        this.authTokenKey = "auth_token";
    }
    Object.defineProperty(ApiService.prototype, "authToken", {
        get: function () {
            if (!this._authToken) {
                this._authToken = this.windowService.window.localStorage.getItem(this.authTokenKey);
            }
            return this._authToken;
        },
        set: function (authToken) {
            if (!authToken) {
                this._authToken = '';
                this.windowService.window.localStorage.removeItem(this.authTokenKey);
            }
            else {
                this._authToken = authToken;
                this.windowService.window.localStorage.setItem(this.authTokenKey, authToken);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "isLoggedIn", {
        get: function () {
            if (this.authToken)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "headers", {
        get: function () {
            return { headers: { Authorization: this.authToken } };
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.apply = function (obj) {
        var _this = this;
        return obj.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["retry"])(2)).catch(function (err) {
            console.log(err);
            _this.notifications.show('Connection to ther server failed!');
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .finally(function () { return _this.loaderService.hide(); });
    };
    ApiService.prototype.post = function (url, body, extra) {
        if (extra === void 0) { extra = {}; }
        this.loaderService.show();
        if (this.authToken) {
            return this.apply(this.http.post(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url, body, __assign({}, this.headers, extra)));
        }
        else {
            return this.apply(this.http.post(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url, body));
        }
    };
    ApiService.prototype.patch = function (url, body) {
        this.loaderService.show();
        if (this.authToken) {
            return this.apply(this.http.patch(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url, body, this.headers));
        }
        else {
            return this.apply(this.http.patch(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url, body));
        }
    };
    ApiService.prototype.get = function (url) {
        this.loaderService.show();
        if (this.authToken) {
            return this.apply(this.http.get(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url, this.headers));
        }
        else {
            return this.apply(this.http.get(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url));
        }
    };
    ApiService.prototype.delete = function (url) {
        this.loaderService.show();
        return this.apply(this.http.delete(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url, this.headers));
    };
    ApiService.prototype.fileUpload = function (url, key, fileToUpload) {
        this.loaderService.show();
        var formData = new FormData();
        formData.append(key, fileToUpload, fileToUpload.name);
        return this.apply(this.http.post(__WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].apiUrl + url, formData, this.headers));
    };
    ApiService.prototype.uploadProfilePicture = function (fileToUpload) {
        return this.fileUpload("/user/image", "user", fileToUpload);
    };
    ApiService.prototype.deleteProfilePicture = function () {
        return this.delete('/user/image');
    };
    ApiService.prototype.uploadSign = function (fileToUpload) {
        return this.fileUpload("/user/sign", "sign", fileToUpload);
    };
    ApiService.prototype.deleteSign = function () {
        return this.delete('/user/sign');
    };
    ApiService.prototype.uploadFirmLogo = function (fileToUpload) {
        return this.fileUpload("/firm/logo", "logo", fileToUpload);
    };
    ApiService.prototype.deleteFirmLogo = function () {
        return this.delete('/firm/logo');
    };
    ApiService.prototype.extractToken = function (base) {
        var _this = this;
        return base.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (data) {
            if (data.success) {
                _this.authToken = data.token;
                data.token = '';
            }
            return data;
        }));
    };
    ApiService.prototype.signup = function (name, email) {
        var base = this.post('/user/signup', {
            name: name,
            email: email
        });
        return this.extractToken(base);
    };
    ApiService.prototype.login = function (emailOrPhone, password) {
        var base;
        if (emailOrPhone.indexOf('@') != -1) {
            base = this.post("/user/login", { email: emailOrPhone, password: password });
        }
        else
            base = this.post("/user/login", { phone: emailOrPhone, password: password });
        return this.extractToken(base);
    };
    ApiService.prototype.logout = function () {
        this.authToken = '';
    };
    Object.defineProperty(ApiService.prototype, "plans", {
        get: function () {
            return this.get('/plans');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "templates", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([
                new __WEBPACK_IMPORTED_MODULE_12__aaman_main_template__["Template"]("Template 1", "http://www.monsterbeatsstudio.us/download/20039/systemdesigndocument1.gif"),
                new __WEBPACK_IMPORTED_MODULE_12__aaman_main_template__["Template"]("Template 2", "http://www.le-chuang.com/wp-content/uploads/2016/09/business-case-template-businesscase9-SUFOjh.jpg")
            ]);
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.setPlan = function (plan, payment, details) {
        return this.post('/user/plan', {
            planID: plan.id,
            cost: plan.cost,
            paymentID: payment,
            firmName: details.firmName,
            billingAddress: details.billingAddress,
            gstNo: details.GSTIN
        });
    };
    ApiService.prototype.verifyOtp = function (otp) {
        return this.post('/user/verify/mobile', { code: otp });
    };
    ApiService.prototype.setTemplates = function (invoiceTemplate, releaseOrderTemplate, paymentReceiptTemplate) { };
    ApiService.prototype.setMobile = function (phone) {
        return this.post('/user/mobile', { phone: phone });
    };
    ApiService.prototype.getUser = function () {
        return this.get('/user/profile');
    };
    ApiService.prototype.getUserProfile = function () {
        var base = this.get('/user/profile');
        var result = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (data) {
            var profile = new __WEBPACK_IMPORTED_MODULE_13__aaman_main_user_profile__["UserProfile"]();
            if (data.success) {
                profile.name = data.user.name;
                profile.designation = data.user.designation;
                profile.contact = data.user.phone;
                profile.email = data.user.email;
                if (data.user.photo) {
                    profile.photo = __WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].uploadsBaseUrl + data.user.photo;
                }
                if (data.user.signature) {
                    profile.sign = __WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].uploadsBaseUrl + data.user.signature;
                }
                profile.isAdmin = data.user.isAdmin;
                profile.id = data.user._id;
            }
            return profile;
        }));
        return result;
    };
    ApiService.prototype.setUserProfile = function (userProfile) {
        return this.post('/user/profile', {
            name: userProfile.name,
            designation: userProfile.designation
        });
    };
    ApiService.prototype.forgotPsw = function (email) {
        return this.post('/user/forgotPassword', {
            email: email
        });
    };
    ApiService.prototype.resetPsw = function (token, password) {
        return this.post('/user/resetPassword', {
            token: token,
            password: password
        });
    };
    ApiService.prototype.getFirm = function () {
        return this.get('/firm/profile');
    };
    ApiService.prototype.getFirmProfile = function () {
        var base = this.get('/firm/profile');
        var result = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (data) {
            var profile = new __WEBPACK_IMPORTED_MODULE_14__aaman_main_firm__["Firm"]();
            if (data.success) {
                profile.name = data.firm.FirmName;
                profile.tagline = data.firm.TagLine;
                profile.nickname = data.firm.DisplayName;
                profile.fax = data.firm.Fax;
                profile.landlineNo = data.firm.Landline;
                profile.stdNo = data.firm.stdNo;
                profile.website = data.firm.Website;
                profile.panNo = data.firm.PanNo;
                if (data.firm.GSTIN)
                    profile.GSTIN = data.firm.GSTIN;
                profile.OtherMobile = data.firm.OtherMobile;
                if (data.firm.RegisteredAddress)
                    profile.registeredAddress = data.firm.RegisteredAddress;
                if (data.firm.OfficeAddress)
                    profile.officeAddress = data.firm.OfficeAddress;
                profile.phone = data.firm.Mobile;
                profile.email = data.firm.Email;
                profile.incDate = data.firm.IncorporationDate;
                if (data.firm.LogoURL) {
                    profile.logo = __WEBPACK_IMPORTED_MODULE_11_environments_environment__["environment"].uploadsBaseUrl + data.firm.LogoURL;
                }
                if (data.firm.BankDetails) {
                    var bank = data.firm.BankDetails;
                    profile.bankAccountName = bank.AccountName;
                    profile.bankAccountNo = bank.AccountNo;
                    profile.bankName = bank.BankName;
                    profile.bankIfsc = bank.IFSC;
                    profile.bankBranchAddress = bank.BranchAddress;
                    profile.bankAccountType = bank.AccountType;
                }
                if (data.firm.Socials) {
                    profile.facebook = data.firm.Socials.fb;
                    profile.twitter = data.firm.Socials.twitter;
                    profile.other = data.firm.Socials.Others;
                }
            }
            return profile;
        }));
        return result;
    };
    ApiService.prototype.setFirmProfile = function (firm) {
        return this.post('/firm/profile', {
            name: firm.name,
            tagline: firm.tagline,
            displayName: firm.nickname,
            registeredAddress: firm.registeredAddress,
            officeAddress: firm.officeAddress,
            fax: firm.fax,
            landline: firm.landlineNo,
            stdNo: firm.stdNo,
            website: firm.website,
            pan: firm.panNo,
            GSTIN: firm.GSTIN,
            OtherMobile: firm.OtherMobile,
            incorporationDate: firm.incDate,
            email: firm.email,
            mobile: firm.phone,
            accountName: firm.bankAccountName,
            accountNo: firm.bankAccountNo,
            ifsc: firm.bankIfsc,
            bankName: firm.bankName,
            bankAddress: firm.bankBranchAddress,
            accountType: firm.bankAccountType,
            fb: firm.facebook,
            twitter: firm.twitter,
            other: firm.other
        });
    };
    ApiService.prototype.changePassword = function (oldPassword, newPassword) {
        return this.post('/user/changePassword', {
            oldPassword: oldPassword,
            newPassword: newPassword
        });
    };
    ApiService.prototype.generatePaymentInvoice = function () {
        return this.post('/user/plan/invoice', {});
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__aaman_main_window_service__["WindowService"],
            __WEBPACK_IMPORTED_MODULE_9__aaman_main_loader_service__["LoaderService"],
            __WEBPACK_IMPORTED_MODULE_10__aaman_main_notification_service__["NotificationService"]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 238:
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
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(goback) {
        this.goback = goback;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-app',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/app/app.component.html"*/'<app-loader></app-loader>\n<app-navbar></app-navbar>\n<ion-content>\n<br><br>\n    <router-outlet></router-outlet>\n<br><br>\n</ion-content>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/app/app.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_firm__ = __webpack_require__(552);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(goback, platform, api, router, loadingCtrl) {
        this.goback = goback;
        this.api = api;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.profile = new __WEBPACK_IMPORTED_MODULE_5__models_firm__["a" /* Firm */]();
        this.isLoaded = false;
    }
    HomeComponent.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Logging In ...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.isLoaded = true;
            setTimeout(function () {
                _this.routeToDashboard();
            }, 2000);
        }, 4000);
    };
    HomeComponent.prototype.routeToDashboard = function () {
        this.router.navigateByUrl("/dashboard");
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        // setTimeout(2000);
        if (this.api.isLoggedIn) {
            this.api.getFirmProfile().subscribe(function (data) { return _this.profile = data; });
            this.presentLoadingDefault();
        }
        else {
            this.router.navigateByUrl("/login");
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/home/home.component.html"*/'<div *ngIf="this.isLoaded" class="text-center">\n  <br>\n  <br>\n  <img *ngIf="profile.logo" [src]="profile.logo" class="img-fluid max-w-200">\n  <br>\n  <br>\n  <br>\n  <img src="assets/zenedo.jpeg" width="150" height="150">\n</div>\n\n\n<!-- <div class="text-center">\n  <h1>Advertising Agency Manager (AAMan)</h1>\n  <br>\n  <p>A complete solution for Advertising Agencies.</p>\n  <br>\n  <img src="assets/logo.jpg" width="150" height="150">\n</div> -->'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/home/home.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* LoadingController */]])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(goback, api, router, notifications) {
        this.goback = goback;
        this.api = api;
        this.router = router;
        this.notifications = notifications;
        this.hidePassword = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.api.login(this.emailOrPhone, this.password).subscribe(function (data) {
            if (data.success) {
                _this.router.navigateByUrl('dashboard');
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/login/login.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Login</h1>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #loginForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Email Address or Phone" name="emailPhone" [(ngModel)]="emailOrPhone" type=\'text\' required #emailOrPhoneField="ngModel">\n      <mat-error *ngIf="emailOrPhoneField.errors && emailOrPhoneField.errors.required">\n        Email or Phone is required.\n      </mat-error>\n    </mat-form-field>\n\n    <div class="form-group">\n      <p class="float-right"><a tabindex="-1" routerLink="/forgotPassword">Forgot Password</a></p>\n    </div>\n\n    <mat-form-field>\n      <input matInput placeholder="Password" name="password" [(ngModel)]="password" [type]="hidePassword ? \'password\' : \'text\'" required #passwordField="ngModel">\n      <mat-icon matSuffix (click)="hidePassword = !hidePassword">{{hidePassword ? \'visibility\' : \'visibility_off\'}}</mat-icon>\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n    <button class="btn btn-success" [disabled]="!loginForm.form.valid">Login</button>\n  </form>\n\n  <br>\n  <p>Don\'t have an account, create <a routerLink="/register">one</a>.</p>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/login/login.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_3__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__aaman_main_notification_service__["NotificationService"]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(goback, api, router, notifications) {
        this.goback = goback;
        this.api = api;
        this.router = router;
        this.notifications = notifications;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    RegisterComponent.prototype.GoToDashboard = function () {
        this.router.navigateByUrl('/dashboard');
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.api.signup(this.name, this.email).subscribe(function (data) {
            if (data.success) {
                _this.GoToDashboard();
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-register',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/register/register.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Sign Up</h1>\n    <p class="lead">For Advertsing Agency Administrators</p>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #signUpForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Name" [(ngModel)]="name" name="name" required #nameField="ngModel">\n      <mat-error *ngIf="nameField.errors && nameField.errors.required">\n        Name is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder="Email" [(ngModel)]="email" name="email" required verify-email #emailField="ngModel">\n      <mat-hint>An auto-generated password will be sent to this Email.</mat-hint>\n      <mat-error *ngIf="emailField.errors && emailField.errors.required">\n        Email is required.\n      </mat-error>\n      <mat-error *ngIf="emailField.errors && emailField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n\n    <mat-checkbox class="my-2" name="acceptTnC" [(ngModel)]="acceptTnC" required #acceptTnCField="ngModel">Accept Terms and Conditions</mat-checkbox>\n\n    <div *ngIf="acceptTnCField.invalid && (acceptTnCField.dirty || acceptTnCField.touched)" class="text-danger">\n      <div *ngIf="acceptTnCField.errors.required">\n        Accept Terms and Conditions to continue.\n      </div>\n    </div>\n\n    <br><br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!signUpForm.form.valid">Sign Up</button>\n  </form>\n\n  <br>\n  <p>Already have an account, <a routerLink="/login">Login</a>.</p>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/register/register.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_3__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__aaman_main_notification_service__["NotificationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/user-profile\"");
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/dialog.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
throw new Error("Cannot find module \"environments/environment\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileViewComponent = (function () {
    function ProfileViewComponent(goback, api, dialog, notifications, route) {
        this.goback = goback;
        this.api = api;
        this.dialog = dialog;
        this.notifications = notifications;
        this.route = route;
        this.profile = new __WEBPACK_IMPORTED_MODULE_3__aaman_main_user_profile__["UserProfile"]();
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.profile = data.user;
        });
    };
    ProfileViewComponent.prototype.uploadProfilePicture = function (files) {
        var _this = this;
        this.api.uploadProfilePicture(files.item(0)).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Profile Photo uploaded successfully');
                _this.profile.photo = __WEBPACK_IMPORTED_MODULE_7_environments_environment__["environment"].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    ProfileViewComponent.prototype.removeProfilePicture = function () {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure want to delete your Profile Picture?").subscribe(function (confirm) {
            if (!confirm) {
                return;
            }
            _this.api.deleteProfilePicture().subscribe(function (data) {
                if (data.success) {
                    _this.notifications.show('Profile Picture removed successfully');
                    _this.profile.photo = __WEBPACK_IMPORTED_MODULE_7_environments_environment__["environment"].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            });
        });
    };
    ProfileViewComponent.prototype.uploadSign = function (files) {
        var _this = this;
        this.api.uploadSign(files.item(0)).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Signature uploaded successfully');
                _this.profile.sign = __WEBPACK_IMPORTED_MODULE_7_environments_environment__["environment"].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    ProfileViewComponent.prototype.removeSign = function () {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure want to delete your Signature?").subscribe(function (confirm) {
            if (!confirm) {
                return;
            }
            _this.api.deleteSign().subscribe(function (data) {
                if (data.success) {
                    _this.notifications.show('Signature removed successfully');
                    _this.profile.sign = __WEBPACK_IMPORTED_MODULE_7_environments_environment__["environment"].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            });
        });
    };
    ProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-profile-view',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/profile-view/profile-view.component.html"*/'<mat-toolbar>  \n    <mat-toolbar-row>\n        <div class="container">User Profile</div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n  <br>\n  <div class="row">\n    <div class="col-xl-6">\n      <div class="card mb-5">\n        <div class="card-header">Personal Details</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Name</div>\n              <div class="col-md-8">\n                {{profile.name}}\n                \n                <span class="text-muted">\n                  ({{profile.isAdmin ? \'ADMIN\' : \'Co-User\'}})\n                </span>\n              </div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Designation</div>\n              <div class="col-md-8">{{profile.designation}}</div>\n            </div>\n          </li>\n        </ul>\n        <div class="card-body" *ngIf="profile.isAdmin">\n          <a class="btn btn-info" routerLink="/profile/edit">\n            <mat-icon>edit</mat-icon> Edit\n          </a>\n        </div>\n      </div>\n      <div class="card mb-5">\n          <div class="card-header">Login Details</div>\n          <ul class="list-group list-group-flush">\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Email</div>\n                <div class="col-md-8">{{profile.email}}</div>\n              </div>\n            </li>\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Contact</div>\n                <div class="col-md-8">{{profile.contact}}</div>\n              </div>\n            </li>\n          </ul>\n          <div class="card-body">\n            <a class="btn btn-danger" routerLink="/changePassword">\n              <mat-icon>vpn_key</mat-icon> Change Password\n            </a>\n          </div>\n        </div>\n    </div>\n    <div class="col-xl-3">\n      <div class="card mb-5">\n        <div class="card-header">Profile Picture</div>\n        <div class="card-body text-center">\n          <img [src]="profile.photo" class="img-fluid max-w-200">\n    \n          <br><br>\n          \n          <label for="profile-upload" class="btn btn-outline-info">\n            <mat-icon>file_upload</mat-icon>\n          </label>\n          <input type="file" id="profile-upload" class="hidden-file" accept="image/*" (change)="uploadProfilePicture($event.target.files)"/>\n\n          <button class="btn btn-outline-danger mb-2" (click)="removeProfilePicture()">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class="col-xl-3">\n      <div class="card mb-5">\n        <div class="card-header">Signature</div>\n        <div class="card-body text-center">\n          <img [src]="profile.sign" class="img-fluid max-w-200">\n      \n          <br><br>\n          \n          <label for="sign-upload" class="btn btn-outline-info">\n            <mat-icon>file_upload</mat-icon>\n          </label>\n          <input type="file" id="sign-upload" class="hidden-file" accept="image/*" (change)="uploadSign($event.target.files)"/>\n\n          <button class="btn btn-outline-danger mb-2" (click)="removeSign()">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/profile-view/profile-view.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_4__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_5__aaman_main_dialog_service__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_6__aaman_main_notification_service__["NotificationService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());

//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(goback, api, route) {
        this.goback = goback;
        this.api = api;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.admin = data.user.isAdmin;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/dashboard/dashboard.component.html"*/'<div class="jumbotron jumbotron-fluid">\n    <div class="container">\n        <h1 class="display-4">Dashboard</h1>\n    </div>\n</div>\n<br>\n<div class="container">\n    <div class="row">\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_primary" class="btn btn-primary" (click)="this.goback.gotoComponent(\'profile\')"> User Profile</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_success"  class="btn btn-success" (click)="this.goback.gotoComponent(\'firm\')">< Firm Profile</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_warning" class="btn btn-warning" (click)="this.goback.gotoComponent(\'coUsers\')"> Co-Users</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_info" class="btn btn-info" (click)="this.goback.gotoComponent(\'dir\')"> Directory</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_danger" class="btn btn-danger" (click)="this.goback.gotoComponent(\'ratecards\')"> Rate Cards</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_primary" class="btn btn-primary" (click)="this.goback.gotoComponent(\'releaseorders\')"> Release Orders</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_success" class="btn btn-success" (click)="this.goback.gotoComponent(\'releaseorders/check\')">Insertion Check</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_warning" class="btn btn-warning" (click)="this.goback.gotoComponent(\'invoices\')">Invoices</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_info" class="btn btn-info" (click)="this.goback.gotoComponent(\'receipts\')">Payment Receipts</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_danger" class="btn btn-danger" (click)="this.goback.gotoComponent(\'templates\')">Templates</button>\n        </div>\n    </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/dashboard/dashboard.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmProfileViewComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/firm\"");
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/dialog.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
throw new Error("Cannot find module \"environments/environment.prod\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FirmProfileViewComponent = (function () {
    function FirmProfileViewComponent(goback, api, dialog, notifications, route) {
        this.goback = goback;
        this.api = api;
        this.dialog = dialog;
        this.notifications = notifications;
        this.route = route;
        this.profile = new __WEBPACK_IMPORTED_MODULE_3__aaman_main_firm__["Firm"]();
    }
    FirmProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.profile = data.firm;
            _this.admin = data.user.isAdmin;
        });
    };
    FirmProfileViewComponent.prototype.uploadLogo = function (files) {
        var _this = this;
        this.api.uploadFirmLogo(files.item(0)).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Logo uploaded successfully');
                _this.profile.logo = __WEBPACK_IMPORTED_MODULE_7_environments_environment_prod__["environment"].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    FirmProfileViewComponent.prototype.removeLogo = function () {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure want to delete the firm logo?").subscribe(function (confirm) {
            if (!confirm) {
                return;
            }
            _this.api.deleteFirmLogo().subscribe(function (data) {
                if (data.success) {
                    _this.notifications.show('Logo removed successfully');
                    _this.profile.logo = __WEBPACK_IMPORTED_MODULE_7_environments_environment_prod__["environment"].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            });
        });
    };
    FirmProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-firm-profile-view',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/firm-profile-view/firm-profile-view.component.html"*/'<mat-toolbar>  \n    <mat-toolbar-row>\n        <div class="container">Firm Profile</div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n\n<button class="fab bg-info" *ngIf="admin" routerLink="/firm/edit">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<br>\n\n<div class="row">\n  <div class="col-lg-8 order-2 order-lg-1">\n    <div class="card mb-5">\n      <div class="card-header">Business Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Firm Name</div>\n            <div class="col-md-8">{{profile.name}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Tag Line</div>\n            <div class="col-md-8">{{profile.tagline}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Display / NickName</div>\n            <div class="col-md-8">{{profile.nickname}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Incorporation Date</div>\n            <div class="col-md-8">{{profile.incDate | date}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Email</div>\n            <div class="col-md-8">{{profile.email}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Mobile 1</div>\n            <div class="col-md-8">{{profile.phone}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Mobile 2</div>\n            <div class="col-md-8">{{profile.OtherMobile}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">STD Number</div>\n            <div class="col-md-8">{{profile.stdNo}}</div>\n          </div>\n        </li>           \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">LandLine Number</div>\n            <div class="col-md-8">{{profile.landlineNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Fax</div>\n            <div class="col-md-8">{{profile.fax}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Website</div>\n            <div class="col-md-8">{{profile.website}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pan No.</div>\n            <div class="col-md-8">{{profile.panNo}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">GSTIN</div>\n            <div class="col-md-8">{{profile.GSTIN.GSTType}} {{profile.GSTIN.GSTNo}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Registered Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{profile.registeredAddress.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{profile.registeredAddress.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{profile.registeredAddress.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{profile.registeredAddress.state}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Office Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{profile.officeAddress.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{profile.officeAddress.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{profile.officeAddress.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{profile.officeAddress.state}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Bank Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account Name</div>\n            <div class="col-md-8">{{profile.bankAccountName}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account No.</div>\n            <div class="col-md-8">{{profile.bankAccountNo}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Bank Name</div>\n            <div class="col-md-8">{{profile.bankName}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">IFSC</div>\n            <div class="col-md-8">{{profile.bankIfsc}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Branch Address</div>\n            <div class="col-md-8">{{profile.bankBranchAddress}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account Type</div>\n            <div class="col-md-8">{{profile.bankAccountType}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Social Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Facebook</div>\n            <div class="col-md-8"><a href="{{profile.facebook}}" target="_blank">{{profile.facebook}}</a></div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Twitter</div>\n            <div class="col-md-8"><a href="{{profile.twitter}}" target="_blank">{{profile.twitter}}</a></div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Others</div>\n            <div class="col-md-8"><a href="{{profile.other}}" target="_blank">{{profile.other}}</a></div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="col-lg-4 order-lg-2">\n    <div class="card mb-5">\n      <div class="card-header">Logo</div>\n      <div class="card-body text-center">\n        <img [src]="profile.logo" class="img-fluid max-w-200">\n        \n        <br><br>\n        \n        <label for="logo-upload" *ngIf="admin" class="btn btn-outline-info">\n          <mat-icon>file_upload</mat-icon>\n        </label>\n        <input type="file" *ngIf="admin" id="logo-upload" accept="image/*" class="hidden-file" (change)="uploadLogo($event.target.files)"/>\n\n        <button *ngIf="admin" class="btn btn-outline-danger mb-2" (click)="removeLogo()">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/firm-profile-view/firm-profile-view.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_4__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_5__aaman_main_dialog_service__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_6__aaman_main_notification_service__["NotificationService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FirmProfileViewComponent);
    return FirmProfileViewComponent;
}());

//# sourceMappingURL=firm-profile-view.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerifyComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneVerifyComponent = (function () {
    function PhoneVerifyComponent(goback, api, router) {
        this.goback = goback;
        this.api = api;
        this.router = router;
    }
    PhoneVerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.getUser().subscribe(function (data) {
            if (!_this.number && data.success && data.user.phone) {
                _this.number = data.user.phone;
            }
        });
    };
    PhoneVerifyComponent.prototype.sendOtp = function () {
        var _this = this;
        this.sendError = '';
        this.otpSent = true;
        this.api.setMobile(this.number).subscribe(function (data) {
            if (!data.success) {
                _this.otpSent = false;
                console.log(data);
                _this.sendError = data.msg;
            }
        });
    };
    PhoneVerifyComponent.prototype.verifyOtp = function () {
        var _this = this;
        this.verifyError = '';
        this.api.verifyOtp(this.otp).subscribe(function (data) {
            if (data.success) {
                _this.router.navigateByUrl('/dashboard');
            }
            else {
                console.log(data);
                _this.verifyError = data.msg;
            }
        });
    };
    PhoneVerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-phone-verify',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/phone-verify/phone-verify.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Verify Phone Number</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="sendOtp()" #phoneNumberForm="ngForm">\n    <mat-form-field>\n      <span matPrefix>+91 &nbsp;</span>\n      <input type="tel" matInput placeholder="Phone Number" [(ngModel)]="number" pattern="^\d{10}$" maxlength="10" minlength="10" required name="phone">\n    </mat-form-field>\n\n    <div *ngIf="sendError" class="text-danger">\n      {{sendError}}\n      \n      <br>\n    </div>\n\n    <div class="text-right">\n      <button type="submit" class="btn btn-primary" [disabled]="!phoneNumberForm.form.valid || otpSent">Send Code</button>\n    </div>\n  </form>\n\n  <form *ngIf="otpSent" (ngSubmit)="verifyOtp()" #otpForm="ngForm">\n    <mat-form-field>\n      <input type="text" matInput placeholder="Verification Code" [(ngModel)]="otp" required name="otp">\n      <mat-hint>Enter the Verification code received on your mobile.</mat-hint>\n    </mat-form-field>\n\n    <div *ngIf="verifyError" class="text-danger">\n      {{verifyError}}\n      \n      <br>\n    </div>\n\n    <br><br>\n    <button type="submit" class="btn btn-success" [disabled]="!otpForm.form.valid">Verify Code</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/phone-verify/phone-verify.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_3__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PhoneVerifyComponent);
    return PhoneVerifyComponent;
}());

//# sourceMappingURL=phone-verify.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePswComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePswComponent = (function () {
    function ChangePswComponent(goback, api, notifications) {
        this.goback = goback;
        this.api = api;
        this.notifications = notifications;
    }
    ChangePswComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    ChangePswComponent.prototype.submit = function () {
        var _this = this;
        this.api.changePassword(this.oldPassword, this.password).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Password changed successfully');
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    ChangePswComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-change-psw',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/change-psw/change-psw.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Change Password</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #changePswForm="ngForm">\n    <mat-form-field>\n      <input matInput type="password" name="oldPassword" placeholder="Old Password" [(ngModel)]="oldPassword" required #oldPasswordField="ngModel">\n      <mat-error *ngIf="oldPasswordField.errors && oldPasswordField.errors.required">\n        Old Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="password" placeholder="New Password" [(ngModel)]="password" required #passwordField="ngModel">\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        New Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="cpassword" [verify-equals]="password" placeholder="Confirm New Password" [(ngModel)]="cpassword" required #cpasswordField="ngModel">\n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.required">\n        Password confirmation is required.\n      </mat-error> \n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.equals">\n        Passwords don\'t match.\n      </mat-error>\n    </mat-form-field>\n\n    <br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!changePswForm.form.valid">Change</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/change-psw/change-psw.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_3__aaman_main_notification_service__["NotificationService"]])
    ], ChangePswComponent);
    return ChangePswComponent;
}());

//# sourceMappingURL=change-psw.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPswComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPswComponent = (function () {
    function ForgotPswComponent(goback, api, notifications) {
        this.goback = goback;
        this.api = api;
        this.notifications = notifications;
    }
    ForgotPswComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    ForgotPswComponent.prototype.submit = function () {
        var _this = this;
        this.api.forgotPsw(this.email).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Password Reset Email sent.');
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    ForgotPswComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-forgot-psw',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/forgot-psw/forgot-psw.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Forgot Password</h1>\n    <p class="lead">A password reset email will be sent to your email account.</p>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #forgotPswForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Email Address" [(ngModel)]="email" name="email" required verify-email #emailField="ngModel">\n      <mat-error *ngIf="emailField.errors && emailField.errors.required">\n        Email is required.\n      </mat-error>\n      <mat-error *ngIf="emailField.errors && emailField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n    <button class="btn btn-success" [disabled]="!forgotPswForm.form.valid">Send</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/forgot-psw/forgot-psw.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_3__aaman_main_notification_service__["NotificationService"]])
    ], ForgotPswComponent);
    return ForgotPswComponent;
}());

//# sourceMappingURL=forgot-psw.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent(goback) {
        this.goback = goback;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-not-found',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/not-found/not-found.component.html"*/'<br>\n<h3 class="text-center">\n  Page Not Found (404)\n</h3>\n'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/not-found/not-found.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getWindow() {
    return window;
}
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "window", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    WindowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], WindowService);
    return WindowService;
}());

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_window_service__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmptyComponent = (function () {
    function EmptyComponent(goback, navCtrl, winRef, navParams) {
        this.goback = goback;
        this.navCtrl = navCtrl;
        this.winRef = winRef;
        this.navParams = navParams;
    }
    EmptyComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    EmptyComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.navCtrl.pop().then(function (p) {
            _this.winRef.window.location.assign("index.html#/");
        });
    };
    EmptyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-empty',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/empty/empty.component.html"*/'<p> </p>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/empty/empty.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], EmptyComponent);
    return EmptyComponent;
}());

//# sourceMappingURL=empty.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(goback, api, route, notifications) {
        this.goback = goback;
        this.api = api;
        this.route = route;
        this.notifications = notifications;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.paramMap.subscribe(function (params) {
            _this.token = params.get('token');
        });
    };
    ResetPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.api.resetPsw(this.token, this.password).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Password Changed Successfully.');
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-reset-password',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/reset-password/reset-password.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Reset Password</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #resetPswForm="ngForm">\n\n    <mat-form-field>\n      <input matInput type="password" name="password" placeholder="New Password" [(ngModel)]="password" required #passwordField="ngModel">\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        New Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="cpassword" [verify-equals]="password" placeholder="Confirm New Password" [(ngModel)]="cpassword" required #cpasswordField="ngModel">\n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.required">\n        Password confirmation is required.\n      </mat-error> \n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.equals">\n        Passwords don\'t match.\n      </mat-error>\n    </mat-form-field>\n  \n    <br>\n    <button class="btn btn-success" [disabled]="!resetPswForm.form.valid">Send</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/reset-password/reset-password.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_3__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__aaman_main_notification_service__["NotificationService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());

//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_module__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directory_directory_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__co_users_co_users_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rate_card_rate_card_module__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__release_order_release_order_module__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_navbar_navbar_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_phone_verify_phone_verify_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_view_profile_view_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_dashboard_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_firm_profile_view_firm_profile_view_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_change_psw_change_psw_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_forgot_psw_forgot_psw_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_not_found_not_found_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_reset_password_reset_password_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__invoice_invoice_module__ = __webpack_require__(565);
throw new Error("Cannot find module \"@aaman/receipts/receipts.module\"");
throw new Error("Cannot find module \"@aaman/accounts/accounts.module\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { IonicImageLoader } from 'ionic-image-loader';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_phone_verify_phone_verify_component__["a" /* PhoneVerifyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_profile_view_profile_view_component__["a" /* ProfileViewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_firm_profile_view_firm_profile_view_component__["a" /* FirmProfileViewComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_change_psw_change_psw_component__["a" /* ChangePswComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_forgot_psw_forgot_psw_component__["a" /* ForgotPswComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__["a" /* LoaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_13__directory_directory_module__["a" /* DirectoryModule */],
                __WEBPACK_IMPORTED_MODULE_14__co_users_co_users_module__["a" /* CoUsersModule */],
                __WEBPACK_IMPORTED_MODULE_15__rate_card_rate_card_module__["a" /* RateCardModule */],
                __WEBPACK_IMPORTED_MODULE_16__release_order_release_order_module__["a" /* ReleaseOrderModule */],
                __WEBPACK_IMPORTED_MODULE_30__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_31__aaman_receipts_receipts_module__["ReceiptsModule"],
                __WEBPACK_IMPORTED_MODULE_32__aaman_accounts_accounts_module__["AccountsModule"],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_phone_verify_phone_verify_component__["a" /* PhoneVerifyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_profile_view_profile_view_component__["a" /* ProfileViewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_firm_profile_view_firm_profile_view_component__["a" /* FirmProfileViewComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_change_psw_change_psw_component__["a" /* ChangePswComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_forgot_psw_forgot_psw_component__["a" /* ForgotPswComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__["a" /* LoaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_app_component__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(goback, platform, statusBar, splashScreen) {
        this.goback = goback;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__components_app_app_component__["a" /* AppComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_checkbox__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_input__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_expansion__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_datepicker__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_snack_bar__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_select__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_table__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material_checkbox__["a" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__["c" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material_input__["b" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material_expansion__["a" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material_datepicker__["a" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["k" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__["a" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material_snack_bar__["a" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["b" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__["a" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_16__angular_material_select__["a" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_material_table__["a" /* MatTableModule */]
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules,
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(60);
throw new Error("Cannot find module \"@aaman/main/firm-profile-edit/firm-profile-edit.component\"");
throw new Error("Cannot find module \"@aaman/main/plan-selector/plan-selector.component\"");
throw new Error("Cannot find module \"@aaman/main/template-selector-item/template-selector-item.component\"");
throw new Error("Cannot find module \"@aaman/main/template-selector/template-selector.component\"");
throw new Error("Cannot find module \"@aaman/main/profile-edit/profile-edit.component\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule_1 = AdminModule;
    AdminModule = AdminModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(AdminModule_1),
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aaman_main_firm_profile_edit_firm_profile_edit_component__["FirmProfileEditComponent"],
                __WEBPACK_IMPORTED_MODULE_3__aaman_main_plan_selector_plan_selector_component__["PlanSelectorComponent"],
                __WEBPACK_IMPORTED_MODULE_4__aaman_main_template_selector_item_template_selector_item_component__["TemplateSelectorItemComponent"],
                __WEBPACK_IMPORTED_MODULE_5__aaman_main_template_selector_template_selector_component__["TemplateSelectorComponent"],
                __WEBPACK_IMPORTED_MODULE_6__aaman_main_profile_edit_profile_edit_component__["ProfileEditComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
    var AdminModule_1;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_admin_guard_service__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firm_resolver_service__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_view_profile_view_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_firm_profile_view_firm_profile_view_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_phone_verify_phone_verify_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_change_psw_change_psw_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_forgot_psw_forgot_psw_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_firm_profile_edit_firm_profile_edit_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_template_selector_template_selector_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_plan_selector_plan_selector_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_reset_password_reset_password_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_empty_empty_component__ = __webpack_require__(366);
throw new Error("Cannot find module \"@aaman/main/profile-edit/profile-edit.component\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    { path: 'empty', component: __WEBPACK_IMPORTED_MODULE_22__admin_empty_empty_component__["a" /* EmptyComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    {
        path: 'superadmin',
        loadChildren: 'app/super-admin/super-admin.module#SuperAdminModule'
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_15__components_forgot_psw_forgot_psw_component__["a" /* ForgotPswComponent */] },
    { path: "verify/mobile", component: __WEBPACK_IMPORTED_MODULE_13__components_phone_verify_phone_verify_component__["a" /* PhoneVerifyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]] },
    {
        path: "profile",
        component: __WEBPACK_IMPORTED_MODULE_10__components_profile_view_profile_view_component__["a" /* ProfileViewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__["a" /* PlanGuard */]],
        resolve: {
            user: __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__["a" /* UserProfileResolver */]
        }
    },
    {
        path: "profile/edit",
        component: __WEBPACK_IMPORTED_MODULE_23__aaman_main_profile_edit_profile_edit_component__["ProfileEditComponent"],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_admin_guard_service__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__["a" /* PlanGuard */]],
        resolve: {
            user: __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__["a" /* UserProfileResolver */]
        }
    },
    {
        path: "firm",
        component: __WEBPACK_IMPORTED_MODULE_12__components_firm_profile_view_firm_profile_view_component__["a" /* FirmProfileViewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__["a" /* PlanGuard */]],
        resolve: {
            firm: __WEBPACK_IMPORTED_MODULE_6__services_firm_resolver_service__["a" /* FirmResolver */],
            user: __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__["a" /* UserProfileResolver */]
        }
    },
    {
        path: "firm/edit",
        component: __WEBPACK_IMPORTED_MODULE_17__admin_firm_profile_edit_firm_profile_edit_component__["a" /* FirmProfileEditComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_admin_guard_service__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__["a" /* PlanGuard */]],
        resolve: {
            firm: __WEBPACK_IMPORTED_MODULE_6__services_firm_resolver_service__["a" /* FirmResolver */],
            user: __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__["a" /* UserProfileResolver */]
        }
    },
    { path: 'templates', component: __WEBPACK_IMPORTED_MODULE_18__admin_template_selector_template_selector_component__["a" /* TemplateSelectorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_admin_guard_service__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__["a" /* PlanGuard */]] },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */], __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__["a" /* PlanGuard */]],
        resolve: {
            user: __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__["a" /* UserProfileResolver */]
        }
    },
    { path: 'plan', component: __WEBPACK_IMPORTED_MODULE_19__admin_plan_selector_plan_selector_component__["a" /* PlanSelectorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards_admin_guard_service__["a" /* AdminGuard */]] },
    { path: 'changePassword', component: __WEBPACK_IMPORTED_MODULE_14__components_change_psw_change_psw_component__["a" /* ChangePswComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'reset_password/:token', component: __WEBPACK_IMPORTED_MODULE_20__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(api, router) {
        this.api = api;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.api.isLoggedIn) {
            return true;
        }
        var url = state.url;
        this.router.navigateByUrl('/login');
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerifyGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhoneVerifyGuard = (function () {
    function PhoneVerifyGuard(api, router) {
        this.api = api;
        this.router = router;
    }
    PhoneVerifyGuard.prototype.goToMobileVerify = function () {
        this.router.navigateByUrl('/verify/mobile');
    };
    PhoneVerifyGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.api.getUser().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (data) {
            var result = data.success && data.user.phone && data.user.mobile_verified;
            if (!result) {
                _this.goToMobileVerify();
            }
            return result;
        }, Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (err) {
            _this.goToMobileVerify();
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(false);
        })));
    };
    PhoneVerifyGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PhoneVerifyGuard);
    return PhoneVerifyGuard;
}());

//# sourceMappingURL=phone-verify-guard.service.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminGuard = (function () {
    function AdminGuard(api, router) {
        this.api = api;
        this.router = router;
    }
    AdminGuard.prototype.goToDashboard = function () {
        this.router.navigateByUrl('/dashboard');
    };
    AdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.api.getUser().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (data) {
            var result = data.success && data.user.isAdmin;
            if (!result) {
                _this.goToDashboard();
            }
            return result;
        }, Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (err) {
            _this.goToDashboard();
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(false);
        })));
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());

//# sourceMappingURL=admin-guard.service.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlanGuard = (function () {
    function PlanGuard(api, router) {
        this.api = api;
        this.router = router;
    }
    PlanGuard.prototype.goToPlan = function () {
        this.router.navigateByUrl('/plan');
    };
    PlanGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.api.getFirm().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (data) {
            var result = data.success && data.firm.plan != null;
            if (!result) {
                _this.goToPlan();
            }
            return result;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (err) {
            _this.goToPlan();
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(false);
        }));
    };
    PlanGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PlanGuard);
    return PlanGuard;
}());

//# sourceMappingURL=plan-guard.service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirmResolver = (function () {
    function FirmResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    FirmResolver.prototype.resolve = function (route, state) {
        return this.api.getFirmProfile();
    };
    FirmResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FirmResolver);
    return FirmResolver;
}());

//# sourceMappingURL=firm-resolver.service.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Firm; });
throw new Error("Cannot find module \"@aaman/main/address\"");

var Firm = (function () {
    function Firm() {
        this.registeredAddress = new __WEBPACK_IMPORTED_MODULE_0__aaman_main_address__["Address"]();
        this.officeAddress = new __WEBPACK_IMPORTED_MODULE_0__aaman_main_address__["Address"]();
        this.GSTIN = {
            GSTType: "URD",
            GSTNo: ""
        };
        this.bankAccountType = 'Savings';
    }
    return Firm;
}());

//# sourceMappingURL=firm.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmProfileEditComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/firm\"");
throw new Error("Cannot find module \"@aaman/main/ifsc.service\"");
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/state-api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FirmProfileEditComponent = (function () {
    function FirmProfileEditComponent(goback, ifscService, api, stateApi, router, notifications, route) {
        this.goback = goback;
        this.ifscService = ifscService;
        this.api = api;
        this.stateApi = stateApi;
        this.router = router;
        this.notifications = notifications;
        this.route = route;
        this.profile = new __WEBPACK_IMPORTED_MODULE_3__aaman_main_firm__["Firm"]();
    }
    FirmProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.profile = data.firm;
            _this.user = data.user;
        });
    };
    FirmProfileEditComponent.prototype.ifscChanged = function () {
        var _this = this;
        if (this.profile.bankIfsc.length == 11) {
            this.ifscService.getData(this.profile.bankIfsc).subscribe(function (data) {
                _this.profile.bankName = data.BANK;
                _this.profile.bankBranchAddress = data.ADDRESS;
            });
        }
        else {
            this.profile.bankName = '';
            this.profile.bankBranchAddress = '';
        }
    };
    FirmProfileEditComponent.prototype.copyAddress = function () {
        this.profile.officeAddress.address = this.profile.registeredAddress.address;
        this.profile.officeAddress.city = this.profile.registeredAddress.city;
        this.profile.officeAddress.state = this.profile.registeredAddress.state;
        this.profile.officeAddress.pincode = this.profile.registeredAddress.pincode;
    };
    FirmProfileEditComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/firm');
    };
    FirmProfileEditComponent.prototype.submit = function () {
        var _this = this;
        this.api.setFirmProfile(this.profile).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        });
    };
    FirmProfileEditComponent.prototype.cancel = function () {
        this.goBack();
    };
    FirmProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-firm-profile-edit',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/firm-profile-edit/firm-profile-edit.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Edit Firm Profile</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #profileForm="ngForm">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Business Details</mat-panel-title>\n          <mat-panel-description>Enter Business details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="firmName" placeholder="Firm Name" [(ngModel)]="profile.name" required #firmNameField="ngModel">\n          <mat-error *ngIf="firmNameField.errors && firmNameField.errors.required">\n            Firm Name is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="tagline" placeholder="Tagline" [(ngModel)]="profile.tagline" #taglineField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="nickname" placeholder="Nickname" [(ngModel)]="profile.nickname" #nicknameField="ngModel">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [matDatepicker]="incDateField" name="incDate" placeholder="Incorporation Date" [(ngModel)]="profile.incDate" disabled>\n          <mat-datepicker-toggle matSuffix [for]="incDateField"></mat-datepicker-toggle>\n          <mat-datepicker #incDateField disabled="false"></mat-datepicker>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="website" placeholder="Website" [(ngModel)]="profile.website" #websiteField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="panNo" placeholder="PAN Number" [(ngModel)]="profile.panNo" minlength="10" maxlength="10" required #panNoField="ngModel">\n          <mat-error *ngIf="panNoField.errors && panNoField.errors.required">\n            PAN Number is required.\n          </mat-error>\n          <mat-error *ngIf="panNoField.errors && (panNoField.errors.minlength || panNoField.errors.maxlength)">\n            PAN Number should be 10 characters long.\n          </mat-error>\n        </mat-form-field>\n\n        <div class="form-row">\n          <div class="{{profile.GSTIN.GSTType != \'URD\' ? \'col-auto\' : \'col\'}}">\n            <mat-form-field>\n              <mat-select placeholder="GST Type" name="gstType" [(ngModel)]="profile.GSTIN.GSTType">\n                <mat-option value="URD">URD</mat-option>\n                <mat-option value="RD">RD</mat-option>\n                <mat-option value="CRD">CRD</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class="col" *ngIf="profile.GSTIN.GSTType != \'URD\'">\n            <mat-form-field>\n              <input matInput type="text" name="gstNo" placeholder="GST Number" [(ngModel)]="profile.GSTIN.GSTNo" required minlength="15" maxlength="15" #gstNoField="ngModel">\n              <mat-error *ngIf="gstNoField.errors && gstNoField.errors.required">\n                GSTIN is required.\n              </mat-error>\n              <mat-error *ngIf="gstNoField.errors && (gstNoField.errors.minlength || gstNoField.errors.maxlength)">\n                GSTIN should be 15 characters long.\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      \n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Contact Details</mat-panel-title>\n          <mat-panel-description>Enter Contact Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-row">\n          <div class="col">\n            <mat-form-field>\n              <input matInput type="email" name="email" placeholder="Email" [(ngModel)]="profile.email" required #emailField="ngModel" verify-email>\n              <mat-error *ngIf="emailField.errors && emailField.errors.required">\n                Email is required.\n              </mat-error>\n              <mat-error *ngIf="emailField.errors && emailField.errors.email">\n                Invalid Email.\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class="col-auto align-self-center">\n            <button class="btn btn-sm btn-outline-info" type="button" (click)="profile.email = user.email">Copy from User</button>\n          </div>\n        </div>\n    \n        <mat-form-field>\n          <span matPrefix>+91 &nbsp;</span>\n          <input matInput type="tel" [(ngModel)]="profile.phone" pattern="^\d{10}$" maxlength="10" minlength="10" name="phone" placeholder="Mobile 1" #phoneField="ngModel">\n          <mat-error *ngIf="phoneField.errors">\n            Mobile 1 is empty or invalid.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <span matPrefix>+91 &nbsp;</span>\n          <input matInput type="tel" [(ngModel)]="profile.OtherMobile" pattern="^\d{10}$" maxlength="10" minlength="10" name="phone2" placeholder="Mobile 2" #phone2Field="ngModel">\n          <mat-error *ngIf="phone2Field.errors">\n            Mobile 2 is invalid.\n          </mat-error>\n        </mat-form-field>\n\n        <div class="form-row">\n          <div class="col-3">\n            <mat-form-field>\n              <input matInput type="tel" name="stdNo" placeholder="STD No" minlength="3" maxlength="5" [(ngModel)]="profile.stdNo" #stdNoField="ngModel">\n            </mat-form-field>\n          </div>\n      \n          <div class="col-9">\n            <mat-form-field>\n              <input matInput type="tel" name="landlineNo" minlength="6" maxlength="8" placeholder="Landline Number" [(ngModel)]="profile.landlineNo" #landlineNoField="ngModel">\n            </mat-form-field>\n          </div>\n        </div>        \n      \n        <mat-form-field>\n          <input matInput type="number" name="fax" placeholder="Fax" [(ngModel)]="profile.fax" #faxField="ngModel">\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Registered Address</mat-panel-title>\n          <mat-panel-description>Enter Registered Address</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="registeredAddress" placeholder="Registered Address" [(ngModel)]="profile.registeredAddress.address" required #registeredAddressField="ngModel">\n          <mat-error *ngIf="firmNameField.errors && firmNameField.errors.required">\n            Registered Address is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="tel" minlength="6" maxlength="6" name="registeredPincode" placeholder="Pincode" [(ngModel)]="profile.registeredAddress.pincode" required #registeredPincodeField="ngModel">\n          <mat-error *ngIf="registeredPincodeField.errors && registeredPincodeField.errors.required">\n            Pincode is required.\n          </mat-error>\n          <mat-error *ngIf="registeredPincodeField.errors && (registeredPincodeField.errors.minlength || registeredPincodeField.errors.maxlength)">\n            Pincode should be 6 characters long.\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field>\n          <input matInput type="text" name="registeredCity" placeholder="City" [(ngModel)]="profile.registeredAddress.city" required #registeredCityField="ngModel">\n          <mat-error *ngIf="registeredCityField.errors && registeredCityField.errors.required">\n            City is required.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder="State" name="registeredState" [(ngModel)]="profile.registeredAddress.state" required #registeredStateField="ngModel">\n            <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n          </mat-select>\n          <mat-error *ngIf="registeredStateField.errors && registeredStateField.errors.required">\n            State is required.\n          </mat-error>\n        </mat-form-field>\n      \n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Office Address</mat-panel-title>\n          <mat-panel-description>Enter Office Address</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <button type="button" mat-raised-button (click)="copyAddress()">Copy from Above</button>\n        <br><br>\n\n        <mat-form-field>\n          <input matInput type="text" name="officeAddress" placeholder="Office Address" [(ngModel)]="profile.officeAddress.address" #officeAddressField="ngModel">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput type="tel" minlength="6" maxlength="6" name="officePincode" placeholder="Pincode" [(ngModel)]="profile.officeAddress.pincode" #officePincodeField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="officeCity" placeholder="City" [(ngModel)]="profile.officeAddress.city" #officeCityField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select placeholder="State" name="officeState" [(ngModel)]="profile.officeAddress.state" #officeStateField="ngModel">\n            <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n          </mat-select>\n          <mat-error *ngIf="officeStateField.errors && officeStateField.errors.required">\n            State is required.\n          </mat-error>\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Bank Account Details</mat-panel-title>\n          <mat-panel-description>Enter Bank Account Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-row">\n          <div class="col">\n            <mat-form-field>\n              <input matInput type="text" name="bankAccountName" placeholder="Bank Account Name" [(ngModel)]="profile.bankAccountName" required #bankAccountNameField="ngModel">\n              <mat-error *ngIf="bankAccountNameField.errors && bankAccountNameField.errors.required">\n                Account Name is required.\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class="col-auto align-self-center">\n            <button class="btn btn-sm btn-outline-info" type="button" (click)="profile.bankAccountName = profile.name">Copy Firm Name</button>\n          </div>\n        </div>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankAccountNo" placeholder="Bank Account Number" [(ngModel)]="profile.bankAccountNo" required #bankAccountNoField="ngModel">\n          <mat-error *ngIf="bankAccountNoField.errors && bankAccountNoField.errors.required">\n            Account Number is required.\n          </mat-error>\n        </mat-form-field>\n    \n        <mat-form-field>\n          <input matInput type="text" name="bankIfsc" placeholder="Bank IFSC" [(ngModel)]="profile.bankIfsc" required minlength="11" maxlength="11" #bankIfscField="ngModel" (input)="ifscChanged()">\n          <mat-error *ngIf="bankIfscField.errors && bankIfscField.errors.required">\n            IFSC is required.\n          </mat-error>\n          <mat-error *ngIf="bankIfscField.errors && (bankIfscField.errors.minlength || bankIfscField.errors.maxlength)">\n            IFSC should be 11 characters long.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankName" placeholder="Bank Name" [(ngModel)]="profile.bankName" required #bankNameField="ngModel">\n          <mat-error *ngIf="bankNameField.errors && bankNameField.errors.required">\n            Bank Name is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankBranchAddress" placeholder="Bank Branch Address" [(ngModel)]="profile.bankBranchAddress" required #bankBranchAddressField="ngModel">\n          <mat-error *ngIf="bankBranchAddressField.errors && bankBranchAddressField.errors.required">\n            Bank Branch Address is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select placeholder="Bank Account Type" name="bankAccountType" [(ngModel)]="profile.bankAccountType">\n            <mat-option value="Current">Current</mat-option>\n            <mat-option value="Savings">Savings</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Social Details</mat-panel-title>\n          <mat-panel-description>Enter Social Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="facebook" placeholder="Facebook Link" [(ngModel)]="profile.facebook" #facebookField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="twitter" placeholder="Twitter Link" [(ngModel)]="profile.twitter" #twitterField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="others" placeholder="Other social Link" [(ngModel)]="profile.other" #otherField="ngModel">\n        </mat-form-field>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <br><br>\n  \n    <button type="submit" class="btn btn-success" [disabled]="!profileForm.form.valid">Save</button>\n    <button type="button" class="btn btn-danger" (click)="cancel()">Cancel</button>\n\n    <br><br><br>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/firm-profile-edit/firm-profile-edit.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_4__aaman_main_ifsc_service__["IfscService"],
            __WEBPACK_IMPORTED_MODULE_5__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_6__aaman_main_state_api_service__["StateApiService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__aaman_main_notification_service__["NotificationService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FirmProfileEditComponent);
    return FirmProfileEditComponent;
}());

//# sourceMappingURL=firm-profile-edit.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSelectorComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateSelectorComponent = (function () {
    function TemplateSelectorComponent(goback, api) {
        this.goback = goback;
        this.api = api;
        this.done = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    TemplateSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.templates.subscribe(function (data) {
            _this.templates = data;
            _this.invoiceTemplate = _this.releaseOrderTemplate = _this.paymentReceiptTemplate = data[0];
        });
    };
    TemplateSelectorComponent.prototype.submit = function () {
        this.done.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TemplateSelectorComponent.prototype, "done", void 0);
    TemplateSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-template-selector',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/template-selector/template-selector.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Templates</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form>\n    <div class="form-group form-row">\n      <label for="jurisdiction" class="col-md-3 col-form-label">Jurisdiction</label>\n      <input type="text" class="form-control col-md-9" name="jurisdiction" id="jurisdiction" [(ngModel)]="jurisdiction" placeholder="Enter jurisdiction">\n    </div>\n  </form>\n\n  <br><br>\n\n  <div class="row">\n    <div class="col-lg">\n      <app-template-selector-item name="Invoice" [templates]="templates" (templateChanged)="invoiceTemplate = $event"></app-template-selector-item>\n    </div>\n    <div class="col-lg">\n      <app-template-selector-item name="Release Order" [templates]="templates" (templateChanged)="releaseOrderTemplate = $event"></app-template-selector-item>\n    </div>\n    <div class="col-lg">\n      <app-template-selector-item name="Payment Receipt" [templates]="templates" (templateChanged)="paymentReceiptTemplate = $event"></app-template-selector-item>\n    </div>\n  </div>\n\n  <div class="text-center">\n    <button class="btn btn-success" (click)="submit()">Submit</button>\n  </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/template-selector/template-selector.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"]])
    ], TemplateSelectorComponent);
    return TemplateSelectorComponent;
}());

//# sourceMappingURL=template-selector.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanSelectorComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_plan__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_razorpay_service__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_window_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__empty_empty_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(31);
throw new Error("Cannot find module \"@aaman/main/billing-details/billing-details.component\"");
throw new Error("Cannot find module \"@aaman/main/dialog.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PlanSelectorComponent = (function () {
    function PlanSelectorComponent(goback, api, razorPay, appRef, router, winRef, modalService, navCtrl, navParams, dialog) {
        this.goback = goback;
        this.api = api;
        this.razorPay = razorPay;
        this.appRef = appRef;
        this.router = router;
        this.winRef = winRef;
        this.modalService = modalService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dialog = dialog;
    }
    PlanSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.plans.subscribe(function (data) {
            _this.plans = [];
            data.plans.forEach(function (element) {
                var plan = new __WEBPACK_IMPORTED_MODULE_2__models_plan__["a" /* Plan */](element.name, element.cost, element.maxUsers, element.maxAdmins);
                plan.id = element._id;
                _this.plans.push(plan);
            });
            _this.email = data.email;
            _this.phone = data.phone;
        });
        this.api.getFirmProfile().subscribe(function (data) { return _this.firm = data; });
    };
    PlanSelectorComponent.prototype.openPay = function (details) {
        var _this = this;
        this.razorPay.initPay(this.phone, this.email, this.selectedPlan.cost, "AAMan " + this.selectedPlan.name, function (response) {
            console.log(response.razorpay_payment_id);
            _this.paid = true;
            _this.api.setPlan(_this.selectedPlan, response.razorpay_payment_id, details).subscribe(function (data) {
                _this.api.generatePaymentInvoice().subscribe(function (data) {
                    // redirect
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__empty_empty_component__["a" /* EmptyComponent */]);
                    _this.appRef.tick();
                });
            }, function (err) { return alert("Plan was not saved.\n\nContact support with reference no: " + response.razorpay_payment_id); });
        });
    };
    PlanSelectorComponent.prototype.billingDetails = function (param) {
        this.openPay(param);
    };
    PlanSelectorComponent.prototype.selectPlan = function (plan) {
        var _this = this;
        if (this.paid)
            return;
        if (plan.cost != 0) {
            this.selectedPlan = plan;
            if (this.firm && this.firm.name && this.firm.registeredAddress) {
                this.openPay({
                    firmName: this.firm.name,
                    billingAddress: this.firm.registeredAddress,
                    GSTIN: this.firm.GSTIN
                });
            }
            else {
                this.dialog.getBillingDetails().subscribe(function (data) {
                    _this.billingDetails(data);
                });
            }
        }
        else {
            this.paid = true;
            this.api.setPlan(plan, '', new __WEBPACK_IMPORTED_MODULE_10__aaman_main_billing_details_billing_details_component__["BillingDetails"]()).subscribe(function (data) {
                _this.router.navigateByUrl('/');
            }, function (err) { return alert("Plan was not saved."); });
        }
    };
    PlanSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-plan-selector',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/plan-selector/plan-selector.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Select Plan</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<ng-template #modalContent let-c="close">\n  <div class="modal-header">\n    <h4 class="modal-title">Enter Billing Details</h4>\n  </div>\n  <div class="modal-body">\n    <app-billing-details (done)="c(\'Submit\'); billingDetails($event)"></app-billing-details>\n  </div>\n</ng-template>  \n\n<div class="container">\n  <div class="planContainer">\n    <div *ngFor="let plan of plans" class="plan">\n      <div class="titleContainer bg-info">\n        <div class="title">{{plan.name}}</div>\n        <div class="price">\n          <p>₹ {{plan.cost | number}} </p> <span>/ year</span>\n        </div>\n      </div>\n      <div class="infoContainer">\n        <ul class="features">\n          <li><strong>{{plan.maxUsers}}</strong> Users</li>\n          <li><strong>{{plan.maxAdmins}}</strong> Admins</li>\n        </ul><a class="selectPlan" [class.disabled]="paid" (click)="selectPlan(plan, modalContent)">Select Plan</a>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/plan-selector/plan-selector.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__services_razorpay_service__["a" /* RazorPayService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_window_service__["a" /* WindowService */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_11__aaman_main_dialog_service__["DialogService"]])
    ], PlanSelectorComponent);
    return PlanSelectorComponent;
}());

//# sourceMappingURL=plan-selector.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plan; });
var Plan = (function () {
    function Plan(name, cost, maxUsers, maxAdmins) {
        this.name = name;
        this.cost = cost;
        this.maxUsers = maxUsers;
        this.maxAdmins = maxAdmins;
    }
    return Plan;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RazorPayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/window.service\"");
throw new Error("Cannot find module \"environments/environment\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RazorPayService = (function () {
    function RazorPayService(windowService) {
        this.windowService = windowService;
    }
    RazorPayService.prototype.initPay = function (number, email, amountInRupees, purchaseDescription, callback) {
        var options = {
            key: __WEBPACK_IMPORTED_MODULE_2_environments_environment__["environment"].razorPay,
            amount: amountInRupees * 100,
            name: "ZAAA",
            description: purchaseDescription,
            prefill: {
                email: email,
                contact: number
            },
            theme: {
                color: "#f37254"
            },
            handler: callback
        };
        var rzp = new this.windowService.window.Razorpay(options);
        rzp.open();
    };
    RazorPayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__aaman_main_window_service__["WindowService"]])
    ], RazorPayService);
    return RazorPayService;
}());

//# sourceMappingURL=razorpay.service.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileResolver = (function () {
    function UserProfileResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    UserProfileResolver.prototype.resolve = function (route, state) {
        return this.api.getUserProfile();
    };
    UserProfileResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserProfileResolver);
    return UserProfileResolver;
}());

//# sourceMappingURL=user-profile-resolver.service.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(60);
throw new Error("Cannot find module \"@aaman/dir/dir-routing.module\"");
throw new Error("Cannot find module \"@aaman/dir/dir/dir.component\"");
throw new Error("Cannot find module \"@aaman/dir/clients/client/client.component\"");
throw new Error("Cannot find module \"@aaman/dir/clients/client-list/client-list.component\"");
throw new Error("Cannot find module \"@aaman/dir/clients/client-details/client-details.component\"");
throw new Error("Cannot find module \"@aaman/dir/clients/client-api.service\"");
throw new Error("Cannot find module \"@aaman/dir/clients/client-resolver.service\"");
throw new Error("Cannot find module \"@aaman/dir/clients/client-list-resolver.service\"");
throw new Error("Cannot find module \"@aaman/dir/executives/executive/executive.component\"");
throw new Error("Cannot find module \"@aaman/dir/executives/executive-list/executive-list.component\"");
throw new Error("Cannot find module \"@aaman/dir/executives/executive-details/executive-details.component\"");
throw new Error("Cannot find module \"@aaman/dir/executives/executive-api.service\"");
throw new Error("Cannot find module \"@aaman/dir/executives/executive-resolver.service\"");
throw new Error("Cannot find module \"@aaman/dir/executives/executive-list-resolver.service\"");
throw new Error("Cannot find module \"@aaman/dir/media-houses/media-house/media-house.component\"");
throw new Error("Cannot find module \"@aaman/dir/media-houses/media-house-list/media-house-list.component\"");
throw new Error("Cannot find module \"@aaman/dir/media-houses/media-house-details/media-house-details.component\"");
throw new Error("Cannot find module \"@aaman/dir/media-houses/media-house-api.service\"");
throw new Error("Cannot find module \"@aaman/dir/media-houses/media-house-resolver.service\"");
throw new Error("Cannot find module \"@aaman/dir/media-houses/media-house-list-resolver.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var DirectoryModule = (function () {
    function DirectoryModule() {
    }
    DirectoryModule_1 = DirectoryModule;
    DirectoryModule = DirectoryModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_22_ionic_angular__["c" /* IonicModule */].forRoot(DirectoryModule_1),
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__aaman_dir_dir_routing_module__["DirRoutingModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__aaman_dir_clients_client_client_component__["ClientComponent"],
                __WEBPACK_IMPORTED_MODULE_10__aaman_dir_executives_executive_executive_component__["ExecutiveComponent"],
                __WEBPACK_IMPORTED_MODULE_16__aaman_dir_media_houses_media_house_media_house_component__["MediaHouseComponent"],
                __WEBPACK_IMPORTED_MODULE_3__aaman_dir_dir_dir_component__["DirComponent"],
                __WEBPACK_IMPORTED_MODULE_5__aaman_dir_clients_client_list_client_list_component__["ClientListComponent"],
                __WEBPACK_IMPORTED_MODULE_6__aaman_dir_clients_client_details_client_details_component__["ClientDetailsComponent"],
                __WEBPACK_IMPORTED_MODULE_11__aaman_dir_executives_executive_list_executive_list_component__["ExecutiveListComponent"],
                __WEBPACK_IMPORTED_MODULE_12__aaman_dir_executives_executive_details_executive_details_component__["ExecutiveDetailsComponent"],
                __WEBPACK_IMPORTED_MODULE_17__aaman_dir_media_houses_media_house_list_media_house_list_component__["MediaHouseListComponent"],
                __WEBPACK_IMPORTED_MODULE_18__aaman_dir_media_houses_media_house_details_media_house_details_component__["MediaHouseDetailsComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__aaman_dir_clients_client_api_service__["ClientApiService"],
                __WEBPACK_IMPORTED_MODULE_13__aaman_dir_executives_executive_api_service__["ExecutiveApiService"],
                __WEBPACK_IMPORTED_MODULE_19__aaman_dir_media_houses_media_house_api_service__["MediaHouseApiService"],
                __WEBPACK_IMPORTED_MODULE_8__aaman_dir_clients_client_resolver_service__["ClientResolver"],
                __WEBPACK_IMPORTED_MODULE_14__aaman_dir_executives_executive_resolver_service__["ExecutiveResolver"],
                __WEBPACK_IMPORTED_MODULE_20__aaman_dir_media_houses_media_house_resolver_service__["MediaHouseResolver"],
                __WEBPACK_IMPORTED_MODULE_9__aaman_dir_clients_client_list_resolver_service__["ClientListResolver"],
                __WEBPACK_IMPORTED_MODULE_15__aaman_dir_executives_executive_list_resolver_service__["ExecutiveListResolver"],
                __WEBPACK_IMPORTED_MODULE_21__aaman_dir_media_houses_media_house_list_resolver_service__["MediaHouseListResolver"]
            ]
        })
    ], DirectoryModule);
    return DirectoryModule;
    var DirectoryModule_1;
}());

//# sourceMappingURL=directory.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoUsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(60);
throw new Error("Cannot find module \"@aaman/couser/co-users-routing.module\"");
throw new Error("Cannot find module \"@aaman/couser/co-users/co-users.component\"");
throw new Error("Cannot find module \"@aaman/couser/co-user/co-user.component\"");
throw new Error("Cannot find module \"@aaman/couser/role-control/role-control.component\"");
throw new Error("Cannot find module \"@aaman/couser/role-edit/role-edit.component\"");
throw new Error("Cannot find module \"@aaman/couser/co-user-api.service\"");
throw new Error("Cannot find module \"@aaman/couser/co-user-resolver.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoUsersModule = (function () {
    function CoUsersModule() {
    }
    CoUsersModule_1 = CoUsersModule;
    CoUsersModule = CoUsersModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicModule */].forRoot(CoUsersModule_1),
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__aaman_couser_co_users_routing_module__["CoUsersRoutingModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__aaman_couser_co_users_co_users_component__["CoUsersComponent"],
                __WEBPACK_IMPORTED_MODULE_4__aaman_couser_co_user_co_user_component__["CoUserComponent"],
                __WEBPACK_IMPORTED_MODULE_5__aaman_couser_role_control_role_control_component__["RoleControlComponent"],
                __WEBPACK_IMPORTED_MODULE_6__aaman_couser_role_edit_role_edit_component__["RoleEditComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__aaman_couser_co_user_api_service__["CoUserApiService"],
                __WEBPACK_IMPORTED_MODULE_8__aaman_couser_co_user_resolver_service__["CoUsersResolver"]
            ]
        })
    ], CoUsersModule);
    return CoUsersModule;
    var CoUsersModule_1;
}());

//# sourceMappingURL=co-users.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(60);
throw new Error("Cannot find module \"@aaman/dir/directory.module\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card-routing.module\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card-api.service\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card-resolver.service\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card-list-resolver.service\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card/rate-card.component\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card-list/rate-card-list.component\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card-details/rate-card-details.component\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RateCardModule = (function () {
    function RateCardModule() {
    }
    RateCardModule_1 = RateCardModule;
    RateCardModule = RateCardModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicModule */].forRoot(RateCardModule_1),
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__aaman_dir_directory_module__["DirectoryModule"],
                __WEBPACK_IMPORTED_MODULE_3__aaman_ratecard_rate_card_routing_module__["RateCardRoutingModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__aaman_ratecard_rate_card_rate_card_component__["RateCardComponent"],
                __WEBPACK_IMPORTED_MODULE_8__aaman_ratecard_rate_card_list_rate_card_list_component__["RateCardListComponent"],
                __WEBPACK_IMPORTED_MODULE_9__aaman_ratecard_rate_card_details_rate_card_details_component__["RateCardDetailsComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__aaman_ratecard_rate_card_api_service__["RateCardApiService"],
                __WEBPACK_IMPORTED_MODULE_5__aaman_ratecard_rate_card_resolver_service__["RateCardResolver"],
                __WEBPACK_IMPORTED_MODULE_6__aaman_ratecard_rate_card_list_resolver_service__["RateCardListResolver"]
            ]
        })
    ], RateCardModule);
    return RateCardModule;
    var RateCardModule_1;
}());

//# sourceMappingURL=rate-card.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(60);
throw new Error("Cannot find module \"@aaman/dir/directory.module\"");
throw new Error("Cannot find module \"@aaman/ratecard/rate-card.module\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order-routing.module\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order-api.service\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order-resolver.service\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order-list-resolver.service\"");
throw new Error("Cannot find module \"@aaman/releaseorder/insertion-list-resolver.service\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order-dir-resolver.service\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order/release-order.component\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order-list/release-order-list.component\"");
throw new Error("Cannot find module \"@aaman/releaseorder/release-order-details/release-order-details.component\"");
throw new Error("Cannot find module \"@aaman/releaseorder/insertion-check/insertion-check.component\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ReleaseOrderModule = (function () {
    function ReleaseOrderModule() {
    }
    ReleaseOrderModule_1 = ReleaseOrderModule;
    ReleaseOrderModule = ReleaseOrderModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["c" /* IonicModule */].forRoot(ReleaseOrderModule_1),
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__aaman_dir_directory_module__["DirectoryModule"],
                __WEBPACK_IMPORTED_MODULE_3__aaman_ratecard_rate_card_module__["RateCardModule"],
                __WEBPACK_IMPORTED_MODULE_4__aaman_releaseorder_release_order_routing_module__["ReleaseOrderRoutingModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__aaman_releaseorder_release_order_api_service__["ReleaseOrderApiService"],
                __WEBPACK_IMPORTED_MODULE_6__aaman_releaseorder_release_order_resolver_service__["ReleaseOrderResolver"],
                __WEBPACK_IMPORTED_MODULE_7__aaman_releaseorder_release_order_list_resolver_service__["ReleaseOrderListResolver"],
                __WEBPACK_IMPORTED_MODULE_8__aaman_releaseorder_insertion_list_resolver_service__["InsertionListResolver"],
                __WEBPACK_IMPORTED_MODULE_9__aaman_releaseorder_release_order_dir_resolver_service__["ReleaseOrderDirResolver"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__aaman_releaseorder_release_order_release_order_component__["ReleaseOrderComponent"],
                __WEBPACK_IMPORTED_MODULE_11__aaman_releaseorder_release_order_list_release_order_list_component__["ReleaseOrderListComponent"],
                __WEBPACK_IMPORTED_MODULE_12__aaman_releaseorder_release_order_details_release_order_details_component__["ReleaseOrderDetailsComponent"],
                __WEBPACK_IMPORTED_MODULE_13__aaman_releaseorder_insertion_check_insertion_check_component__["InsertionCheckComponent"]
            ]
        })
    ], ReleaseOrderModule);
    return ReleaseOrderModule;
    var ReleaseOrderModule_1;
}());

//# sourceMappingURL=release-order.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(goback, route, api) {
        this.goback = goback;
        this.route = route;
        this.api = api;
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.admin = data.user.isAdmin;
        });
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-navbar',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/navbar/navbar.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n          <!-- *ngIf="!this.isLoginComponent"  -->\n            <button ion-button icon-only (click)="this.goback.goBack()" class="hamburger">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons right>\n          <button ion-button icon-only *ngIf="!this.api.isLoggedIn" (click)="this.goback.gotoComponent(\'login\')" class="hamburger">\n              <ion-icon name="log-in"></ion-icon>\n          </button>\n          <button ion-button icon-only *ngIf="this.api.isLoggedIn" (click)=" api.logout(); this.goback.gotoComponent(\'\')" class="hamburger">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n        <button class="hamburger" ion-button menuToggle left>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>AAMan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <!-- <button ion-item *ngIf="!api.isLoggedIn" routerLink="/" menuClose>\n        Home\n        </button> -->\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="!api.isLoggedIn" (click)="this.goback.gotoComponent(\'login\')" menuClose>\n        Login\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="!api.isLoggedIn" (click)="this.goback.gotoComponent(\'register\')" menuClose>\n        Register\n        </button>  \n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="!api.isLoggedIn" (click)="this.goback.gotoComponent(\'forgotPassword\')" menuClose>\n        Forgot Password\n        </button>      \n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'dashboard\')" menuClose>\n        Dashboard\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'profile\')" menuClose>\n        User Profile\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'firm\')" menuClose>\n        Firm Profile\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'coUsers\')" menuClose>\n        Co-Users\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'dir\')" menuClose>\n        Directory\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'ratecards\')" menuClose>\n        Rate Cards\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'releaseorders\')" menuClose>\n        Release Orders\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" *ngIf="admin" (click)="this.goback.gotoComponent(\'releaseorders/check\')" menuClose>\n        Insertion Check\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" *ngIf="admin" (click)="this.goback.gotoComponent(\'invoices\')" menuClose>\n        Invoices\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" *ngIf="admin" (click)="this.goback.gotoComponent(\'receipts\')" menuClose>\n        Payment Receipts\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" *ngIf="admin" (click)="this.goback.gotoComponent(\'templates\')" menuClose>\n        Templates\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'changePassword\')" menuClose>\n        Change Password\n       </button>\n       <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'\'); api.logout()" menuClose>\n          Logout\n       </button>\n        \n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/navbar/navbar.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/loader.service\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoaderComponent = (function () {
    function LoaderComponent(goback, loaderService) {
        this.goback = goback;
        this.loaderService = loaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-loader',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/loader/loader.component.html"*/'<div class="fixed-top">\n  <mat-progress-bar mode="indeterminate" *ngIf="loaderService.loading"></mat-progress-bar>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/loader/loader.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"], __WEBPACK_IMPORTED_MODULE_2__aaman_main_loader_service__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(60);
throw new Error("Cannot find module \"@aaman/releaseorder/release-order.module\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice-routing.module\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice-api.service\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice-resolver.service\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice-list-resolver.service\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice-dir-resolver.service\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice/invoice.component\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice-details/invoice-details.component\"");
throw new Error("Cannot find module \"@aaman/invoice/invoice-list/invoice-list.component\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    InvoiceModule_1 = InvoiceModule;
    InvoiceModule = InvoiceModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicModule */].forRoot(InvoiceModule_1),
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__aaman_releaseorder_release_order_module__["ReleaseOrderModule"],
                __WEBPACK_IMPORTED_MODULE_3__aaman_invoice_invoice_routing_module__["InvoiceRoutingModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__aaman_invoice_invoice_invoice_component__["InvoiceComponent"],
                __WEBPACK_IMPORTED_MODULE_9__aaman_invoice_invoice_details_invoice_details_component__["InvoiceDetailsComponent"],
                __WEBPACK_IMPORTED_MODULE_10__aaman_invoice_invoice_list_invoice_list_component__["InvoiceListComponent"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__aaman_invoice_invoice_api_service__["InvoiceApiService"],
                __WEBPACK_IMPORTED_MODULE_5__aaman_invoice_invoice_resolver_service__["InvoiceResolver"],
                __WEBPACK_IMPORTED_MODULE_6__aaman_invoice_invoice_list_resolver_service__["InvoiceListResolver"],
                __WEBPACK_IMPORTED_MODULE_7__aaman_invoice_invoice_dir_resolver_service__["InvoiceDirResolver"]
            ]
        })
    ], InvoiceModule);
    return InvoiceModule;
    var InvoiceModule_1;
}());

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__(429);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/window.service\"");
throw new Error("Cannot find module \"@aaman/main/razorpay.service\"");
throw new Error("Cannot find module \"@aaman/main/ifsc.service\"");
throw new Error("Cannot find module \"@aaman/main/dialog.service\"");
throw new Error("Cannot find module \"@aaman/main/state-api.service\"");
throw new Error("Cannot find module \"@aaman/main/loader.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
throw new Error("Cannot find module \"@aaman/main/options.service\"");
throw new Error("Cannot find module \"@aaman/main/firm-resolver.service\"");
throw new Error("Cannot find module \"@aaman/main/user-profile-resolver.service\"");
throw new Error("Cannot find module \"@aaman/main/auth-guard.service\"");
throw new Error("Cannot find module \"@aaman/main/phone-verify-guard.service\"");
throw new Error("Cannot find module \"@aaman/main/admin-guard.service\"");
throw new Error("Cannot find module \"@aaman/main/plan-guard.service\"");
throw new Error("Cannot find module \"@aaman/main/mailing-details/mailing-details.component\"");
throw new Error("Cannot find module \"@aaman/main/dialog/dialog.component\"");
throw new Error("Cannot find module \"@aaman/main/billing-details/billing-details.component\"");
throw new Error("Cannot find module \"@aaman/main/pagination/pagination.component\"");
throw new Error("Cannot find module \"@aaman/main/verify-email.directive\"");
throw new Error("Cannot find module \"@aaman/main/verify-min.directive\"");
throw new Error("Cannot find module \"@aaman/main/verify-max.directive\"");
throw new Error("Cannot find module \"@aaman/main/verify-fix-length.directive\"");
throw new Error("Cannot find module \"@aaman/main/verify-multiple-of.directive\"");
throw new Error("Cannot find module \"@aaman/main/verify-equals.directive\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var validators = [
    __WEBPACK_IMPORTED_MODULE_26__aaman_main_verify_email_directive__["VerifyEmailDirective"],
    __WEBPACK_IMPORTED_MODULE_27__aaman_main_verify_min_directive__["VerifyMinDirective"],
    __WEBPACK_IMPORTED_MODULE_28__aaman_main_verify_max_directive__["VerifyMaxDirective"],
    __WEBPACK_IMPORTED_MODULE_29__aaman_main_verify_fix_length_directive__["VerifyLengthDirective"],
    __WEBPACK_IMPORTED_MODULE_30__aaman_main_verify_multiple_of_directive__["VerifyMultipleOfDirective"],
    __WEBPACK_IMPORTED_MODULE_31__aaman_main_verify_equals_directive__["VerifyEqualsDirective"]
];
var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__aaman_main_goback_service__["GobackService"],
                __WEBPACK_IMPORTED_MODULE_7__aaman_main_api_service__["ApiService"],
                __WEBPACK_IMPORTED_MODULE_8__aaman_main_window_service__["WindowService"],
                __WEBPACK_IMPORTED_MODULE_9__aaman_main_razorpay_service__["RazorPayService"],
                __WEBPACK_IMPORTED_MODULE_10__aaman_main_ifsc_service__["IfscService"],
                __WEBPACK_IMPORTED_MODULE_11__aaman_main_dialog_service__["DialogService"],
                __WEBPACK_IMPORTED_MODULE_12__aaman_main_state_api_service__["StateApiService"],
                __WEBPACK_IMPORTED_MODULE_18__aaman_main_auth_guard_service__["AuthGuard"],
                __WEBPACK_IMPORTED_MODULE_19__aaman_main_phone_verify_guard_service__["PhoneVerifyGuard"],
                __WEBPACK_IMPORTED_MODULE_20__aaman_main_admin_guard_service__["AdminGuard"],
                __WEBPACK_IMPORTED_MODULE_21__aaman_main_plan_guard_service__["PlanGuard"],
                __WEBPACK_IMPORTED_MODULE_13__aaman_main_loader_service__["LoaderService"],
                __WEBPACK_IMPORTED_MODULE_14__aaman_main_notification_service__["NotificationService"],
                __WEBPACK_IMPORTED_MODULE_16__aaman_main_firm_resolver_service__["FirmResolver"],
                __WEBPACK_IMPORTED_MODULE_17__aaman_main_user_profile_resolver_service__["UserProfileResolver"],
                __WEBPACK_IMPORTED_MODULE_15__aaman_main_options_service__["OptionsService"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__aaman_main_mailing_details_mailing_details_component__["MailingDetailsComponent"],
                __WEBPACK_IMPORTED_MODULE_23__aaman_main_dialog_dialog_component__["DialogComponent"],
                __WEBPACK_IMPORTED_MODULE_24__aaman_main_billing_details_billing_details_component__["BillingDetailsComponent"],
                validators,
                __WEBPACK_IMPORTED_MODULE_25__aaman_main_pagination_pagination_component__["PaginationComponent"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_22__aaman_main_mailing_details_mailing_details_component__["MailingDetailsComponent"],
                validators,
                __WEBPACK_IMPORTED_MODULE_25__aaman_main_pagination_pagination_component__["PaginationComponent"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__aaman_main_dialog_dialog_component__["DialogComponent"],
                __WEBPACK_IMPORTED_MODULE_22__aaman_main_mailing_details_mailing_details_component__["MailingDetailsComponent"],
                __WEBPACK_IMPORTED_MODULE_24__aaman_main_billing_details_billing_details_component__["BillingDetailsComponent"]
            ]
        })
    ], BaseModule);
    return BaseModule;
}());

//# sourceMappingURL=base.module.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map