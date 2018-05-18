webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MediaHouseScheduling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Pullout; });
var MediaHouse = (function () {
    function MediaHouse() {
        this.address = {
            edition: "",
            address: "",
            city: "",
            state: "",
            pincode: ""
        };
        this.scheduling = [];
        this.freqPeriod = "";
        this.freqRemark = "";
        this.pullouts = [];
    }
    return MediaHouse;
}());

var MediaHouseScheduling = (function () {
    function MediaHouseScheduling() {
    }
    return MediaHouseScheduling;
}());

var Pullout = (function () {
    function Pullout(name) {
        this.name = name;
    }
    return Pullout;
}());

//# sourceMappingURL=media-house.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__release_order__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReleaseOrderApiService = (function () {
    function ReleaseOrderApiService(api) {
        this.api = api;
    }
    ReleaseOrderApiService.prototype.bodyToReleaseOrder = function (body) {
        var result = new __WEBPACK_IMPORTED_MODULE_4__release_order__["c" /* ReleaseOrder */]();
        Object.assign(result, body);
        result.id = body._id;
        return result;
    };
    ReleaseOrderApiService.prototype.releaseOrderToBody = function (releaseOrder) {
        return releaseOrder;
    };
    ReleaseOrderApiService.prototype.createReleaseOrder = function (releaseOrder) {
        return this.api.post('/user/releaseorder', this.releaseOrderToBody(releaseOrder));
    };
    ReleaseOrderApiService.prototype.editReleaseOrder = function (releaseOrder) {
        return this.api.patch('/user/releaseorder', releaseOrder);
    };
    ReleaseOrderApiService.prototype.getReleaseOrder = function (id) {
        var _this = this;
        return this.api.get('/user/releaseorder/' + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return data.success ? _this.bodyToReleaseOrder(data.releaseOrder) : null; }));
    };
    ReleaseOrderApiService.prototype.getReleaseOrders = function () {
        var _this = this;
        return this.api.get('/user/releaseorders').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            var releaseOrders = [];
            if (data.success) {
                data.releaseOrders.forEach(function (element) {
                    releaseOrders.push(_this.bodyToReleaseOrder(element));
                });
            }
            return releaseOrders;
        }));
    };
    ReleaseOrderApiService.prototype.deleteReleaseOrder = function (releaseOrder) {
        return this.api.delete('/user/releaseorder/' + releaseOrder.id);
    };
    ReleaseOrderApiService.prototype.searchReleaseOrders = function (query) {
        var _this = this;
        if (query) {
            return this.api.get('/user/releaseorders/' + query).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
                var releaseOrders = [];
                if (data.success) {
                    data.releaseOrders.forEach(function (element) {
                        releaseOrders.push(_this.bodyToReleaseOrder(element));
                    });
                }
                return releaseOrders;
            }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([]);
    };
    ReleaseOrderApiService.prototype.sendMail = function () {
        return this.api.post('/user/releaseorders/email', {});
    };
    ReleaseOrderApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], ReleaseOrderApiService);
    return ReleaseOrderApiService;
}());

//# sourceMappingURL=release-order-api.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Firm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address__ = __webpack_require__(122);

var Firm = (function () {
    function Firm() {
        this.registeredAddress = new __WEBPACK_IMPORTED_MODULE_0__address__["a" /* Address */]();
        this.officeAddress = new __WEBPACK_IMPORTED_MODULE_0__address__["a" /* Address */]();
        this.bankAccountType = 'Savings';
    }
    return Firm;
}());

//# sourceMappingURL=firm.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = (function () {
    function Address() {
        this.address = "";
        this.city = "";
        this.state = "";
        this.pincode = "";
    }
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContactPerson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_address__ = __webpack_require__(122);

var Client = (function () {
    function Client() {
        this.address = new __WEBPACK_IMPORTED_MODULE_0__models_address__["a" /* Address */]();
        this.contactpersons = [];
    }
    return Client;
}());

var ContactPerson = (function () {
    function ContactPerson() {
        this.name = "";
        this.designation = "";
        this.department = "";
        this.mobileNo = "";
        this.email = "";
        this.photo = "";
        this.dob = "";
        this.anniversaryDate = "";
        this.personLandLine = "";
        this.personStdNo = "";
    }
    return ContactPerson;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Executive; });
var Executive = (function () {
    function Executive() {
    }
    return Executive;
}());

//# sourceMappingURL=executive.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoUserApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_roles__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__co_user__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoUserApiService = (function () {
    function CoUserApiService(api) {
        this.api = api;
    }
    Object.defineProperty(CoUserApiService.prototype, "coUsers", {
        get: function () {
            return this.api.get('/user/co_user').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (data) {
                var coUsers = [];
                if (data.success) {
                    data.co_users.forEach(function (element) {
                        var coUser = new __WEBPACK_IMPORTED_MODULE_3__co_user__["a" /* CoUser */]();
                        coUser.name = element.name;
                        coUser.designation = element.designation;
                        coUser.email = element.email;
                        coUser.phone = element.phone;
                        coUser.isAdmin = element.isAdmin;
                        coUser.id = element._id;
                        coUsers.push(coUser);
                    });
                }
                return coUsers;
            }));
        },
        enumerable: true,
        configurable: true
    });
    CoUserApiService.prototype.createCoUser = function (coUser) {
        return this.api.post('/user/co_user', {
            name: coUser.name,
            designation: coUser.designation,
            email: coUser.email,
            phone: coUser.phone,
            isAdmin: coUser.isAdmin
        });
    };
    CoUserApiService.prototype.getRoles = function (coUserId) {
        var base = this.api.get('/user/role/' + coUserId);
        return base.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (data) {
            var roles = new __WEBPACK_IMPORTED_MODULE_2__user_roles__["a" /* UserRoles */]();
            if (data.success) {
                roles.release_order = data.msg.Release_order;
                roles.invoice = data.msg.Invoice;
                roles.payment_receipts = data.msg.Payment_receipts;
                roles.accounts = data.msg.Accounts;
            }
            return roles;
        }));
    };
    CoUserApiService.prototype.setRoles = function (coUserId, roles) {
        return this.api.post('/user/role', {
            id: coUserId,
            release_order: roles.release_order,
            invoice: roles.invoice,
            payment_receipts: roles.payment_receipts,
            accounts: roles.accounts
        });
    };
    CoUserApiService.prototype.deleteCoUser = function (coUser) {
        return this.api.delete('/user/co_user/' + coUser.id);
    };
    CoUserApiService.prototype.getUser = function () {
        return this.api.getUser();
    };
    CoUserApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], CoUserApiService);
    return CoUserApiService;
}());

//# sourceMappingURL=co-user-api.service.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoles; });
var UserRoles = (function () {
    function UserRoles() {
        this.release_order = 1;
        this.invoice = 1;
        this.payment_receipts = 1;
        this.accounts = 1;
    }
    return UserRoles;
}());

//# sourceMappingURL=user-roles.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RateCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FixSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Scheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Covered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Remark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var RateCard = (function () {
    function RateCard() {
        this.mediaType = "";
        this.adType = "";
        this.adTime = "";
        this.rateCardType = "";
        this.mediaHouseName = "";
        this.pullOutName = "";
        this.bookingEdition = "";
        this.fixSizes = [];
        this.schemes = [];
        this.covered = [];
        this.remarks = [];
        this.taxes = [];
        this.unit = "";
        this.position = "";
        this.hue = "";
        this.minLength = 0;
        this.minWidth = 0;
        this.maxLength = 100;
        this.maxWidth = 100;
        this.rate = 0;
        this.AdWordsMax = 50;
        this.PremiumCustom = {
            PremiumType: "",
            Amount: 0,
            Percentage: false
        };
        this.PremiumBox = 0;
        this.PremiumBaseColour = 0;
        this.PremiumCheckMark = 0;
        this.PremiumEmailId = 0;
        this.PremiumWebsite = 0;
        this.PremiumExtraWords = 0;
    }
    return RateCard;
}());

var FixSize = (function () {
    function FixSize() {
        this.width = 0;
        this.length = 0;
        this.amount = 0;
    }
    return FixSize;
}());

var Scheme = (function () {
    function Scheme() {
        this.paid = 0;
        this.Free = 0;
        this.timeLimit = 0;
    }
    return Scheme;
}());

var Covered = (function () {
    function Covered() {
        this.covMediaHouse = "";
        this.covEdition = "";
    }
    return Covered;
}());

var Remark = (function () {
    function Remark() {
        this.remark = "";
    }
    return Remark;
}());

var Tax = (function () {
    function Tax() {
        this.included = true;
        this.rate = 0;
    }
    return Tax;
}());

var Category = (function () {
    function Category(name, subcategories) {
        if (subcategories === void 0) { subcategories = []; }
        var _this = this;
        this.name = name;
        this.subcategories = subcategories;
        subcategories.forEach(function (elememt) { return elememt.parent = _this; });
    }
    return Category;
}());

//# sourceMappingURL=rate-card.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_template__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__window_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user_profile__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_firm__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loader_service__ = __webpack_require__(194);
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
    function ApiService(http, windowService, loaderService) {
        this.http = http;
        this.windowService = windowService;
        this.loaderService = loaderService;
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
    ApiService.prototype.post = function (url, body) {
        var _this = this;
        this.loaderService.show();
        if (this.authToken) {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url, body, this.headers)
                .finally(function () { return _this.loaderService.hide(); });
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url, body)
                .finally(function () { return _this.loaderService.hide(); });
        }
    };
    ApiService.prototype.patch = function (url, body) {
        var _this = this;
        this.loaderService.show();
        if (this.authToken) {
            return this.http.patch(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url, body, this.headers)
                .finally(function () { return _this.loaderService.hide(); });
        }
        else {
            return this.http.patch(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url, body)
                .finally(function () { return _this.loaderService.hide(); });
        }
    };
    ApiService.prototype.get = function (url) {
        var _this = this;
        this.loaderService.show();
        if (this.authToken) {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url, this.headers)
                .finally(function () { return _this.loaderService.hide(); });
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url)
                .finally(function () { return _this.loaderService.hide(); });
        }
    };
    ApiService.prototype.delete = function (url) {
        var _this = this;
        this.loaderService.show();
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url, this.headers)
            .finally(function () { return _this.loaderService.hide(); });
    };
    ApiService.prototype.fileUpload = function (url, key, fileToUpload) {
        var _this = this;
        this.loaderService.show();
        var formData = new FormData();
        formData.append(key, fileToUpload, fileToUpload.name);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + url, formData, this.headers)
            .finally(function () { return _this.loaderService.hide(); });
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
        return base.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (data) {
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
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([
                new __WEBPACK_IMPORTED_MODULE_5__models_template__["a" /* Template */]("Template 1", "http://www.monsterbeatsstudio.us/download/20039/systemdesigndocument1.gif"),
                new __WEBPACK_IMPORTED_MODULE_5__models_template__["a" /* Template */]("Template 2", "http://www.le-chuang.com/wp-content/uploads/2016/09/business-case-template-businesscase9-SUFOjh.jpg")
            ]);
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.setPlan = function (plan, payment, firmName, billingAddress, gstNo) {
        return this.post('/user/plan', {
            planID: plan.id,
            cost: plan.cost,
            paymentID: payment,
            firmName: firmName,
            billingAddress: billingAddress,
            gstNo: gstNo
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
        var result = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (data) {
            var profile = new __WEBPACK_IMPORTED_MODULE_8__models_user_profile__["a" /* UserProfile */]();
            if (data.success) {
                profile.name = data.user.name;
                profile.designation = data.user.designation;
                profile.contact = data.user.phone;
                profile.email = data.user.email;
                if (data.user.photo) {
                    profile.photo = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].uploadsBaseUrl + data.user.photo;
                }
                if (data.user.signature) {
                    profile.sign = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].uploadsBaseUrl + data.user.signature;
                }
                profile.isAdmin = data.user.isAdmin;
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
        var result = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (data) {
            var profile = new __WEBPACK_IMPORTED_MODULE_9__models_firm__["a" /* Firm */]();
            if (data.success) {
                profile.name = data.firm.FirmName;
                profile.tagline = data.firm.TagLine;
                profile.nickname = data.firm.DisplayName;
                profile.fax = data.firm.Fax;
                profile.landlineNo = data.firm.Landline;
                profile.stdNo = data.firm.stdNo;
                profile.website = data.firm.Website;
                profile.panNo = data.firm.PanNo;
                profile.gstNo = data.firm.GSTIN;
                if (data.firm.RegisteredAddress)
                    profile.registeredAddress = data.firm.RegisteredAddress;
                if (data.firm.OfficeAddress)
                    profile.officeAddress = data.firm.OfficeAddress;
                profile.phone = data.firm.Mobile;
                profile.email = data.firm.Email;
                profile.incDate = data.firm.IncorporationDate;
                if (data.firm.LogoURL) {
                    profile.logo = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].uploadsBaseUrl + data.firm.LogoURL;
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
            gst: firm.gstNo,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_10__loader_service__["a" /* LoaderService */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderService = (function () {
    function LoaderService() {
        this._loading = false;
    }
    LoaderService.prototype.show = function () {
        this._loading = true;
    };
    LoaderService.prototype.hide = function () {
        var _this = this;
        setTimeout(function () { return _this._loading = false; }, 300);
    };
    Object.defineProperty(LoaderService.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerifyGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
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
        return this.api.getUser().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (data) {
            var result = data.success && data.user.phone && data.user.mobile_verified;
            if (!result) {
                _this.goToMobileVerify();
            }
            return result;
        }, Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.goToMobileVerify();
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(false);
        })));
    };
    PhoneVerifyGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PhoneVerifyGuard);
    return PhoneVerifyGuard;
}());

//# sourceMappingURL=phone-verify-guard.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
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
        return this.api.getFirm().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (data) {
            var result = data.success && data.firm.plan != null;
            if (!result) {
                _this.goToPlan();
            }
            return result;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.goToPlan();
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(false);
        }));
    };
    PlanGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PlanGuard);
    return PlanGuard;
}());

//# sourceMappingURL=plan-guard.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_window_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
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
    function EmptyComponent(navCtrl, winRef, navParams, goback) {
        this.navCtrl = navCtrl;
        this.winRef = winRef;
        this.navParams = navParams;
        this.goback = goback;
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
            selector: 'app-empty',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/admin/empty/empty.component.html"*/'<p> </p>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/admin/empty/empty.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], EmptyComponent);
    return EmptyComponent;
}());

//# sourceMappingURL=empty.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dir_routing_module__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dir_dir_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clients_client_api_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clients_client_client_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clients_client_list_client_list_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clients_client_details_client_details_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clients_client_resolver_service__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__executives_executive_api_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__executives_executive_executive_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__executives_executive_list_executive_list_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__executives_executive_details_executive_details_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__executives_executive_resolver_service__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__media_houses_media_house_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__media_houses_media_house_media_house_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__media_houses_media_house_list_media_house_list_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__media_houses_media_house_details_media_house_details_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__media_houses_media_house_resolver_service__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_19_ionic_angular__["c" /* IonicModule */].forRoot(DirectoryModule_1),
                __WEBPACK_IMPORTED_MODULE_2__dir_routing_module__["a" /* DirRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__clients_client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_10__executives_executive_executive_component__["a" /* ExecutiveComponent */],
                __WEBPACK_IMPORTED_MODULE_15__media_houses_media_house_media_house_component__["a" /* MediaHouseComponent */],
                __WEBPACK_IMPORTED_MODULE_3__dir_dir_component__["a" /* DirComponent */],
                __WEBPACK_IMPORTED_MODULE_6__clients_client_list_client_list_component__["a" /* ClientListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__clients_client_details_client_details_component__["a" /* ClientDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__executives_executive_list_executive_list_component__["a" /* ExecutiveListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__executives_executive_details_executive_details_component__["a" /* ExecutiveDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__media_houses_media_house_list_media_house_list_component__["a" /* MediaHouseListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__media_houses_media_house_details_media_house_details_component__["a" /* MediaHouseDetailsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__clients_client_api_service__["a" /* ClientApiService */],
                __WEBPACK_IMPORTED_MODULE_9__executives_executive_api_service__["a" /* ExecutiveApiService */],
                __WEBPACK_IMPORTED_MODULE_14__media_houses_media_house_api_service__["a" /* MediaHouseApiService */],
                __WEBPACK_IMPORTED_MODULE_8__clients_client_resolver_service__["a" /* ClientResolver */],
                __WEBPACK_IMPORTED_MODULE_13__executives_executive_resolver_service__["a" /* ExecutiveResolver */],
                __WEBPACK_IMPORTED_MODULE_18__media_houses_media_house_resolver_service__["a" /* MediaHouseResolver */]
            ]
        })
    ], DirectoryModule);
    return DirectoryModule;
    var DirectoryModule_1;
}());

//# sourceMappingURL=directory.module.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rate_card_api_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateCardResolver = (function () {
    function RateCardResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    RateCardResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id;
        if (route.paramMap.has('rateCard')) {
            id = route.paramMap.get('rateCard');
        }
        else if (route.paramMap.has('copy')) {
            id = route.paramMap.get('copy');
        }
        else
            id = route.paramMap.get('id');
        return this.api.getRateCard(id).take(1).map(function (rateCard) {
            if (rateCard) {
                return rateCard;
            }
            else {
                _this.router.navigateByUrl('/ratecards');
                return null;
            }
        });
    };
    RateCardResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__rate_card_api_service__["a" /* RateCardApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RateCardResolver);
    return RateCardResolver;
}());

//# sourceMappingURL=rate-card-resolver.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Insertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TaxValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReleaseOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OtherCharges; });
var Insertion = (function () {
    function Insertion(date, marked) {
        if (marked === void 0) { marked = false; }
        this.date = date;
        this.marked = marked;
    }
    return Insertion;
}());

var TaxValues = (function () {
    function TaxValues(primary, secondary) {
        if (secondary === void 0) { secondary = 0; }
        this.primary = primary;
        this.secondary = secondary;
    }
    return TaxValues;
}());

var ReleaseOrder = (function () {
    function ReleaseOrder() {
        this.releaseOrderNO = "";
        this.agencyName = "";
        this.agencyAddress = "";
        this.agencyGSTIN = "";
        this.agencyPerson = "";
        this.signature = "";
        this.publicationName = "";
        this.publicationEdition = "";
        this.publicationState = "";
        this.publicationGSTIN = "";
        this.mediaType = "";
        this.clientName = "";
        this.clientState = "";
        this.clientGSTIN = "";
        this.adType = "";
        this.rate = 0;
        this.unit = "";
        this.adCategory1 = "";
        this.adCategory2 = "";
        this.adCategory3 = "";
        this.adCategory4 = "";
        this.adCategory5 = "";
        this.adCategory6 = "";
        this.adHue = "";
        this.adSizeL = 0;
        this.adSizeW = 0;
        this.adSizeCustom = false;
        this.adSizeAmount = 0;
        this.adTotalSpace = 0;
        this.adEdition = "";
        this.adPosition = "";
        this.adTime = "";
        this.adSchemePaid = 0;
        this.adSchemeFree = 0;
        this.adTotal = 0;
        this.AdWords = 0;
        this.AdWordsMax = 0;
        this.AdDuration = 0;
        this.insertions = [];
        this.adGrossAmount = 0;
        this.publicationDiscount = 0;
        this.agencyDiscount1 = 0;
        this.agencyDiscount2 = 0;
        this.taxAmount = new TaxValues(0);
        this.taxIncluded = false;
        this.netAmountFigures = 0;
        this.netAmountWords = "";
        this.caption = "";
        this.remark = "";
        this.paymentType = "";
        this.paymentDate = "";
        this.paymentNo = "";
        this.paymentAmount = 0;
        this.paymentBankName = "";
        this.executiveName = "";
        this.executiveOrg = "";
        this.otherRemark = "";
        this.otherCharges = [];
        this.PremiumCustom = {
            Amount: 0,
            Percentage: false,
            PremiumType: ""
        };
        this.PremiumBox = {
            Amount: 0,
            Included: false
        };
        this.PremiumBaseColour = {
            Amount: 0,
            Included: false
        };
        this.PremiumEmailId = {
            Amount: 0,
            Quantity: 1,
            Included: false
        };
        this.PremiumCheckMark = {
            Amount: 0,
            Included: false
        };
        this.PremiumWebsite = {
            Amount: 0,
            Quantity: 1,
            Included: false
        };
        this.PremiumExtraWords = {
            Amount: 0,
            Quantity: 1,
            Included: false
        };
        this.clientPayment = 0;
    }
    return ReleaseOrder;
}());

var OtherCharges = (function () {
    function OtherCharges() {
        this.amount = 0;
        this.chargeType = "";
    }
    return OtherCharges;
}());

//# sourceMappingURL=release-order.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__release_order_api_service__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReleaseOrderResolver = (function () {
    function ReleaseOrderResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    ReleaseOrderResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get(route.paramMap.has('copy') ? 'copy' : 'id');
        return this.api.getReleaseOrder(id).take(1).map(function (releaseorder) {
            if (releaseorder) {
                return releaseorder;
            }
            else {
                _this.router.navigateByUrl('/releaseorders');
                return null;
            }
        });
    };
    ReleaseOrderResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__release_order_api_service__["a" /* ReleaseOrderApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ReleaseOrderResolver);
    return ReleaseOrderResolver;
}());

//# sourceMappingURL=release-order-resolver.service.js.map

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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(snackbar) {
        this.snackbar = snackbar;
    }
    NotificationService.prototype.show = function (message) {
        this.snackbar.open(message, "Dismiss", {
            horizontalPosition: 'right',
            duration: 3000
        });
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], NotificationService);
    return NotificationService;
}());

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 282:
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
webpackEmptyAsyncContext.id = 282;

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_goback_service__ = __webpack_require__(9);
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
            selector: 'app-app',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/app/app.component.html"*/'<app-loader></app-loader>\n<app-navbar></app-navbar>\n<ion-content>\n<br><br>\n    <router-outlet></router-outlet>\n<br><br>\n</ion-content>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/app/app.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_goback_service__["a" /* GobackService */]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Template; });
var Template = (function () {
    function Template(name, imgUrl) {
        this.name = name;
        this.imgUrl = imgUrl;
    }
    return Template;
}());

//# sourceMappingURL=template.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = (function () {
    function UserProfile() {
    }
    return UserProfile;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RazorPayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(70);
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
            key: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].razorPay,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__window_service__["a" /* WindowService */]])
    ], RazorPayService);
    return RazorPayService;
}());

//# sourceMappingURL=razorpay.service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfscService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfscService = (function () {
    function IfscService(http) {
        this.http = http;
    }
    IfscService.prototype.getData = function (ifsc) {
        return this.http.get("https://ifsc.razorpay.com/" + ifsc);
    };
    IfscService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IfscService);
    return IfscService;
}());

//# sourceMappingURL=ifsc.service.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = (function () {
    function DialogComponent(data) {
        this.data = data;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/dialog/dialog.component.html"*/'<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>{{data.message}}</mat-dialog-content>\n<mat-dialog-actions>\n  <button *ngIf="data.no" mat-button [mat-dialog-close]="false">No</button>\n  <button *ngIf="data.cancel" mat-button [mat-dialog-close]="false">Cancel</button>\n\n  <button *ngIf="data.yes" mat-button [mat-dialog-close]="true">Yes</button>\n  <button *ngIf="data.ok" mat-button [mat-dialog-close]="true">Ok</button>\n</mat-dialog-actions>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/dialog/dialog.component.html"*/,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogComponent);
    return DialogComponent;
}());

//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailingDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mailing_details__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MailingDetailsComponent = (function () {
    function MailingDetailsComponent(data, goback) {
        this.data = data;
        this.goback = goback;
        this.details = new __WEBPACK_IMPORTED_MODULE_1__models_mailing_details__["a" /* MailingDetails */]();
        this.done = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MailingDetailsComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
        this.details.to = this.data.to;
    };
    MailingDetailsComponent.prototype.submit = function () {
        this.done.emit(this.details);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MailingDetailsComponent.prototype, "done", void 0);
    MailingDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mailing-details',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/mailing-details/mailing-details.component.html"*/'<h2 mat-dialog-title>Mailing Details</h2>\n\n<mat-dialog-content>\n  <form #mailingDetailsForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="To" [(ngModel)]="details.to" name="to" required verify-email #toField="ngModel">\n      <mat-error *ngIf="toField.errors && toField.errors.required">\n        Receipent is required.\n      </mat-error>\n      <mat-error *ngIf="toField.errors && toField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder="CC" [(ngModel)]="details.cc" name="cc" verify-email #ccField="ngModel">\n      <mat-error *ngIf="ccField.errors && ccField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder="BCC" [(ngModel)]="details.bcc" name="bcc" verify-email #bccField="ngModel">\n      <mat-error *ngIf="bccField.errors && bccField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder="Subject" [(ngModel)]="details.subject" name="subject" required #subjectField="ngModel">\n      <mat-error *ngIf="subjectField.errors && subjectField.errors.required">\n        Subject is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder="Content" name="content" [(ngModel)]="details.content"></textarea>\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button color="warn" [mat-dialog-close]="null">Cancel</button>\n  <button mat-button [disabled]="!mailingDetailsForm.form.valid" [mat-dialog-close]="details">Submit</button>  \n</mat-dialog-actions>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/mailing-details/mailing-details.component.html"*/,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], MailingDetailsComponent);
    return MailingDetailsComponent;
}());

//# sourceMappingURL=mailing-details.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
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
        return this.api.getUser().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (data) {
            var result = data.success && data.user.isAdmin;
            if (!result) {
                _this.goToDashboard();
            }
            return result;
        }, Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.goToDashboard();
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(false);
        })));
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());

//# sourceMappingURL=admin-guard.service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(18);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FirmResolver);
    return FirmResolver;
}());

//# sourceMappingURL=firm-resolver.service.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(18);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserProfileResolver);
    return UserProfileResolver;
}());

//# sourceMappingURL=user-profile-resolver.service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ifsc_service__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_firm__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_state_api_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_goback_service__ = __webpack_require__(9);
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
    function FirmProfileEditComponent(ifscService, api, stateApi, router, notifications, goback, route) {
        this.ifscService = ifscService;
        this.api = api;
        this.stateApi = stateApi;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
        this.route = route;
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__models_firm__["a" /* Firm */]();
    }
    FirmProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.profile = data.firm;
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
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    FirmProfileEditComponent.prototype.cancel = function () {
        this.goBack();
    };
    FirmProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-firm-profile-edit',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/admin/firm-profile-edit/firm-profile-edit.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Edit Firm Profile</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #profileForm="ngForm">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Business Details</mat-panel-title>\n          <mat-panel-description>Enter Business details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="firmName" placeholder="Firm Name" [(ngModel)]="profile.name" required #firmNameField="ngModel">\n          <mat-error *ngIf="firmNameField.errors && firmNameField.errors.required">\n            Firm Name is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="tagline" placeholder="Tagline" [(ngModel)]="profile.tagline" #taglineField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="nickname" placeholder="Nickname" [(ngModel)]="profile.nickname" #nicknameField="ngModel">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput type="date" name="incDate" placeholder="Incorporation Date" [(ngModel)]="profile.incDate" #incDateField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="website" placeholder="Website" [(ngModel)]="profile.website" #websiteField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="panNo" placeholder="PAN Number" [(ngModel)]="profile.panNo" minlength="10" maxlength="10" required #panNoField="ngModel">\n          <mat-error *ngIf="panNoField.errors && panNoField.errors.required">\n            PAN Number is required.\n          </mat-error>\n          <mat-error *ngIf="panNoField.errors && (panNoField.errors.minlength || panNoField.errors.maxlength)">\n            PAN Number should be 10 characters long.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="gstNo" placeholder="GST Number" [(ngModel)]="profile.gstNo" required minlength="15" maxlength="15" #gstNoField="ngModel">\n          <mat-error *ngIf="gstNoField.errors && gstNoField.errors.required">\n            GSTIN is required.\n          </mat-error>\n          <mat-error *ngIf="gstNoField.errors && (gstNoField.errors.minlength || gstNoField.errors.maxlength)">\n            GSTIN should be 15 characters long.\n          </mat-error>\n        </mat-form-field>\n      \n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Contact Details</mat-panel-title>\n          <mat-panel-description>Enter Contact Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="email" name="email" placeholder="Email" [(ngModel)]="profile.email" required #emailField="ngModel" verify-email>\n          <mat-error *ngIf="emailField.errors && emailField.errors.required">\n            Email is required.\n          </mat-error>\n          <mat-error *ngIf="emailField.errors && emailField.errors.email">\n            Invalid Email.\n          </mat-error>\n        </mat-form-field>\n    \n        <mat-form-field>\n          <span matPrefix>+91 &nbsp;</span>\n          <input matInput type="tel" [(ngModel)]="profile.phone" pattern="^\d{10}$" maxlength="10" minlength="10" required name="phone" placeholder="Phone Number" #phoneField="ngModel">\n          <mat-error *ngIf="phoneField.errors && phoneField.errors.required">\n            Phone Number is empty or invalid.\n          </mat-error>\n        </mat-form-field>\n\n        <div class="form-row">\n          <div class="col-3">\n            <mat-form-field>\n              <input matInput type="tel" name="stdNo" placeholder="STD No" minlength="3" maxlength="5" [(ngModel)]="profile.stdNo" #stdNoField="ngModel">\n            </mat-form-field>\n          </div>\n      \n        <div class="col-9">\n          <mat-form-field>\n            <input matInput type="tel" name="landlineNo" minlength="6" maxlength="8" placeholder="Landline Number" [(ngModel)]="profile.landlineNo" #landlineNoField="ngModel">\n          </mat-form-field>\n        </div>\n        </div>\n        \n      \n        <mat-form-field>\n          <input matInput type="number" name="fax" placeholder="Fax" [(ngModel)]="profile.fax" #faxField="ngModel">\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Registered Address</mat-panel-title>\n          <mat-panel-description>Enter Registered Address</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="registeredAddress" placeholder="Registered Address" [(ngModel)]="profile.registeredAddress.address" required #registeredAddressField="ngModel">\n          <mat-error *ngIf="firmNameField.errors && firmNameField.errors.required">\n            Registered Address is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="tel" minlength="6" maxlength="6" name="registeredPincode" placeholder="Pincode" [(ngModel)]="profile.registeredAddress.pincode" required #registeredPincodeField="ngModel">\n          <mat-error *ngIf="registeredPincodeField.errors && registeredPincodeField.errors.required">\n            Pincode is required.\n          </mat-error>\n          <mat-error *ngIf="registeredPincodeField.errors && (registeredPincodeField.errors.minlength || registeredPincodeField.errors.maxlength)">\n            Pincode should be 6 characters long.\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field>\n          <input matInput type="text" name="registeredCity" placeholder="City" [(ngModel)]="profile.registeredAddress.city" required #registeredCityField="ngModel">\n          <mat-error *ngIf="registeredCityField.errors && registeredCityField.errors.required">\n            City is required.\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder="State" name="registeredState" [(ngModel)]="profile.registeredAddress.state" required #registeredStateField="ngModel">\n            <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n          </mat-select>\n          <mat-error *ngIf="registeredStateField.errors && registeredStateField.errors.required">\n            State is required.\n          </mat-error>\n        </mat-form-field>\n      \n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Office Address</mat-panel-title>\n          <mat-panel-description>Enter Office Address</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <button type="button" mat-raised-button (click)="copyAddress()">Copy from Above</button>\n        <br><br>\n\n        <mat-form-field>\n          <input matInput type="text" name="officeAddress" placeholder="Office Address" [(ngModel)]="profile.officeAddress.address" #officeAddressField="ngModel">\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput type="tel" minlength="6" maxlength="6" name="officePincode" placeholder="Pincode" [(ngModel)]="profile.officeAddress.pincode" #officePincodeField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="officeCity" placeholder="City" [(ngModel)]="profile.officeAddress.city" #officeCityField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select placeholder="State" name="officeState" [(ngModel)]="profile.officeAddress.state" #officeStateField="ngModel">\n            <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n          </mat-select>\n          <mat-error *ngIf="officeStateField.errors && officeStateField.errors.required">\n            State is required.\n          </mat-error>\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Bank Account Details</mat-panel-title>\n          <mat-panel-description>Enter Bank Account Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="bankAccountName" placeholder="Bank Account Name" [(ngModel)]="profile.bankAccountName" required #bankAccountNameField="ngModel">\n          <mat-error *ngIf="bankAccountNameField.errors && bankAccountNameField.errors.required">\n            Account Name is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankAccountNo" placeholder="Bank Account Number" [(ngModel)]="profile.bankAccountNo" required #bankAccountNoField="ngModel">\n          <mat-error *ngIf="bankAccountNoField.errors && bankAccountNoField.errors.required">\n            Account Number is required.\n          </mat-error>\n        </mat-form-field>\n    \n        <mat-form-field>\n          <input matInput type="text" name="bankIfsc" placeholder="Bank IFSC" [(ngModel)]="profile.bankIfsc" required minlength="11" maxlength="11" #bankIfscField="ngModel" (input)="ifscChanged()">\n          <mat-error *ngIf="bankIfscField.errors && bankIfscField.errors.required">\n            IFSC is required.\n          </mat-error>\n          <mat-error *ngIf="bankIfscField.errors && (bankIfscField.errors.minlength || bankIfscField.errors.maxlength)">\n            IFSC should be 11 characters long.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankName" placeholder="Bank Name" [(ngModel)]="profile.bankName" required #bankNameField="ngModel">\n          <mat-error *ngIf="bankNameField.errors && bankNameField.errors.required">\n            Bank Name is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="bankBranchAddress" placeholder="Bank Branch Address" [(ngModel)]="profile.bankBranchAddress" required #bankBranchAddressField="ngModel">\n          <mat-error *ngIf="bankBranchAddressField.errors && bankBranchAddressField.errors.required">\n            Bank Branch Address is required.\n          </mat-error>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select placeholder="Bank Account Type" name="bankAccountType" [(ngModel)]="profile.bankAccountType">\n            <mat-option value="Current">Current</mat-option>\n            <mat-option value="Savings">Savings</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Social Details</mat-panel-title>\n          <mat-panel-description>Enter Social Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n          <input matInput type="text" name="facebook" placeholder="Facebook Link" [(ngModel)]="profile.facebook" #facebookField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="twitter" placeholder="Twitter Link" [(ngModel)]="profile.twitter" #twitterField="ngModel">\n        </mat-form-field>\n      \n        <mat-form-field>\n          <input matInput type="text" name="others" placeholder="Other social Link" [(ngModel)]="profile.other" #otherField="ngModel">\n        </mat-form-field>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <br><br>\n  \n    <button type="submit" class="btn btn-success" [disabled]="!profileForm.form.valid">Save</button>\n    <button type="button" class="btn btn-danger" (click)="cancel()">Cancel</button>\n\n    <br><br><br>\n  </form>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/admin/firm-profile-edit/firm-profile-edit.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ifsc_service__["a" /* IfscService */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__services_state_api_service__["a" /* StateApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_goback_service__["a" /* GobackService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], FirmProfileEditComponent);
    return FirmProfileEditComponent;
}());

