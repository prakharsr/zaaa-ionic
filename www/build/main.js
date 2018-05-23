webpackJsonp([0],{

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(548);
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

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GobackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
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




var GobackService = (function () {
    function GobackService(router, route, platform, api) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.api = api;
        platform.registerBackButtonAction(function () {
            _this.goBack();
        });
    }
    GobackService.prototype.goBack = function () {
        this.router.navigateByUrl(this.returnUrl);
    };
    GobackService.prototype.gotoComponent = function (path) {
        this.router.navigate([path], { queryParams: { returnUrl: this.router.url } });
    };
    GobackService.prototype.urlInit = function () {
        if (this.api.isLoggedIn) {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        }
        else {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
        }
    };
    GobackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__aaman_main_api_service__["ApiService"]])
    ], GobackService);
    return GobackService;
}());

//# sourceMappingURL=goback.service.js.map

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

/***/ 354:
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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_window_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-empty',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/empty/empty.component.html"*/'<p> </p>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/empty/empty.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EmptyComponent);
    return EmptyComponent;
}());

//# sourceMappingURL=empty.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(408);
throw new Error("Cannot find module \"@aaman/main/home/app.component\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_module__ = __webpack_require__(428);
throw new Error("Cannot find module \"@aaman/main/admin.module\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aaman_dir_directory_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aaman_dir_directory_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__aaman_dir_directory_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aaman_couser_co_users_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aaman_couser_co_users_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__aaman_couser_co_users_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aaman_ratecard_rate_card_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aaman_ratecard_rate_card_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__aaman_ratecard_rate_card_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aaman_releaseorder_release_order_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aaman_releaseorder_release_order_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__aaman_releaseorder_release_order_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aaman_invoice_invoice_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aaman_invoice_invoice_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__aaman_invoice_invoice_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__aaman_receipts_receipts_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__aaman_receipts_receipts_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__aaman_receipts_receipts_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__aaman_accounts_accounts_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__aaman_accounts_accounts_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__aaman_accounts_accounts_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__(461);
throw new Error("Cannot find module \"@aaman/main/home/home.component\"");
throw new Error("Cannot find module \"@aaman/main/phone-verify/phone-verify.component\"");
throw new Error("Cannot find module \"@aaman/main/navbar/navbar.component\"");
throw new Error("Cannot find module \"@aaman/main/login/login.component\"");
throw new Error("Cannot find module \"@aaman/main/register/register.component\"");
throw new Error("Cannot find module \"@aaman/main/profile-view/profile-view.component\"");
throw new Error("Cannot find module \"@aaman/main/dashboard/dashboard.component\"");
throw new Error("Cannot find module \"@aaman/main/firm-profile-view/firm-profile-view.component\"");
throw new Error("Cannot find module \"@aaman/main/change-psw/change-psw.component\"");
throw new Error("Cannot find module \"@aaman/main/forgot-psw/forgot-psw.component\"");
throw new Error("Cannot find module \"@aaman/main/not-found/not-found.component\"");
throw new Error("Cannot find module \"@aaman/main/reset-password/reset-password.component\"");
throw new Error("Cannot find module \"@aaman/main/loader/loader.component\"");
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
                __WEBPACK_IMPORTED_MODULE_4__aaman_main_home_app_component__["AppComponent"],
                __WEBPACK_IMPORTED_MODULE_22__aaman_main_navbar_navbar_component__["NavbarComponent"],
                __WEBPACK_IMPORTED_MODULE_20__aaman_main_home_home_component__["HomeComponent"],
                __WEBPACK_IMPORTED_MODULE_21__aaman_main_phone_verify_phone_verify_component__["PhoneVerifyComponent"],
                __WEBPACK_IMPORTED_MODULE_23__aaman_main_login_login_component__["LoginComponent"],
                __WEBPACK_IMPORTED_MODULE_24__aaman_main_register_register_component__["RegisterComponent"],
                __WEBPACK_IMPORTED_MODULE_25__aaman_main_profile_view_profile_view_component__["ProfileViewComponent"],
                __WEBPACK_IMPORTED_MODULE_26__aaman_main_dashboard_dashboard_component__["DashboardComponent"],
                __WEBPACK_IMPORTED_MODULE_27__aaman_main_firm_profile_view_firm_profile_view_component__["FirmProfileViewComponent"],
                __WEBPACK_IMPORTED_MODULE_28__aaman_main_change_psw_change_psw_component__["ChangePswComponent"],
                __WEBPACK_IMPORTED_MODULE_29__aaman_main_forgot_psw_forgot_psw_component__["ForgotPswComponent"],
                __WEBPACK_IMPORTED_MODULE_30__aaman_main_not_found_not_found_component__["NotFoundComponent"],
                __WEBPACK_IMPORTED_MODULE_31__aaman_main_reset_password_reset_password_component__["ResetPasswordComponent"],
                __WEBPACK_IMPORTED_MODULE_32__aaman_main_loader_loader_component__["LoaderComponent"]
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
                __WEBPACK_IMPORTED_MODULE_11__aaman_main_admin_module__["AdminModule"],
                __WEBPACK_IMPORTED_MODULE_12__aaman_dir_directory_module__["DirectoryModule"],
                __WEBPACK_IMPORTED_MODULE_13__aaman_couser_co_users_module__["CoUsersModule"],
                __WEBPACK_IMPORTED_MODULE_14__aaman_ratecard_rate_card_module__["RateCardModule"],
                __WEBPACK_IMPORTED_MODULE_15__aaman_releaseorder_release_order_module__["ReleaseOrderModule"],
                __WEBPACK_IMPORTED_MODULE_16__aaman_invoice_invoice_module__["InvoiceModule"],
                __WEBPACK_IMPORTED_MODULE_17__aaman_receipts_receipts_module__["ReceiptsModule"],
                __WEBPACK_IMPORTED_MODULE_18__aaman_accounts_accounts_module__["AccountsModule"],
                __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__aaman_main_home_app_component__["AppComponent"],
                __WEBPACK_IMPORTED_MODULE_22__aaman_main_navbar_navbar_component__["NavbarComponent"],
                __WEBPACK_IMPORTED_MODULE_20__aaman_main_home_home_component__["HomeComponent"],
                __WEBPACK_IMPORTED_MODULE_21__aaman_main_phone_verify_phone_verify_component__["PhoneVerifyComponent"],
                __WEBPACK_IMPORTED_MODULE_23__aaman_main_login_login_component__["LoginComponent"],
                __WEBPACK_IMPORTED_MODULE_24__aaman_main_register_register_component__["RegisterComponent"],
                __WEBPACK_IMPORTED_MODULE_25__aaman_main_profile_view_profile_view_component__["ProfileViewComponent"],
                __WEBPACK_IMPORTED_MODULE_26__aaman_main_dashboard_dashboard_component__["DashboardComponent"],
                __WEBPACK_IMPORTED_MODULE_27__aaman_main_firm_profile_view_firm_profile_view_component__["FirmProfileViewComponent"],
                __WEBPACK_IMPORTED_MODULE_28__aaman_main_change_psw_change_psw_component__["ChangePswComponent"],
                __WEBPACK_IMPORTED_MODULE_29__aaman_main_forgot_psw_forgot_psw_component__["ForgotPswComponent"],
                __WEBPACK_IMPORTED_MODULE_30__aaman_main_not_found_not_found_component__["NotFoundComponent"],
                __WEBPACK_IMPORTED_MODULE_31__aaman_main_reset_password_reset_password_component__["ResetPasswordComponent"],
                __WEBPACK_IMPORTED_MODULE_32__aaman_main_loader_loader_component__["LoaderComponent"]
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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__ = __webpack_require__(409);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/app/app.component.html"*/'<app-loader></app-loader>\n<app-navbar></app-navbar>\n<ion-content>\n<br><br>\n    <router-outlet></router-outlet>\n<br><br>\n</ion-content>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/app/app.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_goback_service__["a" /* GobackService */]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
throw new Error("Cannot find module \"@aaman/main/goback.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(97);
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

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_checkbox__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_input__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_expansion__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_datepicker__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_snack_bar__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_select__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_table__ = __webpack_require__(451);
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_admin_guard_service__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firm_resolver_service__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_view_profile_view_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_firm_profile_view_firm_profile_view_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_phone_verify_phone_verify_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_change_psw_change_psw_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_forgot_psw_forgot_psw_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_firm_profile_edit_firm_profile_edit_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_template_selector_template_selector_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_plan_selector_plan_selector_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_reset_password_reset_password_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_empty_empty_component__ = __webpack_require__(355);
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerifyGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(24);
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

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(24);
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

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(24);
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

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_firm__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_goback_service__ = __webpack_require__(21);
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
        this.profile = new __WEBPACK_IMPORTED_MODULE_4__models_firm__["a" /* Firm */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/home/home.component.html"*/'<div *ngIf="this.isLoaded" class="text-center">\n  <br>\n  <br>\n  <img *ngIf="profile.logo" [src]="profile.logo" class="img-fluid max-w-200">\n  <br>\n  <br>\n  <br>\n  <img src="assets/zenedo.jpeg" width="150" height="150">\n</div>\n\n\n<!-- <div class="text-center">\n  <h1>Advertising Agency Manager (AAMan)</h1>\n  <br>\n  <p>A complete solution for Advertising Agencies.</p>\n  <br>\n  <img src="assets/logo.jpg" width="150" height="150">\n</div> -->'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/home/home.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */]])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 549:
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

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/login/login.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Login</h1>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #loginForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Email Address or Phone" name="emailPhone" [(ngModel)]="emailOrPhone" type=\'text\' required #emailOrPhoneField="ngModel">\n      <mat-error *ngIf="emailOrPhoneField.errors && emailOrPhoneField.errors.required">\n        Email or Phone is required.\n      </mat-error>\n    </mat-form-field>\n\n    <div class="form-group">\n      <p class="float-right"><a tabindex="-1" routerLink="/forgotPassword">Forgot Password</a></p>\n    </div>\n\n    <mat-form-field>\n      <input matInput placeholder="Password" name="password" [(ngModel)]="password" [type]="hidePassword ? \'password\' : \'text\'" required #passwordField="ngModel">\n      <mat-icon matSuffix (click)="hidePassword = !hidePassword">{{hidePassword ? \'visibility\' : \'visibility_off\'}}</mat-icon>\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n    <button class="btn btn-success" [disabled]="!loginForm.form.valid">Login</button>\n  </form>\n\n  <br>\n  <p>Don\'t have an account, create <a routerLink="/register">one</a>.</p>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/login/login.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__aaman_main_notification_service__["NotificationService"]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/register/register.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Sign Up</h1>\n    <p class="lead">For Advertsing Agency Administrators</p>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #signUpForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Name" [(ngModel)]="name" name="name" required #nameField="ngModel">\n      <mat-error *ngIf="nameField.errors && nameField.errors.required">\n        Name is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder="Email" [(ngModel)]="email" name="email" required verify-email #emailField="ngModel">\n      <mat-hint>An auto-generated password will be sent to this Email.</mat-hint>\n      <mat-error *ngIf="emailField.errors && emailField.errors.required">\n        Email is required.\n      </mat-error>\n      <mat-error *ngIf="emailField.errors && emailField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n\n    <mat-checkbox class="my-2" name="acceptTnC" [(ngModel)]="acceptTnC" required #acceptTnCField="ngModel">Accept Terms and Conditions</mat-checkbox>\n\n    <div *ngIf="acceptTnCField.invalid && (acceptTnCField.dirty || acceptTnCField.touched)" class="text-danger">\n      <div *ngIf="acceptTnCField.errors.required">\n        Accept Terms and Conditions to continue.\n      </div>\n    </div>\n\n    <br><br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!signUpForm.form.valid">Sign Up</button>\n  </form>\n\n  <br>\n  <p>Already have an account, <a routerLink="/login">Login</a>.</p>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/register/register.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__aaman_main_notification_service__["NotificationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
throw new Error("Cannot find module \"@aaman/main/user-profile\"");
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/dialog.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
throw new Error("Cannot find module \"environments/environment\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_goback_service__ = __webpack_require__(21);
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
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__aaman_main_user_profile__["UserProfile"]();
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
                _this.profile.photo = __WEBPACK_IMPORTED_MODULE_6_environments_environment__["environment"].uploadsBaseUrl + data.photo;
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
                    _this.profile.photo = __WEBPACK_IMPORTED_MODULE_6_environments_environment__["environment"].uploadsBaseUrl + data.photo;
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
                _this.profile.sign = __WEBPACK_IMPORTED_MODULE_6_environments_environment__["environment"].uploadsBaseUrl + data.photo;
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
                    _this.profile.sign = __WEBPACK_IMPORTED_MODULE_6_environments_environment__["environment"].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            });
        });
    };
    ProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-view',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/profile-view/profile-view.component.html"*/'<mat-toolbar>  \n    <mat-toolbar-row>\n        <div class="container">User Profile</div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n  <br>\n  <div class="row">\n    <div class="col-xl-6">\n      <div class="card mb-5">\n        <div class="card-header">Personal Details</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Name</div>\n              <div class="col-md-8">\n                {{profile.name}}\n                \n                <span class="text-muted">\n                  ({{profile.isAdmin ? \'ADMIN\' : \'Co-User\'}})\n                </span>\n              </div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Designation</div>\n              <div class="col-md-8">{{profile.designation}}</div>\n            </div>\n          </li>\n        </ul>\n        <div class="card-body" *ngIf="profile.isAdmin">\n          <a class="btn btn-info" routerLink="/profile/edit">\n            <mat-icon>edit</mat-icon> Edit\n          </a>\n        </div>\n      </div>\n      <div class="card mb-5">\n          <div class="card-header">Login Details</div>\n          <ul class="list-group list-group-flush">\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Email</div>\n                <div class="col-md-8">{{profile.email}}</div>\n              </div>\n            </li>\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Contact</div>\n                <div class="col-md-8">{{profile.contact}}</div>\n              </div>\n            </li>\n          </ul>\n          <div class="card-body">\n            <a class="btn btn-danger" routerLink="/changePassword">\n              <mat-icon>vpn_key</mat-icon> Change Password\n            </a>\n          </div>\n        </div>\n    </div>\n    <div class="col-xl-3">\n      <div class="card mb-5">\n        <div class="card-header">Profile Picture</div>\n        <div class="card-body text-center">\n          <img [src]="profile.photo" class="img-fluid max-w-200">\n    \n          <br><br>\n          \n          <label for="profile-upload" class="btn btn-outline-info">\n            <mat-icon>file_upload</mat-icon>\n          </label>\n          <input type="file" id="profile-upload" class="hidden-file" accept="image/*" (change)="uploadProfilePicture($event.target.files)"/>\n\n          <button class="btn btn-outline-danger mb-2" (click)="removeProfilePicture()">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class="col-xl-3">\n      <div class="card mb-5">\n        <div class="card-header">Signature</div>\n        <div class="card-body text-center">\n          <img [src]="profile.sign" class="img-fluid max-w-200">\n      \n          <br><br>\n          \n          <label for="sign-upload" class="btn btn-outline-info">\n            <mat-icon>file_upload</mat-icon>\n          </label>\n          <input type="file" id="sign-upload" class="hidden-file" accept="image/*" (change)="uploadSign($event.target.files)"/>\n\n          <button class="btn btn-outline-danger mb-2" (click)="removeSign()">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/profile-view/profile-view.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_3__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_4__aaman_main_dialog_service__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_5__aaman_main_notification_service__["NotificationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());

//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/dashboard/dashboard.component.html"*/'<div class="jumbotron jumbotron-fluid">\n    <div class="container">\n        <h1 class="display-4">Dashboard</h1>\n    </div>\n</div>\n<br>\n<div class="container">\n    <div class="row">\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_primary" class="btn btn-primary" (click)="this.goback.gotoComponent(\'profile\')"> User Profile</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_success"  class="btn btn-success" (click)="this.goback.gotoComponent(\'firm\')">< Firm Profile</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_warning" class="btn btn-warning" (click)="this.goback.gotoComponent(\'coUsers\')"> Co-Users</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_info" class="btn btn-info" (click)="this.goback.gotoComponent(\'dir\')"> Directory</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_danger" class="btn btn-danger" (click)="this.goback.gotoComponent(\'ratecards\')"> Rate Cards</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_primary" class="btn btn-primary" (click)="this.goback.gotoComponent(\'releaseorders\')"> Release Orders</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_success" class="btn btn-success" (click)="this.goback.gotoComponent(\'releaseorders/check\')">Insertion Check</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_warning" class="btn btn-warning" (click)="this.goback.gotoComponent(\'invoices\')">Invoices</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_info" class="btn btn-info" (click)="this.goback.gotoComponent(\'receipts\')">Payment Receipts</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_danger" class="btn btn-danger" (click)="this.goback.gotoComponent(\'templates\')">Templates</button>\n        </div>\n    </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/dashboard/dashboard.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
throw new Error("Cannot find module \"@aaman/main/firm\"");
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/dialog.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
throw new Error("Cannot find module \"environments/environment.prod\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_goback_service__ = __webpack_require__(21);
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
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__aaman_main_firm__["Firm"]();
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
                _this.profile.logo = __WEBPACK_IMPORTED_MODULE_6_environments_environment_prod__["environment"].uploadsBaseUrl + data.photo;
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
                    _this.profile.logo = __WEBPACK_IMPORTED_MODULE_6_environments_environment_prod__["environment"].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            });
        });
    };
    FirmProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-firm-profile-view',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/firm-profile-view/firm-profile-view.component.html"*/'<mat-toolbar>  \n    <mat-toolbar-row>\n        <div class="container">Firm Profile</div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n\n<button class="fab bg-info" *ngIf="admin" (click)="this.goback.gotoComponent(\'firm/edit\')">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<br>\n\n<div class="row">\n  <div class="col-lg-8 order-2 order-lg-1">\n    <div class="card mb-5">\n      <div class="card-header">Business Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Firm Name</div>\n            <div class="col-md-8">{{profile.name}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Tag Line</div>\n            <div class="col-md-8">{{profile.tagline}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Display / NickName</div>\n            <div class="col-md-8">{{profile.nickname}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Incorporation Date</div>\n            <div class="col-md-8">{{profile.incDate | date}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Email</div>\n            <div class="col-md-8">{{profile.email}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Mobile 1</div>\n            <div class="col-md-8">{{profile.phone}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Mobile 2</div>\n            <div class="col-md-8">{{profile.OtherMobile}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">STD Number</div>\n            <div class="col-md-8">{{profile.stdNo}}</div>\n          </div>\n        </li>           \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">LandLine Number</div>\n            <div class="col-md-8">{{profile.landlineNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Fax</div>\n            <div class="col-md-8">{{profile.fax}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Website</div>\n            <div class="col-md-8">{{profile.website}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pan No.</div>\n            <div class="col-md-8">{{profile.panNo}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">GSTIN</div>\n            <div class="col-md-8">{{profile.GSTIN.GSTType}} {{profile.GSTIN.GSTNo}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Registered Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{profile.registeredAddress.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{profile.registeredAddress.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{profile.registeredAddress.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{profile.registeredAddress.state}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Office Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{profile.officeAddress.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{profile.officeAddress.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{profile.officeAddress.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{profile.officeAddress.state}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Bank Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account Name</div>\n            <div class="col-md-8">{{profile.bankAccountName}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account No.</div>\n            <div class="col-md-8">{{profile.bankAccountNo}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Bank Name</div>\n            <div class="col-md-8">{{profile.bankName}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">IFSC</div>\n            <div class="col-md-8">{{profile.bankIfsc}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Branch Address</div>\n            <div class="col-md-8">{{profile.bankBranchAddress}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account Type</div>\n            <div class="col-md-8">{{profile.bankAccountType}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Social Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Facebook</div>\n            <div class="col-md-8"><a href="{{profile.facebook}}" target="_blank">{{profile.facebook}}</a></div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Twitter</div>\n            <div class="col-md-8"><a href="{{profile.twitter}}" target="_blank">{{profile.twitter}}</a></div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Others</div>\n            <div class="col-md-8"><a href="{{profile.other}}" target="_blank">{{profile.other}}</a></div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="col-lg-4 order-lg-2">\n    <div class="card mb-5">\n      <div class="card-header">Logo</div>\n      <div class="card-body text-center">\n        <img [src]="profile.logo" class="img-fluid max-w-200">\n        \n        <br><br>\n        \n        <label for="logo-upload" *ngIf="admin" class="btn btn-outline-info">\n          <mat-icon>file_upload</mat-icon>\n        </label>\n        <input type="file" *ngIf="admin" id="logo-upload" accept="image/*" class="hidden-file" (change)="uploadLogo($event.target.files)"/>\n\n        <button *ngIf="admin" class="btn btn-outline-danger mb-2" (click)="removeLogo()">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/firm-profile-view/firm-profile-view.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_3__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_4__aaman_main_dialog_service__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_5__aaman_main_notification_service__["NotificationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], FirmProfileViewComponent);
    return FirmProfileViewComponent;
}());

//# sourceMappingURL=firm-profile-view.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-phone-verify',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/phone-verify/phone-verify.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Verify Phone Number</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="sendOtp()" #phoneNumberForm="ngForm">\n    <mat-form-field>\n      <span matPrefix>+91 &nbsp;</span>\n      <input type="tel" matInput placeholder="Phone Number" [(ngModel)]="number" pattern="^\d{10}$" maxlength="10" minlength="10" required name="phone">\n    </mat-form-field>\n\n    <div *ngIf="sendError" class="text-danger">\n      {{sendError}}\n      \n      <br>\n    </div>\n\n    <div class="text-right">\n      <button type="submit" class="btn btn-primary" [disabled]="!phoneNumberForm.form.valid || otpSent">Send Code</button>\n    </div>\n  </form>\n\n  <form *ngIf="otpSent" (ngSubmit)="verifyOtp()" #otpForm="ngForm">\n    <mat-form-field>\n      <input type="text" matInput placeholder="Verification Code" [(ngModel)]="otp" required name="otp">\n      <mat-hint>Enter the Verification code received on your mobile.</mat-hint>\n    </mat-form-field>\n\n    <div *ngIf="verifyError" class="text-danger">\n      {{verifyError}}\n      \n      <br>\n    </div>\n\n    <br><br>\n    <button type="submit" class="btn btn-success" [disabled]="!otpForm.form.valid">Verify Code</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/phone-verify/phone-verify.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PhoneVerifyComponent);
    return PhoneVerifyComponent;
}());

//# sourceMappingURL=phone-verify.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePswComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-psw',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/change-psw/change-psw.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Change Password</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #changePswForm="ngForm">\n    <mat-form-field>\n      <input matInput type="password" name="oldPassword" placeholder="Old Password" [(ngModel)]="oldPassword" required #oldPasswordField="ngModel">\n      <mat-error *ngIf="oldPasswordField.errors && oldPasswordField.errors.required">\n        Old Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="password" placeholder="New Password" [(ngModel)]="password" required #passwordField="ngModel">\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        New Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="cpassword" [verify-equals]="password" placeholder="Confirm New Password" [(ngModel)]="cpassword" required #cpasswordField="ngModel">\n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.required">\n        Password confirmation is required.\n      </mat-error> \n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.equals">\n        Passwords don\'t match.\n      </mat-error>\n    </mat-form-field>\n\n    <br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!changePswForm.form.valid">Change</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/change-psw/change-psw.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_1__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2__aaman_main_notification_service__["NotificationService"]])
    ], ChangePswComponent);
    return ChangePswComponent;
}());

//# sourceMappingURL=change-psw.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPswComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-psw',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/forgot-psw/forgot-psw.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Forgot Password</h1>\n    <p class="lead">A password reset email will be sent to your email account.</p>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #forgotPswForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Email Address" [(ngModel)]="email" name="email" required verify-email #emailField="ngModel">\n      <mat-error *ngIf="emailField.errors && emailField.errors.required">\n        Email is required.\n      </mat-error>\n      <mat-error *ngIf="emailField.errors && emailField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n    <button class="btn btn-success" [disabled]="!forgotPswForm.form.valid">Send</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/forgot-psw/forgot-psw.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_1__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2__aaman_main_notification_service__["NotificationService"]])
    ], ForgotPswComponent);
    return ForgotPswComponent;
}());

//# sourceMappingURL=forgot-psw.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/not-found/not-found.component.html"*/'<br>\n<h3 class="text-center">\n  Page Not Found (404)\n</h3>\n'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/not-found/not-found.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_goback_service__["a" /* GobackService */]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
throw new Error("Cannot find module \"@aaman/main/firm\"");
throw new Error("Cannot find module \"@aaman/main/ifsc.service\"");
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/state-api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_goback_service__ = __webpack_require__(21);
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
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__aaman_main_firm__["Firm"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-firm-profile-edit',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/firm-profile-edit/firm-profile-edit.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Edit Firm Profile</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #profileForm="ngForm">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Business Details</mat-panel-title>\n          <mat-panel-description>Enter Business details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="firmName" placeholder="Firm Name" [(ngModel)]="profile.name" required #firmNameField="ngModel">\n          <mat-error *ngIf="firmNameField.errors && firmNameField.errors.required">\n            Firm Name is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="tagline" placeholder="Tagline" [(ngModel)]="profile.tagline" #taglineField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="nickname" placeholder="Nickname" [(ngModel)]="profile.nickname" #nicknameField="ngModel">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [matDatepicker]="incDateField" name="incDate" placeholder="Incorporation Date" [(ngModel)]="profile.incDate" disabled>\n          <mat-datepicker-toggle matSuffix [for]="incDateField"></mat-datepicker-toggle>\n          <mat-datepicker #incDateField disabled="false"></mat-datepicker>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="website" placeholder="Website" [(ngModel)]="profile.website" #websiteField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="panNo" placeholder="PAN Number" [(ngModel)]="profile.panNo" minlength="10" maxlength="10" required #panNoField="ngModel">\n          <mat-error *ngIf="panNoField.errors && panNoField.errors.required">\n            PAN Number is required.\n          </mat-error>\n          <mat-error *ngIf="panNoField.errors && (panNoField.errors.minlength || panNoField.errors.maxlength)">\n            PAN Number should be 10 characters long.\n          </mat-error>\n        </mat-form-field>\n\n        <div class="form-row">\n          <div class="{{profile.GSTIN.GSTType != \'URD\' ? \'col-auto\' : \'col\'}}">\n            <mat-form-field>\n              <mat-select placeholder="GST Type" name="gstType" [(ngModel)]="profile.GSTIN.GSTType">\n                <mat-option value="URD">URD</mat-option>\n                <mat-option value="RD">RD</mat-option>\n                <mat-option value="CRD">CRD</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class="col" *ngIf="profile.GSTIN.GSTType != \'URD\'">\n            <mat-form-field>\n              <input matInput type="text" name="gstNo" placeholder="GST Number" [(ngModel)]="profile.GSTIN.GSTNo" required minlength="15" maxlength="15" #gstNoField="ngModel">\n              <mat-error *ngIf="gstNoField.errors && gstNoField.errors.required">\n                GSTIN is required.\n              </mat-error>\n              <mat-error *ngIf="gstNoField.errors && (gstNoField.errors.minlength || gstNoField.errors.maxlength)">\n                GSTIN should be 15 characters long.\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      \n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Contact Details</mat-panel-title>\n          <mat-panel-description>Enter Contact Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-row">\n          <div class="col">\n            <mat-form-field>\n              <input matInput type="email" name="email" placeholder="Email" [(ngModel)]="profile.email" required #emailField="ngModel" verify-email>\n              <mat-error *ngIf="emailField.errors && emailField.errors.required">\n                Email is required.\n              </mat-error>\n              <mat-error *ngIf="emailField.errors && emailField.errors.email">\n                Invalid Email.\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class="col-auto align-self-center">\n            <button class="btn btn-sm btn-outline-info" type="button" (click)="profile.email = user.email">Copy from User</button>\n          </div>\n        </div>\n    \n        <mat-form-field>\n          <span matPrefix>+91 &nbsp;</span>\n          <input matInput type="tel" [(ngModel)]="profile.phone" pattern="^\d{10}$" maxlength="10" minlength="10" name="phone" placeholder="Mobile 1" #phoneField="ngModel">\n          <mat-error *ngIf="phoneField.errors">\n            Mobile 1 is empty or invalid.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <span matPrefix>+91 &nbsp;</span>\n          <input matInput type="tel" [(ngModel)]="profile.OtherMobile" pattern="^\d{10}$" maxlength="10" minlength="10" name="phone2" placeholder="Mobile 2" #phone2Field="ngModel">\n          <mat-error *ngIf="phone2Field.errors">\n            Mobile 2 is invalid.\n          </mat-error>\n        </mat-form-field>\n\n        <div class="form-row">\n          <div class="col-3">\n            <mat-form-field>\n              <input matInput type="tel" name="stdNo" placeholder="STD No" minlength="3" maxlength="5" [(ngModel)]="profile.stdNo" #stdNoField="ngModel">\n            </mat-form-field>\n          </div>\n      \n          <div class="col-9">\n            <mat-form-field>\n              <input matInput type="tel" name="landlineNo" minlength="6" maxlength="8" placeholder="Landline Number" [(ngModel)]="profile.landlineNo" #landlineNoField="ngModel">\n            </mat-form-field>\n          </div>\n        </div>        \n      \n        <mat-form-field>\n          <input matInput type="number" name="fax" placeholder="Fax" [(ngModel)]="profile.fax" #faxField="ngModel">\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Registered Address</mat-panel-title>\n          <mat-panel-description>Enter Registered Address</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="registeredAddress" placeholder="Registered Address" [(ngModel)]="profile.registeredAddress.address" required #registeredAddressField="ngModel">\n          <mat-error *ngIf="firmNameField.errors && firmNameField.errors.required">\n            Registered Address is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="tel" minlength="6" maxlength="6" name="registeredPincode" placeholder="Pincode" [(ngModel)]="profile.registeredAddress.pincode" required #registeredPincodeField="ngModel">\n          <mat-error *ngIf="registeredPincodeField.errors && registeredPincodeField.errors.required">\n            Pincode is required.\n          </mat-error>\n          <mat-error *ngIf="registeredPincodeField.errors && (registeredPincodeField.errors.minlength || registeredPincodeField.errors.maxlength)">\n            Pincode should be 6 characters long.\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field>\n          <input matInput type="text" name="registeredCity" placeholder="City" [(ngModel)]="profile.registeredAddress.city" required #registeredCityField="ngModel">\n          <mat-error *ngIf="registeredCityField.errors && registeredCityField.errors.required">\n            City is required.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder="State" name="registeredState" [(ngModel)]="profile.registeredAddress.state" required #registeredStateField="ngModel">\n            <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n          </mat-select>\n          <mat-error *ngIf="registeredStateField.errors && registeredStateField.errors.required">\n            State is required.\n          </mat-error>\n        </mat-form-field>\n      \n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Office Address</mat-panel-title>\n          <mat-panel-description>Enter Office Address</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <button type="button" mat-raised-button (click)="copyAddress()">Copy from Above</button>\n        <br><br>\n\n        <mat-form-field>\n          <input matInput type="text" name="officeAddress" placeholder="Office Address" [(ngModel)]="profile.officeAddress.address" #officeAddressField="ngModel">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput type="tel" minlength="6" maxlength="6" name="officePincode" placeholder="Pincode" [(ngModel)]="profile.officeAddress.pincode" #officePincodeField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="officeCity" placeholder="City" [(ngModel)]="profile.officeAddress.city" #officeCityField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select placeholder="State" name="officeState" [(ngModel)]="profile.officeAddress.state" #officeStateField="ngModel">\n            <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n          </mat-select>\n          <mat-error *ngIf="officeStateField.errors && officeStateField.errors.required">\n            State is required.\n          </mat-error>\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Bank Account Details</mat-panel-title>\n          <mat-panel-description>Enter Bank Account Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-row">\n          <div class="col">\n            <mat-form-field>\n              <input matInput type="text" name="bankAccountName" placeholder="Bank Account Name" [(ngModel)]="profile.bankAccountName" required #bankAccountNameField="ngModel">\n              <mat-error *ngIf="bankAccountNameField.errors && bankAccountNameField.errors.required">\n                Account Name is required.\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class="col-auto align-self-center">\n            <button class="btn btn-sm btn-outline-info" type="button" (click)="profile.bankAccountName = profile.name">Copy Firm Name</button>\n          </div>\n        </div>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankAccountNo" placeholder="Bank Account Number" [(ngModel)]="profile.bankAccountNo" required #bankAccountNoField="ngModel">\n          <mat-error *ngIf="bankAccountNoField.errors && bankAccountNoField.errors.required">\n            Account Number is required.\n          </mat-error>\n        </mat-form-field>\n    \n        <mat-form-field>\n          <input matInput type="text" name="bankIfsc" placeholder="Bank IFSC" [(ngModel)]="profile.bankIfsc" required minlength="11" maxlength="11" #bankIfscField="ngModel" (input)="ifscChanged()">\n          <mat-error *ngIf="bankIfscField.errors && bankIfscField.errors.required">\n            IFSC is required.\n          </mat-error>\n          <mat-error *ngIf="bankIfscField.errors && (bankIfscField.errors.minlength || bankIfscField.errors.maxlength)">\n            IFSC should be 11 characters long.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankName" placeholder="Bank Name" [(ngModel)]="profile.bankName" required #bankNameField="ngModel">\n          <mat-error *ngIf="bankNameField.errors && bankNameField.errors.required">\n            Bank Name is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankBranchAddress" placeholder="Bank Branch Address" [(ngModel)]="profile.bankBranchAddress" required #bankBranchAddressField="ngModel">\n          <mat-error *ngIf="bankBranchAddressField.errors && bankBranchAddressField.errors.required">\n            Bank Branch Address is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select placeholder="Bank Account Type" name="bankAccountType" [(ngModel)]="profile.bankAccountType">\n            <mat-option value="Current">Current</mat-option>\n            <mat-option value="Savings">Savings</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Social Details</mat-panel-title>\n          <mat-panel-description>Enter Social Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="facebook" placeholder="Facebook Link" [(ngModel)]="profile.facebook" #facebookField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="twitter" placeholder="Twitter Link" [(ngModel)]="profile.twitter" #twitterField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="others" placeholder="Other social Link" [(ngModel)]="profile.other" #otherField="ngModel">\n        </mat-form-field>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <br><br>\n  \n    <button type="submit" class="btn btn-success" [disabled]="!profileForm.form.valid">Save</button>\n    <button type="button" class="btn btn-danger" (click)="cancel()">Cancel</button>\n\n    <br><br><br>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/firm-profile-edit/firm-profile-edit.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_3__aaman_main_ifsc_service__["IfscService"],
            __WEBPACK_IMPORTED_MODULE_4__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_5__aaman_main_state_api_service__["StateApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__aaman_main_notification_service__["NotificationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], FirmProfileEditComponent);
    return FirmProfileEditComponent;
}());

//# sourceMappingURL=firm-profile-edit.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_goback_service__ = __webpack_require__(21);
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
        this.done = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TemplateSelectorComponent.prototype, "done", void 0);
    TemplateSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-template-selector',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/template-selector/template-selector.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Templates</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form>\n    <div class="form-group form-row">\n      <label for="jurisdiction" class="col-md-3 col-form-label">Jurisdiction</label>\n      <input type="text" class="form-control col-md-9" name="jurisdiction" id="jurisdiction" [(ngModel)]="jurisdiction" placeholder="Enter jurisdiction">\n    </div>\n  </form>\n\n  <br><br>\n\n  <div class="row">\n    <div class="col-lg">\n      <app-template-selector-item name="Invoice" [templates]="templates" (templateChanged)="invoiceTemplate = $event"></app-template-selector-item>\n    </div>\n    <div class="col-lg">\n      <app-template-selector-item name="Release Order" [templates]="templates" (templateChanged)="releaseOrderTemplate = $event"></app-template-selector-item>\n    </div>\n    <div class="col-lg">\n      <app-template-selector-item name="Payment Receipt" [templates]="templates" (templateChanged)="paymentReceiptTemplate = $event"></app-template-selector-item>\n    </div>\n  </div>\n\n  <div class="text-center">\n    <button class="btn btn-success" (click)="submit()">Submit</button>\n  </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/template-selector/template-selector.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_1__aaman_main_api_service__["ApiService"]])
    ], TemplateSelectorComponent);
    return TemplateSelectorComponent;
}());

