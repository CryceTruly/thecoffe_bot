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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_disease_disease_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/disease/disease.component */ "./src/app/components/disease/disease.component.ts");
/* harmony import */ var _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/diseases/diseases.component */ "./src/app/components/diseases/diseases.component.ts");
/* harmony import */ var _components_new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new/new.component */ "./src/app/components/new/new.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");










var routes = [
    { path: '', component: _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_5__["DiseasesComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'diseases/:id', component: _components_disease_disease_component__WEBPACK_IMPORTED_MODULE_4__["DiseaseComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'diseases', component: _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_5__["DiseasesComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'new', component: _components_new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'forgot', component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__["ForgotComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-navbar></app-navbar>\n <div class=\"container\">\n     <router-outlet></router-outlet>\n </div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Coffee Pro';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/new/new.component */ "./src/app/components/new/new.component.ts");
/* harmony import */ var _components_disease_disease_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/disease/disease.component */ "./src/app/components/disease/disease.component.ts");
/* harmony import */ var _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/diseases/diseases.component */ "./src/app/components/diseases/diseases.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/file-size.pipe */ "./src/app/pipes/file-size.pipe.ts");
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/summary.pipe */ "./src/app/pipes/summary.pipe.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/dropzone.directive */ "./src/app/directives/dropzone.directive.ts");
/* harmony import */ var _components_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/uploader/uploader.component */ "./src/app/components/uploader/uploader.component.ts");
/* harmony import */ var _components_upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/upload-task/upload-task.component */ "./src/app/components/upload-task/upload-task.component.ts");
/* harmony import */ var _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/gallery/gallery.component */ "./src/app/component/gallery/gallery.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _components_disease_disease_component__WEBPACK_IMPORTED_MODULE_9__["DiseaseComponent"],
                _components_diseases_diseases_component__WEBPACK_IMPORTED_MODULE_10__["DiseasesComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_12__["FileSizePipe"],
                _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_13__["SummaryPipe"],
                _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_19__["ForgotComponent"],
                _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_23__["DropzoneDirective"],
                _components_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_24__["UploaderComponent"],
                _components_upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_25__["UploadTaskComponent"],
                _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_26__["GalleryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]
            ],
            providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestore"], _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_13__["SummaryPipe"],
                _pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_12__["FileSizePipe"], _services_upload_service__WEBPACK_IMPORTED_MODULE_20__["UploadService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorage"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabase"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/gallery/gallery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/gallery/gallery.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 0;\n  width: 1200px;\n  margin: 20px auto\n}\n\nli {\n  display: inline;\n}\n\n.tn {\n  margin: 6px 6px;\n  border: 1px solid #999999;\n  box-shadow: #ffffff 1px 1px 8px 1px;\n  cursor: pointer\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvXG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udG4ge1xuICBtYXJnaW46IDZweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gIGJveC1zaGFkb3c6ICNmZmZmZmYgMXB4IDFweCA4cHggMXB4O1xuICBjdXJzb3I6IHBvaW50ZXJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/gallery/gallery.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/gallery/gallery.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <ul id=\"thumbnailsList\">\n    <li *ngFor=\"let image of imageList\">\n       <a><img src=\"{{image}}\" class=\"tn image-fluid\" width=\"200\" height=\"160\"></a>\n\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/component/gallery/gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/gallery/gallery.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(router, db, afs) {
        var _this = this;
        this.router = router;
        this.db = db;
        this.afs = afs;
        this.imageList = [];
        this.visibleImages = [];
        router.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.afs.collection('diseases').doc(_this.id).valueChanges().subscribe(function (data) {
                _this.imageList.unshift(data.photo);
            });
        });
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.imageList);
        this.db.list("photos/" + this.id).valueChanges().subscribe(function (images) {
            images.forEach(function (image) {
                _this.imageList.push(image.downloadUri);
            });
            console.log(_this.imageList);
        });
    };
    GalleryComponent.prototype.ngOnChanges = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GalleryComponent.prototype, "id", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/component/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/component/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/disease/disease.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/disease/disease.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzZWFzZS9kaXNlYXNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/disease/disease.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/disease/disease.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n<div>\n  <div class=\"card-body\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Disease Name\n      </div>\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>{{disease.name}}</p>\n          </blockquote>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Disease Signs\n      </div>\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>{{disease.signs}}</p>\n        </blockquote>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Disease Effects\n      </div>\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>{{disease.effects}}</p>\n        </blockquote>\n      </div>\n    </div>\n     <div class=\"card\">\n       <div class=\"card-header\">\n         Disease Measures\n       </div>\n       <div class=\"card-body\">\n         <blockquote class=\"blockquote mb-0\">\n           <p>{{disease.measures}}</p>\n         </blockquote>\n       </div>\n     </div>\n<div class=\"mt-3\">\n  <a (click)=\"deleteDisease(id)\" class=\"btn btn-danger\">delete</a>\n</div>\n\n  </div>\n</div>\n    </div>\n\n    <div class=\"col-md-6\">\n     <div class=\"card\" style=\"width: 100%;\">\n       <div class=\"card-body\">\n         <h5 class=\"card-title\">Images</h5>\n        <app-gallery [id]=\"id\"></app-gallery>\n<app-uploader [id]=\"id\"></app-uploader>\n       </div>\n     </div>\n\n\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/disease/disease.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/disease/disease.component.ts ***!
  \*********************************************************/