//# sourceMappingURL=firm-profile-edit.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_plan__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_razorpay_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_window_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_address__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_goback_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__empty_empty_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(41);
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
    function PlanSelectorComponent(api, razorPay, appRef, router, winRef, modalService, goback, navCtrl, navParams) {
        this.api = api;
        this.razorPay = razorPay;
        this.appRef = appRef;
        this.router = router;
        this.winRef = winRef;
        this.modalService = modalService;
        this.goback = goback;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlanSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    PlanSelectorComponent.prototype.openPay = function (firmName, billingAddress, gstNo) {
        var _this = this;
        this.razorPay.initPay(this.phone, this.email, this.selectedPlan.cost, "ZAAA " + this.selectedPlan.name, function (response) {
            console.log(response.razorpay_payment_id);
            _this.paid = true;
            _this.api.setPlan(_this.selectedPlan, response.razorpay_payment_id, firmName, billingAddress, gstNo).subscribe(function (data) {
                _this.api.generatePaymentInvoice().subscribe(function (data) {
                    // redirect
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__empty_empty_component__["a" /* EmptyComponent */]);
                    _this.appRef.tick();
                });
            }, function (err) { return alert("Plan was not saved.\n\nContact support with reference no: " + response.razorpay_payment_id); });
        });
    };
    PlanSelectorComponent.prototype.billingDetails = function (param) {
        this.openPay(param.firmName, param.billingAddress, param.gstNo);
    };
    PlanSelectorComponent.prototype.selectPlan = function (plan, modalContent) {
        var _this = this;
        if (this.paid)
            return;
        if (plan.cost != 0) {
            this.selectedPlan = plan;
            if (this.firm && this.firm.name && this.firm.registeredAddress && this.firm.gstNo) {
                this.openPay(this.firm.name, this.firm.registeredAddress, this.firm.gstNo);
            }
            else {
                this.modalService.open(modalContent);
            }
        }
        else {
            this.paid = true;
            this.api.setPlan(plan, '', '', new __WEBPACK_IMPORTED_MODULE_7__models_address__["a" /* Address */](), '').subscribe(function (data) {
                _this.router.navigateByUrl('/');
            }, function (err) { return alert("Plan was not saved."); });
        }
    };
    PlanSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plan-selector',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/admin/plan-selector/plan-selector.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Select Plan</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<ng-template #modalContent let-c="close">\n  <div class="modal-header">\n    <h4 class="modal-title">Enter Billing Details</h4>\n  </div>\n  <div class="modal-body">\n    <app-billing-details (done)="c(\'Submit\'); billingDetails($event)"></app-billing-details>\n  </div>\n</ng-template>  \n\n<div class="container">\n  <div class="planContainer">\n    <div *ngFor="let plan of plans" class="plan">\n      <div class="titleContainer bg-info">\n        <div class="title">{{plan.name}}</div>\n        <div class="price">\n          <p>₹ {{plan.cost | number}} </p> <span>/ year</span>\n        </div>\n      </div>\n      <div class="infoContainer">\n        <ul class="features">\n          <li><strong>{{plan.maxUsers}}</strong> Users</li>\n          <li><strong>{{plan.maxAdmins}}</strong> Admins</li>\n        </ul><a class="selectPlan" [class.disabled]="paid" (click)="selectPlan(plan, modalContent)">Select Plan</a>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/admin/plan-selector/plan-selector.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_razorpay_service__["a" /* RazorPayService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_window_service__["a" /* WindowService */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_8__services_goback_service__["a" /* GobackService */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* NavParams */]])
    ], PlanSelectorComponent);
    return PlanSelectorComponent;
}());

//# sourceMappingURL=plan-selector.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_goback_service__ = __webpack_require__(9);
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
    function TemplateSelectorComponent(api, goback) {
        this.api = api;
        this.goback = goback;
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
            selector: 'app-template-selector',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/admin/template-selector/template-selector.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Templates</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form>\n    <div class="form-group form-row">\n      <label for="jurisdiction" class="col-md-3 col-form-label">Jurisdiction</label>\n      <input type="text" class="form-control col-md-9" name="jurisdiction" id="jurisdiction" [(ngModel)]="jurisdiction" placeholder="Enter jurisdiction">\n    </div>\n  </form>\n\n  <br><br>\n\n  <div class="row">\n    <div class="col-lg">\n      <app-template-selector-item name="Invoice" [templates]="templates" (templateChanged)="invoiceTemplate = $event"></app-template-selector-item>\n    </div>\n    <div class="col-lg">\n      <app-template-selector-item name="Release Order" [templates]="templates" (templateChanged)="releaseOrderTemplate = $event"></app-template-selector-item>\n    </div>\n    <div class="col-lg">\n      <app-template-selector-item name="Payment Receipt" [templates]="templates" (templateChanged)="paymentReceiptTemplate = $event"></app-template-selector-item>\n    </div>\n  </div>\n\n  <div class="text-center">\n    <button class="btn btn-success" (click)="submit()">Submit</button>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/admin/template-selector/template-selector.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_goback_service__["a" /* GobackService */]])
    ], TemplateSelectorComponent);
    return TemplateSelectorComponent;
}());

//# sourceMappingURL=template-selector.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_firm__ = __webpack_require__(121);
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
    function HomeComponent(platform, goback, api, router, loadingCtrl) {
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
        // setTimeout(2000);
        this.goback.urlInit();
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
            selector: 'app-home',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/home/home.component.html"*/'<div *ngIf="this.isLoaded" class="text-center">\n  <br>\n  <br>\n  <img *ngIf="profile.logo" [src]="profile.logo" class="img-fluid max-w-200">\n  <br>\n  <br>\n  <br>\n  <img src="assets/zenedo.jpeg" width="150" height="150">\n</div>\n\n\n<!-- <div class="text-center">\n  <h1>Advertising Agency Manager (AAMan)</h1>\n  <br>\n  <p>A complete solution for Advertising Agencies.</p>\n  <br>\n  <img src="assets/logo.jpg" width="150" height="150">\n</div> -->'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/home/home.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */]])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(9);
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
    function LoginComponent(api, router, notifications, goback) {
        this.api = api;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
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
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/login/login.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Login</h1>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #loginForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Email Address or Phone" name="emailPhone" [(ngModel)]="emailOrPhone" type=\'text\' required #emailOrPhoneField="ngModel">\n      <mat-error *ngIf="emailOrPhoneField.errors && emailOrPhoneField.errors.required">\n        Email or Phone is required.\n      </mat-error>\n    </mat-form-field>\n\n    <div class="form-group">\n      <p class="float-right"><a tabindex="-1" routerLink="/forgotPassword">Forgot Password</a></p>\n    </div>\n\n    <mat-form-field>\n      <input matInput placeholder="Password" name="password" [(ngModel)]="password" [type]="hidePassword ? \'password\' : \'text\'" required #passwordField="ngModel">\n      <mat-icon matSuffix (click)="hidePassword = !hidePassword">{{hidePassword ? \'visibility\' : \'visibility_off\'}}</mat-icon>\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n    <button class="btn btn-success" [disabled]="!loginForm.form.valid">Login</button>\n  </form>\n\n  <br>\n  <p>Don\'t have an account, create <a routerLink="/register">one</a>.</p>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/login/login.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(9);
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
    function RegisterComponent(api, router, notifications, goback) {
        this.api = api;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
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
        }, function (err) {
            _this.notifications.show("Connection failed");
            console.log(err);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/register/register.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Sign Up</h1>\n    <p class="lead">For Advertsing Agency Administrators</p>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #signUpForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Name" [(ngModel)]="name" name="name" required #nameField="ngModel">\n      <mat-error *ngIf="nameField.errors && nameField.errors.required">\n        Name is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder="Email" [(ngModel)]="email" name="email" required verify-email #emailField="ngModel">\n      <mat-hint>An auto-generated password will be sent to this Email.</mat-hint>\n      <mat-error *ngIf="emailField.errors && emailField.errors.required">\n        Email is required.\n      </mat-error>\n      <mat-error *ngIf="emailField.errors && emailField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n\n    <mat-checkbox class="my-2" name="acceptTnC" [(ngModel)]="acceptTnC" required #acceptTnCField="ngModel">Accept Terms and Conditions</mat-checkbox>\n\n    <div *ngIf="acceptTnCField.invalid && (acceptTnCField.dirty || acceptTnCField.touched)" class="text-danger">\n      <div *ngIf="acceptTnCField.errors.required">\n        Accept Terms and Conditions to continue.\n      </div>\n    </div>\n\n    <br><br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!signUpForm.form.valid">Sign Up</button>\n  </form>\n\n  <br>\n  <p>Already have an account, <a routerLink="/login">Login</a>.</p>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/register/register.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_profile__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_goback_service__ = __webpack_require__(9);
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
    function ProfileViewComponent(api, dialog, notifications, route, goback) {
        this.api = api;
        this.dialog = dialog;
        this.notifications = notifications;
        this.route = route;
        this.goback = goback;
        this.profile = new __WEBPACK_IMPORTED_MODULE_1__models_user_profile__["a" /* UserProfile */]();
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
                _this.profile.photo = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show("Connection failed");
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
                    _this.profile.photo = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            }, function (err) {
                console.log(err);
                _this.notifications.show("Connection failed");
            });
        });
    };
    ProfileViewComponent.prototype.uploadSign = function (files) {
        var _this = this;
        this.api.uploadSign(files.item(0)).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Signature uploaded successfully');
                _this.profile.sign = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show("Connection failed");
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
                    _this.profile.sign = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            }, function (err) {
                console.log(err);
                _this.notifications.show("Connection failed");
            });
        });
    };
    ProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-view',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/profile-view/profile-view.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n      <div class="container">User Profile</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n<br>\n<div class="row">\n  <div class="col-xl-6">\n    <div class="card mb-5">\n      <div class="card-header">Personal Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Name</div>\n            <div class="col-md-8">{{profile.name}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Designation</div>\n            <div class="col-md-8" *ngIf="profile.isAdmin">ADMIN</div>\n            <div class="col-md-8" *ngIf="!profile.isAdmin">{{profile.designation}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class="card mb-5">\n        <div class="card-header">Login Details</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Email</div>\n              <div class="col-md-8">{{profile.email}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Contact</div>\n              <div class="col-md-8">{{profile.contact}}</div>\n            </div>\n          </li>\n        </ul>\n        <div class="card-body">\n          <a class="btn btn-danger" routerLink="/changePassword">Change Password</a>\n        </div>\n      </div>\n  </div>\n  <div class="col-xl-3">\n    <div class="card mb-5">\n      <div class="card-header">Profile Picture</div>\n      <div class="card-body text-center">\n        <img [src]="profile.photo" class="img-fluid max-w-200">\n  \n        <br><br>\n        \n        <label for="profile-upload" class="btn btn-outline-info">\n          <mat-icon>file_upload</mat-icon>\n        </label>\n        <input type="file" id="profile-upload" class="hidden-file" accept="image/*" (change)="uploadProfilePicture($event.target.files)"/>\n\n        <button class="btn btn-outline-danger mb-2" (click)="removeProfilePicture()">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3">\n    <div class="card mb-5">\n      <div class="card-header">Signature</div>\n      <div class="card-body text-center">\n        <img [src]="profile.sign" class="img-fluid max-w-200">\n    \n        <br><br>\n        \n        <label for="sign-upload" class="btn btn-outline-info">\n          <mat-icon>file_upload</mat-icon>\n        </label>\n        <input type="file" id="sign-upload" class="hidden-file" accept="image/*" (change)="uploadSign($event.target.files)"/>\n\n        <button class="btn btn-outline-danger mb-2" (click)="removeSign()">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/profile-view/profile-view.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__services_goback_service__["a" /* GobackService */]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());

//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_goback_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
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
    function DashboardComponent(api, goback, route) {
        this.api = api;
        this.goback = goback;
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
            selector: 'app-dashboard',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/dashboard/dashboard.component.html"*/'<div class="jumbotron jumbotron-fluid">\n    <div class="container">\n        <h1 class="display-4">Dashboard</h1>\n    </div>\n</div>\n<br>\n<div class="container">\n    <div class="row">\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_primary" class="btn btn-primary" (click)="this.goback.gotoComponent(\'profile\')"><span class="fa fa-lg fa-user-circle"></span> User Profile</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_success"  class="btn btn-success" (click)="this.goback.gotoComponent(\'firm\')"><span class="fa fa-lg fa-building"></span> Firm Profile</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_warning" class="btn btn-warning" (click)="this.goback.gotoComponent(\'coUsers\')"><span class="fa fa-lg fa-users"></span> Co-Users</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_info" class="btn btn-info" (click)="this.goback.gotoComponent(\'dir\')"><span class="fa fa-lg fa-address-book"></span> Directory</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="brand_danger" class="btn btn-danger" (click)="this.goback.gotoComponent(\'ratecards\')"><span class="fa fa-lg fa-dollar-sign"></span> Rate Cards</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6">\n            <button ion-button block color="dark" class="btn btn-danger" (click)="this.goback.gotoComponent(\'releaseorders\')"><span class="fa fa-lg fa-file-alt"></span> Release Orders</button>\n        </div>\n        <div class="col-lg-3 col-md-4 col-sm-6" *ngIf="admin">\n            <button ion-button block color="brand_secondary" class="btn btn-secondary" (click)="this.goback.gotoComponent(\'templates\')"><span class="fa fa-lg fa-file-alt"></span> Templates</button>\n        </div>\n    </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/dashboard/dashboard.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_firm__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_goback_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(6);
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
    function FirmProfileViewComponent(api, dialog, notifications, goback, route) {
        this.api = api;
        this.dialog = dialog;
        this.notifications = notifications;
        this.goback = goback;
        this.route = route;
        this.profile = new __WEBPACK_IMPORTED_MODULE_1__models_firm__["a" /* Firm */]();
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
                _this.profile.logo = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show("Connection failed");
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
                    _this.profile.logo = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
                }
                else {
                    console.log(data);
                    _this.notifications.show(data.msg);
                }
            }, function (err) {
                console.log(err);
                _this.notifications.show("Connection failed");
            });
        });
    };
    FirmProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-firm-profile-view',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/firm-profile-view/firm-profile-view.component.html"*/'<mat-toolbar>  \n    <mat-toolbar-row>\n        <div class="container">Firm Profile</div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n\n<button class="fab bg-info" *ngIf="admin" (click)="this.goback.gotoComponent(\'firm/edit\')">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<br>\n\n<div class="row">\n  <div class="col-lg-8 order-2 order-lg-1">\n    <div class="card mb-5">\n      <div class="card-header">Business Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Firm Name</div>\n            <div class="col-md-8">{{profile.name}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Tag Line</div>\n            <div class="col-md-8">{{profile.tagline}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Display / NickName</div>\n            <div class="col-md-8">{{profile.nickname}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Incorporation Date</div>\n            <div class="col-md-8">{{profile.incDate | date}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Email</div>\n            <div class="col-md-8">{{profile.email}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Phone</div>\n            <div class="col-md-8">{{profile.phone}}</div>\n          </div>\n        </li>     \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">STD Number</div>\n            <div class="col-md-8">{{profile.stdNo}}</div>\n          </div>\n        </li>           \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">LandLine Number</div>\n            <div class="col-md-8">{{profile.landlineNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Fax</div>\n            <div class="col-md-8">{{profile.fax}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Website</div>\n            <div class="col-md-8">{{profile.website}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pan No.</div>\n            <div class="col-md-8">{{profile.panNo}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">GST No.</div>\n            <div class="col-md-8">{{profile.gstNo}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Registered Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{profile.registeredAddress.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{profile.registeredAddress.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{profile.registeredAddress.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{profile.registeredAddress.state}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Office Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{profile.officeAddress.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{profile.officeAddress.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{profile.officeAddress.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{profile.officeAddress.state}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Bank Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account Name</div>\n            <div class="col-md-8">{{profile.bankAccountName}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account No.</div>\n            <div class="col-md-8">{{profile.bankAccountNo}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Bank Name</div>\n            <div class="col-md-8">{{profile.bankName}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">IFSC</div>\n            <div class="col-md-8">{{profile.bankIfsc}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Branch Address</div>\n            <div class="col-md-8">{{profile.bankBranchAddress}}</div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Account Type</div>\n            <div class="col-md-8">{{profile.bankAccountType}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class="card mb-5">\n      <div class="card-header">Social Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Facebook</div>\n            <div class="col-md-8"><a href="{{profile.facebook}}" target="_blank">{{profile.facebook}}</a></div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Twitter</div>\n            <div class="col-md-8"><a href="{{profile.twitter}}" target="_blank">{{profile.twitter}}</a></div>\n          </div>\n        </li>    \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Others</div>\n            <div class="col-md-8"><a href="{{profile.other}}" target="_blank">{{profile.other}}</a></div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="col-lg-4 order-lg-2">\n    <div class="card mb-5">\n      <div class="card-header">Logo</div>\n      <div class="card-body text-center">\n        <img [src]="profile.logo" class="img-fluid max-w-200">\n        \n        <br><br>\n        \n        <label for="logo-upload" *ngIf="admin" class="btn btn-outline-info">\n          <mat-icon>file_upload</mat-icon>\n        </label>\n        <input type="file" *ngIf="admin" id="logo-upload" accept="image/*" class="hidden-file" (change)="uploadLogo($event.target.files)"/>\n\n        <button *ngIf="admin" class="btn btn-outline-danger mb-2" (click)="removeLogo()">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/firm-profile-view/firm-profile-view.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_6__services_goback_service__["a" /* GobackService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]])
    ], FirmProfileViewComponent);
    return FirmProfileViewComponent;
}());

//# sourceMappingURL=firm-profile-view.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
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
    function PhoneVerifyComponent(api, router, goback) {
        this.api = api;
        this.router = router;
        this.goback = goback;
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
        }, function (err) {
            _this.otpSent = false;
            console.log(err);
            _this.sendError = 'Connection failed';
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
        }, function (err) {
            console.log(err);
            _this.verifyError = 'Connection failed';
        });
    };
    PhoneVerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-phone-verify',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/phone-verify/phone-verify.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Verify Phone Number</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="sendOtp()" #phoneNumberForm="ngForm">\n    <mat-form-field>\n      <span matPrefix>+91 &nbsp;</span>\n      <input type="tel" matInput placeholder="Phone Number" [(ngModel)]="number" pattern="^\d{10}$" maxlength="10" minlength="10" required name="phone">\n    </mat-form-field>\n\n    <div *ngIf="sendError" class="text-danger">\n      {{sendError}}\n      \n      <br>\n    </div>\n\n    <div class="text-right">\n      <button type="submit" class="btn btn-primary" [disabled]="!phoneNumberForm.form.valid || otpSent">Send Code</button>\n    </div>\n  </form>\n\n  <form *ngIf="otpSent" (ngSubmit)="verifyOtp()" #otpForm="ngForm">\n    <mat-form-field>\n      <input type="text" matInput placeholder="Verification Code" [(ngModel)]="otp" required name="otp">\n      <mat-hint>Enter the Verification code received on your mobile.</mat-hint>\n    </mat-form-field>\n\n    <div *ngIf="verifyError" class="text-danger">\n      {{verifyError}}\n      \n      <br>\n    </div>\n\n    <br><br>\n    <button type="submit" class="btn btn-success" [disabled]="!otpForm.form.valid">Verify Code</button>\n  </form>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/phone-verify/phone-verify.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], PhoneVerifyComponent);
    return PhoneVerifyComponent;
}());

//# sourceMappingURL=phone-verify.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePswComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
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
    function ChangePswComponent(api, notifications, goback) {
        this.api = api;
        this.notifications = notifications;
        this.goback = goback;
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
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ChangePswComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-psw',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/change-psw/change-psw.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Change Password</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #changePswForm="ngForm">\n    <mat-form-field>\n      <input matInput type="password" name="oldPassword" placeholder="Old Password" [(ngModel)]="oldPassword" required #oldPasswordField="ngModel">\n      <mat-error *ngIf="oldPasswordField.errors && oldPasswordField.errors.required">\n        Old Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="password" placeholder="New Password" [(ngModel)]="password" required #passwordField="ngModel">\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        New Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="cpassword" [verify-equals]="password" placeholder="Confirm New Password" [(ngModel)]="cpassword" required #cpasswordField="ngModel">\n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.required">\n        Password confirmation is required.\n      </mat-error> \n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.equals">\n        Passwords don\'t match.\n      </mat-error>\n    </mat-form-field>\n\n    <br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!changePswForm.form.valid">Change</button>\n  </form>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/change-psw/change-psw.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], ChangePswComponent);
    return ChangePswComponent;
}());

//# sourceMappingURL=change-psw.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPswComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
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
    function ForgotPswComponent(api, notifications, goback) {
        this.api = api;
        this.notifications = notifications;
        this.goback = goback;
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
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ForgotPswComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-psw',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/forgot-psw/forgot-psw.component.html"*/'<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h1 class="display-4">Forgot Password</h1>\n    <p class="lead">A password reset email will be sent to your email account.</p>\n  </div>\n</div>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #forgotPswForm="ngForm">\n    <mat-form-field>\n      <input matInput placeholder="Email Address" [(ngModel)]="email" name="email" required verify-email #emailField="ngModel">\n      <mat-error *ngIf="emailField.errors && emailField.errors.required">\n        Email is required.\n      </mat-error>\n      <mat-error *ngIf="emailField.errors && emailField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n    <button class="btn btn-success" [disabled]="!forgotPswForm.form.valid">Send</button>\n  </form>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/forgot-psw/forgot-psw.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], ForgotPswComponent);
    return ForgotPswComponent;
}());

//# sourceMappingURL=forgot-psw.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_goback_service__ = __webpack_require__(9);
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
            selector: 'app-not-found',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/not-found/not-found.component.html"*/'<br>\n<h3 class="text-center">\n  Page Not Found (404)\n</h3>\n'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/not-found/not-found.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_goback_service__["a" /* GobackService */]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(9);
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
    function ResetPasswordComponent(api, route, notifications, goback) {
        this.api = api;
        this.route = route;
        this.notifications = notifications;
        this.goback = goback;
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
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-password',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/reset-password/reset-password.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Reset Password</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #resetPswForm="ngForm">\n\n    <mat-form-field>\n      <input matInput type="password" name="password" placeholder="New Password" [(ngModel)]="password" required #passwordField="ngModel">\n      <mat-error *ngIf="passwordField.errors && passwordField.errors.required">\n        New Password is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="password" name="cpassword" [verify-equals]="password" placeholder="Confirm New Password" [(ngModel)]="cpassword" required #cpasswordField="ngModel">\n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.required">\n        Password confirmation is required.\n      </mat-error> \n      <mat-error *ngIf="cpasswordField.errors && cpasswordField.errors.equals">\n        Passwords don\'t match.\n      </mat-error>\n    </mat-form-field>\n  \n    <br>\n    <button class="btn btn-success" [disabled]="!resetPswForm.form.valid">Send</button>\n  </form>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/reset-password/reset-password.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());

//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirComponent = (function () {
    function DirComponent(goback) {
        this.goback = goback;
    }
    DirComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    DirComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dir',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/dir/dir.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Directory</div>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div class="container">\n      <nav mat-tab-nav-bar class="x-overflow">\n        <a mat-tab-link routerLink="clients" routerLinkActive #rla1="routerLinkActive" [active]="rla1.isActive">Clients</a>\n        <a mat-tab-link routerLink="executives" routerLinkActive #rla2="routerLinkActive" [active]="rla2.isActive">Executives</a>\n        <a mat-tab-link routerLink="media_houses" routerLinkActive #rla3="routerLinkActive" [active]="rla3.isActive">Media Houses</a>\n      </nav>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class="container">  \n  <br>\n\n  <router-outlet></router-outlet>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/dir/dir.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_goback_service__["a" /* GobackService */]])
    ], DirComponent);
    return DirComponent;
}());

//# sourceMappingURL=dir.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_api_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_state_api_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientComponent = (function () {
    function ClientComponent(api, route, router, stateApi, notifications, goback) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.stateApi = stateApi;
        this.notifications = notifications;
        this.goback = goback;
        this.client = new __WEBPACK_IMPORTED_MODULE_1__client__["a" /* Client */]();
        this.edit = false;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.paramMap.subscribe(function (params) {
            if (params.has('id')) {
                _this.edit = true;
                _this.route.data.subscribe(function (data) {
                    _this.client = data.client;
                });
                _this.id = params.get('id');
            }
            else
                _this.client.contactpersons = [new __WEBPACK_IMPORTED_MODULE_1__client__["b" /* ContactPerson */]()];
        });
    };
    ClientComponent.prototype.goBack = function () {
        this.router.navigateByUrl(this.edit ? '/dir/clients/' + this.id : '/dir/clients');
    };
    ClientComponent.prototype.createClient = function () {
        var _this = this;
        this.api.createClient(this.client).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ClientComponent.prototype.editClient = function () {
        var _this = this;
        this.api.editClient(this.client).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ClientComponent.prototype.submit = function () {
        if (this.edit) {
            this.editClient();
        }
        else
            this.createClient();
    };
    ClientComponent.prototype.cancel = function () {
        this.goBack();
    };
    ClientComponent.prototype.addContactPerson = function () {
        this.client.contactpersons.push(new __WEBPACK_IMPORTED_MODULE_1__client__["b" /* ContactPerson */]());
    };
    ClientComponent.prototype.removeContactPerson = function (i) {
        this.client.contactpersons.splice(i, 1);
    };
    ClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/clients/client/client.component.html"*/'<form (ngSubmit)="submit()" #dirForm="ngForm">\n\n  <h2 *ngIf="edit">Edit Client</h2>\n  <h2 *ngIf="!edit">Add Client</h2>\n\n  <br><br>\n\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>Client Details</mat-panel-title>\n        <mat-panel-description>Enter Client details</mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mat-form-field>\n        <input matInput type="text" name="orgName" placeholder="Organisation / Individual Name" [(ngModel)]="client.orgName" required #orgNameField="ngModel">\n        <mat-error *ngIf="orgNameField.errors && orgNameField.errors.required">\n          Organisation / Individual Name is required.\n        </mat-error>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput type="text" name="companyName" placeholder="Company Name" [(ngModel)]="client.companyName" required #companyNameField="ngModel">\n        <mat-error *ngIf="companyNameField.errors && companyNameField.errors.required">\n          Company Name is required.\n        </mat-error>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput type="text" name="nickName" placeholder="Nick Name" [(ngModel)]="client.nickName" #nickNameField="ngModel">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput type="text" name="category" placeholder="Category" [(ngModel)]="client.category" #categoryField="ngModel">\n      </mat-form-field>\n\n      <div class="form-row">\n        <div class="col-4">\n          <mat-form-field>\n            <input matInput type="tel" minlength="3" maxlength="5" name="stdNo" placeholder="STD No" [(ngModel)]="client.stdNo" #stdNoField="ngModel">\n          </mat-form-field>\n        </div>\n        <div class="col-8">\n          <mat-form-field>\n            <input matInput type="tel" minlength="6" maxlength="8" name="landLine" placeholder="Landline Number" [(ngModel)]="client.landLine" #landLineField="ngModel">\n          </mat-form-field>\n        </div>\n      </div>\n    \n      <mat-form-field>\n        <input matInput type="text" name="website" placeholder="Website" [(ngModel)]="client.website" #websiteField="ngModel">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput type="text" name="panNo" placeholder="PAN Number" [(ngModel)]="client.panNo" #panNoField="ngModel">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput type="text" name="gstNo" placeholder="GST Number" [(ngModel)]="client.gstNo" #gstNoField="ngModel">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>Address</mat-panel-title>\n        <mat-panel-description>Enter Client Address</mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mat-form-field>\n        <input matInput type="text" name="address" placeholder="Address" [(ngModel)]="client.address.address" required #addressField="ngModel">\n        <mat-error *ngIf="addressField.errors && addressField.errors.required">\n          Address is required.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type="tel" minlength="6" maxlength="6" name="pincode" placeholder="Pincode" [(ngModel)]="client.address.pincode" required #pincodeField="ngModel">\n        <mat-error *ngIf="pincodeField.errors && pincodeField.errors.required">\n          Pincode is required.\n        </mat-error>\n        <mat-error *ngIf="pincodeField.errors && (pincodeField.errors.minlength || pincodeField.errors.maxlength)">\n          Pincode should be 6 characters long.\n        </mat-error>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input matInput type="text" name="city" placeholder="City" [(ngModel)]="client.address.city" required #cityField="ngModel">\n        <mat-error *ngIf="cityField.errors && cityField.errors.required">\n          City is required.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select placeholder = "State" name="state" [(ngModel)]="client.address.state" required #stateField="ngModel">\n          <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n        </mat-select>\n        <mat-error *ngIf="stateField.errors && stateField.errors.required">\n          State is required.\n        </mat-error>\n      </mat-form-field>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <br><br>\n\n  <div class="row">\n    <div class="col">\n      <h4>Contact Persons ({{client.contactpersons.length}})</h4>\n    </div>\n    <div class="col-auto">\n      <button type="button" (click)="addContactPerson()" class="btn btn-outline-info">\n        <mat-icon>add</mat-icon> Add More\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf="client.contactpersons.length == 0" class="text-muted">\n    No Contact Persons\n  </div>\n\n  <br><br>\n\n  <div *ngFor="let item of client.contactpersons; index as i" class="card mb-4">\n    <div class="card-header">\n      <div class="row">\n        <div class="col-auto align-self-center text-muted">#{{i + 1}}</div>\n        <div class="col align-self-center">{{item.name}}</div>\n        <div class="col-auto">\n          <button mat-icon-button color="warn" type="button" (click)="removeContactPerson(i)">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class="card-body">\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Business Details</mat-panel-title>\n            <mat-panel-description>Enter Business details</mat-panel-description>\n          </mat-expansion-panel-header>\n\n          <mat-form-field>\n            <input matInput type="text" name="s-{{i}}-name" placeholder="Name" [(ngModel)]="item.name" required #nameField="ngModel">\n            <mat-error *ngIf="nameField.errors && nameField.errors.required">\n              Name is required.\n            </mat-error>\n          </mat-form-field>\n    \n          <mat-form-field>\n            <input matInput type="text" name="s-{{i}}-designation" placeholder="Designation" [(ngModel)]="item.designation" #designationField="ngModel">\n          </mat-form-field>\n    \n          <mat-form-field>\n            <input matInput type="text" name="s-{{i}}-department" placeholder="Department" [(ngModel)]="item.department" required #departmentField="ngModel">\n            <mat-error *ngIf="departmentField.errors && departmentField.errors.required">\n              Department is required.\n            </mat-error>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Contact Details</mat-panel-title>\n            <mat-panel-description>Enter Contact details</mat-panel-description>\n          </mat-expansion-panel-header>\n\n          <div class="form-row">\n            <div class="col-4">\n              <mat-form-field>\n                <input matInput type="tel" minlength="3" maxlength="5" name="s-{{i}}-personStdNo" placeholder="STD No" [(ngModel)]="item.personStdNo" required #personStdNoField="ngModel">\n                <mat-error *ngIf="personStdNoField.errors && personStdNoField.errors.required">\n                  STD No is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col-8">\n              <mat-form-field>\n                <input matInput type="tel" minlength="6" maxlength="8" name="s-{{i}}-personLandLine" placeholder="Landline Number" [(ngModel)]="item.personLandLine" required #personLandLineField="ngModel">\n                <mat-error *ngIf="personStdNoField.errors && personStdNoField.errors.required">\n                  Landline is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n    \n          <mat-form-field>\n            <input matInput type="tel" pattern="^\d{10}$" maxlength="10" minlength="10" name="s-{{i}}-mobileNo" placeholder="Mobile Number" [(ngModel)]="item.mobileNo" #mobileNoField="ngModel">\n          </mat-form-field>\n    \n          <mat-form-field>\n            <input matInput type="email" name="s-{{i}}-email" placeholder="Email" [(ngModel)]="item.email" required #emailField="ngModel" verify-email>\n            <mat-error *ngIf="emailField.errors && emailField.errors.required">\n              Email is required.\n            </mat-error>\n            <mat-error *ngIf="emailField.errors && emailField.errors.email">\n              Invalid Email.\n            </mat-error>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Personal Details</mat-panel-title>\n            <mat-panel-description>Enter Personal details</mat-panel-description>\n          </mat-expansion-panel-header>\n\n          <mat-form-field>\n            <input matInput type="date" name="dob-{{i}}" placeholder="DOB" [(ngModel)]="item.dob" #dobField="ngModel">\n          </mat-form-field>\n    \n          <mat-form-field>\n            <input matInput type="date" name="anniversaryDate-{{i}}" placeholder="Anniversary Date" [(ngModel)]="item.anniversaryDate" #anniversaryDateField="ngModel">\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </div>\n  \n  <button type="submit" class="btn btn-success" [disabled]="!dirForm.form.valid">Save</button>\n  <button class="btn btn-danger" (click)="cancel()">Cancel</button>\n</form>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/clients/client/client.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_api_service__["a" /* ClientApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_state_api_service__["a" /* StateApiService */],
            __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_6__services_goback_service__["a" /* GobackService */]])
    ], ClientComponent);
    return ClientComponent;
}());

//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_api_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ClientListComponent = (function () {
    function ClientListComponent(api, dialog, router, goback) {
        var _this = this;
        this.api = api;
        this.dialog = dialog;
        this.router = router;
        this.goback = goback;
        this.clients = [];
        this.searchFailed = false;
        this.search = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) {
                return _this.api.searchClients(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([]);
                });
            });
        };
        this.inputFormatter = function (result) {
            _this.router.navigateByUrl('/dir/clients/' + result.id);
        };
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.getClients().subscribe(function (data) { return _this.clients = data; });
    };
    ClientListComponent.prototype.deleteClient = function (client) {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure you want to delete this client?").subscribe(function (confirm) {
            if (!confirm)
                return;
            _this.api.deleteClient(client).subscribe(function (data) {
                if (data.success) {
                    _this.clients = _this.clients.filter(function (c) { return c.id !== client.id; });
                }
                else {
                    console.log(data);
                }
            }, function (err) { return console.log(err); });
        });
    };
    ClientListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-list',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/clients/client-list/client-list.component.html"*/'<button class="fab" (click)="this.goback.gotoComponent(\'dir/clients/new\')">\n  <mat-icon>add</mat-icon>\n</button>\n\n<ng-template #rt let-r="result">\n  {{r.orgName}}\n  <br>\n  <div *ngFor="let contactPerson of r.contactpersons">\n    <small>{{contactPerson.name}}</small>\n  </div>\n</ng-template>\n\n<div class="form-group">\n  <input id="search" type="text" class="form-control" [class.is-invalid]="searchFailed" [(ngModel)]="query" [ngbTypeahead]="search" placeholder="Search" [resultTemplate]="rt" [inputFormatter]="inputFormatter" />\n</div>\n\n<p *ngIf="clients.length == 0" class="text-muted">\n  No Clients\n</p>\n\n<div class="card mb-3" *ngFor="let client of clients">\n  <div class="card-body">\n    <div class="row">\n      <div class="col">\n        <a [routerLink]="[\'/dir/clients\', client.id]">{{client.orgName}}</a>\n        <br>\n        <div *ngFor="let contactPerson of client.contactpersons">\n          <small>{{contactPerson.name}}</small>\n        </div>\n      </div>\n      <div class="col-auto">\n        <mat-menu #dirMenu="matMenu">\n          <button mat-menu-item [routerLink]="[\'/dir/clients/edit\', client.id]">\n            <mat-icon>edit</mat-icon> Edit\n          </button>\n          <button mat-menu-item class="text-danger" (click)="deleteClient(client)">\n            <mat-icon>delete</mat-icon> Delete\n          </button>\n        </mat-menu>\n        \n        <button mat-icon-button [matMenuTriggerFor]="dirMenu">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/clients/client-list/client-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__client_api_service__["a" /* ClientApiService */], __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_10__services_goback_service__["a" /* GobackService */]])
    ], ClientListComponent);
    return ClientListComponent;
}());