//# sourceMappingURL=template-selector.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_plan__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_razorpay_service__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_window_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__empty_empty_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(63);
throw new Error("Cannot find module \"@aaman/main/billing-details/billing-details.component\"");
throw new Error("Cannot find module \"@aaman/main/dialog.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_goback_service__ = __webpack_require__(21);
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
                var plan = new __WEBPACK_IMPORTED_MODULE_1__models_plan__["a" /* Plan */](element.name, element.cost, element.maxUsers, element.maxAdmins);
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__empty_empty_component__["a" /* EmptyComponent */]);
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
            this.api.setPlan(plan, '', new __WEBPACK_IMPORTED_MODULE_9__aaman_main_billing_details_billing_details_component__["BillingDetails"]()).subscribe(function (data) {
                _this.router.navigateByUrl('/');
            }, function (err) { return alert("Plan was not saved."); });
        }
    };
    PlanSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plan-selector',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/admin/plan-selector/plan-selector.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Select Plan</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<ng-template #modalContent let-c="close">\n  <div class="modal-header">\n    <h4 class="modal-title">Enter Billing Details</h4>\n  </div>\n  <div class="modal-body">\n    <app-billing-details (done)="c(\'Submit\'); billingDetails($event)"></app-billing-details>\n  </div>\n</ng-template>  \n\n<div class="container">\n  <div class="planContainer">\n    <div *ngFor="let plan of plans" class="plan">\n      <div class="titleContainer bg-info">\n        <div class="title">{{plan.name}}</div>\n        <div class="price">\n          <p>₹ {{plan.cost | number}} </p> <span>/ year</span>\n        </div>\n      </div>\n      <div class="infoContainer">\n        <ul class="features">\n          <li><strong>{{plan.maxUsers}}</strong> Users</li>\n          <li><strong>{{plan.maxAdmins}}</strong> Admins</li>\n        </ul><a class="selectPlan" [class.disabled]="paid" (click)="selectPlan(plan, modalContent)">Select Plan</a>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/admin/plan-selector/plan-selector.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_razorpay_service__["a" /* RazorPayService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_window_service__["a" /* WindowService */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__aaman_main_dialog_service__["DialogService"]])
    ], PlanSelectorComponent);
    return PlanSelectorComponent;
}());