/*! exports provided: DiseaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseComponent", function() { return DiseaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DiseaseComponent = /** @class */ (function () {
    function DiseaseComponent(router, afs, routerr) {
        var _this = this;
        this.router = router;
        this.afs = afs;
        this.routerr = routerr;
        router.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.afs.collection('diseases').doc(_this.id).valueChanges().subscribe(function (data) {
                _this.disease = data;
                console.log(_this.id);
            });
        });
    }
    DiseaseComponent.prototype.ngOnInit = function () {
    };
    DiseaseComponent.prototype.deleteDisease = function (id) {
        var _this = this;
        console.log('deleting disese ' + id);
        this.afs.collection('diseases').doc(id).delete().then(function (event) {
            _this.routerr.navigate(['/diseases']).catch(function (err) { return console.log(err); });
        }).catch(function (eror) { return console.log(eror); });
        this.routerr.navigate(['/diseases']);
        alert('Disease removed');
    };
    DiseaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-disease',
            template: __webpack_require__(/*! ./disease.component.html */ "./src/app/components/disease/disease.component.html"),
            styles: [__webpack_require__(/*! ./disease.component.css */ "./src/app/components/disease/disease.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DiseaseComponent);
    return DiseaseComponent;
}());



/***/ }),

/***/ "./src/app/components/diseases/diseases.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/diseases/diseases.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzZWFzZXMvZGlzZWFzZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/diseases/diseases.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/diseases/diseases.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"diseases.length>0; else nodiseases\">\n\n<div class=\"card\">\n  <div class=\"card-body\">\n   <table class=\"table\">\n\n     <thead>\n       <tr>\n\n         <th scope=\"col\">#</th>\n         <th scope=\"col\">Name</th>\n         <th scope=\"col\">Signs</th>\n         <th scope=\"col\">Details</th>\n       </tr>\n     </thead>\n     <tbody *ngFor=\"let d of diseases\">\n       <tr>\n         <th scope=\"row\">1</th>\n\n         <td>{{d.name |summary}}</td>\n         <td>{{d.signs|summary:20}}</td>\n         <td [routerLink]=\"['/diseases',d.id]\" class=\"btn btn-primary\">Details</td>\n\n       </tr>\n\n\n     </tbody>\n   </table>\n\n\n\n\n\n   </div>\n\n   <ng-template #nodiseases>\n     <h3>No Coffee Diseases Available</h3><span><a routerLink='new'>Add new</a></span>\n   </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/diseases/diseases.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/diseases/diseases.component.ts ***!
  \***********************************************************/