//# sourceMappingURL=client-list.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_api_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientDetailsComponent = (function () {
    function ClientDetailsComponent(api, route, router, notifications, goback) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
        this.client = new __WEBPACK_IMPORTED_MODULE_1__client__["a" /* Client */]();
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.client = data.client;
        });
    };
    ClientDetailsComponent.prototype.uploadProfilePicture = function (files) {
        var _this = this;
        this.api.uploadProfilePicture(this.client.id, files.item(0)).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Profile Photo uploaded successfully');
                _this.client.contactpersons[0].photo = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show("Connection failed");
        });
    };
    ClientDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-details',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/clients/client-details/client-details.component.html"*/'<button class="fab bg-info" [routerLink]="[\'/dir/clients/edit\', client.id]">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<div class="row">\n  <div class="col-lg">\n    <div class="card mb-3">\n      <div class="card-header">Client</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Organization Name</div>\n            <div class="col-md-8">{{client.orgName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Company Name</div>\n            <div class="col-md-8">{{client.companyName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Nick Name</div>\n            <div class="col-md-8">{{client.nickName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Category</div>\n            <div class="col-md-8">{{client.category}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Landline</div>\n            <div class="col-md-8">{{client.landLine}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">STD</div>\n            <div class="col-md-8">{{client.stdNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Website</div>\n            <div class="col-md-8">{{client.website}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">PAN</div>\n            <div class="col-md-8">{{client.panNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">GSTIN</div>\n            <div class="col-md-8">{{client.gstNo}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class="card mb-3">\n      <div class="card-header">Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{client.address.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{client.address.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{client.address.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{client.address.state}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="col-lg">\n    <div class="card mb-3" *ngFor="let contactPerson of client.contactpersons; index as i">\n      <div class="card-header">Contact Person {{i + 1}}</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Name</div>\n            <div class="col-md-8">{{contactPerson.name}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Designation</div>\n            <div class="col-md-8">{{contactPerson.designation}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Department</div>\n            <div class="col-md-8">{{contactPerson.department}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Mobile</div>\n            <div class="col-md-8">{{contactPerson.mobileNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Email</div>\n            <div class="col-md-8">{{contactPerson.email}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Date of Birth</div>\n            <div class="col-md-8">{{contactPerson.dob | date}}</div>\n          </div>\n        </li>        \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Anniversary</div>\n            <div class="col-md-8">{{contactPerson.anniversaryDate | date}}</div>\n          </div>\n        </li>\n      </ul>\n      <div class="card-header">Profile Picture</div>\n      <div class="card-body text-center">\n        <img [src]="contactPerson.photo" class="img-fluid max-w-200">\n  \n        <br><br>\n        \n        <label for="profile-upload-{{i}}" class="btn btn-outline-info">\n            Upload\n        </label>\n        <input type="file" id="profile-upload-{{i}}" class="hidden-file" accept="image/*" (change)="uploadProfilePicture($event.target.files)"/>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/clients/client-details/client-details.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_api_service__["a" /* ClientApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_6__services_goback_service__["a" /* GobackService */]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());

//# sourceMappingURL=client-details.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_api_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientResolver = (function () {
    function ClientResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    ClientResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.api.getClient(id).take(1).map(function (client) {
            if (client) {
                return client;
            }
            else {
                _this.router.navigateByUrl('/dir/clients');
                return null;
            }
        });
    };
    ClientResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__client_api_service__["a" /* ClientApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ClientResolver);
    return ClientResolver;
}());

//# sourceMappingURL=client-resolver.service.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__executive__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__executive_api_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExecutiveComponent = (function () {
    function ExecutiveComponent(api, route, router, notifications, goback) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
        this.executive = new __WEBPACK_IMPORTED_MODULE_1__executive__["a" /* Executive */]();
        this.edit = false;
    }
    ExecutiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.paramMap.subscribe(function (params) {
            if (params.has('id')) {
                _this.id = params.get('id');
                _this.edit = true;
                _this.route.data.subscribe(function (data) {
                    _this.executive = data.executive;
                });
            }
        });
    };
    ExecutiveComponent.prototype.goBack = function () {
        this.router.navigateByUrl(this.edit ? '/dir/executives/' + this.id : '/dir/executives');
    };
    ExecutiveComponent.prototype.createExecutive = function () {
        var _this = this;
        this.api.createExecutive(this.executive).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ExecutiveComponent.prototype.editExecutive = function () {
        var _this = this;
        this.api.editExecutive(this.executive).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ExecutiveComponent.prototype.submit = function () {
        if (this.edit) {
            this.editExecutive();
        }
        else
            this.createExecutive();
    };
    ExecutiveComponent.prototype.cancel = function () {
        this.goBack();
    };
    ExecutiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-executive',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/executives/executive/executive.component.html"*/'<form (ngSubmit)="submit()" #dirForm="ngForm">\n  <h2 *ngIf="edit">Edit Executive</h2>\n  <h2 *ngIf="!edit">Add Executive</h2>\n\n  <br><br>\n\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>Executive Details</mat-panel-title>\n        <mat-panel-description>Enter Executive and Organisation details</mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mat-form-field>\n        <input matInput placeholder="Organisation Name" name="orgName" [(ngModel)]="executive.orgName">\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput placeholder="Company Name" name="companyName" [(ngModel)]="executive.companyName" required #companyNameField="ngModel">\n        <mat-error *ngIf="companyNameField.errors && companyNameField.errors.required">\n          Company Name is required.\n        </mat-error>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput placeholder="Executive Name" name="executiveName" [(ngModel)]="executive.executiveName" required #executiveNameField="ngModel">\n        <mat-error *ngIf="executiveNameField.errors && executiveNameField.errors.required">\n          Executive Name is required.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder="Designation" name="designation" [(ngModel)]="executive.designation">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder="Department" name="department" [(ngModel)]="executive.department">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>Contact Details</mat-panel-title>\n        <mat-panel-description>Enter Mobile Number and Email</mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mat-form-field>\n        <span matPrefix>+91 &nbsp;</span>\n        <input type="tel" matInput placeholder="Mobile Number" [(ngModel)]="executive.mobileNo" pattern="^\d{10}$" maxlength="10" minlength="10" required name="mobileNo" #mobileNoField="ngModel">\n        <mat-error *ngIf="mobileNoField.errors">\n          Mobile Number is empty or invalid.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder="Email" [(ngModel)]="executive.email" name="email" required verify-email #emailField="ngModel">\n        <mat-error *ngIf="emailField.errors && emailField.errors.required">\n          Email is required.\n        </mat-error>\n        <mat-error *ngIf="emailField.errors && emailField.errors.email">\n          Invalid Email.\n        </mat-error>\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>Personal Details</mat-panel-title>\n        <mat-panel-description>Enter Personal Details</mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]="dobPicker" placeholder="Date of Birth" [(ngModel)]="executive.dob" name="dob" disabled>\n        <mat-datepicker-toggle matSuffix [for]="dobPicker"></mat-datepicker-toggle>\n        <mat-datepicker #dobPicker disabled="false"></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]="anniversaryPicker" placeholder="Anniversary Date" [(ngModel)]="executive.anniversaryDate" name="anniversaryDate" disabled>\n        <mat-datepicker-toggle matSuffix [for]="anniversaryPicker"></mat-datepicker-toggle>\n        <mat-datepicker #anniversaryPicker disabled="false"></mat-datepicker>\n      </mat-form-field>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <br><br>\n\n  <button type="submit" class="btn btn-success" [disabled]="!dirForm.form.valid">Save</button>\n  <button class="btn btn-danger" (click)="cancel()">Cancel</button>\n</form>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/executives/executive/executive.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__executive_api_service__["a" /* ExecutiveApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_5__services_goback_service__["a" /* GobackService */]])
    ], ExecutiveComponent);
    return ExecutiveComponent;
}());

//# sourceMappingURL=executive.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutiveListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__executive_api_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ExecutiveListComponent = (function () {
    function ExecutiveListComponent(api, dialog, router, goback) {
        var _this = this;
        this.api = api;
        this.dialog = dialog;
        this.router = router;
        this.goback = goback;
        this.executives = [];
        this.searchFailed = false;
        this.search = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) {
                return _this.api.searchExecutives(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([]);
                });
            });
        };
        this.inputFormatter = function (result) {
            _this.router.navigateByUrl('/dir/executives/' + result.id);
        };
    }
    ExecutiveListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.getExecutives().subscribe(function (data) { return _this.executives = data; });
    };
    ExecutiveListComponent.prototype.deleteExecutive = function (executive) {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure you want to delete this executive?").subscribe(function (confirm) {
            if (!confirm)
                return;
            _this.api.deleteExecutive(executive).subscribe(function (data) {
                if (data.success) {
                    _this.executives = _this.executives.filter(function (c) { return c.id !== executive.id; });
                }
                else {
                    console.log(data);
                }
            }, function (err) { return console.log(err); });
        });
    };
    ExecutiveListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-executive-list',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/executives/executive-list/executive-list.component.html"*/'<button class="fab" (click)="this.goback.gotoComponent(\'dir/executives/new\')">\n  <mat-icon>add</mat-icon>\n</button>\n\n<ng-template #rt let-r="result">\n  {{r.orgName}}\n  <br>\n  {{r.executiveName}}\n</ng-template>\n\n<div class="form-group">\n  <input id="search" type="text" class="form-control" [class.is-invalid]="searchFailed" [(ngModel)]="query" [ngbTypeahead]="search" placeholder="Search" [resultTemplate]="rt" [inputFormatter]="inputFormatter" />\n</div>\n\n<p *ngIf="executives.length == 0" class="text-muted">\n  No Executives\n</p>\n\n<div class="card mb-3" *ngFor="let executive of executives">\n  <div class="card-body">\n    <div class="row">\n      <div class="col">\n        <a [routerLink]="[\'/dir/executives\', executive.id]">{{executive.orgName}}</a>\n        <br>\n        <small>{{executive.executiveName}}</small>\n      </div>\n      <div class="col-auto">\n        <mat-menu #dirMenu="matMenu">\n          <button mat-menu-item [routerLink]="[\'/dir/executives/edit\', executive.id]">\n            <mat-icon>edit</mat-icon> Edit\n          </button>\n          <button mat-menu-item class="text-danger" (click)="deleteExecutive(executive)">\n            <mat-icon>delete</mat-icon> Delete\n          </button>\n        </mat-menu>\n        \n        <button mat-icon-button [matMenuTriggerFor]="dirMenu">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/executives/executive-list/executive-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__executive_api_service__["a" /* ExecutiveApiService */], __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_10__services_goback_service__["a" /* GobackService */]])
    ], ExecutiveListComponent);
    return ExecutiveListComponent;
}());

//# sourceMappingURL=executive-list.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutiveDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__executive__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__executive_api_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExecutiveDetailsComponent = (function () {
    function ExecutiveDetailsComponent(api, route, router, notifications, goback) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
        this.executive = new __WEBPACK_IMPORTED_MODULE_1__executive__["a" /* Executive */]();
    }
    ExecutiveDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.executive = data.executive;
        });
    };
    ExecutiveDetailsComponent.prototype.uploadProfilePicture = function (files) {
        var _this = this;
        this.api.uploadProfilePicture(this.executive.id, files.item(0)).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Profile Photo uploaded successfully');
                _this.executive.photo = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].uploadsBaseUrl + data.photo;
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show("Connection failed");
        });
    };
    ExecutiveDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-executive-details',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/executives/executive-details/executive-details.component.html"*/'<button class="fab bg-info" [routerLink]="[\'/dir/executives/edit\', executive.id]">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<div class="row">\n  <div class="col-lg">\n    <div class="card mb-3">\n      <div class="card-header">Executive</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Organization Name</div>\n            <div class="col-md-8">{{executive.orgName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Company Name</div>\n            <div class="col-md-8">{{executive.companyName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Executive Name</div>\n            <div class="col-md-8">{{executive.executiveName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Designation</div>\n            <div class="col-md-8">{{executive.designation}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Department</div>\n            <div class="col-md-8">{{executive.department}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Mobile</div>\n            <div class="col-md-8">{{executive.mobileNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Email</div>\n            <div class="col-md-8">{{executive.email}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="col-lg">\n    <div class="card mb-3">\n      <div class="card-header">Personal Details</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Date of Birth</div>\n            <div class="col-md-8">{{executive.dob | date}}</div>\n          </div>\n        </li>        \n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Anniversary</div>\n            <div class="col-md-8">{{executive.anniversaryDate | date}}</div>\n          </div>\n        </li>\n      </ul>\n      <div class="card-header">Profile Picture</div>\n      <div class="card-body text-center">\n        <img [src]="executive.photo" class="img-fluid max-w-200">\n  \n        <br><br>\n        \n        <label for="profile-upload" class="btn btn-outline-info">\n            Upload\n        </label>\n        <input type="file" id="profile-upload" class="hidden-file" accept="image/*" (change)="uploadProfilePicture($event.target.files)"/>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/executives/executive-details/executive-details.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__executive_api_service__["a" /* ExecutiveApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_6__services_goback_service__["a" /* GobackService */]])
    ], ExecutiveDetailsComponent);
    return ExecutiveDetailsComponent;
}());

//# sourceMappingURL=executive-details.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutiveResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__executive_api_service__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExecutiveResolver = (function () {
    function ExecutiveResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    ExecutiveResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.api.getExecutive(id).take(1).map(function (executive) {
            if (executive) {
                return executive;
            }
            else {
                _this.router.navigateByUrl('/dir/executives');
                return null;
            }
        });
    };
    ExecutiveResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__executive_api_service__["a" /* ExecutiveApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ExecutiveResolver);
    return ExecutiveResolver;
}());

//# sourceMappingURL=executive-resolver.service.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_house__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_house_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_state_api_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MediaHouseComponent = (function () {
    function MediaHouseComponent(api, route, router, stateApi, notifications, goback) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.stateApi = stateApi;
        this.notifications = notifications;
        this.goback = goback;
        this.mediaHouse = new __WEBPACK_IMPORTED_MODULE_1__media_house__["a" /* MediaHouse */]();
        this.edit = false;
        this.periods = ['Daily', 'Weekly', 'BiWeekly', 'Monthly'];
        this.mediaTypes = ['Print', 'Air', 'Electronic'];
    }
    MediaHouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.paramMap.subscribe(function (params) {
            if (params.has('id')) {
                _this.id = params.get('id');
                _this.edit = true;
                _this.route.data.subscribe(function (data) {
                    _this.mediaHouse = data.mediaHouse;
                });
            }
            else {
                _this.mediaHouse.mediaType = _this.mediaTypes[0];
                _this.mediaHouse.scheduling = [new __WEBPACK_IMPORTED_MODULE_1__media_house__["b" /* MediaHouseScheduling */]()];
                _this.mediaHouse.pullouts = [new __WEBPACK_IMPORTED_MODULE_1__media_house__["c" /* Pullout */]('Main')];
                _this.mediaHouse.freqPeriod = _this.periods[0];
            }
        });
    };
    MediaHouseComponent.prototype.addScheduling = function () {
        this.mediaHouse.scheduling.push(new __WEBPACK_IMPORTED_MODULE_1__media_house__["b" /* MediaHouseScheduling */]());
    };
    MediaHouseComponent.prototype.addPullouts = function () {
        this.mediaHouse.pullouts.push(new __WEBPACK_IMPORTED_MODULE_1__media_house__["c" /* Pullout */](''));
    };
    MediaHouseComponent.prototype.removePullouts = function (i) {
        this.mediaHouse.pullouts.splice(i, 1);
    };
    MediaHouseComponent.prototype.removeScheduling = function (i) {
        this.mediaHouse.scheduling.splice(i, 1);
    };
    MediaHouseComponent.prototype.goBack = function () {
        this.router.navigateByUrl(this.edit ? '/dir/media_houses/' + this.id : '/dir/media_houses');
    };
    MediaHouseComponent.prototype.createMediaHouse = function () {
        var _this = this;
        this.api.createMediaHouse(this.mediaHouse).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    MediaHouseComponent.prototype.editMediaHouse = function () {
        var _this = this;
        this.api.editMediaHouse(this.mediaHouse).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    MediaHouseComponent.prototype.submit = function () {
        if (this.edit) {
            this.editMediaHouse();
        }
        else
            this.createMediaHouse();
    };
    MediaHouseComponent.prototype.cancel = function () {
        this.goBack();
    };
    MediaHouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-media-house',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/media-houses/media-house/media-house.component.html"*/'<form (ngSubmit)="submit()" #dirForm="ngForm">\n  <div class="row">\n    <div class="col-md">\n      <h2 *ngIf="edit">Edit Media House</h2>\n      <h2 *ngIf="!edit">Add Media House</h2>\n      <br>\n\n      <mat-form-field>\n        <input matInput type="text" name="orgName" placeholder="Organisation Name" [(ngModel)]="mediaHouse.orgName" required #orgNameField="ngModel">\n        <mat-error *ngIf="orgNameField.errors && orgNameField.errors.required">\n          Organisation Name is required.\n        </mat-error>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput type="text" name="pubName" placeholder="Publication Name" [(ngModel)]="mediaHouse.pubName" required #pubNameField="ngModel">\n        <mat-error *ngIf="pubNameField.errors && pubNameField.errors.required">\n          Publication Name is required.\n        </mat-error>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput type="text" name="nickName" placeholder="Nick Name" [(ngModel)]="mediaHouse.nickName" #nickNameField="ngModel">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <mat-select placeholder="Media Type" name="mediaType" [(ngModel)]="mediaHouse.mediaType" required #mediaTypeField="ngModel">\n          <mat-option *ngFor="let item of mediaTypes" [value]="item">{{item}}</mat-option>\n        </mat-select>\n        <mat-error *ngIf="mediaTypeField.errors && mediaTypeField.errors.required">\n          Media type is required.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type="text" name="gstNo" placeholder="GST Number" [(ngModel)]="mediaHouse.GSTIN" required minlength="15" maxlength="15" #gstNoField="ngModel">\n        <mat-error *ngIf="gstNoField.errors && gstNoField.errors.required">\n          GSTIN is required.\n        </mat-error>\n        <mat-error *ngIf="gstNoField.errors && (gstNoField.errors.minlength || gstNoField.errors.maxlength)">\n          GSTIN should be 15 characters long.\n        </mat-error>\n      </mat-form-field>\n\n      <div class="form-row">\n        <div class="col-4">\n          <mat-form-field>\n            <input matInput type="tel" minlength="3" maxlength="5" name="officeStdNo" placeholder="STD No" [(ngModel)]="mediaHouse.officeStdNo" #officeStdNoField="ngModel">\n          </mat-form-field>\n        </div>\n        <div class="col-8">\n          <mat-form-field>\n            <input matInput type="tel" minlength="6" maxlength="8" name="officeLandLine" placeholder="Office Landline Number" [(ngModel)]="mediaHouse.officeLandLine" #officeLandLineField="ngModel">\n          </mat-form-field>\n        </div>\n      </div>\n\n      <br><br>\n      <h3>Frequency</h3>\n      <br>\n\n      <div class="form-row">\n        <div class="col-sm">\n          <mat-form-field>\n            <mat-select placeholder="Period" name="freqPeriod" [(ngModel)]="mediaHouse.freqPeriod" #freqPeriodField="ngModel" required>\n              <mat-option *ngFor="let item of periods" [value]="item">{{item}}</mat-option>\n            </mat-select>\n            <mat-error *ngIf="freqPeriodField.errors && freqPeriodField.errors.required">\n              Period is required.\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class="col-sm">\n          <mat-form-field>\n            <input matInput type="text" placeholder="Remarks" [(ngModel)]="mediaHouse.freqRemark" name="freqRemark" #freqRemarkField="ngModel">\n          </mat-form-field>\n        </div>\n      </div>\n    \n      <br>\n\n      <h3 class="mb-3">Address</h3>\n    \n      <mat-form-field>\n        <input matInput type="text" name="address" placeholder="Address" [(ngModel)]="mediaHouse.address.address" required #addressField="ngModel">\n        <mat-error *ngIf="addressField.errors && addressField.errors.required">\n          Address is required.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type="tel" minlength="6" maxlength="6" name="pincode" placeholder="Pincode" [(ngModel)]="mediaHouse.address.pincode" required #pincodeField="ngModel">\n        <mat-error *ngIf="pincodeField.errors && pincodeField.errors.required">\n          Pincode is required.\n        </mat-error>\n        <mat-error *ngIf="pincodeField.errors && (pincodeField.errors.minlength || pincodeField.errors.maxlength)">\n          Pincode should be 6 characters long.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type="text" name="city" placeholder="City" [(ngModel)]="mediaHouse.address.city" required #cityField="ngModel">\n        <mat-error *ngIf="cityField.errors && cityField.errors.required">\n          City is required.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select placeholder="State" name="state" [(ngModel)]="mediaHouse.address.state" required #stateField="ngModel">\n          <mat-option *ngFor="let state of stateApi.states" [value]="state">{{state}}</mat-option>\n        </mat-select>\n        <mat-error *ngIf="stateField.errors && stateField.errors.required">\n          State is required.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type="text" name="edition" placeholder="Edition" [(ngModel)]="mediaHouse.address.edition" required #editionField="ngModel">\n        <mat-error *ngIf="editionField.errors && editionField.errors.required">\n          Edition is required.\n        </mat-error>\n      </mat-form-field>\n\n      <br><br>\n\n      <div class="row">\n        <div class="col">\n          <h4>Pullouts ({{mediaHouse.pullouts.length}})</h4>\n        </div>\n        <div class="col-auto">\n          <button type="button" (click)="addPullouts()" class="btn btn-outline-info">\n            <mat-icon>add</mat-icon>\n          </button>\n        </div>\n      </div>\n\n      <br>\n\n      <div class="form-row" *ngFor="let item of mediaHouse.pullouts; index as i">\n        <div class="col-auto align-self-center">#{{i + 1}}</div>\n        <div class="col">\n          <mat-form-field>\n            <input matInput type="text" name="s-{{i}}-pullouts" placeholder="Pullout" [(ngModel)]="item.name" required #pulloutsField="ngModel">\n          </mat-form-field>\n        </div>\n        <div class="col-auto align-self-center">\n          <button mat-icon-button color="warn" type="button" (click)="removePullouts(i)">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n\n    </div>\n    <div class="col-md">\n      <br>\n\n      <div class="row">\n        <div class="col">\n          <h4>Scheduling ({{mediaHouse.scheduling.length}})</h4>\n        </div>\n        <div class="col-auto">\n          <button type="button" (click)="addScheduling()" class="btn btn-outline-info">\n            <mat-icon>add</mat-icon>\n          </button>\n        </div>\n      </div>\n      \n      <br><br>\n\n      <div *ngFor="let item of mediaHouse.scheduling; index as i" class="card mb-4">\n        <div class="card-header">\n          <button class="btn btn-outline-danger float-right" type="button" (click)="removeScheduling(i)">\n            <mat-icon>delete</mat-icon>\n          </button>\n          #{{i + 1}}\n        </div>\n        <div class="card-body">\n          <mat-form-field>\n            <input matInput type="text" id="person-{{i}}" name="s-{{i}}-person" placeholder="Person" [(ngModel)]="item.person" required #personField="ngModel">\n            <mat-error *ngIf="personField.errors && personField.errors.required">\n              Person is required.\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput type="text" id="designation-{{i}}" name="s-{{i}}-designation" placeholder="Designation" [(ngModel)]="item.designation" #designationField="ngModel">\n          </mat-form-field>\n\n          <mat-form-field>\n            <span matPrefix>+91 &nbsp;</span>\n            <input matInput type="tel"  pattern="^((\+91)|0|)\d{10}$" id="mobileNo-{{i}}" name="s-{{i}}-mobileNo" placeholder="Mobile Number" [(ngModel)]="item.mobileNo" required #mobileNoField="ngModel">\n            <mat-error *ngIf="mobileNoField.errors && mobileNoField.errors.required">\n              Phone Number is empty or invalid.\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput type="text" id="deskExtension-{{i}}" name="s-{{i}}-deskExtension" placeholder="Desk Extension" [(ngModel)]="item.deskExtension" #deskExtensionField="ngModel">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput type="email" id="email-{{i}}" name="s-{{i}}-email" placeholder="Email" [(ngModel)]="item.email" required #emailField="ngModel" verify-email>\n            <mat-error *ngIf="emailField.errors && emailField.errors.required">\n              Email is required.\n            </mat-error>\n            <mat-error *ngIf="emailField.errors && emailField.errors.email">\n              Invalid Email.\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <button type="submit" class="btn btn-success" [disabled]="!dirForm.form.valid">Save</button>\n  <button class="btn btn-danger" (click)="cancel()">Cancel</button>\n</form>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/media-houses/media-house/media-house.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__media_house_api_service__["a" /* MediaHouseApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_state_api_service__["a" /* StateApiService */],
            __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_6__services_goback_service__["a" /* GobackService */]])
    ], MediaHouseComponent);
    return MediaHouseComponent;
}());

//# sourceMappingURL=media-house.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHouseListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_house_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MediaHouseListComponent = (function () {
    function MediaHouseListComponent(api, dialog, router, goback) {
        var _this = this;
        this.api = api;
        this.dialog = dialog;
        this.router = router;
        this.goback = goback;
        this.mediaHouses = [];
        this.globalMediaHouses = [];
        this.searchFailed = false;
        this.search = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) {
                return _this.api.searchMediaHouses(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([]);
                });
            });
        };
        this.inputFormatter = function (result) {
            _this.router.navigateByUrl('/dir/media_houses/' + result.id);
        };
    }
    MediaHouseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.getMediaHouses().subscribe(function (data) { return _this.mediaHouses = data; });
        this.api.getMediaHouses(true).subscribe(function (data) { return _this.globalMediaHouses = data; });
    };
    MediaHouseListComponent.prototype.deleteMediaHouse = function (mediaHouse) {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure you want to delete this Media House?").subscribe(function (confirm) {
            if (!confirm)
                return;
            _this.api.deleteMediaHouse(mediaHouse).subscribe(function (data) {
                if (data.success) {
                    _this.mediaHouses = _this.mediaHouses.filter(function (c) { return c.id !== mediaHouse.id; });
                }
                else {
                    console.log(data);
                }
            }, function (err) { return console.log(err); });
        });
    };
    MediaHouseListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-media-house-list',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/media-houses/media-house-list/media-house-list.component.html"*/'<button class="fab" (click)="this.goback.gotoComponent(\'dir/media_houses/new\')">\n  <mat-icon>add</mat-icon>\n</button>\n\n<ng-template #rt let-r="result">\n  {{r.orgName}}\n</ng-template>\n\n<div class="form-group">\n  <input id="search" type="text" class="form-control" [class.is-invalid]="searchFailed" [(ngModel)]="query" [ngbTypeahead]="search" placeholder="Search" [resultTemplate]="rt" [inputFormatter]="inputFormatter" />\n</div>\n\n<mat-tab-group>\n  <mat-tab label="Local">\n    <br>\n    <p *ngIf="mediaHouses.length == 0" class="text-muted">\n      No Media Houses\n    </p>\n    \n    <div class="card mb-3" *ngFor="let mediaHouse of mediaHouses">\n      <div class="card-body">\n        <div class="row">\n          <div class="col">\n            <a [routerLink]="[\'/dir/media_houses\', mediaHouse.id]">{{mediaHouse.orgName}}</a>\n          </div>\n          <div class="col-auto">\n            <mat-menu #dirMenu="matMenu">\n              <button mat-menu-item [routerLink]="[\'/dir/media_houses/edit\', mediaHouse.id]">\n                <mat-icon>edit</mat-icon> Edit\n              </button>\n              <button mat-menu-item class="text-danger" (click)="deleteMediaHouse(mediaHouse)">\n                <mat-icon>delete</mat-icon> Delete\n              </button>\n            </mat-menu>\n            \n            <button mat-icon-button [matMenuTriggerFor]="dirMenu">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label="Global">\n    <br>\n    <p *ngIf="globalMediaHouses.length == 0" class="text-muted">\n      No Media Houses\n    </p>\n    \n    <div class="card mb-3" *ngFor="let mediaHouse of globalMediaHouses">\n      <div class="card-body">\n        <div class="row">\n          <div class="col">\n            <a [routerLink]="[\'/dir/media_houses\', mediaHouse.id]">{{mediaHouse.orgName}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/media-houses/media-house-list/media-house-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__media_house_api_service__["a" /* MediaHouseApiService */], __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_10__services_goback_service__["a" /* GobackService */]])
    ], MediaHouseListComponent);
    return MediaHouseListComponent;
}());

//# sourceMappingURL=media-house-list.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHouseDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_house__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_house_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MediaHouseDetailsComponent = (function () {
    function MediaHouseDetailsComponent(api, route, router, goback) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.goback = goback;
        this.mediaHouse = new __WEBPACK_IMPORTED_MODULE_1__media_house__["a" /* MediaHouse */]();
    }
    MediaHouseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.mediaHouse = data.mediaHouse;
        });
    };
    MediaHouseDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-media-house-details',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/directory/media-houses/media-house-details/media-house-details.component.html"*/'<button *ngIf="!mediaHouse.global" class="fab bg-info" [routerLink]="[\'/dir/media_houses/edit\', mediaHouse.id]">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<div class="row">\n  <div class="col-lg">\n    <div class="card mb-3">\n      <div class="card-header">Media House</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Organization Name</div>\n            <div class="col-md-8">{{mediaHouse.orgName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Publisher Name</div>\n            <div class="col-md-8">{{mediaHouse.pubName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Nick Name</div>\n            <div class="col-md-8">{{mediaHouse.nickName}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Media Type</div>\n            <div class="col-md-8">{{mediaHouse.mediaType}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">GSTIN</div>\n            <div class="col-md-8">{{mediaHouse.GSTIN}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">STD No</div>\n            <div class="col-md-8">{{mediaHouse.officeStdNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Office Landline</div>\n            <div class="col-md-8">{{mediaHouse.officeLandLine}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class="card mb-3">\n      <div class="card-header">Address</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          {{mediaHouse.address.address}}\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Pincode</div>\n            <div class="col-md-8">{{mediaHouse.address.pincode}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">City</div>\n            <div class="col-md-8">{{mediaHouse.address.city}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">State</div>\n            <div class="col-md-8">{{mediaHouse.address.state}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Edition</div>\n            <div class="col-md-8">{{mediaHouse.address.edition}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="col-lg">\n    <div class="card mb-3">\n        <div class="card-header">Pullouts</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngFor="let item of mediaHouse.pullouts; index as i">\n            <div class="row">\n              <div class="col-md-4">#{{i}}</div>\n              <div class="col-md-8">{{item.name}}</div>\n            </div>\n          </li>\n        </ul>\n    </div>\n  </div>\n  \n  <div class="col-lg">\n    <div class="card mb-3" *ngFor="let scheduling of mediaHouse.scheduling; index as i">\n      <div class="card-header">Scheduling #{{i + 1}}</div>\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Person</div>\n            <div class="col-md-8">{{scheduling.person}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Designation</div>\n            <div class="col-md-8">{{scheduling.designation}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Desk Extension</div>\n            <div class="col-md-8">{{scheduling.deskExtension}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Mobile</div>\n            <div class="col-md-8">{{scheduling.mobileNo}}</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Email</div>\n            <div class="col-md-8">{{scheduling.email}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/directory/media-houses/media-house-details/media-house-details.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__media_house_api_service__["a" /* MediaHouseApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */]])
    ], MediaHouseDetailsComponent);
    return MediaHouseDetailsComponent;
}());

//# sourceMappingURL=media-house-details.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHouseResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_house_api_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MediaHouseResolver = (function () {
    function MediaHouseResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    MediaHouseResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.api.getMediaHouse(id).take(1).map(function (mediahouse) {
            if (mediahouse) {
                return mediahouse;
            }
            else {
                _this.router.navigateByUrl('/dir/media_houses');
                return null;
            }
        });
    };
    MediaHouseResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__media_house_api_service__["a" /* MediaHouseApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MediaHouseResolver);
    return MediaHouseResolver;
}());

//# sourceMappingURL=media-house-resolver.service.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__co_user_api_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoUsersComponent = (function () {
    function CoUsersComponent(api, dialog, goback) {
        this.api = api;
        this.dialog = dialog;
        this.goback = goback;
        this.coUsers = [];
    }
    CoUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.coUsers.subscribe(function (data) { return _this.coUsers = data; });
        this.api.getUser().subscribe(function (data) {
            if (data.success) {
                _this.admin = data.user.isAdmin;
                _this.myId = data.user._id;
            }
        });
    };
    CoUsersComponent.prototype.delete = function (coUser) {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure want to delete this Co-User?").subscribe(function (confirm) {
            if (!confirm) {
                return;
            }
            _this.api.deleteCoUser(coUser).subscribe(function (data) {
                if (data.success) {
                    _this.coUsers = _this.coUsers.filter(function (h) { return h.id !== coUser.id; });
                }
            });
        });
    };
    CoUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-co-users',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/co-users/co-users.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Co-Users</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <button class="fab" *ngIf="admin" (click)="this.goback.gotoComponent(\'coUsers/new\')">\n    <mat-icon>add</mat-icon>\n  </button>\n\n  <div>\n    <small class="text-muted">{{coUsers.length}} USERS</small>\n  </div>\n\n  <br>\n\n  <div *ngFor="let coUser of coUsers" class="card mb-4">\n    <div class="card-header">\n      <div class="row">\n        <div class="col">{{coUser.name}}</div>\n        <div class="col-auto" *ngIf="coUser.isAdmin">\n          <small class="text-muted">ADMIN</small>\n        </div>\n        <div class="col-auto" *ngIf="myId == coUser.id">\n          <small class="text-muted">SELF</small>\n        </div>\n      </div>\n    </div>\n    <div class="card-body">\n      <div class="row">\n        <div class="col-md">\n          <h6>{{coUser.designation}}</h6>\n          <mat-icon class="mr-3">mail</mat-icon> {{ coUser.email }}\n          <br>\n          <mat-icon class="mr-3">phone</mat-icon> {{ coUser.phone }}\n          <br><br>\n        </div>\n        <div *ngIf="admin && myId != coUser.id && !coUser.isAdmin" class="col-md-auto">\n          <div>\n            <a class="btn btn-outline-primary" [routerLink]="[\'/coUsers\', coUser.id]">\n              <mat-icon>edit</mat-icon> Edit Roles\n            </a>\n            <button class="btn btn-outline-danger" (click)="delete(coUser)">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/co-users/co-users.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__co_user_api_service__["a" /* CoUserApiService */], __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], CoUsersComponent);
    return CoUsersComponent;
}());

//# sourceMappingURL=co-users.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_roles__ = __webpack_require__(134);

var CoUser = (function () {
    function CoUser() {
        this.roles = new __WEBPACK_IMPORTED_MODULE_0__user_roles__["a" /* UserRoles */]();
    }
    return CoUser;
}());

//# sourceMappingURL=co-user.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__co_user__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__co_user_api_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoUserComponent = (function () {
    function CoUserComponent(api, router, notifications, goback) {
        this.api = api;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
        this.coUser = new __WEBPACK_IMPORTED_MODULE_1__co_user__["a" /* CoUser */]();
    }
    CoUserComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    CoUserComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/coUsers');
    };
    CoUserComponent.prototype.submit = function () {
        var _this = this;
        this.api.createCoUser(this.coUser).subscribe(function (data) {
            if (data.success) {
                _this.coUser.id = data.msg;
                if (!_this.coUser.isAdmin) {
                    _this.api.setRoles(_this.coUser.id, _this.coUser.roles).subscribe(function (d) {
                        if (d.success) {
                            _this.navigateBack();
                        }
                        else {
                            console.log(d);
                            _this.notifications.show(d.msg);
                        }
                    }, function (err) {
                        console.log(err);
                        _this.notifications.show('Connection failed');
                    });
                }
                else
                    _this.navigateBack();
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    CoUserComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    CoUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-co-user',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/co-user/co-user.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Add New Co-Users</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #newCoUserForm="ngForm">\n    <mat-form-field>\n      <input matInput type="text" name="name" placeholder="Name" [(ngModel)]="coUser.name" required #nameField="ngModel">\n      <mat-error *ngIf="nameField.errors && nameField.errors.required">\n        Name is required.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="text" name="designation" placeholder="Designation" [(ngModel)]="coUser.designation" #designationField="ngModel">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type="email" name="email" placeholder="Email" [(ngModel)]="coUser.email" required #emailField="ngModel" verify-email>\n      <mat-error *ngIf="emailField.errors && emailField.errors.required">\n        Email is required.\n      </mat-error>\n      <mat-error *ngIf="emailField.errors && emailField.errors.email">\n        Invalid Email.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <span matPrefix>+91 &nbsp;</span>\n      <input matInput type="tel" pattern="^\d{10}$" maxlength="10" minlength="10" name="phone" placeholder="Phone Number" [(ngModel)]="coUser.phone" required #phoneField="ngModel">\n      <mat-error *ngIf="phoneField.errors && phoneField.errors.required">\n        Phone Number is empty or invalid.\n      </mat-error>\n    </mat-form-field>\n\n    <br><br>\n    <h4>Roles</h4>\n    <br>\n\n    <mat-checkbox class="my-2" name="isAdmin" [(ngModel)]="coUser.isAdmin" #isAdminField="ngModel">Is Admin</mat-checkbox>\n\n    <br>      \n\n    <app-role-control *ngIf="!coUser.isAdmin" [(roles)]="coUser.roles"></app-role-control>\n\n    <br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!newCoUserForm.form.valid">Add</button>\n    <button type="button" class="btn btn-danger" (click)="onCancel()">Cancel</button>\n  </form>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/co-user/co-user.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__co_user_api_service__["a" /* CoUserApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_5__services_goback_service__["a" /* GobackService */]])
    ], CoUserComponent);
    return CoUserComponent;
}());

//# sourceMappingURL=co-user.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_roles__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__co_user_api_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoleEditComponent = (function () {
    function RoleEditComponent(api, route, router, notifications, goback) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.notifications = notifications;
        this.goback = goback;
        this.roles = new __WEBPACK_IMPORTED_MODULE_1__user_roles__["a" /* UserRoles */]();
    }
    RoleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.api.getRoles(_this.id).subscribe(function (data) { return _this.roles = data; });
        });
    };
    RoleEditComponent.prototype.navigateBack = function () {
        this.router.navigateByUrl('/coUsers');
    };
    RoleEditComponent.prototype.submit = function () {
        var _this = this;
        this.api.setRoles(this.id, this.roles).subscribe(function (data) {
            if (data.success) {
                _this.navigateBack();
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    RoleEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], RoleEditComponent.prototype, "roles", void 0);
    RoleEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-role-edit',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/role-edit/role-edit.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Edit Co-User Roles</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <app-role-control [(roles)]="roles"></app-role-control>\n\n  <br>\n\n  <button type="submit" class="btn btn-success" (click)="submit()">Update</button>\n  <button type="button" class="btn btn-danger" (click)="onCancel()">Cancel</button>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/role-edit/role-edit.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__co_user_api_service__["a" /* CoUserApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_goback_service__["a" /* GobackService */]])
    ], RoleEditComponent);
    return RoleEditComponent;
}());