//# sourceMappingURL=plan-selector.component.js.map

/***/ }),

/***/ 562:
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

/***/ 563:
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

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
throw new Error("Cannot find module \"@aaman/main/api.service\"");
throw new Error("Cannot find module \"@aaman/main/notification.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-password',template:/*ion-inline-start:"/home/lambo/zaaa-ionic/src/app/components/reset-password/reset-password.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Reset Password</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #resetPswForm="ngForm">\n\n    <mat-form-field>\n      <input matInput type="password" name="password" placeholder="New Password" [(ngModel)]="password" required #passwordField="ngModel">\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        New Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="cpassword" [verify-equals]="password" placeholder="Confirm New Password" [(ngModel)]="cpassword" required #cpasswordField="ngModel">\n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.required">\n        Password confirmation is required.\n      </mat-error> \n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.equals">\n        Passwords don\'t match.\n      </mat-error>\n    </mat-form-field>\n  \n    <br>\n    <button class="btn btn-success" [disabled]="!resetPswForm.form.valid">Send</button>\n  </form>\n</div>'/*ion-inline-end:"/home/lambo/zaaa-ionic/src/app/components/reset-password/reset-password.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_2__aaman_main_api_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__aaman_main_notification_service__["NotificationService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());

//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
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

/***/ })

},[356]);
//# sourceMappingURL=main.js.map