/*! exports provided: DiseasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesComponent", function() { return DiseasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var DiseasesComponent = /** @class */ (function () {
    function DiseasesComponent(afs) {
        var _this = this;
        this.afs = afs;
        this.afs.collection('diseases').valueChanges().subscribe(function (data) {
            _this.diseases = data;
        });
    }
    DiseasesComponent.prototype.ngOnInit = function () {
    };
    DiseasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diseases',
            template: __webpack_require__(/*! ./diseases.component.html */ "./src/app/components/diseases/diseases.component.html"),
            styles: [__webpack_require__(/*! ./diseases.component.css */ "./src/app/components/diseases/diseases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DiseasesComponent);
    return DiseasesComponent;
}());



/***/ }),

/***/ "./src/app/components/forgot/forgot.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/forgot/forgot.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forgot/forgot.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/forgot/forgot.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- CARDS -->\n\n <div class=\"row\">\n <div class=\"col-md-2\">\n\n </div>\n  <div class=\"col-md-8\">\n\n\n  <div class=\"card mt-2\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Enter your Email</h5>\n\n    <form (submit)=\"sendPasswordResetEmail()\">\n      <div class=\"alert errors\" *ngIf=\"showErrors\"></div>\n      <div class=\"form-group\">\n        <input id=\"icon_prefix\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\"\n         minlength=\"5\">\n      \n      </div>\n      <input type=\"submit\" (click)=\"sendPasswordResetEmail()\" \n      class=\"btn btn-block btn-primary\" value=\"Send Password Reset Email\"/>\n\n    </form>\n                 <a class=\"btn btn-sm mt-2\" routerLink=\"/login\">Back to login</a>\n         \n  </div>\n \n             \n\n\n         \n </div>\n <div class=\"col-md-2\">\n\n </div>\n </div>"

/***/ }),

/***/ "./src/app/components/forgot/forgot.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forgot/forgot.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");