//# sourceMappingURL=role-edit.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_card_routing_module__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directory_directory_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rate_card_api_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rate_card_resolver_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rate_card_rate_card_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rate_card_list_rate_card_list_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rate_card_details_rate_card_details_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicModule */].forRoot(RateCardModule_1),
                __WEBPACK_IMPORTED_MODULE_3__directory_directory_module__["a" /* DirectoryModule */],
                __WEBPACK_IMPORTED_MODULE_2__rate_card_routing_module__["a" /* RateCardRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__rate_card_rate_card_component__["a" /* RateCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rate_card_list_rate_card_list_component__["a" /* RateCardListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__rate_card_details_rate_card_details_component__["a" /* RateCardDetailsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__rate_card_api_service__["a" /* RateCardApiService */],
                __WEBPACK_IMPORTED_MODULE_5__rate_card_resolver_service__["a" /* RateCardResolver */]
            ]
        })
    ], RateCardModule);
    return RateCardModule;
    var RateCardModule_1;
}());

//# sourceMappingURL=rate-card.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rate_card_api_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RateCardListComponent = (function () {
    function RateCardListComponent(api, dialog, router, goback) {
        var _this = this;
        this.api = api;
        this.dialog = dialog;
        this.router = router;
        this.goback = goback;
        this.ratecards = [];
        this.globalRateCards = [];
        this.searchFailed = false;
        this.search = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) {
                return _this.api.searchRateCards(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([]);
                });
            });
        };
        this.inputFormatter = function (result) {
            _this.router.navigateByUrl('/ratecards/' + result.id);
        };
    }
    RateCardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.getRateCards().subscribe(function (data) { return _this.ratecards = data; });
        this.api.getRateCards(true).subscribe(function (data) { return _this.globalRateCards = data; });
    };
    RateCardListComponent.prototype.deleteRateCard = function (ratecard) {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure you want to delete this Rate Card?").subscribe(function (confirm) {
            if (!confirm)
                return;
            _this.api.deleteRateCard(ratecard).subscribe(function (data) {
                if (data.success) {
                    _this.ratecards = _this.ratecards.filter(function (c) { return c.id !== ratecard.id; });
                }
                else {
                    console.log(data);
                }
            }, function (err) { return console.log(err); });
        });
    };
    RateCardListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rate-card-list',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/rate-card/rate-card-list/rate-card-list.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Rate Cards</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<ng-template #rt let-r="result">\n  {{r.mediaHouseName}}\n  <br>\n  {{r.pullOutName}}<br>\n  {{r.mediaType}} - {{r.adType}} - {{r.rateCardType}}<br>\n  {{r.freqPeriod}} - {{r.freqRemark}}\n</ng-template>\n\n<div class="container">\n  <button class="fab" (click)="this.goback.gotoComponent(\'ratecards/new\')">\n    <mat-icon>add</mat-icon>\n  </button>\n\n  <div class="form-group">\n    <input id="search" type="text" class="form-control" [class.is-invalid]="searchFailed" [(ngModel)]="query" [ngbTypeahead]="search" placeholder="Search" [resultTemplate]="rt" [inputFormatter]="inputFormatter" />\n  </div>\n\n  <mat-tab-group>\n    <mat-tab label="Local">\n      <br>\n      <p *ngIf="ratecards.length == 0" class="text-muted">\n        No Rate Cards\n      </p>\n    \n      <div class="card mb-3" *ngFor="let ratecard of ratecards">\n        <div class="card-header"><a [routerLink]="[\'/ratecards\', ratecard.id]">{{ratecard.mediaHouseName}}</a></div>\n        <div class="card-body">\n          <div class="row">\n            <div class="col">\n              {{ratecard.pullOutName}}<br>\n              {{ratecard.mediaType}} - {{ratecard.adType}} - {{ratecard.rateCardType}}<br>\n              {{ratecard.freqPeriod}} - {{ratecard.freqRemark}}\n            </div>\n            <div class="col-auto">\n              <mat-menu #rateCardMenu="matMenu">\n                <button mat-menu-item [routerLink]="[\'/ratecards/new\', ratecard.id]">\n                  <mat-icon>add</mat-icon> Copy into New\n                </button>\n                <button mat-menu-item [routerLink]="[\'/releaseorders/fromRateCard\', ratecard.id]">\n                  <mat-icon>add</mat-icon> Create Release Order\n                </button>\n                <button mat-menu-item [routerLink]="[\'/ratecards/edit\', ratecard.id]">\n                  <mat-icon>edit</mat-icon> Edit\n                </button>\n                <button mat-menu-item class="text-danger" (click)="deleteRateCard(ratecard)">\n                  <mat-icon>delete</mat-icon> Delete\n                </button>\n              </mat-menu>\n              \n              <button mat-icon-button [matMenuTriggerFor]="rateCardMenu">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label="Global">\n      <br>\n      <p *ngIf="globalRateCards.length == 0" class="text-muted">\n        No Rate Cards\n      </p>\n    \n      <div class="card mb-3" *ngFor="let ratecard of globalRateCards">\n        <div class="card-header"><a [routerLink]="[\'/ratecards\', ratecard.id]">{{ratecard.mediaHouseName}}</a></div>\n        <div class="card-body">\n          <div class="row">\n            <div class="col">\n              {{ratecard.pullOutName}}<br>\n              {{ratecard.mediaType}} - {{ratecard.adType}} - {{ratecard.rateCardType}}<br>\n              {{ratecard.freqPeriod}} - {{ratecard.freqRemark}}\n            </div>\n            <div class="col-auto">\n              <mat-menu #rateCardMenu="matMenu">\n                <button mat-menu-item [routerLink]="[\'/ratecards/new\', ratecard.id]">\n                  <mat-icon>add</mat-icon> Copy into New\n                </button>\n                <button mat-menu-item [routerLink]="[\'/releaseorders/fromRateCard\', ratecard.id]">\n                  <mat-icon>add</mat-icon> Create Release Order\n                </button>\n              </mat-menu>\n              \n              <button mat-icon-button [matMenuTriggerFor]="rateCardMenu">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/rate-card/rate-card-list/rate-card-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rate_card_api_service__["a" /* RateCardApiService */], __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_10__services_goback_service__["a" /* GobackService */]])
    ], RateCardListComponent);
    return RateCardListComponent;
}());

//# sourceMappingURL=rate-card-list.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rate_card__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_card_api_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directory_media_houses_media_house_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directory_media_houses_media_house__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RateCardComponent = (function () {
    function RateCardComponent(api, route, router, mediaHouseApi, notifications, goback) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.router = router;
        this.mediaHouseApi = mediaHouseApi;
        this.notifications = notifications;
        this.goback = goback;
        this.edit = false;
        this.others = "Others";
        this.customPullOutName = 'Main';
        this.rateCard = new __WEBPACK_IMPORTED_MODULE_1__rate_card__["d" /* RateCard */]();
        this.selectedCategories = [null, null, null, null, null, null];
        this.searchCategories = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["map"])(function (term) { return _this.findCategories(term); }))
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])([]); });
        };
        this.searchMediaHouse = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) { return _this.mediaHouseApi.searchMediaHouses(term); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])([]); });
        };
        this.pullouts = [];
        this.mediaHouseInputFormatter = function (result) {
            _this.rateCard.bookingEdition = result.address.edition;
            if (result.pullouts) {
                _this.pullouts = result.pullouts;
            }
            return result.orgName;
        };
        this.mediaHouseResultFormatter = function (result) { return result.orgName + " - " + result.address.edition; };
        this.categoryInputFormatter = function (result) {
            var stack = [];
            while (result) {
                stack.push(result);
                result = result.parent;
            }
            var i = 0;
            while (stack.length) {
                _this.setCategory(i, stack.pop());
                ++i;
            }
        };
        this.categoryResultFormatter = function (result) {
            var stack = [];
            while (result) {
                stack.push(result);
                result = result.parent;
            }
            var formatted = stack.pop().name;
            while (stack.length) {
                formatted += " > " + stack.pop().name;
            }
            return formatted;
        };
        this.mediaTypes = ['Print', 'Air', 'Electronic'];
        this.hues = ['Black & White', 'Colored'];
        this.rateCardTypes = ['Local', 'Regional', 'Corporate'];
        this.categories = [
            new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Property'),
            new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Education'),
            new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Medical', [
                new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Surgery', [
                    new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('C', [
                        new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Heart Surgery', [
                            new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Transplant', [
                                new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Deepest')
                            ])
                        ])
                    ]),
                    new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('R', [
                        new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('S', [
                            new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Deepest')
                        ])
                    ])
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Women'),
            new __WEBPACK_IMPORTED_MODULE_1__rate_card__["a" /* Category */]('Real Estate')
        ];
    }
    Object.defineProperty(RateCardComponent.prototype, "isTypeWords", {
        get: function () {
            if (this.mediaType == 'Print' && this.rateCard.adType == 'Text Classified') {
                return true;
            }
            if (this.mediaType == 'Electronic' && this.rateCard.adType == 'Scroll') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "isTypeLen", {
        get: function () {
            if (this.mediaType == 'Print' && this.rateCard.adType != 'Text Classified') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "isTypeTime", {
        get: function () {
            if (this.mediaType == 'Air') {
                return true;
            }
            if (this.mediaType == 'Electronic' && this.rateCard.adType != 'Scroll') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    RateCardComponent.prototype.initNew = function () {
        this.mediaType = this.mediaTypes[0];
        this.rateCard.rateCardType = this.rateCardTypes[0];
        this.rateCard.unit = this.units[0];
        this.rateCard.position = this.positions[0];
        this.rateCard.hue = this.hues[0];
        this.rateCard.adTime = this.adTimes[0];
        this.dropdownPullOutName = this.others;
    };
    RateCardComponent.prototype.initEdit = function (data) {
        if (data) {
            this.rateCard = data;
            var dirMediaHouse = new __WEBPACK_IMPORTED_MODULE_11__directory_media_houses_media_house__["a" /* MediaHouse */]();
            dirMediaHouse.orgName = this.rateCard.mediaHouseName;
            dirMediaHouse.address.edition = this.rateCard.bookingEdition;
            this.mediaHouse = dirMediaHouse;
            this.dropdownPullOutName = this.others;
            this.customPullOutName = this.rateCard.pullOutName;
            this.buildCategoryTree();
        }
    };
    RateCardComponent.prototype.buildCategoryTree = function () {
        var _this = this;
        var c = this.categories.find(function (p) { return p.name == _this.rateCard.categories[0]; });
        if (c) {
            this.category1 = c;
            var i_1 = 1;
            while (i_1 < this.rateCard.categories.length && c.subcategories.length > 0) {
                c = c.subcategories.find(function (p) { return p.name == _this.rateCard.categories[i_1]; });
                if (c) {
                    this.setCategory(i_1, c);
                    ++i_1;
                }
                else
                    break;
            }
        }
    };
    RateCardComponent.prototype.findSubCategories = function (category, query) {
        var _this = this;
        var result = [];
        if (category.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
            result.push(category);
        }
        if (category.subcategories) {
            category.subcategories.forEach(function (subCategory) {
                _this.findSubCategories(subCategory, query).forEach(function (a) { return result.push(a); });
            });
        }
        return result;
    };
    RateCardComponent.prototype.findCategories = function (query) {
        var _this = this;
        var result = [];
        if (query) {
            this.categories.forEach(function (element) {
                _this.findSubCategories(element, query).forEach(function (a) { return result.push(a); });
            });
        }
        return result;
    };
    RateCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.paramMap.subscribe(function (params) {
            if (params.has('id')) {
                _this.id = params.get('id');
                _this.edit = true;
                _this.route.data.subscribe(function (data) {
                    _this.initEdit(data.rateCard);
                });
            }
            else if (params.has('copy')) {
                _this.route.data.subscribe(function (data) {
                    _this.initEdit(data.rateCard);
                });
            }
            else
                _this.initNew();
        });
    };
    RateCardComponent.prototype.goBack = function () {
        this.router.navigateByUrl(this.edit ? '/ratecards/' + this.id : '/ratecards');
    };
    Object.defineProperty(RateCardComponent.prototype, "mediaType", {
        get: function () {
            return this.rateCard.mediaType;
        },
        set: function (mediaType) {
            this.rateCard.mediaType = mediaType;
            this.rateCard.adType = this.adTypes[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "adTypes", {
        get: function () {
            switch (this.rateCard.mediaType) {
                case 'Print':
                    return ['Text Classified', 'Display', 'Display Classified'];
                case 'Air':
                    return ['RJ Mentions', 'Radio Commercials', 'Sponsorship Tags', 'Road Block'];
                case 'Electronic':
                    return ['VJ Mentions', 'Banner', 'Scroll', 'Commercials'];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "units", {
        get: function () {
            var result = [];
            if (this.isTypeLen) {
                result.push('Sqcm');
            }
            if (this.isTypeWords) {
                result.push('Words');
            }
            if (this.isTypeTime) {
                result.push('sec');
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "positions", {
        get: function () {
            var result = ['Classified', 'Back Page', 'Jacket', 'Prime Time'];
            for (var i = 1; i <= 8; ++i) {
                result.push('Page ' + i);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    RateCardComponent.prototype.getCategory = function (index) {
        return this.selectedCategories[index];
    };
    RateCardComponent.prototype.setCategory = function (index, category) {
        if (this.selectedCategories[index] == category) {
            return;
        }
        this.selectedCategories[index] = category;
        for (var i = index + 1; i < this.selectedCategories.length; ++i) {
            this.setCategory(i, null);
        }
    };
    Object.defineProperty(RateCardComponent.prototype, "category1", {
        get: function () { return this.getCategory(0); },
        set: function (category) { this.setCategory(0, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "category2", {
        get: function () { return this.getCategory(1); },
        set: function (category) { this.setCategory(1, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "category3", {
        get: function () { return this.getCategory(2); },
        set: function (category) { this.setCategory(2, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "category4", {
        get: function () { return this.getCategory(3); },
        set: function (category) { this.setCategory(3, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "category5", {
        get: function () { return this.getCategory(4); },
        set: function (category) { this.setCategory(4, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardComponent.prototype, "category6", {
        get: function () { return this.getCategory(5); },
        set: function (category) { this.setCategory(5, category); },
        enumerable: true,
        configurable: true
    });
    RateCardComponent.prototype.addFixSize = function () {
        this.rateCard.fixSizes.push(new __WEBPACK_IMPORTED_MODULE_1__rate_card__["c" /* FixSize */]());
    };
    RateCardComponent.prototype.removeFixSize = function (i) {
        this.rateCard.fixSizes.splice(i, 1);
    };
    Object.defineProperty(RateCardComponent.prototype, "adTimes", {
        get: function () {
            return ['Any Time', 'Prime Time ', 'Evening', 'Morning'];
        },
        enumerable: true,
        configurable: true
    });
    RateCardComponent.prototype.addScheme = function () {
        this.rateCard.schemes.push(new __WEBPACK_IMPORTED_MODULE_1__rate_card__["f" /* Scheme */]());
    };
    RateCardComponent.prototype.removeScheme = function (i) {
        this.rateCard.schemes.splice(i, 1);
    };
    RateCardComponent.prototype.addCovered = function () {
        this.rateCard.covered.push(new __WEBPACK_IMPORTED_MODULE_1__rate_card__["b" /* Covered */]());
    };
    RateCardComponent.prototype.removeCovered = function (i) {
        this.rateCard.covered.splice(i, 1);
    };
    RateCardComponent.prototype.addRemark = function () {
        this.rateCard.remarks.push(new __WEBPACK_IMPORTED_MODULE_1__rate_card__["e" /* Remark */]());
    };
    RateCardComponent.prototype.removeRemark = function (i) {
        this.rateCard.remarks.splice(i, 1);
    };
    RateCardComponent.prototype.addTax = function () {
        this.rateCard.taxes.push(new __WEBPACK_IMPORTED_MODULE_1__rate_card__["g" /* Tax */]());
    };
    RateCardComponent.prototype.removeTax = function (i) {
        this.rateCard.taxes.splice(i, 1);
    };
    RateCardComponent.prototype.createRateCard = function () {
        var _this = this;
        this.api.createRateCard(this.rateCard).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    RateCardComponent.prototype.editRateCard = function () {
        var _this = this;
        this.api.editRateCard(this.rateCard).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    RateCardComponent.prototype.submit = function () {
        var _this = this;
        this.rateCard.categories = [];
        this.rateCard.mediaHouseName = this.mediaHouse.orgName ? this.mediaHouse.orgName : this.mediaHouse;
        this.selectedCategories.forEach(function (element) {
            if (element) {
                _this.rateCard.categories.push(element.name);
            }
        });
        this.rateCard.pullOutName = this.dropdownPullOutName == this.others ? this.customPullOutName : this.dropdownPullOutName;
        if (this.edit) {
            this.editRateCard();
        }
        else
            this.createRateCard();
    };
    RateCardComponent.prototype.cancel = function () {
        this.goBack();
    };
    RateCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rate-card',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/rate-card/rate-card/rate-card.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container" *ngIf="!edit">Create Rate Card</div>\n    <div class="container" *ngIf="edit">Edit Rate Card</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <form (ngSubmit)="submit()" #rateCardForm="ngForm">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Booking Center</mat-panel-title>\n          <mat-panel-description>Enter Booking Center</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-group">\n          <label>Media House Name</label>\n          <input type="text" class="form-control" [ngbTypeahead]="searchMediaHouse" id="mediaHouseName" placeholder="Enter Media House Name" [(ngModel)]="mediaHouse" name="mediaHouseName" required #mediaHouseNameField="ngModel" [resultFormatter]="mediaHouseResultFormatter" [inputFormatter]="mediaHouseInputFormatter">\n        </div>\n  \n        <div *ngIf="mediaHouseNameField.invalid && (mediaHouseNameField.dirty || mediaHouseNameField.touched)" class="text-danger">\n          <div *ngIf="mediaHouseNameField.errors.required">\n            Media House Name is required.\n          </div>\n          <br>\n        </div>\n\n        <div class="form-group">\n          <label>Edition</label>\n          <input type="text" class="form-control" id="bookingEdition" placeholder="Enter Edition" [(ngModel)]="rateCard.bookingEdition" name="bookingEdition" required #bookingEditionField="ngModel">\n        </div>\n  \n        <div *ngIf="bookingEditionField.invalid && (bookingEditionField.dirty || bookingEditionField.touched)" class="text-danger">\n          <div *ngIf="bookingEditionField.errors.required">\n            Booking Edition is required.\n          </div>\n          <br>\n        </div>\n\n        <label>Pullout Name</label>\n\n        <div class="form-row">\n          <div class="col">\n            <div class="form-group">\n              <select class="form-control" name="pullOutName" [(ngModel)]="dropdownPullOutName" id="pullOutName" #pullOutNameField="ngModel" required>\n                  <option *ngFor="let item of pullouts" [ngValue]="item.name">{{item.name}}</option>\n                <option>{{others}}</option>\n              </select>\n            </div>\n      \n            <div *ngIf="pullOutNameField.invalid && (pullOutNameField.dirty || pullOutNameField.touched)" class="text-danger">\n              <div *ngIf="pullOutNameField.errors.required">\n                Pullout Name is required.\n              </div>\n              <br>\n            </div>\n          </div>\n          <div class="col" *ngIf="dropdownPullOutName == others">\n            <div class="form-group">\n              <input type="text" class="form-control" id="specPullOutName" placeholder="Enter Pullout Name" [(ngModel)]="customPullOutName" required name="specPullOutName" #specPullOutNameField="ngModel">\n            </div>\n      \n            <div *ngIf="specPullOutNameField.invalid && (specPullOutNameField.dirty || specPullOutNameField.touched)" class="text-danger">\n              <div *ngIf="specPullOutNameField.errors.required">\n                Pullout Name is required.\n              </div>\n              <br>\n            </div>\n          </div>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Type and Categories</mat-panel-title>\n          <mat-panel-description>Enter Type and Categories</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-row">    \n          <div class="col-md">\n            <div class="form-group">\n              <label>Media Type</label>\n              <select class="form-control" name="mediaType" [(ngModel)]="mediaType" id="mediaType" #mediaTypeField="ngModel" required>\n                <option *ngFor="let item of mediaTypes" [value]="item">{{item}}</option>\n              </select>\n            </div>\n          </div>\n          <div class="col-md">\n            <div class="form-group">\n              <label>Ad Type</label>\n              <select class="form-control" name="adType" [(ngModel)]="rateCard.adType" id="adType" #adTypeField="ngModel" required>\n                <option *ngFor="let item of adTypes" [value]="item">{{item}}</option>\n              </select>\n            </div>\n          </div>\n          <!-- Will be used in future -->\n          <div class="col-md" *ngIf="false">\n            <div class="form-group">\n              <label>Rate Card Type</label>\n              <select class="form-control" name="rateCardType" [(ngModel)]="rateCard.rateCardType" id="rateCardType" #rateCardTypeField="ngModel" required>\n                <option *ngFor="let item of rateCardTypes" [value]="item">{{item}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <br>\n\n        <h4>Categories</h4>\n        <br>\n\n        <div class="input-group">\n          <div class="input-group-prepend">\n            <span class="input-group-text">\n              <mat-icon>search</mat-icon>\n            </span>\n          </div>\n          <input id="search" name="search" type="text" class="form-control" [(ngModel)]="query" [ngbTypeahead]="searchCategories" placeholder="Search Categories" [resultFormatter]="categoryResultFormatter" [inputFormatter]="categoryInputFormatter" />\n        </div>\n\n        <br>\n\n        <div class="form-row">\n          <div class="form-group col">\n            <select class="form-control" name="category1" [(ngModel)]="category1" id="category1" required #category1Field="ngModel">\n              <option *ngFor="let item of categories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n\n          <div class="w-100 d-block d-sm-none"></div>\n\n          <div class="form-group col" *ngIf="category1 && category1.subcategories.length">\n            <select class="form-control" name="category2" [(ngModel)]="category2" id="category2">\n              <option *ngFor="let item of category1.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n\n          <div class="w-100 d-block d-md-none"></div>\n\n          <div class="form-group col" *ngIf="category2 && category2.subcategories.length">\n            <select class="form-control" name="category3" [(ngModel)]="category3" id="category3">\n              <option *ngFor="let item of category2.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n\n          <div class="w-100 d-block d-sm-none d-md-block d-xl-none"></div>\n\n          <div class="form-group col" *ngIf="category3 && category3.subcategories.length">\n            <select class="form-control" name="category4" [(ngModel)]="category4" id="category4">\n              <option *ngFor="let item of category3.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n\n          <div class="w-100 d-block d-md-none"></div>\n\n          <div class="form-group col" *ngIf="category4 && category4.subcategories.length">\n            <select class="form-control" name="category5" [(ngModel)]="category5" id="category5">\n              <option *ngFor="let item of category4.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n\n          <div class="w-100 d-block d-sm-none"></div>\n\n          <div class="form-group col" *ngIf="category5 && category5.subcategories.length">\n            <select class="form-control" name="category6" [(ngModel)]="category6" id="category6">\n              <option *ngFor="let item of category5.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n          \n        </div>\n\n        <div *ngIf="category1Field.invalid && (category1Field.dirty || category1Field.touched)" class="text-danger">\n          <div *ngIf="category1Field.errors.required">\n            Category is required.\n          </div>\n          <br>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Ad Details</mat-panel-title>\n          <mat-panel-description>Enter Ad Details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <label>Rate</label>\n        <div class="form-row">\n          <div class="col">\n            <div class="form-group">\n              <input type="number" class="form-control" id="rate" placeholder="Enter Rate" [(ngModel)]="rateCard.rate" name="rate" required #rateField="ngModel">\n            </div>\n      \n            <div *ngIf="rateField.invalid && (rateField.dirty || rateField.touched)" class="text-danger">\n              <div *ngIf="rateField.errors.required">\n                Rate is empty or invalid.\n              </div>\n              <br>\n            </div>\n          </div>\n          <div class="col">\n            <div class="form-group">\n              <select class="form-control" name="unit" [(ngModel)]="rateCard.unit" id="unit" #unitField="ngModel" required>\n                <option *ngFor="let item of units" [value]="item">{{item}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        \n        <div *ngIf="isTypeTime">\n          <div class="form-group">\n            <label>Ad Time</label>\n            <div class="form-group">\n              <select class="form-control" name="adTime" [(ngModel)]="rateCard.adTime" id="adTime" #adTimeField="ngModel" required>\n                <option *ngFor="let item of adTimes" [value]="item">{{item}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf="isTypeWords">\n          <div class="form-group">\n            <div class="form-group">\n              <label>Maximum Words</label>\n              <input type="number" class="form-control" id="maxWords" placeholder="Enter Maximum Words" [(ngModel)]="rateCard.AdWordsMax" name="maxWords" required #maxWordsField="ngModel">\n            </div>\n    \n            <div *ngIf="maxWordsField.invalid && (maxWordsField.dirty || maxWordsField.touched)" class="text-danger">\n              <div *ngIf="maxWordsField.errors.required">\n                  Maximum Words is required.\n              </div>\n              <br>\n            </div>              \n          </div>\n        </div>\n\n        <div *ngIf="isTypeLen">\n          <div class="form-group">\n            <label>Position</label>\n            <select class="form-control" name="position" [(ngModel)]="rateCard.position" id="position" #positionField="ngModel" required>\n              <option *ngFor="let item of positions" [value]="item">{{item}}</option>\n            </select>\n          </div>\n  \n          <div *ngIf="positionField.invalid && (positionField.dirty || positionField.touched)" class="text-danger">\n            <div *ngIf="positionField.errors.required">\n              Position is required.\n            </div>\n            <br>\n          </div>\n\n          <div class="form-group">\n            <label>Hue</label>\n            <select class="form-control" name="hue" [(ngModel)]="rateCard.hue" id="hue" #hueField="ngModel" required>\n              <option *ngFor="let hue of hues" [value]="hue">{{hue}}</option>\n            </select>\n          </div>\n  \n          <div *ngIf="hueField.invalid && (hueField.dirty || hueField.touched)" class="text-danger">\n            <div *ngIf="hueField.errors.required">\n              Hue is required.\n            </div>\n            <br>\n          </div>\n\n          <label>Minimum Size Limit</label>\n          <div class="form-row">\n            <div class="col">\n              <div class="form-group">\n                <input type="number" class="form-control" id="minLength" placeholder="Enter Minimum Length" [(ngModel)]="rateCard.minLength" name="minLength" required #minLengthField="ngModel">\n              </div>\n      \n              <div *ngIf="minLengthField.invalid && (minLengthField.dirty || minLengthField.touched)" class="text-danger">\n                <div *ngIf="minLengthField.errors.required">\n                  Minimum Length is required.\n                </div>\n                <br>\n              </div>\n      \n            </div>\n            <div class="col-auto form-text">&times;</div>\n            <div class="col">\n              <div class="form-group">\n                <input type="number" class="form-control" id="minWidth" placeholder="Enter Minimum Width" [(ngModel)]="rateCard.minWidth" name="minWidth" required #minWidthField="ngModel">\n              </div>\n      \n              <div *ngIf="minWidthField.invalid && (minWidthField.dirty || minWidthField.touched)" class="text-danger">\n                <div *ngIf="minWidthField.errors.required">\n                  Minimum Width is required.\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n          \n          <label>Maximum Size Limit</label>\n          <div class="form-row">\n            <div class="col">\n              <div class="form-group">\n                <input type="number" class="form-control" id="maxLength" placeholder="Enter Maximum Length" [(ngModel)]="rateCard.maxLength" name="maxLength" required #maxLengthField="ngModel">\n              </div>\n      \n              <div *ngIf="maxLengthField.invalid && (maxLengthField.dirty || maxLengthField.touched)" class="text-danger">\n                <div *ngIf="maxLengthField.errors.required">\n                  Maximum Length is required.\n                </div>\n                <br>\n              </div>\n      \n            </div>\n            <div class="col-auto form-text">&times;</div>\n            <div class="col">\n              <div class="form-group">\n                <input type="number" class="form-control" id="maxWidth" placeholder="Enter Maximum Width" [(ngModel)]="rateCard.maxWidth" name="maxWidth" required #maxWidthField="ngModel">\n              </div>\n      \n              <div *ngIf="maxWidthField.invalid && (maxWidthField.dirty || maxWidthField.touched)" class="text-danger">\n                <div *ngIf="maxWidthField.errors.required">\n                  Maximum Width is required.\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <label>Validity</label>\n        <div class="form-row">\n          <div class="col-sm">\n            <div class="form-group">        \n              <input type="date" class="form-control" id="validFrom" [(ngModel)]="rateCard.validFrom" name="validFrom" #validFromField="ngModel">\n            </div>\n          </div>\n          <label class="col-auto col-form-label">to</label>\n          <div class="col-sm">\n            <div class="form-group">\n              <input type="date" class="form-control" id="validTill" [(ngModel)]="rateCard.validTill" name="validTill" #validTillField="ngModel">\n            </div>\n          </div>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel *ngIf="isTypeLen">\n        <mat-expansion-panel-header>\n          <mat-panel-title>Fix Sizes</mat-panel-title>\n          <mat-panel-description>Enter Fix Sizes</mat-panel-description>\n        </mat-expansion-panel-header>\n      \n        <div class="text-muted" *ngIf="rateCard.fixSizes.length == 0">\n          No Fix Sizes\n        </div>\n\n        <div *ngFor="let item of rateCard.fixSizes; index as i" class="mb-1">\n          <div class="form-row">\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Length" name="length-{{i}}" [(ngModel)]="item.length" required #lengthField="ngModel">\n                <mat-error *ngIf="lengthField.errors && lengthField.errors.required">\n                  Length is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Width" name="width-{{i}}" [(ngModel)]="item.width" required #widthField="ngModel">\n                <mat-error *ngIf="widthField.errors && widthField.errors.required">\n                  Width is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Amount" name="amount-{{i}}" [(ngModel)]="item.amount" required #amountField="ngModel">\n                <mat-error *ngIf="amountField.errors && amountField.errors.required">\n                  Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col-auto col-form-label">\n              <button mat-icon-button color="warn" type="button" (click)="removeFixSize(i)">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addFixSize()">Add More</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Schemes</mat-panel-title>\n          <mat-panel-description>Enter Schemes</mat-panel-description>\n        </mat-expansion-panel-header>\n      \n        <div class="text-muted" *ngIf="rateCard.schemes.length == 0">\n          No Schemes\n        </div>\n\n        <div *ngFor="let item of rateCard.schemes; index as i" class="mb-1">\n          <div class="form-row">\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Paid" name="paid-{{i}}" [(ngModel)]="item.paid" required #paidField="ngModel">\n                <mat-error *ngIf="paidField.errors && paidField.errors.required">\n                  Paid is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Free" name="free-{{i}}" [(ngModel)]="item.Free" required #freeField="ngModel">\n                <mat-error *ngIf="freeField.errors && freeField.errors.required">\n                  Free is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Time Limit" name="timeLimit-{{i}}" [(ngModel)]="item.timeLimit" required #timeLimitField="ngModel">\n                <mat-error *ngIf="timeLimitField.errors && timeLimitField.errors.required">\n                  Time Limit is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col-auto col-form-label">\n              <button mat-icon-button color="warn" type="button" (click)="removeScheme(i)">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addScheme()">Add More</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Premiums</mat-panel-title>\n          <mat-panel-description>Enter Premiums</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <ng-container *ngIf="isTypeWords">\n          <p class="text-muted">Enter Amounts for the following Premiums</p>\n\n          <mat-form-field>\n            <input type="number" matInput placeholder="Box" name="premiumBox" [(ngModel)]="rateCard.PremiumBox" required #premiumBoxField="ngModel">\n            <mat-error *ngIf="premiumBoxField.errors && premiumBoxField.errors.required">\n              Box Premium Amount is required.\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type="number" matInput placeholder="Base Colour" name="premiumBaseColour" [(ngModel)]="rateCard.PremiumBaseColour" required #premiumBaseColourField="ngModel">\n            <mat-error *ngIf="premiumBaseColourField.errors && premiumBaseColourField.errors.required">\n              Base Colour Premium Amount is required.\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type="number" matInput placeholder="Check Mark" name="premiumCheckMark" [(ngModel)]="rateCard.PremiumCheckMark" required #premiumCheckMarkField="ngModel">\n            <mat-error *ngIf="premiumCheckMarkField.errors && premiumCheckMarkField.errors.required">\n              Check Mark Premium Amount is required.\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type="number" matInput placeholder="Email" name="premiumEmailId" [(ngModel)]="rateCard.PremiumEmailId" required #premiumEmailIdField="ngModel">\n            <mat-error *ngIf="premiumEmailIdField.errors && premiumEmailIdField.errors.required">\n              Email Premium Amount is required.\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type="number" matInput placeholder="Website" name="premiumWebsite" [(ngModel)]="rateCard.PremiumWebsite" required #premiumWebsiteField="ngModel">\n            <mat-error *ngIf="premiumWebsiteField.errors && premiumWebsiteField.errors.required">\n              Website Premium Amount is required.\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input type="number" matInput placeholder="Extra Words" name="premiumExtraWords" [(ngModel)]="rateCard.PremiumExtraWords" required #premiumExtraWordsField="ngModel">\n            <mat-error *ngIf="premiumExtraWordsField.errors && premiumExtraWordsField.errors.required">\n              Extra Words Premium Amount is required.\n            </mat-error>\n          </mat-form-field>\n        </ng-container>\n        <ng-container *ngIf="!isTypeWords">\n          <div class="row">\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Type" name="premiumType" [(ngModel)]="rateCard.PremiumCustom.PremiumType" required #premiumTypeField="ngModel">\n                <mat-error *ngIf="premiumTypeField.errors && premiumTypeField.errors.required">\n                  Premium Type is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Amount" name="premiumAmount" [(ngModel)]="rateCard.PremiumCustom.Amount" required #premiumAmountField="ngModel">\n                <span matSuffix>{{rateCard.PremiumCustom.Percentage ? \'%\' : \'\'}}</span>\n                <mat-error *ngIf="premiumAmountField.errors && premiumAmountField.errors.required">\n                  Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <mat-checkbox class="my-2" name="premiumPercent" [(ngModel)]="rateCard.PremiumCustom.Percentage">Amount in Percentage</mat-checkbox>\n        </ng-container>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Taxes</mat-panel-title>\n          <mat-panel-description>Enter Taxes</mat-panel-description>\n        </mat-expansion-panel-header>\n      \n        <div class="text-muted" *ngIf="rateCard.taxes.length == 0">\n          No Taxes\n        </div>\n\n        <div *ngFor="let item of rateCard.taxes; index as i" class="mb-1">\n          <div class="form-row">\n            <div class="col-auto align-self-center">\n              <mat-checkbox name="taxIncluded-{{i}}" [(ngModel)]="item.included">Included</mat-checkbox>\n            </div>\n            <div class="col-auto">&nbsp;</div>\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Rate" name="taxRate-{{i}}" [(ngModel)]="item.rate" required #rateField="ngModel">\n                <mat-error *ngIf="rateField.errors && rateField.errors.required">\n                  Rate is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col-auto col-form-label">\n              <button mat-icon-button color="warn" type="button" (click)="removeTax(i)">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addTax()">Add More</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Covered</mat-panel-title>\n          <mat-panel-description>Enter Covered</mat-panel-description>\n        </mat-expansion-panel-header>\n      \n        <div class="text-muted" *ngIf="rateCard.covered.length == 0">\n          No Covered\n        </div>\n\n        <div *ngFor="let item of rateCard.covered; index as i" class="mb-1">\n          <div class="form-row">\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Media House" name="covMediaHouse-{{i}}" [(ngModel)]="item.covMediaHouse" required #covMediaHouseField="ngModel">\n                <mat-error *ngIf="covMediaHouseField.errors && covMediaHouseField.errors.required">\n                  Media House is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Edition" name="covEdition-{{i}}" [(ngModel)]="item.covEdition" required #covEditionField="ngModel">\n                <mat-error *ngIf="covEditionField.errors && covEditionField.errors.required">\n                  Edition is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col-auto col-form-label">\n              <button mat-icon-button color="warn" type="button" (click)="removeCovered(i)">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addCovered()">Add More</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Remarks</mat-panel-title>\n          <mat-panel-description>Enter Remarks</mat-panel-description>\n        </mat-expansion-panel-header>\n      \n        <div class="text-muted" *ngIf="rateCard.remarks.length == 0">\n          No Remarks\n        </div>\n\n        <div *ngFor="let item of rateCard.remarks; index as i" class="mb-1">\n          <div class="form-row">\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Remark" name="remark-{{i}}" [(ngModel)]="item.remark" required #remarkField="ngModel">\n                <mat-error *ngIf="remarkField.errors && remarkField.errors.required">\n                  Remark is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col-auto col-form-label">\n              <button mat-icon-button color="warn" type="button" (click)="removeRemark(i)">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addRemark()">Add More</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </mat-accordion>\n  \n    <br><br>\n\n    <button type="submit" class="btn btn-success" [disabled]="!rateCardForm.form.valid">Save</button>\n    <button class="btn btn-danger" (click)="cancel()">Cancel</button>\n  </form>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/rate-card/rate-card/rate-card.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__rate_card_api_service__["a" /* RateCardApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_10__directory_media_houses_media_house_api_service__["a" /* MediaHouseApiService */],
            __WEBPACK_IMPORTED_MODULE_12__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_13__services_goback_service__["a" /* GobackService */]])
    ], RateCardComponent);
    return RateCardComponent;
}());

//# sourceMappingURL=rate-card.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rate_card__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_card_api_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateCardDetailsComponent = (function () {
    function RateCardDetailsComponent(api, route, goback) {
        this.api = api;
        this.route = route;
        this.goback = goback;
        this.ratecard = new __WEBPACK_IMPORTED_MODULE_1__rate_card__["d" /* RateCard */]();
    }
    RateCardDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.ratecard = data.rateCard;
        });
    };
    Object.defineProperty(RateCardDetailsComponent.prototype, "isTypeWords", {
        get: function () {
            if (this.ratecard.mediaType == 'Print' && this.ratecard.adType == 'Text Classified') {
                return true;
            }
            if (this.ratecard.mediaType == 'Electronic' && this.ratecard.adType == 'Scroll') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardDetailsComponent.prototype, "isTypeLen", {
        get: function () {
            if (this.ratecard.mediaType == 'Print' && this.ratecard.adType != 'Text Classified') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateCardDetailsComponent.prototype, "isTypeTime", {
        get: function () {
            if (this.ratecard.mediaType == 'Air') {
                return true;
            }
            if (this.ratecard.mediaType == 'Electronic' && this.ratecard.adType != 'Scroll') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    RateCardDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rate-card-details',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/rate-card/rate-card-details/rate-card-details.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Rate Cards</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <button *ngIf="!ratecard.global" class="fab bg-info" [routerLink]="[\'/ratecards/edit\', ratecard.id]">\n    <mat-icon>edit</mat-icon>\n  </button>\n\n  <div class="row">\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Rate Card</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Media Type</div>\n              <div class="col-md-8">{{ratecard.mediaType}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Ad Type</div>\n              <div class="col-md-8">{{ratecard.adType}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Rate Card Type</div>\n              <div class="col-md-8">{{ratecard.rateCardType}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Booking Center</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Media House Name</div>\n              <div class="col-md-8">{{ratecard.mediaHouseName}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Edition</div>\n              <div class="col-md-8">{{ratecard.bookingEdition}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Pullout Name</div>\n              <div class="col-md-8">{{ratecard.pullOutName}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Categories</div>\n        <ul class="list-group list-group-flush">\n          <ng-container *ngFor="let category of ratecard.categories">\n            <li class="list-group-item" *ngIf="category">\n              {{category}}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Rate Card</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Rate</div>\n              <div class="col-md-8">₹ {{ratecard.rate}} per {{ratecard.unit}}</div>\n            </div>\n          </li>\n          <li class="list-group-item" *ngIf="isTypeTime">\n            <div class="row">\n              <div class="col-md-4">Time</div>\n              <div class="col-md-8">{{ratecard.adTime}}</div>\n            </div>\n          </li>\n          <li class="list-group-item" *ngIf="isTypeWords">\n            <div class="row">\n              <div class="col-md-4">Maximum Words</div>\n              <div class="col-md-8">{{ratecard.AdWordsMax}}</div>\n            </div>\n          </li>\n          <ng-container *ngIf="isTypeLen">\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Position</div>\n                <div class="col-md-8">{{ratecard.position}}</div>\n              </div>\n            </li>\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Hue</div>\n                <div class="col-md-8">{{ratecard.hue}}</div>\n              </div>\n            </li>\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Minimum Size</div>\n                <div class="col-md-8">{{ratecard.minLength}} x {{ratecard.minWidth}}</div>\n              </div>\n            </li>\n            <li class="list-group-item">\n              <div class="row">\n                <div class="col-md-4">Maximum Size</div>\n                <div class="col-md-8">{{ratecard.maxLength}} x {{ratecard.maxWidth}}</div>\n              </div>\n            </li>\n          </ng-container>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Validity</div>\n              <div class="col-md-8">{{(ratecard.validFrom | date) || \'--\'}} to {{(ratecard.validTill | date) || \'--\'}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6" *ngIf="isTypeLen && ratecard.fixSizes.length">\n      <div class="card mb-3">\n        <div class="card-header">Fix Sizes</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngFor="let fixSize of ratecard.fixSizes; index as i">\n            <div class="row">\n              <div class="col-md-4">Width</div>\n              <div class="col-md-8">{{fixSize.width}}</div>\n            </div>\n            <div class="row">\n              <div class="col-md-4">Length</div>\n              <div class="col-md-8">{{fixSize.length}}</div>\n            </div>\n            <div class="row">\n              <div class="col-md-4">Amount</div>\n              <div class="col-md-8">₹ {{fixSize.amount}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6" *ngIf="ratecard.schemes.length">\n      <div class="card mb-3">\n        <div class="card-header">Schemes</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngFor="let scheme of ratecard.schemes; index as i">\n            <div class="row">\n              <div class="col-md-4">Paid</div>\n              <div class="col-md-8">{{scheme.paid}}</div>\n            </div>\n            <div class="row">\n              <div class="col-md-4">Free</div>\n              <div class="col-md-8">{{scheme.Free}}</div>\n            </div>\n            <div class="row">\n              <div class="col-md-4">Time Limit</div>\n              <div class="col-md-8">{{scheme.timeLimit}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6" *ngIf="ratecard.taxes.length">\n      <div class="card mb-3">\n        <div class="card-header">Taxes</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngFor="let tax of ratecard.taxes; index as i">\n            <div class="row">\n              <div class="col-md-4">Included</div>\n              <div class="col-md-8">{{tax.included}}</div>\n            </div>\n            <div class="row">\n              <div class="col-md-4">Rate</div>\n              <div class="col-md-8">{{tax.rate}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6" *ngIf="ratecard.covered.length">\n      <div class="card mb-3">\n        <div class="card-header">Covered</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngFor="let cov of ratecard.covered; index as i">\n            <div class="row">\n              <div class="col-md-4">Media House</div>\n              <div class="col-md-8">{{cov.covMediaHouse}}</div>\n            </div>\n            <div class="row">\n              <div class="col-md-4">Edition</div>\n              <div class="col-md-8">{{cov.covEdition}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class="col-lg-6" *ngIf="ratecard.remarks.length">\n      <div class="card mb-3">\n        <div class="card-header">Remarks</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngFor="let remark of ratecard.remarks">\n            {{remark.remark}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/rate-card/rate-card-details/rate-card-details.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__rate_card_api_service__["a" /* RateCardApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */]])
    ], RateCardDetailsComponent);
    return RateCardDetailsComponent;
}());

//# sourceMappingURL=rate-card-details.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directory_directory_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rate_card_rate_card_module__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__release_order_routing_module__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__release_order_api_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__release_order_resolver_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__release_order_release_order_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__release_order_list_release_order_list_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__release_order_details_release_order_details_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicModule */].forRoot(ReleaseOrderModule_1),
                __WEBPACK_IMPORTED_MODULE_2__directory_directory_module__["a" /* DirectoryModule */],
                __WEBPACK_IMPORTED_MODULE_3__rate_card_rate_card_module__["a" /* RateCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__release_order_routing_module__["a" /* ReleaseOrderRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__release_order_api_service__["a" /* ReleaseOrderApiService */],
                __WEBPACK_IMPORTED_MODULE_6__release_order_resolver_service__["a" /* ReleaseOrderResolver */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__release_order_release_order_component__["a" /* ReleaseOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__release_order_list_release_order_list_component__["a" /* ReleaseOrderListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__release_order_details_release_order_details_component__["a" /* ReleaseOrderDetailsComponent */]
            ]
        })
    ], ReleaseOrderModule);
    return ReleaseOrderModule;
    var ReleaseOrderModule_1;
}());

//# sourceMappingURL=release-order.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__release_order__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directory_media_houses_media_house_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directory_clients_client_api_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directory_media_houses_media_house__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directory_clients_client__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directory_executives_executive__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directory_executives_executive_api_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_state_api_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__release_order_api_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rate_card_rate_card_api_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var ReleaseOrderComponent = (function () {
    function ReleaseOrderComponent(route, router, api, mediaHouseApi, clientApi, executiveApi, rateCardApi, stateApi, notifications, goback) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.api = api;
        this.mediaHouseApi = mediaHouseApi;
        this.clientApi = clientApi;
        this.executiveApi = executiveApi;
        this.rateCardApi = rateCardApi;
        this.stateApi = stateApi;
        this.notifications = notifications;
        this.goback = goback;
        this.releaseorder = new __WEBPACK_IMPORTED_MODULE_1__release_order__["c" /* ReleaseOrder */]();
        this.edit = false;
        this.fixedCategoriesLevel = -1;
        this.selectedCategories = [null, null, null, null, null, null];
        this.hues = ['Black & White', 'Colored'];
        this.searchCategories = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (term) { return _this.findCategories(term); }))
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([]); });
        };
        this.categoryInputFormatter = function (result) {
            var stack = [];
            while (result) {
                stack.push(result);
                result = result.parent;
            }
            var j = _this.fixedCategoriesLevel + 1;
            while (j > 0) {
                stack.pop();
                --j;
            }
            var i = _this.fixedCategoriesLevel + 1;
            while (stack.length) {
                _this.setCategory(i, stack.pop());
                ++i;
            }
        };
        this.categoryResultFormatter = function (result) {
            var stack = [];
            while (result) {
                stack.push(result);
                result = result.parent;
            }
            var formatted = stack.pop().name;
            while (stack.length) {
                formatted += " > " + stack.pop().name;
            }
            return formatted;
        };
        this.categories = [
            new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Property'),
            new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Education'),
            new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Medical', [
                new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Surgery', [
                    new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('C', [
                        new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Heart Surgery', [
                            new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Transplant', [
                                new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Deepest')
                            ])
                        ])
                    ]),
                    new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('R', [
                        new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('S', [
                            new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Deepest')
                        ])
                    ])
                ])
            ]),
            new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Women'),
            new __WEBPACK_IMPORTED_MODULE_17__rate_card_rate_card__["a" /* Category */]('Real Estate')
        ];
        this.searchMediaHouse = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) { return _this.mediaHouseApi.searchMediaHouses(term); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([]); });
        };
        this.mediaTypes = ['Print', 'Air', 'Electronic'];
        this.mediaHouseInputFormatter = function (result) {
            _this.initMediaHouse(result);
            return result.orgName;
        };
        this.mediaHouseResultFormatter = function (result) { return result.orgName + " - " + result.address.edition; };
        this.searchClient = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) { return _this.clientApi.searchClients(term); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([]); });
        };
        this.clientInputFormatter = function (result) {
            _this.releaseorder.clientState = result.address.state;
            _this.releaseorder.clientGSTIN = result.gstNo;
            return result.orgName;
        };
        this.clientResultFormatter = function (result) { return result.orgName; };
        this.searchExecutive = function (text) {
            return text.debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) { return _this.executiveApi.searchExecutives(term); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([]); });
        };
        this.executiveInputFormatter = function (result) {
            _this.releaseorder.executiveOrg = result.orgName;
            return result.executiveName;
        };
        this.executiveResultFormatter = function (result) { return result.executiveName; };
        this.fixSizes = [];
        this.customSize = false;
        this.customSizeL = 0;
        this.customSizeW = 0;
        this.schemes = [];
        this._customScheme = false;
        this._customPaid = 1;
        this.customFree = 0;
        this.adCountPaid = 1;
        this.taxes = [
            new __WEBPACK_IMPORTED_MODULE_1__release_order__["d" /* TaxValues */](5),
            new __WEBPACK_IMPORTED_MODULE_1__release_order__["d" /* TaxValues */](10),
            new __WEBPACK_IMPORTED_MODULE_1__release_order__["d" /* TaxValues */](14),
            new __WEBPACK_IMPORTED_MODULE_1__release_order__["d" /* TaxValues */](28, 18)
        ];
        this.otherChargesTypes = ['Designing Charges', 'Extra Copy/Newspaper Charges', 'Certificate Charges'];
        this.paymentTypes = ['Cash', 'Cheque', 'NEFT'];
    }
    Object.defineProperty(ReleaseOrderComponent.prototype, "isTypeWords", {
        get: function () {
            if (this.mediaType == 'Print' && this.releaseorder.adType == 'Text Classified') {
                return true;
            }
            if (this.mediaType == 'Electronic' && this.releaseorder.adType == 'Scroll') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "isTypeLen", {
        get: function () {
            if (this.mediaType == 'Print' && this.releaseorder.adType != 'Text Classified') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "isTypeTime", {
        get: function () {
            if (this.mediaType == 'Air') {
                return true;
            }
            if (this.mediaType == 'Electronic' && this.releaseorder.adType != 'Scroll') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ReleaseOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.paramMap.subscribe(function (params) {
            if (params.has('id')) {
                _this.id = params.get('id');
                _this.edit = true;
                _this.initFromReleaseOrder();
            }
            else if (params.has('copy')) {
                _this.initFromReleaseOrder();
            }
            else if (params.has('rateCard')) {
                _this.route.data.subscribe(function (data) { return _this.initFromRateCard(data.rateCard); });
            }
            else {
                _this.initNew();
            }
        });
    };
    ReleaseOrderComponent.prototype.initNew = function () {
        this.customSize = true;
        this.customScheme = true;
        this.releaseorder.adTime = this.adTimes[0];
        this.mediaType = this.mediaTypes[0];
        this.releaseorder.adHue = this.hues[0];
        this.releaseorder.unit = this.units[0];
        this.releaseorder.adPosition = this.positions[0];
        this.selectedTax = this.taxes[0];
        this.releaseorder.paymentType = this.paymentTypes[0];
    };
    ReleaseOrderComponent.prototype.initFromReleaseOrder = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.releaseorder = data.releaseOrder;
            var insertionBkp = _this.releaseorder.insertions;
            _this.buildCategoryTree([
                _this.releaseorder.adCategory1,
                _this.releaseorder.adCategory2,
                _this.releaseorder.adCategory3,
                _this.releaseorder.adCategory4,
                _this.releaseorder.adCategory5,
                _this.releaseorder.adCategory6
            ]);
            if (_this.releaseorder.adSizeCustom) {
                _this.customSize = true;
                _this.customSizeL = _this.releaseorder.adSizeL;
                _this.customSizeW = _this.releaseorder.adSizeW;
            }
            else {
                _this.fixSizes = [{
                        amount: _this.releaseorder.adSizeAmount,
                        length: _this.releaseorder.adSizeL,
                        width: _this.releaseorder.adSizeW
                    }];
                _this.selectedSize = _this.fixSizes[0];
            }
            // edit only as custom scheme
            _this.customScheme = true;
            _this.customFree = _this.releaseorder.adSchemeFree;
            _this.customPaid = _this.releaseorder.adSchemePaid;
            _this.adCountPaid = (+_this.releaseorder.adTotal * +_this.customPaid) / (+_this.customPaid + +_this.customFree);
            _this.selectedTax = _this.taxes.find(function (element) { return element.primary == _this.releaseorder.taxAmount.primary
                && element.secondary == _this.releaseorder.taxAmount.secondary; });
            var dirMediaHouse = new __WEBPACK_IMPORTED_MODULE_11__directory_media_houses_media_house__["a" /* MediaHouse */]();
            dirMediaHouse.orgName = _this.releaseorder.publicationName;
            dirMediaHouse.address.edition = _this.releaseorder.publicationEdition;
            dirMediaHouse.address.state = _this.releaseorder.publicationState;
            dirMediaHouse.GSTIN = _this.releaseorder.publicationGSTIN;
            dirMediaHouse.mediaType = _this.releaseorder.mediaType;
            _this.mediaHouse = dirMediaHouse;
            var dirClient = new __WEBPACK_IMPORTED_MODULE_12__directory_clients_client__["a" /* Client */]();
            dirClient.orgName = _this.releaseorder.clientName;
            dirClient.address.state = _this.releaseorder.clientState;
            dirClient.gstNo = _this.releaseorder.clientGSTIN;
            _this.client = dirClient;
            var dirExecutive = new __WEBPACK_IMPORTED_MODULE_13__directory_executives_executive__["a" /* Executive */]();
            dirExecutive.executiveName = _this.releaseorder.executiveName;
            dirExecutive.orgName = _this.releaseorder.executiveOrg;
            _this.executive = dirExecutive;
            _this.releaseorder.insertions = insertionBkp;
        });
    };
    ReleaseOrderComponent.prototype.initFromRateCard = function (rateCard) {
        var _this = this;
        if (rateCard) {
            this.releaseorder.adType = rateCard.adType;
            this.releaseorder.adTime = rateCard.adTime;
            this.releaseorder.rate = rateCard.rate;
            this.releaseorder.unit = rateCard.unit;
            this.releaseorder.adHue = rateCard.hue;
            this.releaseorder.adPosition = rateCard.position;
            this.releaseorder.AdWordsMax = rateCard.AdWordsMax;
            this.releaseorder.paymentType = this.paymentTypes[0];
            this.selectedTax = this.taxes[0];
            this.releaseorder.PremiumCustom = rateCard.PremiumCustom;
            this.releaseorder.PremiumBox.Amount = rateCard.PremiumBox;
            this.releaseorder.PremiumBaseColour.Amount = rateCard.PremiumBaseColour;
            this.releaseorder.PremiumEmailId.Amount = rateCard.PremiumEmailId;
            this.releaseorder.PremiumCheckMark.Amount = rateCard.PremiumCheckMark;
            this.releaseorder.PremiumWebsite.Amount = rateCard.PremiumWebsite;
            this.releaseorder.PremiumExtraWords.Amount = rateCard.PremiumExtraWords;
            if (rateCard.fixSizes.length > 0) {
                this.fixSizes = rateCard.fixSizes;
                this.selectedSize = this.fixSizes[0];
            }
            else
                this.customSize = true;
            if (rateCard.schemes.length > 0) {
                this.schemes = rateCard.schemes;
                this.selectedScheme = this.schemes[0];
            }
            else
                this.customScheme = true;
            for (var i = 0; i < rateCard.categories.length; ++i) {
                if (rateCard.categories[i]) {
                    ++this.fixedCategoriesLevel;
                }
                else
                    break;
            }
            this.buildCategoryTree(rateCard.categories);
            this.mediaHouseApi.searchMediaHouses(rateCard.mediaHouseName).subscribe(function (data) {
                if (data && data.length > 0) {
                    _this.mediaHouse = data[0];
                    _this.initMediaHouse(_this.mediaHouse);
                }
            });
        }
    };
    ReleaseOrderComponent.prototype.buildCategoryTree = function (categories) {
        var c = this.categories.find(function (p) { return p.name == categories[0]; });
        if (c) {
            this.category1 = c;
            var i_1 = 1;
            while (i_1 < categories.length && c.subcategories.length > 0) {
                c = c.subcategories.find(function (p) { return p.name == categories[i_1]; });
                if (c) {
                    this.setCategory(i_1, c);
                    ++i_1;
                }
                else
                    break;
            }
        }
    };
    ReleaseOrderComponent.prototype.findSubCategories = function (category, query) {
        var _this = this;
        var result = [];
        if (category.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
            result.push(category);
        }
        if (category.subcategories) {
            category.subcategories.forEach(function (subCategory) {
                _this.findSubCategories(subCategory, query).forEach(function (a) { return result.push(a); });
            });
        }
        return result;
    };
    ReleaseOrderComponent.prototype.findCategories = function (query) {
        var _this = this;
        var result = [];
        if (query) {
            var base = this.categories;
            if (this.fixedCategoriesLevel > -1) {
                base = this.selectedCategories[this.fixedCategoriesLevel].subcategories;
            }
            base.forEach(function (element) {
                _this.findSubCategories(element, query).forEach(function (a) { return result.push(a); });
            });
        }
        return result;
    };
    ReleaseOrderComponent.prototype.getCategory = function (index) {
        return this.selectedCategories[index];
    };
    ReleaseOrderComponent.prototype.setCategory = function (index, category) {
        if (this.selectedCategories[index] == category) {
            return;
        }
        this.selectedCategories[index] = category;
        for (var i = index + 1; i < this.selectedCategories.length; ++i) {
            this.setCategory(i, null);
        }
    };
    Object.defineProperty(ReleaseOrderComponent.prototype, "category1", {
        get: function () { return this.getCategory(0); },
        set: function (category) { this.setCategory(0, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "category2", {
        get: function () { return this.getCategory(1); },
        set: function (category) { this.setCategory(1, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "category3", {
        get: function () { return this.getCategory(2); },
        set: function (category) { this.setCategory(2, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "category4", {
        get: function () { return this.getCategory(3); },
        set: function (category) { this.setCategory(3, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "category5", {
        get: function () { return this.getCategory(4); },
        set: function (category) { this.setCategory(4, category); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "category6", {
        get: function () { return this.getCategory(5); },
        set: function (category) { this.setCategory(5, category); },
        enumerable: true,
        configurable: true
    });
    ReleaseOrderComponent.prototype.goBack = function () {
        this.router.navigateByUrl(this.edit ? '/releaseorders/' + this.id : '/releaseorders');
    };
    ReleaseOrderComponent.prototype.cancel = function () {
        this.goBack();
    };
    ReleaseOrderComponent.prototype.createReleaseOrder = function () {
        var _this = this;
        this.api.createReleaseOrder(this.releaseorder).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ReleaseOrderComponent.prototype.editReleaseOrder = function () {
        var _this = this;
        this.api.editReleaseOrder(this.releaseorder).subscribe(function (data) {
            if (data.success) {
                _this.goBack();
            }
            else {
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ReleaseOrderComponent.prototype.submit = function () {
        this.releaseorder.adTotal = this.availableAds;
        this.releaseorder.adTotalSpace = this.totalSpace;
        this.releaseorder.adGrossAmount = this.grossAmount;
        this.releaseorder.netAmountFigures = this.netAmount;
        this.releaseorder.netAmountWords = this.amountToWords(this.netAmount);
        this.releaseorder.taxAmount = this.selectedTax;
        if (this.selectedCategories[0]) {
            this.releaseorder.adCategory1 = this.selectedCategories[0].name;
        }
        if (this.selectedCategories[1]) {
            this.releaseorder.adCategory2 = this.selectedCategories[1].name;
        }
        if (this.selectedCategories[2]) {
            this.releaseorder.adCategory3 = this.selectedCategories[2].name;
        }
        if (this.selectedCategories[3]) {
            this.releaseorder.adCategory4 = this.selectedCategories[3].name;
        }
        if (this.selectedCategories[4]) {
            this.releaseorder.adCategory5 = this.selectedCategories[4].name;
        }
        if (this.selectedCategories[5]) {
            this.releaseorder.adCategory6 = this.selectedCategories[5].name;
        }
        this.releaseorder.publicationName = this.mediaHouse.orgName ? this.mediaHouse.orgName : this.mediaHouse;
        this.releaseorder.clientName = this.client.orgName ? this.client.orgName : this.client;
        this.releaseorder.executiveName = this.executive.executiveName ? this.executive.executiveName : this.executive;
        if (this.customSize) {
            this.releaseorder.adSizeL = this.customSizeL;
            this.releaseorder.adSizeW = this.customSizeW;
            this.releaseorder.adSizeCustom = true;
        }
        else {
            this.releaseorder.adSizeL = this.selectedSize.length;
            this.releaseorder.adSizeW = this.selectedSize.width;
            this.releaseorder.adSizeAmount = this.selectedSize.amount;
            this.releaseorder.adSizeCustom = false;
        }
        if (this.customScheme) {
            this.releaseorder.adSchemeFree = this.customFree;
            this.releaseorder.adSchemePaid = this.customPaid;
        }
        else {
            this.releaseorder.adSchemeFree = this.selectedScheme.Free;
            this.releaseorder.adSchemePaid = this.selectedScheme.paid;
        }
        if (this.edit) {
            this.editReleaseOrder();
        }
        else
            this.createReleaseOrder();
    };
    ReleaseOrderComponent.prototype.initMediaHouse = function (result) {
        if (result.address) {
            this.releaseorder.publicationEdition = result.address.edition;
            this.releaseorder.publicationState = result.address.state;
            this.releaseorder.publicationGSTIN = result.GSTIN;
            this.releaseorder.adEdition = result.address.edition;
        }
        this.mediaType = result.mediaType;
    };
    Object.defineProperty(ReleaseOrderComponent.prototype, "mediaType", {
        get: function () {
            return this.releaseorder.mediaType;
        },
        set: function (mediaType) {
            this.releaseorder.mediaType = mediaType;
            this.releaseorder.adType = this.adTypes[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "adTypes", {
        get: function () {
            switch (this.releaseorder.mediaType) {
                case 'Print':
                    return ['Text Classified', 'Display', 'Display Classified'];
                case 'Air':
                    return ['RJ Mentions', 'Radio Commercials', 'Sponsorship Tags', 'Road Block'];
                case 'Electronic':
                    return ['VJ Mentions', 'Banner', 'Scroll', 'Commercials'];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "adTimes", {
        get: function () {
            return ['Any Time', 'Prime Time ', 'Evening', 'Morning'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "positions", {
        get: function () {
            var result = ['Classified', 'Back Page', 'Jacket', 'Prime Time'];
            for (var i = 1; i <= 8; ++i) {
                result.push('Page ' + i);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "units", {
        get: function () {
            var result = [];
            if (this.releaseorder.adType == 'Text Classified') {
                result.push('Words');
            }
            else
                result.push(this.releaseorder.mediaType == 'Print' ? 'Sqcm' : 'sec');
            return result;
        },
        enumerable: true,
        configurable: true
    });
    ReleaseOrderComponent.prototype.isInsertionTimeLimitValid = function (date) {
        if (!this.customScheme && this.selectedScheme && this.selectedScheme.timeLimit) {
            var now = new Date();
            var last = new Date();
            now.setDate(now.getDate() - 1);
            last.setDate(last.getDate() + this.selectedScheme.timeLimit + 1);
            return date.before(new __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](last.getFullYear(), last.getMonth() + 1, last.getDate()))
                && date.after(new __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](now.getFullYear(), now.getMonth() + 1, now.getDate()));
        }
        return true;
    };
    ReleaseOrderComponent.prototype.addInsertion = function (date) {
        var index = this.findInsertion(date);
        if (index == -1) {
            if (this.releaseorder.insertions.length >= this.availableAds) {
                this.notifications.show('Total No of Ads reached');
                return;
            }
            else if (!this.isInsertionTimeLimitValid(date)) {
                this.notifications.show('Date outside Scheme Time Limit');
                return;
            }
            this.releaseorder.insertions.push(new __WEBPACK_IMPORTED_MODULE_1__release_order__["a" /* Insertion */](date));
        }
        else
            this.removeInsertion(index);
    };
    ReleaseOrderComponent.prototype.removeInsertion = function (i) {
        this.releaseorder.insertions.splice(i, 1);
    };
    ReleaseOrderComponent.prototype.findInsertion = function (date) {
        return this.releaseorder.insertions.findIndex(function (element) { return element.date.day == date.day
            && element.date.month == date.month
            && element.date.year == date.year; });
    };
    ReleaseOrderComponent.prototype.isSelected = function (date) {
        return this.findInsertion(date) != -1;
    };
    Object.defineProperty(ReleaseOrderComponent.prototype, "customScheme", {
        get: function () {
            return this._customScheme;
        },
        set: function (custom) {
            this._customScheme = custom;
            this.adCountPaid = custom ? this.customPaid : this.selectedScheme.paid;
            this.releaseorder.insertions = [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "selectedScheme", {
        get: function () {
            return this._selectedScheme;
        },
        set: function (scheme) {
            this._selectedScheme = scheme;
            this.adCountPaid = scheme.paid;
            this.releaseorder.insertions = [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "customPaid", {
        get: function () {
            return this._customPaid;
        },
        set: function (paid) {
            this._customPaid = paid;
            this.adCountPaid = paid;
            this.releaseorder.insertions = [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "totalSpace", {
        get: function () {
            if (this.customSize || this.selectedSize == null) {
                return this.customSizeL * this.customSizeW;
            }
            else
                return this.selectedSize.length * this.selectedSize.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "grossAmountWithoutPremium", {
        get: function () {
            if (this.isTypeLen) {
                if (this.customSize) {
                    return (this.releaseorder.rate * this.totalSpace) * this.adCountPaid;
                }
                else {
                    return this.selectedSize.amount * this.adCountPaid;
                }
            }
            else if (this.isTypeTime) {
                return this.releaseorder.rate * this.releaseorder.AdDuration * this.adCountPaid;
            }
            else if (this.isTypeWords) {
                return this.releaseorder.rate * this.releaseorder.AdWords * this.adCountPaid;
            }
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "grossAmount", {
        get: function () {
            var amount = this.grossAmountWithoutPremium;
            if (this.isTypeWords) {
                if (this.releaseorder.PremiumBox.Included) {
                    amount += this.releaseorder.PremiumBox.Amount;
                }
                if (this.releaseorder.PremiumBaseColour.Included) {
                    amount += this.releaseorder.PremiumBaseColour.Amount;
                }
                if (this.releaseorder.PremiumCheckMark.Included) {
                    amount += this.releaseorder.PremiumCheckMark.Amount;
                }
                if (this.releaseorder.PremiumEmailId.Included) {
                    amount += this.releaseorder.PremiumEmailId.Amount * this.releaseorder.PremiumEmailId.Quantity;
                }
                if (this.releaseorder.PremiumWebsite.Included) {
                    amount += this.releaseorder.PremiumWebsite.Amount * this.releaseorder.PremiumWebsite.Quantity;
                }
                if (this.releaseorder.PremiumExtraWords.Included) {
                    amount += this.releaseorder.PremiumExtraWords.Amount * this.releaseorder.PremiumExtraWords.Quantity;
                }
            }
            else if (this.releaseorder.PremiumCustom.Percentage) {
                amount += (this.releaseorder.PremiumCustom.Amount * amount) / 100;
            }
            else
                amount += this.releaseorder.PremiumCustom.Amount;
            return amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "netAmount", {
        get: function () {
            var amount = this.grossAmount;
            amount -= (this.releaseorder.publicationDiscount * amount / 100);
            amount -= (this.releaseorder.agencyDiscount1 * amount / 100);
            amount -= (this.releaseorder.agencyDiscount2 * amount / 100);
            return Math.ceil(amount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "availableAds", {
        get: function () {
            if (this.customScheme) {
                var multiplier_1 = this.adCountPaid / this.customPaid;
                return +this.adCountPaid + this.customFree * multiplier_1;
            }
            var multiplier = this.adCountPaid / this.selectedScheme.paid;
            return +this.adCountPaid + this.selectedScheme.Free * multiplier;
        },
        enumerable: true,
        configurable: true
    });
    ReleaseOrderComponent.prototype.amountToWords = function (num) {
        if (!num) {
            return "Zero Only";
        }
        var a = [
            '',
            'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ',
            'Ten ',
            'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '
        ];
        var b = [
            '', '',
            'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
        ];
        var c = ['Crore ', 'Lakh ', 'Thousand ', 'Hundred '];
        if ((num = num.toString()).length > 9)
            return 'overflow';
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n)
            return;
        var str = '';
        for (var i = 0; i < 4; ++i) {
            str += (n[i + 1] != 0) ? (a[Number(n[i + 1])] || b[n[i + 1][0]] + ' ' + a[n[i + 1][1]]) + c[i] : '';
        }
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Only' : '';
        return str;
    };
    Object.defineProperty(ReleaseOrderComponent.prototype, "taxDisplay", {
        get: function () {
            var tax = this.selectedTax.primary + "%";
            if (this.selectedTax.secondary) {
                tax += " + " + this.selectedTax.secondary + "%";
            }
            return tax + (this.releaseorder.taxIncluded ? " Tax Included" : " Tax Excluded");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReleaseOrderComponent.prototype, "clientPayment", {
        get: function () {
            var amount = this.grossAmount;
            this.releaseorder.otherCharges.forEach(function (element) { return amount += +element.amount; });
            amount -= (this.releaseorder.publicationDiscount * amount / 100);
            return amount;
        },
        enumerable: true,
        configurable: true
    });
    ReleaseOrderComponent.prototype.addMediaHouse = function () {
        var _this = this;
        var obj = new __WEBPACK_IMPORTED_MODULE_11__directory_media_houses_media_house__["a" /* MediaHouse */]();
        obj.orgName = this.mediaHouse.orgName ? this.mediaHouse.orgName : this.mediaHouse;
        obj.address.edition = this.releaseorder.publicationEdition;
        obj.address.state = this.releaseorder.publicationState;
        obj.GSTIN = this.releaseorder.publicationGSTIN;
        obj.mediaType = this.releaseorder.mediaType;
        this.mediaHouseApi.createMediaHouse(obj).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Added to Directory');
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ReleaseOrderComponent.prototype.addClient = function () {
        var _this = this;
        var obj = new __WEBPACK_IMPORTED_MODULE_12__directory_clients_client__["a" /* Client */]();
        obj.orgName = this.client.orgName ? this.client.orgName : this.client;
        obj.address.state = this.releaseorder.clientState;
        obj.gstNo = this.releaseorder.clientGSTIN;
        this.clientApi.createClient(obj).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Added to Directory');
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ReleaseOrderComponent.prototype.addCharges = function () {
        var item = new __WEBPACK_IMPORTED_MODULE_1__release_order__["b" /* OtherCharges */]();
        item.chargeType = this.otherChargesTypes[0];
        this.releaseorder.otherCharges.push(item);
    };
    ReleaseOrderComponent.prototype.removeOtherCharge = function (i) {
        this.releaseorder.otherCharges.splice(i, 1);
    };
    ReleaseOrderComponent.prototype.addExecutive = function () {
        var _this = this;
        var obj = new __WEBPACK_IMPORTED_MODULE_13__directory_executives_executive__["a" /* Executive */]();
        obj.executiveName = this.executive.executiveName ? this.executive.executiveName : this.executive;
        obj.orgName = this.releaseorder.executiveOrg;
        this.executiveApi.createExecutive(obj).subscribe(function (data) {
            if (data.success) {
                _this.notifications.show('Added to Directory');
            }
            else {
                console.log(data);
                _this.notifications.show(data.msg);
            }
        }, function (err) {
            console.log(err);
            _this.notifications.show('Connection failed');
        });
    };
    ReleaseOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-release-order',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/release-order/release-order/release-order.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container" *ngIf="!edit">Create Release Order</div>\n    <div class="container" *ngIf="edit">Edit Release Order</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">  \n  <form (ngSubmit)="submit()" #roForm="ngForm">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Publication Details</mat-panel-title>\n          <mat-panel-description>Enter Publication details</mat-panel-description>\n        </mat-expansion-panel-header>\n        \n        <div class="form-group">\n          <label for="publicationName">Name</label>\n          <input type="text" class="form-control" [ngbTypeahead]="searchMediaHouse" id="mediaHouseName" placeholder="Enter Publication Name" [(ngModel)]="mediaHouse" name="mediaHouseName" required #publicationNameField="ngModel" [resultFormatter]="mediaHouseResultFormatter" [inputFormatter]="mediaHouseInputFormatter">\n        </div>\n        \n        <div *ngIf="publicationNameField.invalid && (publicationNameField.dirty || publicationNameField.touched)" class="text-danger">\n          <div *ngIf="publicationNameField.errors.required">\n            Publication Name is required.\n          </div>\n          <br>\n        </div>\n        <div class="form-group">\n          <label for="publicationEdition">Edition</label>\n          <input type="text" class="form-control" id="publicationEdition" name="publicationEdition" placeholder="Enter Edition" [(ngModel)]="releaseorder.publicationEdition" required #publicationEditionField="ngModel">\n        </div>\n        \n        <div *ngIf="publicationEditionField.invalid && (publicationEditionField.dirty || publicationEditionField.touched)" class="text-danger">\n          <div *ngIf="publicationEditionField.errors.required">\n            Edition Name is required.\n          </div>\n          <br>\n        </div>\n    \n        <div class="form-group">\n          <label for="publicationState">State</label>\n          <select class="form-control" id="publicationState" name="publicationState" [(ngModel)]="releaseorder.publicationState" required #publicationStateField="ngModel">\n            <option *ngFor="let state of stateApi.states" [value]="state">{{state}}</option>\n          </select>\n        </div>\n        \n        <div *ngIf="publicationStateField.invalid && (publicationStateField.dirty || publicationStateField.touched)" class="text-danger">\n          <div *ngIf="publicationStateField.errors.required">\n            State is required.\n          </div>\n          <br>\n        </div>\n        \n        <div class="form-group">\n          <label for="publicationGSTIN">GSTIN</label>\n          <input type="text" class="form-control" id="publicationGSTIN" name="publicationGSTIN" placeholder="Enter GST" [(ngModel)]="releaseorder.publicationGSTIN" required minlength="15" maxlength="15" #publicationGSTINField="ngModel">\n        </div>\n        \n        <div *ngIf="publicationGSTINField.invalid && (publicationGSTINField.dirty || publicationGSTINField.touched)" class="text-danger">\n          <div *ngIf="publicationGSTINField.errors.required">\n            GSTIN is required.\n          </div>\n          <div *ngIf="publicationGSTINField.errors.minlength || publicationGSTINField.errors.maxlength">\n            GSTIN should be 15 characters long.\n          </div>\n          <br>\n        </div>\n        \n        <div class="form-group">\n          <label>Media Type</label>\n          <select class="form-control" name="mediaType" [(ngModel)]="releaseorder.mediaType" id="mediaType" #mediaTypeField="ngModel" required>\n            <option *ngFor="let item of mediaTypes" [value]="item">{{item}}</option>\n          </select>\n        </div>\n    \n        <div *ngIf="mediaTypeField.invalid && (mediaTypeField.dirty || mediaTypeField.touched)" class="text-danger">\n          <div *ngIf="mediaTypeField.errors.required">\n            Media type is required.\n          </div>\n          <br>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addMediaHouse()">Add to Directory</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Client Details</mat-panel-title>\n          <mat-panel-description>Enter Client details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-group">\n          <label for="clientName">Name</label>\n          <input type="text" class="form-control" [ngbTypeahead]="searchClient" id="clientName" placeholder="Enter Client Name" [(ngModel)]="client" name="clientName" required #clientNameField="ngModel" [resultFormatter]="clientResultFormatter" [inputFormatter]="clientInputFormatter">\n        </div>\n        \n        <div *ngIf="clientNameField.invalid && (clientNameField.dirty || clientNameField.touched)" class="text-danger">\n          <div *ngIf="clientNameField.errors.required">\n            Name is required.\n          </div>\n          <br>\n        </div>\n    \n        <div class="form-group">\n          <label for="clientState">State</label>\n          <select class="form-control" id="clientState" name="clientState" [(ngModel)]="releaseorder.clientState" required #clientStateField="ngModel">\n            <option *ngFor="let state of stateApi.states" [value]="state">{{state}}</option>\n          </select>\n        </div>\n        \n        <div *ngIf="clientStateField.invalid && (clientStateField.dirty || clientStateField.touched)" class="text-danger">\n          <div *ngIf="clientStateField.errors.required">\n            State is required.\n          </div>\n          <br>\n        </div>\n    \n        <div class="form-group">\n          <label for="clientGSTIN">GSTIN</label>\n          <input type="text" class="form-control" id="clientGSTIN" name="clientGSTIN" placeholder="Enter GST" [(ngModel)]="releaseorder.clientGSTIN" required minlength="15" maxlength="15" #clientGSTINField="ngModel">\n        </div>\n        \n        <div *ngIf="clientGSTINField.invalid && (clientGSTINField.dirty || clientGSTINField.touched)" class="text-danger">\n          <div *ngIf="clientGSTINField.errors.required">\n            GSTIN is required.\n          </div>\n          <div *ngIf="clientGSTINField.errors.minlength || clientGSTINField.errors.maxlength">\n            GSTIN should be 15 characters long.\n          </div>\n          <br>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addClient()">Add to Directory</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Ad Details</mat-panel-title>\n          <mat-panel-description>Enter Ad details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-group">\n          <label>Ad Type</label>\n          <select class="form-control" name="adType" [(ngModel)]="releaseorder.adType" id="adType" #adTypeField="ngModel" required>\n            <option *ngFor="let item of adTypes" [value]="item">{{item}}</option>\n          </select>\n        </div>\n    \n        <div class="form-row">\n          <label class="col-md-3 col-form-label">Rate</label>\n          <div class="col col-md-5">\n            <div class="form-group">\n              <input type="number" class="form-control" id="rate" placeholder="Enter Rate" [(ngModel)]="releaseorder.rate" name="rate" required #rateField="ngModel">\n            </div>\n      \n            <div *ngIf="rateField.invalid && (rateField.dirty || rateField.touched)" class="text-danger">\n              <div *ngIf="rateField.errors.required">\n                Rate is empty or invalid.\n              </div>\n              <br>\n            </div>\n          </div>\n          <div class="col col-md-4">\n            <div class="form-group">\n              <select class="form-control" name="unit" [(ngModel)]="releaseorder.unit" id="unit" #unitField="ngModel" required>\n                <option *ngFor="let item of units" [value]="item">{{item}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        \n        <div class="form-group">\n          <label for="adEdition">Edition</label>\n          <input type="text" class="form-control" id="adEdition" name="adEdition" placeholder="Enter Edition" [(ngModel)]="releaseorder.adEdition" required #adEditionField="ngModel">\n        </div>\n        \n        <div *ngIf="adEditionField.invalid && (adEditionField.dirty || adEditionField.touched)" class="text-danger">\n          <div *ngIf="adEditionField.errors.required">\n            Edition is required.\n          </div>\n          <br>\n        </div>\n\n        <ng-container *ngIf="isTypeLen">\n          <div class="form-row">\n            <label class="col-md-3 col-form-label">Hue</label>\n            <div class="col-md-9">\n              <div class="form-group">\n                <select class="form-control" name="hue" [(ngModel)]="releaseorder.adHue" id="hue" #hueField="ngModel" required>\n                  <option *ngFor="let hue of hues" [value]="hue">{{hue}}</option>\n                </select>\n              </div>\n      \n              <div *ngIf="hueField.invalid && (hueField.dirty || hueField.touched)" class="text-danger">\n                <div *ngIf="hueField.errors.required">\n                  Hue is required.\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n      \n          <div class="form-row">\n            <label class="col-md-3 col-form-label">Position</label>\n            <div class="col-md-9">\n              <div class="form-group">\n                <select class="form-control" name="position" [(ngModel)]="releaseorder.adPosition" id="position" #positionField="ngModel" required>\n                  <option *ngFor="let item of positions" [value]="item">{{item}}</option>\n                </select>\n              </div>\n      \n              <div *ngIf="positionField.invalid && (positionField.dirty || positionField.touched)" class="text-danger">\n                <div *ngIf="positionField.errors.required">\n                  Position is required.\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf="isTypeWords">\n          <div class="form-group">\n            <label>Maximum Words</label>\n            <input type="number" class="form-control" id="maxWords" placeholder="Enter Maximum Words" [(ngModel)]="releaseorder.AdWordsMax" name="maxWords" required #maxWordsField="ngModel">\n          </div>\n    \n          <div *ngIf="maxWordsField.invalid && (maxWordsField.dirty || maxWordsField.touched)" class="text-danger">\n            <div *ngIf="maxWordsField.errors.required">\n              Maximum Words is empty or invalid.\n            </div>\n            <br>\n          </div>\n          <div class="form-group">\n            <label>No of Words</label>\n            <input type="number" class="form-control" id="words" placeholder="Enter No of Words" [(ngModel)]="releaseorder.AdWords" name="words" required #wordsField="ngModel">\n          </div>\n    \n          <div *ngIf="wordsField.invalid && (wordsField.dirty || wordsField.touched)" class="text-danger">\n            <div *ngIf="wordsField.errors.required">\n              No of Words is empty or invalid.\n            </div>\n            <br>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf="isTypeWords">\n          <div class="form-group">\n            <label>Duration</label>\n            <input type="number" class="form-control" id="duration" placeholder="Enter Duration" [(ngModel)]="releaseorder.AdDuration" name="duration" required #durationField="ngModel">\n          </div>\n    \n          <div *ngIf="durationField.invalid && (durationField.dirty || durationField.touched)" class="text-danger">\n            <div *ngIf="durationField.errors.required">\n              Duration is empty or invalid.\n            </div>\n            <br>\n          </div>\n        </ng-container>\n    \n        <div class="form-group" *ngIf="isTypeTime">\n          <label>Ad Time</label>\n          <select class="form-control" name="adTime" [(ngModel)]="releaseorder.adTime" id="adTime" #adTimeField="ngModel" required>\n            <option *ngFor="let item of adTimes" [value]="item">{{item}}</option>\n          </select>\n        </div>\n    \n        <div class="form-row">\n          <label class="col-3 col-form-label">Tax</label>\n          <div class="col-auto col-form-label">\n            <div class="form-check">\n              <input type="checkbox" name="taxIncluded" class="form-check-input" [(ngModel)]="releaseorder.taxIncluded">\n              <label class="form-check-label">Included</label>\n            </div>\n          </div>\n          <div class="col">\n            <div class="form-group">\n              <select class="form-control" name="tax" [(ngModel)]="selectedTax" id="tax" #taxField="ngModel" required>\n                <option *ngFor="let item of taxes" [ngValue]="item">{{item.primary}}% <span *ngIf="item.secondary">+ {{item.secondary}}%</span></option>\n              </select>\n            </div>\n    \n            <div *ngIf="taxField.invalid && (taxField.dirty || taxField.touched)" class="text-danger">\n              <div *ngIf="taxField.errors.required">\n                Tax is required.\n              </div>\n              <br>\n            </div>\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label for="caption">Caption</label>\n          <input type="text" class="form-control" id="caption" name="caption" placeholder="Enter Caption" [(ngModel)]="releaseorder.caption" #captionField="ngModel">\n        </div>\n    \n        <div class="form-group">\n          <label for="remark">Remark</label>\n          <input type="text" class="form-control" id="remark" name="remark" placeholder="Enter Remark" [(ngModel)]="releaseorder.remark" #remarkField="ngModel">\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Categories</mat-panel-title>\n          <mat-panel-description>Select Categories</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="input-group">\n          <div class="input-group-prepend">\n            <span class="input-group-text">\n              <mat-icon>search</mat-icon>\n            </span>\n          </div>\n          <input id="search" name="search" type="text" class="form-control" [(ngModel)]="query" [ngbTypeahead]="searchCategories" placeholder="Search Categories" [resultFormatter]="categoryResultFormatter" [inputFormatter]="categoryInputFormatter" />\n        </div>\n\n        <br>\n      \n        <div class="form-row">\n          <div class="form-group col">\n            <select class="form-control" name="category1" [(ngModel)]="category1" id="category1" required #category1Field="ngModel" [disabled]="fixedCategoriesLevel >= 0">\n              <option *ngFor="let item of categories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n      \n          <div class="w-100 d-block d-sm-none"></div>\n      \n          <div class="form-group col" *ngIf="category1 && category1.subcategories.length">\n            <select class="form-control" name="category2" [(ngModel)]="category2" id="category2" [disabled]="fixedCategoriesLevel >= 1">\n              <option *ngFor="let item of category1.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n    \n          <div class="w-100 d-block d-md-none"></div>\n      \n          <div class="form-group col" *ngIf="category2 && category2.subcategories.length">\n            <select class="form-control" name="category3" [(ngModel)]="category3" id="category3" [disabled]="fixedCategoriesLevel >= 2">\n              <option *ngFor="let item of category2.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n      \n          <div class="w-100 d-block d-sm-none d-md-block d-xl-none"></div>\n      \n          <div class="form-group col" *ngIf="category3 && category3.subcategories.length">\n            <select class="form-control" name="category4" [(ngModel)]="category4" id="category4" [disabled]="fixedCategoriesLevel >= 3">\n              <option *ngFor="let item of category3.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n      \n          <div class="w-100 d-block d-md-none"></div>\n      \n          <div class="form-group col" *ngIf="category4 && category4.subcategories.length">\n            <select class="form-control" name="category5" [(ngModel)]="category5" id="category5" [disabled]="fixedCategoriesLevel >= 4">\n              <option *ngFor="let item of category4.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n      \n          <div class="w-100 d-block d-sm-none"></div>\n      \n          <div class="form-group col" *ngIf="category5 && category5.subcategories.length">\n            <select class="form-control" name="category6" [(ngModel)]="category6" id="category6" [disabled]="fixedCategoriesLevel >= 5">\n              <option *ngFor="let item of category5.subcategories" [ngValue]="item">{{item.name}}</option>\n            </select>\n          </div>\n          \n        </div>\n      \n        <div *ngIf="category1Field.invalid && (category1Field.dirty || category1Field.touched)" class="text-danger">\n          <div *ngIf="category1Field.errors.required">\n            Category is required.\n          </div>\n          <br>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel *ngIf="isTypeLen">\n        <mat-expansion-panel-header>\n          <mat-panel-title>Ad Size</mat-panel-title>\n          <mat-panel-description>Enter Size</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-slide-toggle [(ngModel)]="customSize" name="customSize" [disabled]="fixSizes.length == 0">Custom</mat-slide-toggle>\n\n        <div class="form-group" *ngIf="!customSize">\n          <select class="form-control" name="fixSize" [(ngModel)]="selectedSize" id="fixSize" #fixSizeField="ngModel" required>\n            <option *ngFor="let fixSize of fixSizes" [ngValue]="fixSize">Length: {{fixSize.length}}, Width: {{fixSize.width}}, Amount: {{fixSize.amount}}</option>\n          </select>\n        </div>\n    \n        <div class="form-row" *ngIf="customSize">\n          <div class="col">\n            <div class="form-group">\n              <input type="number" class="form-control" id="customL" placeholder="Enter Length" [(ngModel)]="customSizeL" name="customL" required #customLField="ngModel">\n            </div>\n    \n            <div *ngIf="customLField.invalid && (customLField.dirty || customLField.touched)" class="text-danger">\n              <div *ngIf="customLField.errors.required">\n                Length is required.\n              </div>\n              <br>\n            </div>\n          </div>\n          <div class="col-auto form-text">&times;</div>\n          <div class="col">\n            <div class="form-group">\n              <input type="number" class="form-control" id="customW" placeholder="Enter Width" [(ngModel)]="customSizeW" name="customW" required #customWField="ngModel">\n            </div>\n    \n            <div *ngIf="customWField.invalid && (customWField.dirty || customWField.touched)" class="text-danger">\n              <div *ngIf="customWField.errors.required">\n                Width is required.\n              </div>\n              <br>\n            </div>\n          </div>\n        </div>\n    \n        <div>\n          Total Space = {{totalSpace}}\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Scheme</mat-panel-title>\n          <mat-panel-description>Select Scheme</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-slide-toggle [(ngModel)]="customScheme" name="customScheme" [disabled]="schemes.length == 0">Custom</mat-slide-toggle>\n\n        <div class="form-group" *ngIf="!customScheme">\n          <select class="form-control" name="scheme" [(ngModel)]="selectedScheme" id="scheme" #schemeField="ngModel" required>\n            <option *ngFor="let scheme of schemes" [ngValue]="scheme">Paid: {{scheme.paid}}, Free: {{scheme.Free}}, Time Limit: {{scheme.timeLimit}}</option>\n          </select>\n        </div>\n    \n        <div class="form-row" *ngIf="customScheme">\n          <div class="col">\n            <div class="form-group">\n              <label>Paid</label>\n              <input type="number" class="form-control" id="customPaid" placeholder="Enter Paid" [(ngModel)]="customPaid" name="customPaid" required #customPaidField="ngModel">\n            </div>\n    \n            <div *ngIf="customPaidField.invalid && (customPaidField.dirty || customPaidField.touched)" class="text-danger">\n              <div *ngIf="customPaidField.errors.required">\n                Paid is required.\n              </div>\n              <br>\n            </div>\n          </div>\n          <div class="col">\n            <div class="form-group">\n              <label>Free</label>\n              <input type="number" class="form-control" id="customFree" placeholder="Enter Free" [(ngModel)]="customFree" name="customFree" required #customFreeField="ngModel">\n            </div>\n    \n            <div *ngIf="customFreeField.invalid && (customFreeField.dirty || customFreeField.touched)" class="text-danger">\n              <div *ngIf="customFreeField.errors.required">\n                Free is required.\n              </div>\n              <br>\n            </div>\n          </div>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Insertions</mat-panel-title>\n          <mat-panel-description>Manage Insertions</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-group">\n          <label>No of Paid Ads</label>\n          <input type="number" class="form-control" id="adCountPaid" name="adCountPaid" [verify-multiple-of]="customScheme ? customPaid : selectedScheme.paid" placeholder="Enter No of Paid Ads" [(ngModel)]="adCountPaid" required #adCountPaidField="ngModel">\n        </div>\n        \n        <div *ngIf="adCountPaidField.invalid && (adCountPaidField.dirty || adCountPaidField.touched)" class="text-danger">\n          <div *ngIf="adCountPaidField.errors.required">\n            No of Paid Ads is required.\n          </div>\n          <div *ngIf="adCountPaidField.errors.multipleOf">\n            No of Paid Ads should be multiple of Paid Ads in Scheme.\n          </div>\n          <br>\n        </div>\n\n        <ng-container *ngIf="adCountPaidField.valid">\n          <p>Total Ads = {{availableAds}} ({{adCountPaid}} Paid + {{availableAds - adCountPaid}} Free)</p>\n\n          <br>\n          <div class="form-row">\n            <div class="col">\n              <h4>Insertions ({{releaseorder.insertions.length}} / {{availableAds}})</h4>\n            </div>    \n          </div>\n          <br>\n      \n          <ng-template #insertionTemplate let-date="date" let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled" let-focused="focused">\n            <span class="custom-day"\n                  [class.focused]="focused"\n                  [class.selected]="isSelected(date)"\n                  [class.text-muted]="date.month !== currentMonth || disabled">\n              {{ date.day }}\n            </span>\n          </ng-template>\n          \n          <ngb-datepicker [(ngModel)]="currentInsertionDate"\n                          name="currentInsertionDate"\n                          [dayTemplate]="insertionTemplate"\n                          (select)="addInsertion($event)"></ngb-datepicker>\n        </ng-container>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Premiums</mat-panel-title>\n          <mat-panel-description>Select Premiums</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <ng-container *ngIf="isTypeWords">\n          <div class="form-row">\n            <div class="col-auto align-self-center">\n              <mat-checkbox name="cBox" [(ngModel)]="releaseorder.PremiumBox.Included"></mat-checkbox>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Box" name="premiumBox" [(ngModel)]="releaseorder.PremiumBox.Amount" required #premiumBoxField="ngModel">\n                <mat-error *ngIf="premiumBoxField.errors && premiumBoxField.errors.required">\n                  Box Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class="form-row">\n            <div class="col-auto align-self-center">\n              <mat-checkbox name="cBaseColour" [(ngModel)]="releaseorder.PremiumBaseColour.Included"></mat-checkbox>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Base Colour" name="premiumBaseColour" [(ngModel)]="releaseorder.PremiumBaseColour.Amount" required #premiumBaseColourField="ngModel">\n                <mat-error *ngIf="premiumBaseColourField.errors && premiumBaseColourField.errors.required">\n                  Base Colour Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class="form-row">\n            <div class="col-auto align-self-center">\n              <mat-checkbox name="cCheckMark" [(ngModel)]="releaseorder.PremiumCheckMark.Included"></mat-checkbox>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Check Mark" name="premiumCheckMark" [(ngModel)]="releaseorder.PremiumCheckMark.Amount" required #premiumCheckMarkField="ngModel">\n                <mat-error *ngIf="premiumCheckMarkField.errors && premiumCheckMarkField.errors.required">\n                  Check Mark Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class="form-row">\n            <div class="col-auto align-self-center">\n              <mat-checkbox name="cEmailId" [(ngModel)]="releaseorder.PremiumEmailId.Included"></mat-checkbox>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Email" name="premiumEmailId" [(ngModel)]="releaseorder.PremiumEmailId.Amount" required #premiumEmailIdField="ngModel">\n                <mat-error *ngIf="premiumEmailIdField.errors && premiumEmailIdField.errors.required">\n                  Email Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Quantity" name="premiumEmailIdQuantity" [(ngModel)]="releaseorder.PremiumEmailId.Quantity" required #premiumEmailIdQuantityField="ngModel">\n                <mat-error *ngIf="premiumEmailIdQuantityField.errors && premiumEmailIdQuantityField.errors.required">\n                  Email Premium Quantity is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class="form-row">\n            <div class="col-auto align-self-center">\n              <mat-checkbox name="cWebsite" [(ngModel)]="releaseorder.PremiumWebsite.Included"></mat-checkbox>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Website" name="premiumWebsite" [(ngModel)]="releaseorder.PremiumWebsite.Amount" required #premiumWebsiteField="ngModel">\n                <mat-error *ngIf="premiumWebsiteField.errors && premiumWebsiteField.errors.required">\n                  Website Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Quantity" name="premiumWebsiteQuantity" [(ngModel)]="releaseorder.PremiumWebsite.Quantity" required #premiumWebsiteQuantityField="ngModel">\n                <mat-error *ngIf="premiumWebsiteQuantityField.errors && premiumWebsiteQuantityField.errors.required">\n                  Website Premium Quantity is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class="form-row">\n            <div class="col-auto align-self-center">\n              <mat-checkbox name="cExtraWords" [(ngModel)]="releaseorder.PremiumExtraWords.Included"></mat-checkbox>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Extra Words" name="premiumExtraWords" [(ngModel)]="releaseorder.PremiumExtraWords.Amount" required #premiumExtraWordsField="ngModel">\n                <mat-error *ngIf="premiumExtraWordsField.errors && premiumExtraWordsField.errors.required">\n                  Extra Words Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Quantity" name="premiumExtraWordsQuantity" [(ngModel)]="releaseorder.PremiumExtraWords.Quantity" required #premiumExtraWordsQuantityField="ngModel">\n                <mat-error *ngIf="premiumExtraWordsQuantityField.errors && premiumExtraWordsQuantityField.errors.required">\n                  Extra Words Premium Quantity is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngIf="!isTypeWords">\n          <div class="row">\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Type" name="premiumType" [(ngModel)]="releaseorder.PremiumCustom.PremiumType" required #premiumTypeField="ngModel">\n                <mat-error *ngIf="premiumTypeField.errors && premiumTypeField.errors.required">\n                  Premium Type is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Amount" name="premiumAmount" [(ngModel)]="releaseorder.PremiumCustom.Amount" required #premiumAmountField="ngModel">\n                <span matSuffix>{{releaseorder.PremiumCustom.Percentage ? \'%\' : \'\'}}</span>\n                <mat-error *ngIf="premiumAmountField.errors && premiumAmountField.errors.required">\n                  Premium Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <mat-checkbox class="my-2" name="premiumPercent" [(ngModel)]="releaseorder.PremiumCustom.Percentage">Amount in Percentage</mat-checkbox>\n        </ng-container>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Discounts</mat-panel-title>\n          <mat-panel-description>Enter Discounts</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-group">\n          <label for="publicationDiscount">Publication Discount</label>\n          <input type="number" class="form-control" id="publicationDiscount" name="publicationDiscount" placeholder="Enter Publication Discount" [(ngModel)]="releaseorder.publicationDiscount" required #publicationDiscountField="ngModel">\n        </div>\n        \n        <div *ngIf="publicationDiscountField.invalid && (publicationDiscountField.dirty || publicationDiscountField.touched)" class="text-danger">\n          <div *ngIf="publicationDiscountField.errors.required">\n            Publication Discount is required.\n          </div>\n          <br>\n        </div>\n        \n        <div class="form-group">\n          <label for="agencyDiscount1">Agency Discount 1</label>\n          <input type="number" class="form-control" id="agencyDiscount1" name="agencyDiscount1" placeholder="Enter Agency Discount" [(ngModel)]="releaseorder.agencyDiscount1" required #agencyDiscount1Field="ngModel">\n        </div>\n        \n        <div *ngIf="agencyDiscount1Field.invalid && (agencyDiscount1Field.dirty || agencyDiscount1Field.touched)" class="text-danger">\n          <div *ngIf="agencyDiscount1Field.errors.required">\n            Agency Discount 1 is required.\n          </div>\n          <br>\n        </div>\n    \n        <div class="form-group">\n          <label for="agencyDiscount2">Agency Discount 2</label>\n          <input type="number" class="form-control" id="agencyDiscount2" name="agencyDiscount2" placeholder="Enter Agency Discount" [(ngModel)]="releaseorder.agencyDiscount2" required #agencyDiscount2Field="ngModel">\n        </div>\n        \n        <div *ngIf="agencyDiscount2Field.invalid && (agencyDiscount2Field.dirty || agencyDiscount2Field.touched)" class="text-danger">\n          <div *ngIf="agencyDiscount2Field.errors.required">\n            Agency Discount 2 is required.\n          </div>\n          <br>\n        </div>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Payment Details</mat-panel-title>\n          <mat-panel-description>Enter Payment details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-group">\n          <label>Type</label>\n          <select class="form-control" name="paymentType" [(ngModel)]="releaseorder.paymentType" id="paymentType" #paymentTypeField="ngModel" required>\n            <option *ngFor="let item of paymentTypes" [value]="item">{{item}}</option>\n          </select>\n        </div>\n    \n        <ng-container *ngIf="releaseorder.paymentType != \'Cash\'">\n          <div class="form-group">\n            <label for="paymentDate">Date</label>\n            <input type="date" class="form-control" id="paymentDate" name="paymentDate" placeholder="Enter Date" [(ngModel)]="releaseorder.paymentDate" required #paymentDateField="ngModel">\n          </div>\n          \n          <div *ngIf="paymentDateField.invalid && (paymentDateField.dirty || paymentDateField.touched)" class="text-danger">\n            <div *ngIf="paymentDateField.errors.required">\n              Date is required.\n            </div>\n            <br>\n          </div>\n    \n          <div class="form-group">\n            <label for="paymentCheque">No</label>\n            <input type="text" class="form-control" id="paymentCheque" name="paymentCheque" placeholder="Enter No" [(ngModel)]="releaseorder.paymentNo" required #paymentChequeField="ngModel">\n          </div>\n          \n          <div *ngIf="paymentChequeField.invalid && (paymentChequeField.dirty || paymentChequeField.touched)" class="text-danger">\n            <div *ngIf="paymentChequeField.errors.required">\n              No is required.\n            </div>\n            <br>\n          </div>\n    \n          <div class="form-group">\n            <label for="paymentAmount">Amount</label>\n            <input type="number" class="form-control" id="paymentAmount" name="paymentAmount" placeholder="Enter Amount" [(ngModel)]="releaseorder.paymentAmount" required #paymentAmountField="ngModel">\n          </div>\n          \n          <div *ngIf="paymentAmountField.invalid && (paymentAmountField.dirty || paymentAmountField.touched)" class="text-danger">\n            <div *ngIf="paymentAmountField.errors.required">\n              Amount is required.\n            </div>\n            <br>\n          </div>\n    \n          <ng-container *ngIf="releaseorder.paymentType == \'Cheque\'">\n            <div class="form-group">\n              <label for="bankName">Bank Name</label>\n              <input type="text" class="form-control" id="bankName" name="bankName" placeholder="Enter Bank Name" [(ngModel)]="releaseorder.paymentBankName" required #bankNameField="ngModel">\n            </div>\n            \n            <div *ngIf="bankNameField.invalid && (bankNameField.dirty || bankNameField.touched)" class="text-danger">\n              <div *ngIf="bankNameField.errors.required">\n                Bank Name is required.\n              </div>\n              <br>\n            </div>\n          </ng-container>\n        </ng-container>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Executive Details</mat-panel-title>\n          <mat-panel-description>Enter Executive details</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="form-group">\n          <label for="executiveName">Executive Name</label>\n          <input type="text" class="form-control" [ngbTypeahead]="searchExecutive" id="executiveName" placeholder="Enter Executive Name" [(ngModel)]="executive" name="executiveName" required #executiveNameField="ngModel" [resultFormatter]="executiveResultFormatter" [inputFormatter]="executiveInputFormatter">\n        </div>\n        \n        <div *ngIf="executiveNameField.invalid && (executiveNameField.dirty || executiveNameField.touched)" class="text-danger">\n          <div *ngIf="executiveNameField.errors.required">\n            Executive Name is required.\n          </div>\n          <br>\n        </div>\n    \n        <div class="form-group">\n          <label for="executiveOrg">Executive Organisation</label>\n          <input type="text" class="form-control" id="executiveOrg" placeholder="Enter Executive Organisation" [(ngModel)]="releaseorder.executiveOrg" name="executiveOrg" required #executiveOrgField="ngModel">\n        </div>\n        \n        <div *ngIf="executiveOrgField.invalid && (executiveOrgField.dirty || executiveOrgField.touched)" class="text-danger">\n          <div *ngIf="executiveOrgField.errors.required">\n            Executive Organisation is required.\n          </div>\n          <br>\n        </div>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addExecutive()">Add to Directory</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>Other Charges</mat-panel-title>\n          <mat-panel-description>Enter Other Charges</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class="text-muted" *ngIf="releaseorder.otherCharges.length == 0">\n          No Other Charges\n        </div>\n\n        <div *ngFor="let item of releaseorder.otherCharges; index as i" class="mb-1">\n          <div class="form-row">\n            <div class="col">\n              <mat-form-field>\n                <input matInput placeholder="Type" name="otherChargesType-{{i}}" [(ngModel)]="item.chargeType" required #otherChargesTypeField="ngModel">\n                <mat-error *ngIf="otherChargesTypeField.errors && otherChargesTypeField.errors.required">\n                  Type is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col">\n              <mat-form-field>\n                <input type="number" matInput placeholder="Amount" name="otherCharges-{{i}}" [(ngModel)]="item.amount" required #otherChargesField="ngModel">\n                <mat-error *ngIf="otherChargesField.errors && otherChargesField.errors.required">\n                  Amount is required.\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class="col-auto col-form-label">\n              <button mat-icon-button color="warn" type="button" (click)="removeOtherCharge(i)">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n        \n        <br>\n\n        <mat-action-row>\n          <button mat-button type="button" color="primary" (click)="addCharges()">Add More</button>\n        </mat-action-row>\n        \n        <mat-form-field>\n          <input matInput placeholder="Remark" name="otherRemark" [(ngModel)]="releaseorder.otherRemark">\n        </mat-form-field>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <br><br>\n\n    <div class="card mb-3">\n      <ul class="list-group list-group-flush">\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Net Amount</div>\n            <div class="col-md-8">{{netAmount}} ({{taxDisplay}})</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Net Amount in Words</div>\n            <div class="col-md-8">{{amountToWords(netAmount)}} ({{taxDisplay}})</div>\n          </div>\n        </li>\n        <li class="list-group-item">\n          <div class="row">\n            <div class="col-md-4">Client Payment</div>\n            <div class="col-md-8">{{clientPayment}}</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    \n    <br>\n    \n    <button type="submit" class="btn btn-success" [disabled]="!roForm.form.valid">Save</button>\n    <button class="btn btn-danger" (click)="cancel()">Cancel</button>\n  </form>\n</div>\n'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/release-order/release-order/release-order.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_16__release_order_api_service__["a" /* ReleaseOrderApiService */],
            __WEBPACK_IMPORTED_MODULE_9__directory_media_houses_media_house_api_service__["a" /* MediaHouseApiService */],
            __WEBPACK_IMPORTED_MODULE_10__directory_clients_client_api_service__["a" /* ClientApiService */],
            __WEBPACK_IMPORTED_MODULE_14__directory_executives_executive_api_service__["a" /* ExecutiveApiService */],
            __WEBPACK_IMPORTED_MODULE_18__rate_card_rate_card_api_service__["a" /* RateCardApiService */],
            __WEBPACK_IMPORTED_MODULE_15__services_state_api_service__["a" /* StateApiService */],
            __WEBPACK_IMPORTED_MODULE_20__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_21__services_goback_service__["a" /* GobackService */]])
    ], ReleaseOrderComponent);
    return ReleaseOrderComponent;
}());

//# sourceMappingURL=release-order.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__release_order_api_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReleaseOrderListComponent = (function () {
    function ReleaseOrderListComponent(api, dialog, goback) {
        this.api = api;
        this.dialog = dialog;
        this.goback = goback;
        this.releaseOrders = [];
        this.displayedColumns = ['number', 'publication', 'client', 'action'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatTableDataSource */]();
    }
    ReleaseOrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.api.getReleaseOrders().subscribe(function (data) {
            _this.releaseOrders = data;
            _this.dataSource.data = data;
        });
    };
    ReleaseOrderListComponent.prototype.deleteReleaseOrder = function (releaseOrder) {
        var _this = this;
        this.dialog.confirmDeletion("Are you sure you want to delete this Release Order?").subscribe(function (confirm) {
            if (!confirm)
                return;
            _this.api.deleteReleaseOrder(releaseOrder).subscribe(function (data) {
                if (data.success) {
                    _this.releaseOrders = _this.releaseOrders.filter(function (c) { return c.id !== releaseOrder.id; });
                }
                else {
                    console.log(data);
                }
            }, function (err) { return console.log(err); });
        });
    };
    ReleaseOrderListComponent.prototype.sendMsg = function () {
        this.dialog.getMailingDetails().subscribe(function (mailingDetails) {
            if (mailingDetails) {
                console.log(mailingDetails);
            }
        });
    };
    ReleaseOrderListComponent.prototype.mailingDetails = function (mailingDetails) { };
    ReleaseOrderListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-release-order-list',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/release-order/release-order-list/release-order-list.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Release Orders</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <button class="fab" (click)="this.goback.gotoComponent(\'releaseorders/new\')">\n    <mat-icon>add</mat-icon>\n  </button>\n\n  <br>\n  <p *ngIf="releaseOrders.length == 0" class="text-muted">\n    No Release Orders\n  </p>\n\n  <div class="mat-elevation-z8">\n    <mat-table #table [dataSource]="dataSource">\n      <ng-container matColumnDef="number">\n        <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\n        <mat-cell *matCellDef="let element">\n          <a [routerLink]="[\'/releaseorders\', element.id]">{{element.releaseOrderNO}}</a>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef="publication">\n        <mat-header-cell *matHeaderCellDef>Publication</mat-header-cell>\n        <mat-cell *matCellDef="let element">{{element.publicationName}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef="client">\n        <mat-header-cell *matHeaderCellDef>Client</mat-header-cell>\n        <mat-cell *matCellDef="let element">{{element.clientName}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef="action">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef="let element">\n          <mat-menu #releaseOrderMenu="matMenu">\n            <button mat-menu-item [routerLink]="[\'/releaseorders/new\', element.id]">\n              <mat-icon>add</mat-icon> Copy into New\n            </button>\n            <button mat-menu-item [routerLink]="[\'/invoices/new\', element.id]">\n              <mat-icon>add</mat-icon> Create Invoice\n            </button>\n            <button mat-menu-item [routerLink]="[\'/releaseorders/edit\', element.id]">\n              <mat-icon>edit</mat-icon> Edit\n            </button>\n            <button mat-menu-item (click)="sendMsg()">\n              <mat-icon>mail</mat-icon> Mail\n            </button>\n            <button mat-menu-item class="text-danger" (click)="deleteReleaseOrder(element)">\n              <mat-icon>delete</mat-icon> Delete\n            </button>\n          </mat-menu>\n          \n          <button mat-icon-button [matMenuTriggerFor]="releaseOrderMenu">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>\n      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>\n    </mat-table>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/release-order/release-order-list/release-order-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__release_order_api_service__["a" /* ReleaseOrderApiService */], __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */]])
    ], ReleaseOrderListComponent);
    return ReleaseOrderListComponent;
}());

//# sourceMappingURL=release-order-list.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__release_order__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__release_order_api_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReleaseOrderDetailsComponent = (function () {
    function ReleaseOrderDetailsComponent(api, route, goback) {
        this.api = api;
        this.route = route;
        this.goback = goback;
        this.releaseOrder = new __WEBPACK_IMPORTED_MODULE_1__release_order__["c" /* ReleaseOrder */]();
    }
    ReleaseOrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.releaseOrder = data.releaseOrder;
        });
    };
    ReleaseOrderDetailsComponent.prototype.toDate = function (date) {
        return new Date(date.year, date.month - 1, date.day);
    };
    ReleaseOrderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-release-order-details',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/release-order/release-order-details/release-order-details.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Release Order: {{releaseOrder.releaseOrderNO}}</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <button class="fab bg-info" [routerLink]="[\'/releaseorders/edit\', releaseOrder.id]">\n    <mat-icon>edit</mat-icon>\n  </button>\n\n  <div class="row">\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Publication Details</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Name</div>\n              <div class="col-md-8">{{releaseOrder.publicationName}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Edition</div>\n              <div class="col-md-8">{{releaseOrder.publicationEdition}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">State</div>\n              <div class="col-md-8">{{releaseOrder.publicationState}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">GSTIN</div>\n              <div class="col-md-8">{{releaseOrder.publicationGSTIN}}</div>\n            </div>\n          </li>          \n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Media Type</div>\n              <div class="col-md-8">{{releaseOrder.mediaType}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Client Details</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Name</div>\n              <div class="col-md-8">{{releaseOrder.clientName}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">State</div>\n              <div class="col-md-8">{{releaseOrder.clientState}}</div>\n            </div>\n          </li>          \n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">GSTIN</div>\n              <div class="col-md-8">{{releaseOrder.clientGSTIN}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Ad Details</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Ad Type</div>\n              <div class="col-md-8">{{releaseOrder.adType}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Rate</div>\n              <div class="col-md-8">{{releaseOrder.rate}} {{releaseOrder.unit}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Size</div>\n              <div class="col-md-8">{{releaseOrder.adSizeL}} x {{releaseOrder.adSizeW}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Total Space</div>\n              <div class="col-md-8">{{releaseOrder.adTotalSpace}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Hue</div>\n              <div class="col-md-8">{{releaseOrder.adHue}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Edition</div>\n              <div class="col-md-8">{{releaseOrder.adEdition}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Position</div>\n              <div class="col-md-8">{{releaseOrder.adPosition}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Total No of Ads</div>\n              <div class="col-md-8">{{releaseOrder.adTotal}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Ad Gross Amount</div>\n              <div class="col-md-8">{{releaseOrder.adGrossAmount}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Publication Discount</div>\n              <div class="col-md-8">{{releaseOrder.publicationDiscount}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Agency Discount 1</div>\n              <div class="col-md-8">{{releaseOrder.agencyDiscount1}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Agency Discount 2</div>\n              <div class="col-md-8">{{releaseOrder.agencyDiscount2}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Tax Amount</div>\n              <div class="col-md-8">{{releaseOrder.taxAmount}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Net Amount in Figures</div>\n              <div class="col-md-8">{{releaseOrder.netAmountFigures}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Net Amount in Words</div>\n              <div class="col-md-8">{{releaseOrder.netAmountWords}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Caption</div>\n              <div class="col-md-8">{{releaseOrder.caption}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Remark</div>\n              <div class="col-md-8">{{releaseOrder.remark}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Payment Details</div>\n              <div class="col-md-8"></div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="col-lg-6">\n      <div class="card mb-3">\n        <div class="card-header">Insertions</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngFor="let item of releaseOrder.insertions" [class.bg-success]="item.marked" [class.text-light]="item.marked">\n            {{toDate(item.date) | date}}\n          </li>\n        </ul>\n      </div>\n\n      <div class="card mb-3">\n        <div class="card-header">Categories</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item" *ngIf="releaseOrder.adCategory1">{{releaseOrder.adCategory1}}</li>\n          <li class="list-group-item" *ngIf="releaseOrder.adCategory2">{{releaseOrder.adCategory2}}</li>\n          <li class="list-group-item" *ngIf="releaseOrder.adCategory3">{{releaseOrder.adCategory3}}</li>\n          <li class="list-group-item" *ngIf="releaseOrder.adCategory4">{{releaseOrder.adCategory4}}</li>\n          <li class="list-group-item" *ngIf="releaseOrder.adCategory5">{{releaseOrder.adCategory5}}</li>\n          <li class="list-group-item" *ngIf="releaseOrder.adCategory6">{{releaseOrder.adCategory6}}</li>\n        </ul>\n      </div>\n\n      <div class="card mb-3">\n        <div class="card-header">Other Details</div>\n        <ul class="list-group list-group-flush">\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Executive Name</div>\n              <div class="col-md-8">{{releaseOrder.executiveName}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div>Other Charges</div>\n            <ul class="list-group list-group-flush">\n              <li class="list-group-item" *ngFor="let item of releaseOrder.otherCharges">\n                <div class="row">\n                    <div class="col-md-8">{{item.chargeType}}</div>\n                  <div class="col-md-4">{{item.amount}}</div>                  \n                </div>\n              </li>\n            </ul>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Remark</div>\n              <div class="col-md-8">{{releaseOrder.otherRemark}}</div>\n            </div>\n          </li>\n          <li class="list-group-item">\n            <div class="row">\n              <div class="col-md-4">Client Payment</div>\n              <div class="col-md-8">{{releaseOrder.clientPayment}}</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/release-order/release-order-details/release-order-details.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__release_order_api_service__["a" /* ReleaseOrderApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_goback_service__["a" /* GobackService */]])
    ], ReleaseOrderDetailsComponent);
    return ReleaseOrderDetailsComponent;
}());

//# sourceMappingURL=release-order-details.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvailableInsertion = (function () {
    function AvailableInsertion(insertion, checked) {
        if (checked === void 0) { checked = false; }
        this.insertion = insertion;
        this.checked = checked;
    }
    return AvailableInsertion;
}());
var InvoiceComponent = (function () {
    function InvoiceComponent(route, goback) {
        this.route = route;
        this.goback = goback;
        this.invoice = new __WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* Invoice */]();
        this.availableInsertions = [];
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goback.urlInit();
        this.route.data.subscribe(function (data) {
            _this.releaseOrder = data.releaseOrder;
            _this.invoice.releaseOrder = data.releaseOrder.id;
            _this.releaseOrder.insertions.forEach(function (element) {
                if (!element.marked) {
                    _this.availableInsertions.push(new AvailableInsertion(element));
                }
            });
        });
    };
    InvoiceComponent.prototype.toDate = function (date) {
        return new Date(date.year, date.month - 1, date.day);
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/invoice/invoice/invoice.component.html"*/'<mat-toolbar>  \n  <mat-toolbar-row>\n    <div class="container">Create Invoice</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<div class="container">\n  <h3>Select Insertions</h3>\n\n  <br>\n\n  <div *ngFor="let item of availableInsertions">\n    <mat-checkbox [(ngModel)]="item.checked">\n      {{toDate(item.insertion.date) | date}}\n    </mat-checkbox>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/invoice/invoice/invoice.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());

//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(469);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directory_directory_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__co_users_co_users_module__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rate_card_rate_card_module__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__release_order_release_order_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_navbar_navbar_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_phone_verify_phone_verify_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_view_profile_view_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_dashboard_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_firm_profile_view_firm_profile_view_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_change_psw_change_psw_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_forgot_psw_forgot_psw_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_not_found_not_found_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_reset_password_reset_password_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__invoice_invoice_module__ = __webpack_require__(655);
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
                __WEBPACK_IMPORTED_MODULE_30__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_13__directory_directory_module__["a" /* DirectoryModule */],
                __WEBPACK_IMPORTED_MODULE_14__co_users_co_users_module__["a" /* CoUsersModule */],
                __WEBPACK_IMPORTED_MODULE_15__rate_card_rate_card_module__["a" /* RateCardModule */],
                __WEBPACK_IMPORTED_MODULE_16__release_order_release_order_module__["a" /* ReleaseOrderModule */],
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

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__ = __webpack_require__(327);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_checkbox__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_input__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_expansion__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_datepicker__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_snack_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_select__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_table__ = __webpack_require__(404);
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
    __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["n" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__["a" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material_snack_bar__["b" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["c" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__["a" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_16__angular_material_select__["a" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_material_table__["b" /* MatTableModule */]
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

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailingDetails; });
var MailingDetails = (function () {
    function MailingDetails() {
        this.to = "";
        this.cc = "";
        this.bcc = "";
        this.subject = "";
        this.content = "";
    }
    return MailingDetails;
}());

//# sourceMappingURL=mailing-details.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dialog_dialog_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mailing_details_mailing_details_component__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.confirmDeletion = function (msg) {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_dialog_dialog_component__["a" /* DialogComponent */], {
            data: {
                title: 'Confirm Deletion',
                message: msg,
                ok: true,
                cancel: true
            }
        }).afterClosed();
    };
    DialogService.prototype.getMailingDetails = function (to) {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__components_mailing_details_mailing_details_component__["a" /* MailingDetailsComponent */], {
            width: '400px',
            data: {
                to: to
            }
        }).afterClosed();
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */]])
    ], DialogService);
    return DialogService;
}());

//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,63}$/;
var VerifyEmailDirective = (function () {
    function VerifyEmailDirective() {
    }
    VerifyEmailDirective_1 = VerifyEmailDirective;
    VerifyEmailDirective.prototype.validate = function (control) {
        if (control.value && !emailRegex.test(control.value)) {
            return { 'email': { value: control.value } };
        }
        return null;
    };
    VerifyEmailDirective = VerifyEmailDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[verify-email]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: VerifyEmailDirective_1, multi: true }]
        })
    ], VerifyEmailDirective);
    return VerifyEmailDirective;
    var VerifyEmailDirective_1;
}());

//# sourceMappingURL=verify-email.directive.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyMinDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyMinDirective = (function () {
    function VerifyMinDirective() {
    }
    VerifyMinDirective_1 = VerifyMinDirective;
    VerifyMinDirective.prototype.validate = function (control) {
        if (control.value && control.value < this.min) {
            return { 'min': { value: control.value } };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('verify-min'),
        __metadata("design:type", Number)
    ], VerifyMinDirective.prototype, "min", void 0);
    VerifyMinDirective = VerifyMinDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[verify-min]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: VerifyMinDirective_1, multi: true }]
        })
    ], VerifyMinDirective);
    return VerifyMinDirective;
    var VerifyMinDirective_1;
}());

//# sourceMappingURL=verify-min.directive.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyMaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyMaxDirective = (function () {
    function VerifyMaxDirective() {
    }
    VerifyMaxDirective_1 = VerifyMaxDirective;
    VerifyMaxDirective.prototype.validate = function (control) {
        if (control.value && control.value > this.max) {
            return { 'max': { value: control.value } };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('verify-max'),
        __metadata("design:type", Number)
    ], VerifyMaxDirective.prototype, "max", void 0);
    VerifyMaxDirective = VerifyMaxDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[verify-max]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: VerifyMaxDirective_1, multi: true }]
        })
    ], VerifyMaxDirective);
    return VerifyMaxDirective;
    var VerifyMaxDirective_1;
}());

//# sourceMappingURL=verify-max.directive.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyLengthDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyLengthDirective = (function () {
    function VerifyLengthDirective() {
    }
    VerifyLengthDirective_1 = VerifyLengthDirective;
    VerifyLengthDirective.prototype.validate = function (control) {
        if (control.value) {
            var text = control.value;
            if (text.length != this.length) {
                return { 'length': { value: control.value } };
            }
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('verify-fix-length'),
        __metadata("design:type", Number)
    ], VerifyLengthDirective.prototype, "length", void 0);
    VerifyLengthDirective = VerifyLengthDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[verify-length]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: VerifyLengthDirective_1, multi: true }]
        })
    ], VerifyLengthDirective);
    return VerifyLengthDirective;
    var VerifyLengthDirective_1;
}());

//# sourceMappingURL=verify-fix-length.directive.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyMultipleOfDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyMultipleOfDirective = (function () {
    function VerifyMultipleOfDirective() {
    }
    VerifyMultipleOfDirective_1 = VerifyMultipleOfDirective;
    VerifyMultipleOfDirective.prototype.validate = function (control) {
        if (control.value && control.value % this.multipleOf != 0) {
            return { 'multipleOf': { value: control.value } };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('verify-multiple-of'),
        __metadata("design:type", Number)
    ], VerifyMultipleOfDirective.prototype, "multipleOf", void 0);
    VerifyMultipleOfDirective = VerifyMultipleOfDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[verify-multiple-of]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: VerifyMultipleOfDirective_1, multi: true }]
        })
    ], VerifyMultipleOfDirective);
    return VerifyMultipleOfDirective;
    var VerifyMultipleOfDirective_1;
}());