var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(af) {
        this.af = af;
        this.email = '';
        this.showErrors = false;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.sendPasswordResetEmail = function () {
        var _this = this;
        this.af.auth.sendPasswordResetEmail(this.email).then(function (sucess) {
            _this.setFeedbach('alert-success', 'A reset email has been sent with instructions');
        }).catch(function (err) {
            _this.setFeedbach('alert-danger', err);
        });
    };
    ForgotComponent.prototype.setFeedbach = function (cls, msg) {
        var _this = this;
        this.showErrors = true;
        document.querySelector('.errors').classList.add(cls);
        document.querySelector('.errors').innerHTML = msg;
        setTimeout(function () {
            document.querySelector('.errors').innerHTML = '';
            _this.showErrors = false;
        }, 3000);
    };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/components/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/components/forgot/forgot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n\n<div class=\"card mt-2\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Login here</h5>\n\n <form class=\"loginform\">\n     <div class=\"alert alert-danger\" id=\"errors\" *ngIf=\"showErrors\">\n         \n     </div>\n\n                  <div class=\"form-group\">\n\n                      <label class=\"active\"  for=\"email\">Email</label>\n                      <input type=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\">\n                 \n                    </div>\n                    <div class=\"form-group\">\n                        <label  for=\"password\" >Password</label>\n                        <input type=\"password\" class=\"form-control\" minlength=\"8\"\n                         [(ngModel)]=\"user.password\" id=\"password\" name=\"password\">\n                      \n                      </div>\n\n\n\n              <button class=\"btn btn-primary\" (click)=\"checkUserSignIn()\">Login</button>\n                  </form>\n                  \n         <a routerLink='/forgot'>Trouble signing in</a>\n\n            </div>\n         \n     </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n             \n    <div class=\"col-md-2\"></div>\n  </div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authServic, router, afs) {
        this.authServic = authServic;
        this.router = router;
        this.afs = afs;
        this.user = {
            email: '',
            password: ''
        };
        this.showErrors = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkUserSignIn = function () {
        var _this = this;
        if (!this.user.email.length) {
            this.setErrors('Email is required');
            return false;
        }
        if (!this.user.password) {
            this.setErrors('Password is required');
            return false;
        }
        if (this.user.password.length < 6) {
            this.setErrors('Password should be atleast 6 characters');
            return false;
        }
        this.authServic.auth.signInWithEmailAndPassword(this.user.email, this.user.password).catch(function (e) {
            console.log(e);
            _this.setErrors(e);
            return false;
        }).then(function (user) {
            _this.router.navigateByUrl('diseases');
        });
    };
    LoginComponent.prototype.setErrors = function (e) {
        var _this = this;
        this.showErrors = true;
        document.querySelector('#errors').innerHTML = e;
        setTimeout(function () {
            _this.showErrors = false;
            document.querySelector('#errors').innerHTML = '';
        }, 3000);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
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

module.exports = ".logout{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n <a class=\"navbar-brand\" routerLink=''>{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     <ul class=\"navbar-nav mr-auto\" *ngIf=\"afAuth.user | async as user\">\n       <li class=\"nav-item\">\n         <a class=\"nav-link\" routerLink='new'>Add New</a>\n       </li>\n\n     </ul>\n   <ul class=\"navbar-nav ml-auto\">\n     <li (click)=\"logoutClicked()\" class=\"nav-link logout\">\n       <a routerLink=\"login\" class=\"nav-link\" *ngIf=\"afAuth.user | async as user\"> Logout {{ user.email }}!</a> </li>\n\n     <li class=\"nav-link\" *ngIf=\"!afAuth.user | async as user\">\n       <a routerLink=\"login\" class=\"nav-link\">Login</a> </li>\n   </ul>\n  </div>\n  </div>\n</nav>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.title = 'CoffeePro';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutClicked = function () {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('login').then(function (res) {
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new/new.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/new/new.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner{\n    content: \"\";\n    height: 60px;\n    width: 60px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    border: 7px solid lightgrey;\n    border-top-color: coral;\n    -webkit-animation: spinner 0.7s linear infinite;\n            animation: spinner 0.7s linear infinite;\n    \n}\n\n@-webkit-keyframes spinner{\n    to{\n        -webkit-transform:rotate(360deg);\n                transform:rotate(360deg);\n    }\n}\n\n@keyframes spinner{\n    to{\n        -webkit-transform:rotate(360deg);\n                transform:rotate(360deg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXcvbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsK0NBQXVDO1lBQXZDLHVDQUF1Qzs7QUFFM0M7O0FBRUE7SUFDSTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy9uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogN3B4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBjb3JhbDtcbiAgICBhbmltYXRpb246IHNwaW5uZXIgMC43cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgXG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lcntcbiAgICB0b3tcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/new/new.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/new/new.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"row\">\n    <div class=\"col-md-2\">\n   \n    </div>\n     <div class=\"col-md-8\">\n        <div class=\"card mt-2\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">\n        Add A new Disease\n      </h5>\n      <form  class=\"form\" >\n\n        <div id=\"error\">\n            <ul id=\"errors\">\n            </ul>\n        </div>\n  \n  \n          <div class=\"form-group \">\n          \n                <label>Pick Photo</label>\n                <input type=\"file\" class=\"btn\" id=\"pickedphoto\" (change)=\"detectFiles($event)\">\n            </div>\n  \n  \n  \n          <div class=\"form-group\">\n              <label for=\"icon_prefix\">Disease Name</label>\n            <input id=\"icon_prefix\" type=\"text\" [(ngModel)]=\"disease.name\" name=\"name\"\n            required minlength=\"3\" class=\"validate form-control\">\n           \n          </div>\n  \n  \n  \n          <div class=\"form-group\">\n              <label for=\"\">Signs</label>\n          <textarea type=\"text\" [(ngModel)]=\"disease.signs\" maxlength=\"300\"  class=\"form-control\"\n           name=\"profile\" minlength=\"25\" ></textarea>\n       \n        </div>\n          <div class=\"form-group\">\n              <label for=\"\">Effects</label>\n          <textarea type=\"text\" [(ngModel)]=\"disease.effects\" maxlength=\"300\"  class=\"form-control\"\n           name=\"profile\" minlength=\"25\" ></textarea>\n         \n        </div>\n  \n        <div class=\"form-group\">\n            <label for=\"\">Measures description</label>\n          <textarea type=\"text\" [(ngModel)]=\"disease.measures\" maxlength=\"300\"  class=\"form-control\"\n           name=\"measures\" minlength=\"25\"></textarea>\n        \n  <div class=\"spinners\"></div>\n        </div>\n  \n        <input type=\"submit\" [disabled]='disable' [value]=\"text\" class=\"btn btn-success\" (click)=\"addDisease()\">\n  \n  \n    </form>\n  </div>\n\n<div class=\"col-md-2\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/new/new.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/new/new.component.ts ***!
  \*************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var src_app_models_Upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Upload */ "./src/app/models/Upload.ts");






var NewComponent = /** @class */ (function () {
    function NewComponent(afs, ups, database) {
        this.afs = afs;
        this.ups = ups;
        this.database = database;
        this.disease = {
            id: '',
            name: '',
            signs: '',
            effects: '',
            photo: '',
            measures: '',
        };
        this.errors = [];
        this.disable = false;
        this.text = 'Submit';
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    NewComponent.prototype.addDisease = function () {
        var _this = this;
        if (this.selectedFiles == undefined) {
            this.errors.push('Please choose an image');
        }
        var file1 = this.selectedFiles.item(0);
        this.currentUpload = new src_app_models_Upload__WEBPACK_IMPORTED_MODULE_5__["Upload"](file1);
        if (file1.name == '') {
            this.errors.push('Please choose an image');
        }
        if (file1.type.split('/')[0] !== 'image') {
            this.errors.push('Picked file is not an image');
        }
        if ((this.disease.name.length) < 2) {
            this.errors.push('Disease Name is required');
        }
        if ((this.disease.measures.length) < 15) {
            this.errors.push('Add more control measures');
        }
        if ((this.disease.effects.length) < 2) {
            this.errors.push('Add more Disease Effects');
        }
        if ((this.disease.signs.length) < 5) {
            this.errors.push('Add more signs');
        }
        if (this.errors.length) {
            this.errors.forEach(function (err) {
                document.querySelector('#error').classList.add('alert-danger');
                document.querySelector('#errors').innerHTML +=
                    "<li>" + err + "</li>";
            });
            setTimeout(function () {
                document.querySelector('#error').classList.remove('alert-danger');
                document.querySelector('#errors').innerHTML = '';
                _this.errors = [];
            }, 3000);
            return false;
        }
        else {
            document.querySelector('.spinners').classList.add('spinner');
            console.log(this.disease);
            this.disable = true;
            this.text = 'Please wait...';
            this.ups.addDiseaseWithPhoto(file1, this.disease.id, this.disease.name, this.disease.signs, this.disease.measures, this.disease.effects);
        }
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/components/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/components/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/upload-task/upload-task.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/upload-task/upload-task.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkLXRhc2svdXBsb2FkLXRhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/upload-task/upload-task.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-task/upload-task.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"percentage | async as pct\">\n  <progress [value]=\"pct\" max=\"100\"></progress>\n  {{ pct | number }}%\n</div>\n\n\n\n<div *ngIf=\"snapshot | async as snap\">\n\n  {{ snap.bytesTransferred }} of {{ snap.totalBytes }}\n\n  <div *ngIf=\"downloadURL as url\">\n    <h3>Results!</h3>\n    <img [src]=\"url\"><br>\n    <a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download Me!</a>\n  </div>\n\n  <button (click)=\"task.pause()\" [disabled]=\"!isActive(snap)\">Pause</button>\n  <button (click)=\"task.cancel()\" [disabled]=\"!isActive(snap)\">Cancel</button>\n  <button (click)=\"task.resume()\" [disabled]=\"!(snap?.state === 'paused')\">Resume</button>\n</div>"

/***/ }),

/***/ "./src/app/components/upload-task/upload-task.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/upload-task/upload-task.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTaskComponent", function() { return UploadTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UploadTaskComponent = /** @class */ (function () {
    function UploadTaskComponent(storage, router, db) {
        this.storage = storage;
        this.router = router;
        this.db = db;
    }
    UploadTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startUpload();
        this.router.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
        console.log("ID     ------" + this.id);
    };
    UploadTaskComponent.prototype.startUpload = function () {
        var _this = this;
        // The storage path
        var path = "photos/" + Date.now() + "_" + this.file.name;
        // Reference to storage bucket
        var ref = this.storage.ref(path);
        // The main task
        this.task = this.storage.upload(path, this.file);
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log), 
        // The file's download URL
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, ref.getDownloadURL().toPromise()];
                    case 1:
                        _a.downloadURL = _b.sent();
                        this.db.list("photos/" + this.id).push({
                            path: path,
                            downloadUri: this.downloadURL
                        }).then(function (e) {
                            alert('Photo Uploaded');
                        });
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    UploadTaskComponent.prototype.isActive = function (snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", File)
    ], UploadTaskComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadTaskComponent.prototype, "id", void 0);
    UploadTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'upload-task',
            template: __webpack_require__(/*! ./upload-task.component.html */ "./src/app/components/upload-task/upload-task.component.html"),
            styles: [__webpack_require__(/*! ./upload-task.component.css */ "./src/app/components/upload-task/upload-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], UploadTaskComponent);
    return UploadTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/uploader/uploader.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/uploader/uploader.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkZXIvdXBsb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/uploader/uploader.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/uploader/uploader.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropzone\" dropzone (hovered)=\"toggleHover($event)\" (dropped)=\"onDrop($event)\" [class.hovering]=\"isHovering\">\n\n\n  <h3>Drop Zone</h3>\n  <p>Drag and Drop an Image</p>\n\n  <div class=\"file\">\n    <label for=\"\" class=\"file-label\">\n      <input type=\"file\" (change)=\"onDrop($event.target.files)\" class=\"file-input\">\n    </label>\n  </div>\n</div>\n<div *ngFor=\"let file of files\">\n  <upload-task [file]=\"file\"></upload-task>\n</div>"

/***/ }),

/***/ "./src/app/components/uploader/uploader.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/uploader/uploader.component.ts ***!
  \***********************************************************/
/*! exports provided: UploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderComponent", function() { return UploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UploaderComponent = /** @class */ (function () {
    function UploaderComponent() {
        this.files = [];
    }
    UploaderComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    UploaderComponent.prototype.ngOnInit = function () {
        console.log('CHILD ID ' + this.id);
    };
    UploaderComponent.prototype.onDrop = function (files) {
        for (var i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploaderComponent.prototype, "id", void 0);
    UploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploader',
            template: __webpack_require__(/*! ./uploader.component.html */ "./src/app/components/uploader/uploader.component.html"),
            styles: [__webpack_require__(/*! ./uploader.component.css */ "./src/app/components/uploader/uploader.component.css")]
        })
    ], UploaderComponent);
    return UploaderComponent;
}());



/***/ }),