//# sourceMappingURL=verify-multiple-of.directive.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEqualsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyEqualsDirective = (function () {
    function VerifyEqualsDirective() {
    }
    VerifyEqualsDirective_1 = VerifyEqualsDirective;
    VerifyEqualsDirective.prototype.validate = function (control) {
        if (control.value) {
            var text = control.value;
            if (text != this.equals) {
                return { 'equals': { value: control.value } };
            }
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('verify-equals'),
        __metadata("design:type", String)
    ], VerifyEqualsDirective.prototype, "equals", void 0);
    VerifyEqualsDirective = VerifyEqualsDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[verify-equals]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: VerifyEqualsDirective_1, multi: true }]
        })
    ], VerifyEqualsDirective);
    return VerifyEqualsDirective;
    var VerifyEqualsDirective_1;
}());

//# sourceMappingURL=verify-equals.directive.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firm_profile_edit_firm_profile_edit_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plan_selector_plan_selector_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_selector_item_template_selector_item_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template_selector_template_selector_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__billing_details_billing_details_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__empty_empty_component__ = __webpack_require__(224);
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
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(AdminModule_1)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__empty_empty_component__["a" /* EmptyComponent */],
                __WEBPACK_IMPORTED_MODULE_2__firm_profile_edit_firm_profile_edit_component__["a" /* FirmProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_3__plan_selector_plan_selector_component__["a" /* PlanSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_4__template_selector_item_template_selector_item_component__["a" /* TemplateSelectorItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__template_selector_template_selector_component__["a" /* TemplateSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__billing_details_billing_details_component__["a" /* BillingDetailsComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__billing_details_billing_details_component__["a" /* BillingDetailsComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
    var AdminModule_1;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 640:
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

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSelectorItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_template__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateSelectorItemComponent = (function () {
    function TemplateSelectorItemComponent() {
        this.templateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedIndex = 0;
    }
    TemplateSelectorItemComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(TemplateSelectorItemComponent.prototype, "templates", {
        get: function () {
            return this._templates;
        },
        set: function (templates) {
            this._templates = templates;
            this.selectedTemplate = templates[this.selectedIndex];
        },
        enumerable: true,
        configurable: true
    });
    ;
    TemplateSelectorItemComponent.prototype.updateTemplate = function () {
        this.selectedTemplate = this.templates[this.selectedIndex];
        this.templateChanged.emit(this.selectedTemplate);
    };
    TemplateSelectorItemComponent.prototype.NextTemplate = function () {
        if (this.selectedIndex == this.templates.length - 1)
            return;
        ++this.selectedIndex;
        this.updateTemplate();
    };
    TemplateSelectorItemComponent.prototype.PrevTemplate = function () {
        if (this.selectedIndex == 0)
            return;
        --this.selectedIndex;
        this.updateTemplate();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TemplateSelectorItemComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TemplateSelectorItemComponent.prototype, "templateChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TemplateSelectorItemComponent.prototype, "templates", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_template__["a" /* Template */])
    ], TemplateSelectorItemComponent.prototype, "selectedTemplate", void 0);
    TemplateSelectorItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-template-selector-item',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/admin/template-selector-item/template-selector-item.component.html"*/'<h3 class="text-center">{{name}}</h3>\n<hr>\n\n<br>\n\n<div class="text-center">\n  <p>{{selectedTemplate.name}}</p>\n\n  <img [src]="selectedTemplate.imgUrl" class="img-fluid">\n\n  <br><br>\n\n  <form>\n    <div class="form-group">\n      <label for="tnc">Terms and Conditions</label>\n      <textarea class="form-control" name="tnc" id="tnc" [(ngModel)]="tnc" placeholder="Enter Terms and Conditions"></textarea>\n    </div>\n  </form>\n\n  <br>\n\n  <button class="btn btn-primary" [disabled]="selectedIndex == 0" (click)="PrevTemplate()">Previous</button>\n      \n  <button class="btn btn-primary" [disabled]="selectedIndex == templates.length - 1" (click)="NextTemplate()">Next</button>\n</div>\n\n<br><br>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/admin/template-selector-item/template-selector-item.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TemplateSelectorItemComponent);
    return TemplateSelectorItemComponent;
}());

//# sourceMappingURL=template-selector-item.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_address__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_state_api_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_goback_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillingDetailsComponent = (function () {
    function BillingDetailsComponent(stateApi, goback) {
        this.stateApi = stateApi;
        this.goback = goback;
        this.billingAddress = new __WEBPACK_IMPORTED_MODULE_1__models_address__["a" /* Address */]();
        this.done = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    BillingDetailsComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    BillingDetailsComponent.prototype.submit = function () {
        this.done.emit({
            firmName: this.firmName,
            billingAddress: this.billingAddress,
            gstNo: this.gstNo
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BillingDetailsComponent.prototype, "done", void 0);
    BillingDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-billing-details',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/admin/billing-details/billing-details.component.html"*/'<form (ngSubmit)="submit()" #billingDetailsForm="ngForm">\n  <div class="form-group form-row">\n    <label class="col-md-3 col-form-label" for="firmName">Firm Name</label>\n    <input type="text" class="form-control col-md-9" id="firmName" name="firmName" placeholder="Enter Firm Name" [(ngModel)]="firmName" required #firmNameField="ngModel">\n  </div>\n\n  <div *ngIf="firmNameField.invalid && (firmNameField.dirty || firmNameField.touched)" class="text-danger">\n    <div *ngIf="firmNameField.errors.required">\n      Firm Name is required.\n    </div>\n    <br>\n  </div>\n\n  <div class="form-group form-row">\n    <label class="col-md-3 col-form-label" for="gstNo">GSTIN</label>\n    <input type="text" class="form-control col-md-9" id="gstNo" name="gstNo" placeholder="Enter GST Number" [(ngModel)]="gstNo" required minlength="15" maxlength="15" #gstNoField="ngModel">\n  </div>\n\n  <div *ngIf="gstNoField.invalid && (gstNoField.dirty || gstNoField.touched)" class="text-danger">\n    <div *ngIf="gstNoField.errors.required">\n      GSTIN is required.\n    </div>\n    <div *ngIf="gstNoField.errors.minlength || gstNoField.errors.maxlength">\n      GSTIN should be 15 characters long.\n    </div>\n    <br>\n  </div>\n\n  <h3 class="mb-3">Billing Address</h3>\n\n  <div class="form-group form-row">\n    <input type="text" class="form-control col-md-9" id="billingAddress" name="billingAddress" placeholder="Enter Billing Address" [(ngModel)]="billingAddress.address" required #billingAddressField="ngModel">\n  </div>\n\n  <div *ngIf="billingAddressField.invalid && (billingAddressField.dirty || billingAddressField.touched)" class="text-danger">\n    <div *ngIf="billingAddressField.errors.required">\n      Billing Address is required.\n    </div>\n    <br>\n  </div>\n\n  <div class="form-group form-row">\n    <label class="col-md-3 col-form-label" for="pincode">Pincode</label>\n    <input type="tel" minlength="6" maxlength="6" class="form-control col-md-9" id="pincode" name="pincode" placeholder="Enter Pincode" [(ngModel)]="billingAddress.pincode" required #pincodeField="ngModel">\n  </div>\n\n  <div *ngIf="pincodeField.invalid && (pincodeField.dirty || pincodeField.touched)" class="text-danger">\n    <div *ngIf="pincodeField.errors.required">\n      Pincode is required.\n    </div>\n    <div *ngIf="pincodeField.errors.minlength || pincodeField.errors.maxlength">\n      Pincode should be 6 characters long.\n    </div>\n    <br>\n  </div>\n\n  <div class="form-group form-row">\n    <label class="col-md-3 col-form-label" for="city">City</label>\n    <input type="text" class="form-control col-md-9" id="city" name="city" placeholder="Enter City" [(ngModel)]="billingAddress.city" required #cityField="ngModel">\n  </div>\n\n  <div *ngIf="cityField.invalid && (cityField.dirty || cityField.touched)" class="text-danger">\n    <div *ngIf="cityField.errors.required">\n      City is required.\n    </div>\n    <br>\n  </div>\n\n  <div class="form-group">\n    <label for="state">State</label>\n    <select class="form-control" id="state" name="state" [(ngModel)]="billingAddress.state" required #stateField="ngModel">\n      <option *ngFor="let state of stateApi.states" [value]="state">{{state}}</option>\n    </select>\n  </div>\n\n  <div *ngIf="stateField.invalid && (stateField.dirty || stateField.touched)" class="text-danger">\n    <div *ngIf="stateField.errors.required">\n      State is required.\n    </div>\n    <br>\n  </div>\n\n  <br>\n  <button class="btn btn-success" [disabled]="!billingDetailsForm.form.valid">Submit</button>\n</form>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/admin/billing-details/billing-details.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_state_api_service__["a" /* StateApiService */], __WEBPACK_IMPORTED_MODULE_3__services_goback_service__["a" /* GobackService */]])
    ], BillingDetailsComponent);
    return BillingDetailsComponent;
}());

//# sourceMappingURL=billing-details.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_admin_guard_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_plan_guard_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firm_resolver_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_view_profile_view_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_firm_profile_view_firm_profile_view_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_phone_verify_phone_verify_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_change_psw_change_psw_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_forgot_psw_forgot_psw_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_firm_profile_edit_firm_profile_edit_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_template_selector_template_selector_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_plan_selector_plan_selector_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_reset_password_reset_password_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_profile_resolver_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_empty_empty_component__ = __webpack_require__(224);
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
            firm: __WEBPACK_IMPORTED_MODULE_6__services_firm_resolver_service__["a" /* FirmResolver */]
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

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dir_dir_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_client_client_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clients_client_list_client_list_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clients_client_details_client_details_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clients_client_resolver_service__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__executives_executive_executive_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__executives_executive_list_executive_list_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__executives_executive_details_executive_details_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__executives_executive_resolver_service__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__media_houses_media_house_media_house_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__media_houses_media_house_list_media_house_list_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__media_houses_media_house_details_media_house_details_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__media_houses_media_house_resolver_service__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: 'dir',
        component: __WEBPACK_IMPORTED_MODULE_2__dir_dir_component__["a" /* DirComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: 'clients',
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__clients_client_list_client_list_component__["a" /* ClientListComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__clients_client_client_component__["a" /* ClientComponent */] },
                    {
                        path: 'edit/:id',
                        component: __WEBPACK_IMPORTED_MODULE_3__clients_client_client_component__["a" /* ClientComponent */],
                        resolve: {
                            client: __WEBPACK_IMPORTED_MODULE_6__clients_client_resolver_service__["a" /* ClientResolver */]
                        }
                    },
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_5__clients_client_details_client_details_component__["a" /* ClientDetailsComponent */],
                        resolve: {
                            client: __WEBPACK_IMPORTED_MODULE_6__clients_client_resolver_service__["a" /* ClientResolver */]
                        }
                    },
                ]
            },
            {
                path: 'executives',
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__executives_executive_list_executive_list_component__["a" /* ExecutiveListComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_7__executives_executive_executive_component__["a" /* ExecutiveComponent */] },
                    {
                        path: 'edit/:id',
                        component: __WEBPACK_IMPORTED_MODULE_7__executives_executive_executive_component__["a" /* ExecutiveComponent */],
                        resolve: {
                            executive: __WEBPACK_IMPORTED_MODULE_10__executives_executive_resolver_service__["a" /* ExecutiveResolver */]
                        }
                    },
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_9__executives_executive_details_executive_details_component__["a" /* ExecutiveDetailsComponent */],
                        resolve: {
                            executive: __WEBPACK_IMPORTED_MODULE_10__executives_executive_resolver_service__["a" /* ExecutiveResolver */]
                        }
                    }
                ]
            },
            {
                path: 'media_houses',
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__media_houses_media_house_list_media_house_list_component__["a" /* MediaHouseListComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_11__media_houses_media_house_media_house_component__["a" /* MediaHouseComponent */] },
                    {
                        path: 'edit/:id',
                        component: __WEBPACK_IMPORTED_MODULE_11__media_houses_media_house_media_house_component__["a" /* MediaHouseComponent */],
                        resolve: {
                            mediaHouse: __WEBPACK_IMPORTED_MODULE_14__media_houses_media_house_resolver_service__["a" /* MediaHouseResolver */]
                        }
                    },
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_13__media_houses_media_house_details_media_house_details_component__["a" /* MediaHouseDetailsComponent */],
                        resolve: {
                            mediaHouse: __WEBPACK_IMPORTED_MODULE_14__media_houses_media_house_resolver_service__["a" /* MediaHouseResolver */]
                        }
                    }
                ]
            },
            { path: '', redirectTo: 'clients', pathMatch: 'full' }
        ]
    }
];
var DirRoutingModule = (function () {
    function DirRoutingModule() {
    }
    DirRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], DirRoutingModule);
    return DirRoutingModule;
}());

//# sourceMappingURL=dir-routing.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoUsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__co_users_routing_module__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__co_users_co_users_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__co_user_co_user_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__role_control_role_control_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__role_edit_role_edit_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__co_user_api_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */].forRoot(CoUsersModule_1),
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__co_users_routing_module__["a" /* CoUsersRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__co_users_co_users_component__["a" /* CoUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_4__co_user_co_user_component__["a" /* CoUserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__role_control_role_control_component__["a" /* RoleControlComponent */],
                __WEBPACK_IMPORTED_MODULE_6__role_edit_role_edit_component__["a" /* RoleEditComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__co_user_api_service__["a" /* CoUserApiService */]]
        })
    ], CoUsersModule);
    return CoUsersModule;
    var CoUsersModule_1;
}());

//# sourceMappingURL=co-users.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoUsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_plan_guard_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__co_users_co_users_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__co_user_co_user_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__role_edit_role_edit_component__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'coUsers',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */], __WEBPACK_IMPORTED_MODULE_4__guards_plan_guard_service__["a" /* PlanGuard */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__co_users_co_users_component__["a" /* CoUsersComponent */]
            },
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_6__co_user_co_user_component__["a" /* CoUserComponent */]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_7__role_edit_role_edit_component__["a" /* RoleEditComponent */]
            }
        ]
    }
];
var CoUsersRoutingModule = (function () {
    function CoUsersRoutingModule() {
    }
    CoUsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CoUsersRoutingModule);
    return CoUsersRoutingModule;
}());