/***/ "./src/app/directives/dropzone.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/dropzone.directive.ts ***!
  \**************************************************/
/*! exports provided: DropzoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneDirective", function() { return DropzoneDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropzoneDirective = /** @class */ (function () {
    function DropzoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropzoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropzoneDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropzoneDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropzoneDirective.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropzoneDirective.prototype, "hovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "onDragLeave", null);
    DropzoneDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropzone]'
        })
    ], DropzoneDirective);
    return DropzoneDirective;
}());



/***/ }),

/***/ "./src/app/models/Upload.ts":
/*!**********************************!*\
  !*** ./src/app/models/Upload.ts ***!
  \**********************************/
/*! exports provided: Upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return Upload; });
var Upload = /** @class */ (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());



/***/ }),

/***/ "./src/app/pipes/file-size.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/file-size.pipe.ts ***!
  \*****************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (value, args) {
        return null;
    };
    FileSizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'fileSize'
        })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/summary.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/summary.pipe.ts ***!
  \***************************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value) {
            return null;
        }
        var actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    };
    SummaryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(afauth, router) {
        this.afauth = afauth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.afauth.user.subscribe(function (user) {
            if (user) {
                return true;
            }
            else {
                _this.router.navigateByUrl('login');
                return false;
            }
        });
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UploadService = /** @class */ (function () {
    function UploadService(storage, router, nfs, database) {
        this.storage = storage;
        this.router = router;
        this.nfs = nfs;
        this.database = database;
    }
    UploadService.prototype.addDiseaseWithPhoto = function (file, id, name, signs, measures, effects) {
        var _this = this;
        console.log('uploading started for ' + file);
        //set a storage location
        var path = "diseaseimages/" + new Date().getTime() + "_" + file.name;
        var ref = this.storage.ref(path);
        var task = this.storage.upload(path, file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.downLoadUrl = ref.getDownloadURL();
            _this.downLoadUrl.subscribe(function (str) {
                var idd = _this.nfs.createId();
                id = idd;
                var disease = {
                    name: name,
                    signs: signs,
                    measures: measures,
                    effects: effects,
                    storepath: path,
                    photo: str,
                    id: id
                };
                _this.database.object("diseases/" + id).set(disease);
                _this.nfs.collection('diseases').doc(id).set(disease).catch(function (err) { return console.log(err); }).then(function () {
                    document.forms[0].reset();
                    alert('Added successfully');
                    console.log('success');
                });
            });
        }))
            .subscribe();
        //     const ref = this.storage.ref(path);
        //     // const task = ref.putString(file);
        //     ref.putString(file).catch(err=>console.log(err)).then(res=>console.log('uploaded'));
        //     const idd = this.nfs.createId();
        //     id = idd;
        //     console.log('new id '+id);
        //     task.snapshotChanges().pipe(
        //       finalize(() => {
        //         console.log('download url '+ref.getDownloadURL());
        //         this.downLoadUrl = ref.getDownloadURL();
        //     const disease: Disease = {
        //       name: name,
        //       signs: signs,
        //       measures: measures,
        //       effects: effects,
        //       storepath: path,
        //       photo: this.downLoadUrl,
        //       id: id
        //     }
        // console.log('to set '+disease);
        //     this.database.object(`diseases/${id}`).set(disease);
        //     this.nfs.collection('diseases').doc(id).set(disease).catch(err => console.log(err)).then(function () {
        //       document.forms[0].reset();
        //       this.router.navigateByUrl('');
        //       alert('Added successfully');
        //      console.log('success');
        // }
        //  );
        // }))
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDgzJE1XBhps_3GK6G3-acPKnI1aNOEcU4",
        authDomain: "coffeeapp-956ac.firebaseapp.com",
        databaseURL: "https://coffeeapp-956ac.firebaseio.com",
        projectId: "coffeeapp-956ac",
        storageBucket: "coffeeapp-956ac.appspot.com",
        messagingSenderId: "936887399629"
    }
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDgzJE1XBhps_3GK6G3-acPKnI1aNOEcU4",
        authDomain: "coffeeapp-956ac.firebaseapp.com",
        databaseURL: "https://coffeeapp-956ac.firebaseio.com",
        projectId: "coffeeapp-956ac",
        storageBucket: "coffeeapp-956ac.appspot.com",
        messagingSenderId: "936887399629"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/crycetruly/CP/thecoffe_bot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map