//# sourceMappingURL=co-users-routing.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_roles__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleControlComponent = (function () {
    function RoleControlComponent() {
        this.roles = new __WEBPACK_IMPORTED_MODULE_1__user_roles__["a" /* UserRoles */]();
    }
    RoleControlComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], RoleControlComponent.prototype, "roles", void 0);
    RoleControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-role-control',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/role-control/role-control.component.html"*/'<div class="row">\n  <div class="col-lg col-md-6">\n    <mat-form-field>\n      <mat-select name="release_order" placeholder="Release Order" [(ngModel)]="roles.release_order">\n        <mat-option [value]="0">Block</mat-option>\n        <mat-option [value]="1">View</mat-option>\n        <mat-option [value]="2">Create</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class="col-lg col-md-6">\n    <mat-form-field>\n      <mat-select name="invoice" placeholder="Invoice" [(ngModel)]="roles.invoice">\n        <mat-option [value]="0">Block</mat-option>\n        <mat-option [value]="1">View</mat-option>\n        <mat-option [value]="2">Create</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class="col-lg col-md-6">\n    <mat-form-field>\n      <mat-select name="payment_receipts" placeholder="Payment Receipts" [(ngModel)]="roles.payment_receipts">\n        <mat-option [value]="0">Block</mat-option>\n        <mat-option [value]="1">View</mat-option>\n        <mat-option [value]="2">Create</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class="col-lg col-md-6">\n    <mat-form-field>\n      <mat-select name="accounts" placeholder="Accounts" [(ngModel)]="roles.accounts">\n        <mat-option [value]="0">Block</mat-option>\n        <mat-option [value]="1">View</mat-option>\n        <mat-option [value]="2">Create</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/co-users/role-control/role-control.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], RoleControlComponent);
    return RoleControlComponent;
}());

//# sourceMappingURL=role-control.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_card_list_rate_card_list_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rate_card_rate_card_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rate_card_details_rate_card_details_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rate_card_resolver_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'ratecards',
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__rate_card_list_rate_card_list_component__["a" /* RateCardListComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__rate_card_rate_card_component__["a" /* RateCardComponent */] },
            {
                path: 'new/:copy',
                component: __WEBPACK_IMPORTED_MODULE_3__rate_card_rate_card_component__["a" /* RateCardComponent */],
                resolve: {
                    rateCard: __WEBPACK_IMPORTED_MODULE_5__rate_card_resolver_service__["a" /* RateCardResolver */]
                }
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__rate_card_rate_card_component__["a" /* RateCardComponent */],
                resolve: {
                    rateCard: __WEBPACK_IMPORTED_MODULE_5__rate_card_resolver_service__["a" /* RateCardResolver */]
                }
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_4__rate_card_details_rate_card_details_component__["a" /* RateCardDetailsComponent */],
                resolve: {
                    rateCard: __WEBPACK_IMPORTED_MODULE_5__rate_card_resolver_service__["a" /* RateCardResolver */]
                }
            },
        ]
    }
];
var RateCardRoutingModule = (function () {
    function RateCardRoutingModule() {
    }
    RateCardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RateCardRoutingModule);
    return RateCardRoutingModule;
}());

//# sourceMappingURL=rate-card-routing.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseOrderRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__release_order_release_order_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__release_order_list_release_order_list_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__release_order_details_release_order_details_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__release_order_resolver_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rate_card_rate_card_resolver_service__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'releaseorders',
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__release_order_list_release_order_list_component__["a" /* ReleaseOrderListComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_2__release_order_release_order_component__["a" /* ReleaseOrderComponent */] },
            {
                path: 'new/:copy',
                component: __WEBPACK_IMPORTED_MODULE_2__release_order_release_order_component__["a" /* ReleaseOrderComponent */],
                resolve: {
                    releaseOrder: __WEBPACK_IMPORTED_MODULE_6__release_order_resolver_service__["a" /* ReleaseOrderResolver */]
                }
            },
            {
                path: 'fromRateCard/:rateCard',
                component: __WEBPACK_IMPORTED_MODULE_2__release_order_release_order_component__["a" /* ReleaseOrderComponent */],
                resolve: {
                    rateCard: __WEBPACK_IMPORTED_MODULE_7__rate_card_rate_card_resolver_service__["a" /* RateCardResolver */]
                }
            },
            {
                path: "edit/:id",
                component: __WEBPACK_IMPORTED_MODULE_2__release_order_release_order_component__["a" /* ReleaseOrderComponent */],
                resolve: {
                    releaseOrder: __WEBPACK_IMPORTED_MODULE_6__release_order_resolver_service__["a" /* ReleaseOrderResolver */]
                }
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_4__release_order_details_release_order_details_component__["a" /* ReleaseOrderDetailsComponent */],
                resolve: {
                    releaseOrder: __WEBPACK_IMPORTED_MODULE_6__release_order_resolver_service__["a" /* ReleaseOrderResolver */]
                }
            }
        ]
    }
];
var ReleaseOrderRoutingModule = (function () {
    function ReleaseOrderRoutingModule() {
    }
    ReleaseOrderRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ReleaseOrderRoutingModule);
    return ReleaseOrderRoutingModule;
}());

//# sourceMappingURL=release-order-routing.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_goback_service__ = __webpack_require__(9);
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
    function NavbarComponent(api, goback) {
        this.api = api;
        this.goback = goback;
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.goback.urlInit();
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/navbar/navbar.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n          <!-- *ngIf="!this.isLoginComponent"  -->\n            <button ion-button icon-only (click)="this.goback.goBack()" class="hamburger">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons right>\n          <button ion-button icon-only *ngIf="!this.api.isLoggedIn" (click)="this.goback.gotoComponent(\'login\')" class="hamburger">\n              <ion-icon name="log-in"></ion-icon>\n          </button>\n          <button ion-button icon-only *ngIf="this.api.isLoggedIn" (click)=" api.logout(); this.goback.gotoComponent(\'\')" class="hamburger">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n        <button class="hamburger" ion-button menuToggle left>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>AAMan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <!-- <button ion-item *ngIf="!api.isLoggedIn" routerLink="/" menuClose>\n        Home\n        </button> -->\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="!api.isLoggedIn" (click)="this.goback.gotoComponent(\'login\')" menuClose>\n        Login\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="!api.isLoggedIn" (click)="this.goback.gotoComponent(\'register\')" menuClose>\n        Register\n        </button>  \n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="!api.isLoggedIn" (click)="this.goback.gotoComponent(\'forgotPassword\')" menuClose>\n        Forgot Password\n        </button>      \n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'dashboard\')" menuClose>\n        Dashboard\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'profile\')" menuClose>\n        User Profile\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'firm\')" menuClose>\n        Firm Profile\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'coUsers\')" menuClose>\n        Co-Users\n        </button><button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'dir\')" menuClose>\n        Directory\n       </button><button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'ratecards\')" menuClose>\n        Rate Cards\n    </button><button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'releaseorders\')" menuClose>\n        Release Orders\n        </button><button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'templates\')" menuClose>\n        Templates\n        </button><button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'changePassword\')" menuClose>\n        Change Password\n        </button>\n        <button class="hamburger" ion-item routerLinkActive="active" *ngIf="api.isLoggedIn" (click)="this.goback.gotoComponent(\'\'); api.logout()" menuClose>\n          Logout\n        </button>\n        \n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/navbar/navbar.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_goback_service__["a" /* GobackService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_service__ = __webpack_require__(194);
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
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',template:/*ion-inline-start:"/Users/prakharsharma/zaaa-ionic/src/app/components/loader/loader.component.html"*/'<div class="fixed-top">\n  <mat-progress-bar mode="indeterminate" *ngIf="loaderService.loading"></mat-progress-bar>\n</div>'/*ion-inline-end:"/Users/prakharsharma/zaaa-ionic/src/app/components/loader/loader.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_routing_module__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__release_order_release_order_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_api_service__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_invoice_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_1__base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(InvoiceModule_1),
                __WEBPACK_IMPORTED_MODULE_3__release_order_release_order_module__["a" /* ReleaseOrderModule */],
                __WEBPACK_IMPORTED_MODULE_2__invoice_routing_module__["a" /* InvoiceRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__invoice_invoice_component__["a" /* InvoiceComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__invoice_api_service__["a" /* InvoiceApiService */]]
        })
    ], InvoiceModule);
    return InvoiceModule;
    var InvoiceModule_1;
}());

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__release_order_release_order_resolver_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_invoice_component__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'invoices',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: 'new/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__invoice_invoice_component__["a" /* InvoiceComponent */],
                resolve: {
                    releaseOrder: __WEBPACK_IMPORTED_MODULE_3__release_order_release_order_resolver_service__["a" /* ReleaseOrderResolver */]
                }
            }
        ]
    }
];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());

//# sourceMappingURL=invoice-routing.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
var Invoice = (function () {
    function Invoice() {
    }
    return Invoice;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceApiService = (function () {
    function InvoiceApiService(api) {
        this.api = api;
    }
    InvoiceApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], InvoiceApiService);
    return InvoiceApiService;
}());

//# sourceMappingURL=invoice-api.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    razorPay: "rzp_test_86QLf2LFy65g2j",
    // apiUrl: "http://localhost:8080/api",
    // uploadsBaseUrl: "http://localhost:8080"
    apiUrl: "https://www.mom2k18.co.in/api",
    uploadsBaseUrl: "https://www.mom2k18.co.in",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_goback_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_razorpay_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_window_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_ifsc_service__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_dialog_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_state_api_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_phone_verify_guard_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_admin_guard_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_plan_guard_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_mailing_details_mailing_details_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dialog_dialog_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_loader_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_notification_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__validators_verify_email_directive__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__validators_verify_min_directive__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__validators_verify_max_directive__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__validators_verify_fix_length_directive__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__validators_verify_multiple_of_directive__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__validators_verify_equals_directive__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_firm_resolver_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_user_profile_resolver_service__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var validators = [
    __WEBPACK_IMPORTED_MODULE_21__validators_verify_email_directive__["a" /* VerifyEmailDirective */],
    __WEBPACK_IMPORTED_MODULE_22__validators_verify_min_directive__["a" /* VerifyMinDirective */],
    __WEBPACK_IMPORTED_MODULE_23__validators_verify_max_directive__["a" /* VerifyMaxDirective */],
    __WEBPACK_IMPORTED_MODULE_24__validators_verify_fix_length_directive__["a" /* VerifyLengthDirective */],
    __WEBPACK_IMPORTED_MODULE_25__validators_verify_multiple_of_directive__["a" /* VerifyMultipleOfDirective */],
    __WEBPACK_IMPORTED_MODULE_26__validators_verify_equals_directive__["a" /* VerifyEqualsDirective */]
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
                __WEBPACK_IMPORTED_MODULE_0__services_goback_service__["a" /* GobackService */],
                __WEBPACK_IMPORTED_MODULE_7__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_9__services_window_service__["a" /* WindowService */],
                __WEBPACK_IMPORTED_MODULE_8__services_razorpay_service__["a" /* RazorPayService */],
                __WEBPACK_IMPORTED_MODULE_10__services_ifsc_service__["a" /* IfscService */],
                __WEBPACK_IMPORTED_MODULE_11__services_dialog_service__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_12__services_state_api_service__["a" /* StateApiService */],
                __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_14__guards_phone_verify_guard_service__["a" /* PhoneVerifyGuard */],
                __WEBPACK_IMPORTED_MODULE_15__guards_admin_guard_service__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_16__guards_plan_guard_service__["a" /* PlanGuard */],
                __WEBPACK_IMPORTED_MODULE_19__services_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_20__services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_27__services_firm_resolver_service__["a" /* FirmResolver */],
                __WEBPACK_IMPORTED_MODULE_28__services_user_profile_resolver_service__["a" /* UserProfileResolver */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__components_mailing_details_mailing_details_component__["a" /* MailingDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dialog_dialog_component__["a" /* DialogComponent */],
                validators
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_mailing_details_mailing_details_component__["a" /* MailingDetailsComponent */],
                validators
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__components_dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_mailing_details_mailing_details_component__["a" /* MailingDetailsComponent */]
            ]
        })
    ], BaseModule);
    return BaseModule;
}());

//# sourceMappingURL=base.module.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(18);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHouseApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_house__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MediaHouseApiService = (function () {
    function MediaHouseApiService(api) {
        this.api = api;
    }
    MediaHouseApiService.prototype.createMediaHouse = function (mediaHouse) {
        var _this = this;
        var scheduling = [];
        var pullouts = [];
        if (mediaHouse.scheduling) {
            mediaHouse.scheduling.forEach(function (element) { return scheduling.push(_this.schedulingToBody(element)); });
        }
        if (mediaHouse.pullouts) {
            mediaHouse.pullouts.forEach(function (element) { return pullouts.push(element.name); });
        }
        return this.api.post('/user/mediahouse', {
            pullouts: pullouts,
            organizationName: mediaHouse.orgName,
            publicationName: mediaHouse.pubName,
            nickName: mediaHouse.nickName,
            mediaType: mediaHouse.mediaType,
            address: mediaHouse.address,
            officeLandline: mediaHouse.officeLandLine,
            officeStdNo: mediaHouse.officeStdNo,
            scheduling: scheduling,
            GSTIN: mediaHouse.GSTIN,
            frequency: {
                Period: mediaHouse.freqPeriod,
                Remark: mediaHouse.freqRemark
            },
        });
    };
    MediaHouseApiService.prototype.bodyToScheduling = function (body) {
        var scheduling = new __WEBPACK_IMPORTED_MODULE_2__media_house__["b" /* MediaHouseScheduling */]();
        scheduling.person = body.Person;
        scheduling.designation = body.Designation;
        scheduling.mobileNo = body.MobileNo;
        scheduling.deskExtension = body.DeskExtension;
        scheduling.email = body.EmailId;
        return scheduling;
    };
    MediaHouseApiService.prototype.schedulingToBody = function (scheduling) {
        return {
            Person: scheduling.person,
            Designation: scheduling.designation,
            MobileNo: scheduling.mobileNo,
            DeskExtension: scheduling.deskExtension,
            EmailId: scheduling.email
        };
    };
    MediaHouseApiService.prototype.bodyToMediaHouse = function (body) {
        var _this = this;
        var mediaHouse = new __WEBPACK_IMPORTED_MODULE_2__media_house__["a" /* MediaHouse */]();
        mediaHouse.id = body._id;
        mediaHouse.global = body.global;
        mediaHouse.orgName = body.OrganizationName;
        mediaHouse.pubName = body.PublicationName;
        mediaHouse.nickName = body.NickName;
        mediaHouse.mediaType = body.MediaType;
        mediaHouse.address = body.Address;
        mediaHouse.officeLandLine = body.OfficeLandline;
        mediaHouse.officeStdNo = body.officeStdNo;
        mediaHouse.GSTIN = body.GSTIN;
        if (body.Frequency) {
            var freq = body.Frequency;
            mediaHouse.freqPeriod = freq.Period;
            mediaHouse.freqRemark = freq.Remark;
        }
        var scheduling = [];
        if (body.Scheduling) {
            body.Scheduling.forEach(function (element) {
                scheduling.push(_this.bodyToScheduling(element));
            });
        }
        mediaHouse.scheduling = scheduling;
        if (body.pullouts) {
            body.pullouts.forEach(function (element) {
                mediaHouse.pullouts.push(new __WEBPACK_IMPORTED_MODULE_2__media_house__["c" /* Pullout */](element));
            });
        }
        return mediaHouse;
    };
    MediaHouseApiService.prototype.editMediaHouse = function (mediaHouse) {
        var _this = this;
        var scheduling = [];
        var pullouts = [];
        if (mediaHouse.scheduling) {
            mediaHouse.scheduling.forEach(function (element) { return scheduling.push(_this.schedulingToBody(element)); });
        }
        if (mediaHouse.pullouts) {
            mediaHouse.pullouts.forEach(function (element) { return pullouts.push(element.name); });
        }
        return this.api.patch('/user/mediahouse/', {
            id: mediaHouse.id,
            pullouts: pullouts,
            OrganizationName: mediaHouse.orgName,
            PublicationName: mediaHouse.pubName,
            NickName: mediaHouse.nickName,
            MediaType: mediaHouse.mediaType,
            Address: mediaHouse.address,
            OfficeLandline: mediaHouse.officeLandLine,
            officeStdNo: mediaHouse.officeStdNo,
            GSTIN: mediaHouse.GSTIN,
            Frequency: {
                Period: mediaHouse.freqPeriod,
                Remark: mediaHouse.freqRemark
            },
            Scheduling: scheduling
        });
    };
    MediaHouseApiService.prototype.getMediaHouse = function (id) {
        var _this = this;
        return this.api.get('/user/mediahouse/' + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data.success ? _this.bodyToMediaHouse(data.mediahouse) : null; }));
    };
    MediaHouseApiService.prototype.getMediaHouses = function (global) {
        var _this = this;
        if (global === void 0) { global = false; }
        return this.api.get(global ? '/user/mediahouses/global' : '/user/mediahouses').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
            var mediaHouses = [];
            if (data.success) {
                data.mediahouses.forEach(function (element) {
                    mediaHouses.push(_this.bodyToMediaHouse(element));
                });
            }
            return mediaHouses;
        }));
    };
    MediaHouseApiService.prototype.searchMediaHouses = function (query) {
        var _this = this;
        if (query) {
            return this.api.get('/user/mediahouses/' + query).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
                var mediaHouses = [];
                if (data.success) {
                    data.mediahouses.forEach(function (element) {
                        mediaHouses.push(_this.bodyToMediaHouse(element));
                    });
                }
                return mediaHouses;
            }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])([]);
    };
    MediaHouseApiService.prototype.deleteMediaHouse = function (mediaHouse) {
        return this.api.delete('/user/mediahouse/' + mediaHouse.id);
    };
    MediaHouseApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], MediaHouseApiService);
    return MediaHouseApiService;
}());

//# sourceMappingURL=media-house-api.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateApiService = (function () {
    function StateApiService() {
    }
    Object.defineProperty(StateApiService.prototype, "states", {
        get: function () {
            return [
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"
            ];
        },
        enumerable: true,
        configurable: true
    });
    StateApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StateApiService);
    return StateApiService;
}());

//# sourceMappingURL=state-api.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientApiService = (function () {
    function ClientApiService(api) {
        this.api = api;
    }
    ClientApiService.prototype.createClient = function (client) {
        var _this = this;
        var contactPersons = [];
        client.contactpersons.forEach(function (element) { return contactPersons.push(_this.contactPersonToBody(element)); });
        return this.api.post('/user/client', {
            organizationName: client.orgName,
            companyName: client.companyName,
            nickName: client.nickName,
            categoryType: client.category,
            address: client.address,
            landline: client.landLine,
            stdNo: client.stdNo,
            website: client.website,
            panNo: client.panNo,
            gstin: client.gstNo,
            contactPerson: contactPersons
        });
    };
    ClientApiService.prototype.bodyToContactPerson = function (body) {
        return {
            name: body.Name,
            designation: body.Designation,
            department: body.Department,
            mobileNo: body.MobileNo,
            email: body.EmailId,
            dob: body.DateOfBirth,
            anniversaryDate: body.Anniversary,
            photo: body.Photo,
            personLandLine: body.Landline,
            personStdNo: body.stdNo
        };
    };
    ClientApiService.prototype.contactPersonToBody = function (contactPerson) {
        return {
            Name: contactPerson.name,
            Designation: contactPerson.designation,
            Department: contactPerson.department,
            MobileNo: contactPerson.mobileNo,
            EmailId: contactPerson.email,
            DateOfBirth: contactPerson.dob,
            Anniversary: contactPerson.anniversaryDate,
            Photo: contactPerson.photo,
            Landline: contactPerson.personLandLine,
            stdNo: contactPerson.personStdNo
        };
    };
    ClientApiService.prototype.bodyToClient = function (data) {
        var _this = this;
        var client = new __WEBPACK_IMPORTED_MODULE_2__client__["a" /* Client */]();
        client.id = data._id;
        client.orgName = data.OrganizationName;
        client.companyName = data.CompanyName;
        client.nickName = data.NickName;
        client.category = data.CategoryType;
        client.address = data.Address;
        client.landLine = data.Landline;
        client.stdNo = data.stdNo;
        client.website = data.Website;
        client.panNo = data.PanNO;
        client.gstNo = data.GSTNo;
        var contactPersons = [];
        if (data.ContactPerson) {
            data.ContactPerson.forEach(function (element) {
                contactPersons.push(_this.bodyToContactPerson(element));
            });
        }
        client.contactpersons = contactPersons;
        return client;
    };
    ClientApiService.prototype.editClient = function (client) {
        var _this = this;
        var contactPersons = [];
        client.contactpersons.forEach(function (element) { return contactPersons.push(_this.contactPersonToBody(element)); });
        return this.api.patch('/user/client', {
            id: client.id,
            OrganizationName: client.orgName,
            CompanyName: client.companyName,
            NickName: client.nickName,
            CategoryType: client.category,
            Address: client.address,
            Landline: client.landLine,
            stdNo: client.stdNo,
            Website: client.website,
            PanNO: client.panNo,
            GSTNo: client.gstNo,
            ContactPerson: contactPersons
        });
    };
    ClientApiService.prototype.getClient = function (id) {
        var _this = this;
        return this.api.get('/user/client/' + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data.success ? _this.bodyToClient(data.client) : null; }));
    };
    ClientApiService.prototype.getClients = function () {
        var _this = this;
        return this.api.get('/user/clients').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
            var clients = [];
            if (data.success) {
                data.clients.forEach(function (element) {
                    clients.push(_this.bodyToClient(element));
                });
            }
            return clients;
        }));
    };
    ClientApiService.prototype.searchClients = function (query) {
        var _this = this;
        if (query) {
            return this.api.get('/user/clients/' + query).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
                var clients = [];
                if (data.success) {
                    data.clients.forEach(function (element) {
                        clients.push(_this.bodyToClient(element));
                    });
                }
                return clients;
            }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])([]);
    };
    ClientApiService.prototype.deleteClient = function (client) {
        return this.api.delete('/user/client/' + client.id);
    };
    ClientApiService.prototype.uploadProfilePicture = function (id, fileToUpload) {
        return this.api.fileUpload("/user/client/picture/" + id, "client", fileToUpload);
    };
    ClientApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], ClientApiService);
    return ClientApiService;
}());

//# sourceMappingURL=client-api.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutiveApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__executive__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExecutiveApiService = (function () {
    function ExecutiveApiService(api) {
        this.api = api;
    }
    ExecutiveApiService.prototype.createExecutive = function (executive) {
        return this.api.post('/user/executive', {
            organizationName: executive.orgName,
            companyName: executive.companyName,
            executiveName: executive.executiveName,
            designation: executive.designation,
            department: executive.department,
            mobileNo: executive.mobileNo,
            email: executive.email,
            dob: executive.dob,
            anniversary: executive.anniversaryDate
        });
    };
    ExecutiveApiService.prototype.bodyToExecutive = function (body) {
        var executive = new __WEBPACK_IMPORTED_MODULE_2__executive__["a" /* Executive */]();
        executive.id = body._id;
        executive.orgName = body.OrganizationName;
        executive.companyName = body.CompanyName;
        executive.executiveName = body.ExecutiveName;
        executive.designation = body.Designation;
        executive.department = body.Department;
        executive.mobileNo = body.MobileNo;
        executive.email = body.EmailId;
        if (body.Photo) {
            executive.photo = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].uploadsBaseUrl + body.Photo;
        }
        executive.dob = body.DateOfBirth;
        executive.anniversaryDate = body.Anniversary;
        return executive;
    };
    ExecutiveApiService.prototype.getExecutive = function (id) {
        var _this = this;
        return this.api.get('/user/executive/' + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data.success ? _this.bodyToExecutive(data.executive) : null; }));
    };
    ExecutiveApiService.prototype.getExecutives = function () {
        var _this = this;
        return this.api.get('/user/executives').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
            var executives = [];
            if (data.success) {
                data.executives.forEach(function (element) {
                    executives.push(_this.bodyToExecutive(element));
                });
            }
            return executives;
        }));
    };
    ExecutiveApiService.prototype.searchExecutives = function (query) {
        var _this = this;
        if (query) {
            return this.api.get('/user/executives/' + query).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
                var executives = [];
                if (data.success) {
                    data.executives.forEach(function (element) {
                        executives.push(_this.bodyToExecutive(element));
                    });
                }
                return executives;
            }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])([]);
    };
    ExecutiveApiService.prototype.editExecutive = function (executive) {
        return this.api.patch('/user/executive', {
            id: executive.id,
            OrganizationName: executive.orgName,
            CompanyName: executive.companyName,
            ExecutiveName: executive.executiveName,
            Designation: executive.designation,
            Department: executive.department,
            MobileNo: executive.mobileNo,
            EmailId: executive.mobileNo,
            DateOfBirth: executive.dob,
            Anniversary: executive.anniversaryDate
        });
    };
    ExecutiveApiService.prototype.deleteExecutive = function (executive) {
        return this.api.delete('/user/executive/' + executive.id);
    };
    ExecutiveApiService.prototype.uploadProfilePicture = function (id, fileToUpload) {
        return this.api.fileUpload("/user/executive/picture/" + id, "executive", fileToUpload);
    };
    ExecutiveApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], ExecutiveApiService);
    return ExecutiveApiService;
}());

//# sourceMappingURL=executive-api.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCardApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_card__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateCardApiService = (function () {
    function RateCardApiService(api) {
        this.api = api;
    }
    RateCardApiService.prototype.createRateCard = function (rateCard) {
        var fixSizes = [], schemes = [], covered = [], tax = [];
        rateCard.fixSizes.forEach(function (element) {
            fixSizes.push({
                Width: element.width,
                Length: element.length,
                Amount: element.amount
            });
        });
        rateCard.schemes.forEach(function (element) {
            schemes.push({
                paid: element.paid,
                Free: element.Free,
                TimeLimit: element.timeLimit
            });
        });
        rateCard.covered.forEach(function (element) {
            covered.push({
                mediaHouse: element.covMediaHouse,
                EditionArea: element.covEdition
            });
        });
        rateCard.taxes.forEach(function (element) {
            tax.push({
                Included: element.included,
                TaxRate: element.rate
            });
        });
        return this.api.post('/user/ratecard', {
            mediaType: rateCard.mediaType,
            adType: rateCard.adType,
            adTime: rateCard.adTime,
            rateCardType: rateCard.rateCardType,
            bookingCenter: {
                MediaHouseName: rateCard.mediaHouseName,
                Edition: rateCard.bookingEdition,
                PulloutName: rateCard.pullOutName
            },
            categories: {
                SubCategory1: rateCard.categories[0],
                SubCategory2: rateCard.categories[1],
                SubCategory3: rateCard.categories[2],
                SubCategory4: rateCard.categories[3],
                SubCategory5: rateCard.categories[4],
                SubCategory6: rateCard.categories[5],
            },
            rate: {
                rateQuantity: rateCard.rate,
                unit: rateCard.unit,
            },
            position: rateCard.position,
            hue: rateCard.hue,
            maxSizeLimit: {
                Length: rateCard.maxLength,
                Width: rateCard.maxWidth
            },
            minSizeLimit: {
                Length: rateCard.minLength,
                Width: rateCard.minWidth
            },
            fixSize: fixSizes,
            scheme: schemes,
            tax: tax,
            validFrom: rateCard.validFrom,
            validTill: rateCard.validTill,
            remarks: rateCard.remarks,
            covered: covered,
            AdWordsMax: rateCard.AdWordsMax,
            PremiumCustom: rateCard.PremiumCustom,
            PremiumBox: rateCard.PremiumBox,
            PremiumBaseColour: rateCard.PremiumBaseColour,
            PremiumCheckMark: rateCard.PremiumCheckMark,
            PremiumEmailId: rateCard.PremiumEmailId,
            PremiumWebsite: rateCard.PremiumWebsite,
            PremiumExtraWords: rateCard.PremiumExtraWords,
        });
    };
    RateCardApiService.prototype.bodyToRateCard = function (body) {
        var rateCard = new __WEBPACK_IMPORTED_MODULE_2__rate_card__["d" /* RateCard */]();
        rateCard.id = body._id;
        rateCard.global = body.global;
        rateCard.mediaType = body.MediaType;
        rateCard.adType = body.AdType;
        rateCard.adTime = body.AdTime;
        rateCard.rateCardType = body.RateCardType;
        if (body.BookingCenter) {
            var bookingCenter = body.BookingCenter;
            rateCard.mediaHouseName = bookingCenter.MediaHouseName;
            rateCard.bookingEdition = bookingCenter.Edition;
            rateCard.pullOutName = bookingCenter.PulloutName;
        }
        if (body.Category) {
            var cat = body.Category;
            rateCard.categories = [
                cat.SubCategory1,
                cat.SubCategory2,
                cat.SubCategory3,
                cat.SubCategory4,
                cat.SubCategory5,
                cat.SubCategory6
            ];
        }
        if (body.Rate) {
            var rate = body.Rate;
            rateCard.rate = rate.rateQuantity;
            rateCard.unit = rate.unit;
        }
        rateCard.position = body.Position;
        rateCard.hue = body.Hue;
        rateCard.AdWordsMax = body.AdWordsMax;
        rateCard.PremiumCustom = body.PremiumCustom;
        rateCard.PremiumBox = body.PremiumBox;
        rateCard.PremiumBaseColour = body.PremiumBaseColour;
        rateCard.PremiumCheckMark = body.PremiumCheckMark;
        rateCard.PremiumEmailId = body.PremiumEmailId;
        rateCard.PremiumWebsite = body.PremiumWebsite;
        rateCard.PremiumExtraWords = body.PremiumExtraWords;
        if (body.MaxSizeLimit) {
            var size = body.MaxSizeLimit;
            rateCard.maxLength = size.Length;
            rateCard.maxWidth = size.Width;
        }
        if (body.MinSizeLimit) {
            var size = body.MinSizeLimit;
            rateCard.minLength = size.Length;
            rateCard.minWidth = size.Width;
        }
        if (body.FixSize) {
            var fixSizes = body.FixSize;
            fixSizes.forEach(function (element) {
                rateCard.fixSizes.push({
                    amount: element.Amount,
                    width: element.Width,
                    length: element.Length
                });
            });
        }
        if (body.Scheme) {
            var schemes = body.Scheme;
            schemes.forEach(function (element) {
                rateCard.schemes.push({
                    paid: element.paid,
                    Free: element.Free,
                    timeLimit: element.TimeLimit
                });
            });
        }
        if (body.Tax) {
            var tax = body.Tax;
            tax.forEach(function (element) {
                rateCard.taxes.push({
                    included: element.Included,
                    rate: element.TaxRate
                });
            });
        }
        rateCard.validFrom = body.ValidFrom;
        rateCard.validTill = body.ValidTill;
        if (body.Covered) {
            var covered = body.Covered;
            covered.forEach(function (element) {
                rateCard.covered.push({
                    covMediaHouse: element.mediaHouse,
                    covEdition: element.EditionArea
                });
            });
        }
        if (body.Remarks) {
            rateCard.remarks = body.Remarks;
        }
        return rateCard;
    };
    RateCardApiService.prototype.deleteRateCard = function (rateCard) {
        return this.api.delete('/user/ratecard/' + rateCard.id);
    };
    RateCardApiService.prototype.getRateCard = function (id) {
        var _this = this;
        return this.api.get('/user/ratecard/' + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) { return data.success ? _this.bodyToRateCard(data.ratecard) : null; }));
    };
    RateCardApiService.prototype.getRateCards = function (global) {
        var _this = this;
        if (global === void 0) { global = false; }
        return this.api.get(global ? '/user/ratecards/global' : '/user/ratecards').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
            var ratecards = [];
            if (data.success) {
                data.ratecards.forEach(function (element) {
                    ratecards.push(_this.bodyToRateCard(element));
                });
            }
            return ratecards;
        }));
    };
    RateCardApiService.prototype.searchRateCards = function (query) {
        var _this = this;
        if (query) {
            return this.api.get('/user/ratecards/' + query).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
                var ratecards = [];
                if (data.success) {
                    data.ratecards.forEach(function (element) {
                        ratecards.push(_this.bodyToRateCard(element));
                    });
                }
                return ratecards;
            }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])([]);
    };
    RateCardApiService.prototype.editRateCard = function (rateCard) {
        var fixSizes = [], schemes = [], covered = [], tax = [];
        rateCard.fixSizes.forEach(function (element) {
            fixSizes.push({
                Width: element.width,
                Length: element.length,
                Amount: element.amount
            });
        });
        rateCard.schemes.forEach(function (element) {
            schemes.push({
                paid: element.paid,
                Free: element.Free,
                TimeLimit: element.timeLimit
            });
        });
        rateCard.covered.forEach(function (element) {
            covered.push({
                mediaHouse: element.covMediaHouse,
                EditionArea: element.covEdition
            });
        });
        rateCard.taxes.forEach(function (element) {
            tax.push({
                Included: element.included,
                TaxRate: element.rate
            });
        });
        return this.api.patch('/user/ratecard', {
            id: rateCard.id,
            MediaType: rateCard.mediaType,
            AdType: rateCard.adType,
            AdTime: rateCard.adTime,
            RateCardType: rateCard.rateCardType,
            BookingCenter: {
                MediaHouseName: rateCard.mediaHouseName,
                Edition: rateCard.bookingEdition,
                PulloutName: rateCard.pullOutName
            },
            Category: {
                SubCategory1: rateCard.categories[0],
                SubCategory2: rateCard.categories[1],
                SubCategory3: rateCard.categories[2],
                SubCategory4: rateCard.categories[3],
                SubCategory5: rateCard.categories[4],
                SubCategory6: rateCard.categories[5],
            },
            Rate: {
                rateQuantity: rateCard.rate,
                unit: rateCard.unit,
            },
            Position: rateCard.position,
            Hue: rateCard.hue,
            MaxSizeLimit: {
                Length: rateCard.maxLength,
                Width: rateCard.maxWidth
            },
            MinSizeLimit: {
                Length: rateCard.minLength,
                Width: rateCard.minWidth
            },
            FixSize: fixSizes,
            Scheme: schemes,
            Tax: tax,
            ValidFrom: rateCard.validFrom,
            ValidTill: rateCard.validTill,
            Remarks: rateCard.remarks,
            Covered: covered,
            AdWordsMax: rateCard.AdWordsMax,
            PremiumCustom: rateCard.PremiumCustom,
            PremiumBox: rateCard.PremiumBox,
            PremiumBaseColour: rateCard.PremiumBaseColour,
            PremiumCheckMark: rateCard.PremiumCheckMark,
            PremiumEmailId: rateCard.PremiumEmailId,
            PremiumWebsite: rateCard.PremiumWebsite,
            PremiumExtraWords: rateCard.PremiumExtraWords
        });
    };
    RateCardApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], RateCardApiService);
    return RateCardApiService;
}());

//# sourceMappingURL=rate-card-api.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GobackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__(18);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], GobackService);
    return GobackService;
}());

//# sourceMappingURL=goback.service.js.map

/***/ }),

/***/ 97:
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

/***/ })

},[460]);
//# sourceMappingURL=main.js.map