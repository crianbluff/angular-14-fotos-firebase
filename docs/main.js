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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <a class=\"navbar-brand\" [routerLink]=\"['photos']\">\r\n    Photos Firebase\r\n  </a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['photos']\">\r\n          Photos\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['upload']\">\r\n          Upload Photos\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container main-container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/ng-drop-files.directive */ "./src/app/directives/ng-drop-files.directive.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fotos/fotos.component */ "./src/app/components/fotos/fotos.component.ts");
/* harmony import */ var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carga/carga.component */ "./src/app/components/carga/carga.component.ts");
/* harmony import */ var _services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/carga-imagenes.service */ "./src/app/services/carga-imagenes.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





//Rutas

// Directivas

// Componentes



// Servicios

// Firebase


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_8__["FotosComponent"],
                _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_9__["CargaComponent"],
                _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_6__["NgDropFilesDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTES"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"]
            ],
            providers: [
                _services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_10__["CargaImagenesService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fotos/fotos.component */ "./src/app/components/fotos/fotos.component.ts");
/* harmony import */ var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carga/carga.component */ "./src/app/components/carga/carga.component.ts");



var RUTAS = [
    {
        path: 'photos',
        component: _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_1__["FotosComponent"]
    },
    {
        path: 'upload',
        component: _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_2__["CargaComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'photos'
    }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(RUTAS, { useHash: true });


/***/ }),

/***/ "./src/app/components/carga/carga.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/carga/carga.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h3 class=\"mb-3 text-center\">\r\n      Select Your Images\r\n    </h3>\r\n    \r\n    <form enctype=\"multipart/form-data\">\r\n      <label class=\"label\" [ngClass]=\"{'file-over': estaSobreElemento}\">\r\n        <span class=\"title\">\r\n          Click to select your images or drop here your images.\r\n        </span>\r\n        <img src=\"assets/images/drop-images.png\" alt=\"Upload Photo\" title=\"Upload Photo\">\r\n        <input type=\"file\" appNgDropFiles (mouseSobre)=\"estaSobreElemento = $event\" [archivos]=\"archivos\" accept=\"image/*\" multiple=\"multiple\" required=\"required\">\r\n      </label>\r\n    </form>\r\n  </div>\r\n  \r\n  <div class=\"col-md-12 mt-5\">\r\n    <button type=\"button\" class=\"btn btn-success mx-2\" (click)=\"cargarImagenes()\" [disabled]=\"archivos.length === 0\">\r\n      Upload to firebase\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-danger mx-2\" (click)=\"limpiarArchivos()\">\r\n      Clean\r\n    </button>\r\n\r\n    <button type=\"button\" disabled=\"disabled\" class=\"btn btn-secondary mx-2\">\r\n      {{ archivos.length }}\r\n    </button>\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th>Image</th>\r\n            <th>Name</th>\r\n            <th>Title</th>\r\n            <th>Description</th>\r\n            <th>Price</th>\r\n            <th>File Type</th>\r\n            <th>Size</th>\r\n            <th>Progress</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let archivo of archivos\">\r\n            <td>\r\n              <img [src]=\"archivo.urlPrevisualizacion\" [alt]=\"archivo.nombreArchivo\" [title]=\"archivo.nombreArchivo\" width=\"100px\">\r\n            </td>\r\n            \r\n            <td>\r\n              {{ archivo.nombreArchivo }}\r\n            </td>\r\n\r\n            <td>\r\n              <input [(ngModel)]=\"archivo.title\" #title=\"ngModel\" [value]=\"archivo.title\" placeholder=\"Title\">\r\n            </td>\r\n\r\n            <td>\r\n              <input [(ngModel)]=\"archivo.desc\" #desc=\"ngModel\" [value]=\"archivo.desc\" placeholder=\"Description\">\r\n            </td>\r\n\r\n            <td>\r\n              <input [(ngModel)]=\"archivo.price\" #price=\"ngModel\" [value]=\"archivo.price\" placeholder=\"Price\">\r\n            </td>\r\n\r\n            <td>\r\n              {{ archivo.tipoArchivo }}\r\n            </td>\r\n\r\n            <td>\r\n              {{ archivo.archivo.size / 1024 / 1024 | number: '.2-2' }}MB\r\n            </td>\r\n            \r\n            <td>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': archivo.progreso + '%' }\" [ngClass]=\"{'bg-success': archivo.progreso >= 100}\"></div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/carga/carga.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/carga/carga.component.ts ***!
  \*****************************************************/
/*! exports provided: CargaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaComponent", function() { return CargaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/carga-imagenes.service */ "./src/app/services/carga-imagenes.service.ts");



var CargaComponent = /** @class */ (function () {
    function CargaComponent(_cargaImagenes) {
        this._cargaImagenes = _cargaImagenes;
        this.estaSobreElemento = false;
        this.archivos = [];
    }
    CargaComponent.prototype.ngOnInit = function () {
    };
    CargaComponent.prototype.cargarImagenes = function () {
        this._cargaImagenes.cargarImagenesFirebase(this.archivos);
    };
    CargaComponent.prototype.limpiarArchivos = function () {
        this._cargaImagenes.limpiarImagenes();
        this.archivos = [];
    };
    CargaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carga',
            template: __webpack_require__(/*! ./carga.component.html */ "./src/app/components/carga/carga.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_2__["CargaImagenesService"]])
    ], CargaComponent);
    return CargaComponent;
}());



/***/ }),

/***/ "./src/app/components/fotos/fotos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos/fotos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lengthItems == 0\">\r\n  <h1 class=\"text-center\">\r\n    There are no posts\r\n  </h1>\r\n\r\n  <div class=\"mt-3 text-center\">\r\n    <a [routerLink]=\"['/upload']\" class=\"btn btn-outline-primary\">\r\n      Create Post\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"lengthItems !== 0\">\r\n  <h1 class=\"text-center mb-3\" *ngIf=\"lengthItems === 1\">\r\n    {{ lengthItems }} Post\r\n  </h1>\r\n\r\n  <h1 class=\"text-center mb-3\" *ngIf=\"lengthItems > 1\">\r\n    {{ lengthItems }} Posts\r\n  </h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let item of images\">\r\n      <div class=\"mx-auto\" id=\"gallery\">\r\n        <div class=\"flex items-center justify-center my-4\">\r\n          <div class=\"w-full\">\r\n            <div class=\"bg-white shadow-xl rounded-lg overflow-hidden position-relative\">\r\n              <div class=\"bg-cover bg-center h-56 p-4\" [ngStyle]=\"{'background-image': 'url(' + item.payload.doc.data().url + ')'}\">\r\n                <div class=\"ctn-icons\">\r\n                  <i class=\"fa fa-trash icon-remove\" title=\"Delete Image\" [id]=\"item.payload.doc.id\" (click)=\"eliminarImagen($event)\"></i>\r\n                  <i class=\"fa fa-camera icon-view\" title=\"View Image\" (click)=\"verImagen($event)\"></i>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-4\">\r\n                <p class=\"uppercase tracking-wide text-sm font-bold text-gray-700\">\r\n                  {{ item.payload.doc.data().title ? item.payload.doc.data().title : 'No Title' }}\r\n                </p>\r\n\r\n                <p class=\"text-3xl text-gray-900\">\r\n                  {{ item.payload.doc.data().price ? '$ ' + item.payload.doc.data().price : 'No Price' }}\r\n                </p>\r\n\r\n                <p class=\"text-gray-700\">\r\n                  {{ item.payload.doc.data().desc ? item.payload.doc.data().desc : 'No Description' }}\r\n                </p>\r\n              </div>\r\n              \r\n              <div class=\"px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100\">\r\n                <div class=\"text-xs uppercase font-bold text-gray-600 tracking-wide\">\r\n                  Creator\r\n                </div>\r\n    \r\n                <div class=\"flex items-center pt-2\">\r\n                  <div class=\"bg-cover bg-center w-10 h-10 rounded-full mr-3\" style=\"background-image: url('http://crianbluff.com/imgs/imgs-general/modals/modal-creator-web/avatar-creator-web/avatar-creator-web.jpg')\">\r\n                </div>\r\n                \r\n                <div>\r\n                  <p class=\"font-bold text-gray-900\">\r\n                    Cristian Castillo\r\n                  </p>\r\n\r\n                  <p class=\"text-sm text-gray-700\">\r\n                    (+57) 310 123 45 67\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"modal-lightbox\" class=\"modal-lightbox\" (click)=\"cerrarModalClickFuera($event)\">\r\n\t<div class=\"ctn-modal-lightbox\" (click)=\"stopPropagation($event)\">\r\n\t\t<div id=\"close-modal-lightbox\" class=\"close-modal-lightbox\" (click)=\"closeModal()\">\r\n\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"modal-lightbox-body\">\r\n\t\t\t<img>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/fotos/fotos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/fotos/fotos.component.ts ***!
  \*****************************************************/
/*! exports provided: FotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosComponent", function() { return FotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carga-imagenes.service */ "./src/app/services/carga-imagenes.service.ts");




var FotosComponent = /** @class */ (function () {
    function FotosComponent(afs, _cargaImagenes) {
        var _this = this;
        this.afs = afs;
        this._cargaImagenes = _cargaImagenes;
        this.itemsCollection = this.afs.collection('img');
        this.items = this.itemsCollection.valueChanges();
        this.items.forEach(function (item) {
            _this.lengthItems = item.length;
        });
    }
    FotosComponent.prototype.getImages = function () {
        var _this = this;
        this.afs.collection('img').snapshotChanges()
            .subscribe(function (res) {
            _this.images = res;
        });
    };
    FotosComponent.prototype.verImagen = function (event) {
        var modal = document.getElementById('modal-lightbox');
        var imgModal = modal.querySelector('.ctn-modal-lightbox .modal-lightbox-body img');
        var pathImage = event.target.parentElement.parentElement.style.backgroundImage.slice(5, -2).replace(/'/g);
        imgModal.setAttribute('src', pathImage);
        modal.classList.add('show-modal-lightbox');
        document.body.classList.add('no-scroll-y');
    };
    FotosComponent.prototype.cerrarModalClickFuera = function (event) {
        var temp = event.target;
        temp.classList.remove('show-modal-lightbox');
        document.body.classList.remove('no-scroll-y');
    };
    FotosComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    FotosComponent.prototype.closeModal = function () {
        var modal = document.getElementById('modal-lightbox');
        modal.classList.remove('show-modal-lightbox');
        document.body.classList.remove('no-scroll-y');
    };
    FotosComponent.prototype.eliminarImagen = function (event) {
        var key = event.target.id;
        this._cargaImagenes.eliminarImagen(key);
    };
    FotosComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    FotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fotos',
            template: __webpack_require__(/*! ./fotos.component.html */ "./src/app/components/fotos/fotos.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], src_app_services_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["CargaImagenesService"]])
    ], FotosComponent);
    return FotosComponent;
}());



/***/ }),

/***/ "./src/app/directives/ng-drop-files.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/ng-drop-files.directive.ts ***!
  \*******************************************************/
/*! exports provided: NgDropFilesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDropFilesDirective", function() { return NgDropFilesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_file_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/file-item */ "./src/app/models/file-item.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var NgDropFilesDirective = /** @class */ (function () {
    function NgDropFilesDirective(sanitizer) {
        this.sanitizer = sanitizer;
        this.archivos = [];
        this.mouseSobre = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgDropFilesDirective.prototype.onDragEnter = function (event) {
        this.mouseSobre.emit(true);
        this._prevenirDetener(event);
    };
    NgDropFilesDirective.prototype.onDragLeave = function () {
        this.mouseSobre.emit(false);
    };
    NgDropFilesDirective.prototype.onDrop = function (event) {
        var transferencia = this._getTransferencia(event);
        this._prevenirDetener(event);
        this.mouseSobre.emit(false);
        if (!transferencia) {
            return;
        }
        this._extraerArchivos(event, transferencia.files);
    };
    NgDropFilesDirective.prototype.onFileChanged = function (event) {
        var transferencia = this._getTransferencia(event);
        if (!transferencia) {
            return;
        }
        this._extraerArchivos(event, transferencia.files);
    };
    NgDropFilesDirective.prototype._getTransferencia = function (event) {
        if (event.dataTransfer) {
            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
        }
        else if (event.target.files) {
            return event.target ? event.target : event.originalEvent.target;
        }
    };
    NgDropFilesDirective.prototype._extraerArchivos = function (event, archivosLista) {
        // console.log(archivosLista);
        for (var propiedad in Object.getOwnPropertyNames(archivosLista)) {
            var archivoTemporal = archivosLista[propiedad];
            if (this._archivoPuedeSerCargado(archivoTemporal)) {
                if (event.dataTransfer) {
                    this.urlPrevisualizacion = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(event.dataTransfer.files[propiedad]));
                }
                else if (event.target.files) {
                    this.urlPrevisualizacion = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(event.target.files[propiedad]));
                }
                archivoTemporal['urlPrevisualizacion'] = this.urlPrevisualizacion;
                var title = '';
                archivoTemporal['title'] = title;
                var price = '';
                archivoTemporal['price'] = price;
                var desc = '';
                archivoTemporal['desc'] = desc;
                var tipoArchivo = archivoTemporal.type;
                archivoTemporal['tipoArchivo'] = tipoArchivo;
                var nuevoArchivo = new _models_file_item__WEBPACK_IMPORTED_MODULE_3__["FileItem"](archivoTemporal);
                this.archivos.push(nuevoArchivo);
            }
        }
        // console.log(this.archivos);
    };
    // Validaciones
    NgDropFilesDirective.prototype._archivoPuedeSerCargado = function (archivo) {
        if (!this._archivoYaFueDroppeado(archivo.name) && this._esImagen(archivo.type)) {
            return true;
        }
        else {
            return false;
        }
    };
    NgDropFilesDirective.prototype._prevenirDetener = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NgDropFilesDirective.prototype._archivoYaFueDroppeado = function (nombreArchivo) {
        // console.log(nombreArchivo);
        for (var _i = 0, _a = this.archivos; _i < _a.length; _i++) {
            var archivo = _a[_i];
            if (archivo.nombreArchivo === nombreArchivo) {
                this.MostrarError("The file " + nombreArchivo + " is already uploaded");
                return true;
            }
        }
        return false;
    };
    NgDropFilesDirective.prototype._esImagen = function (tipoArchivo) {
        if (tipoArchivo === '' || tipoArchivo === undefined || !tipoArchivo.startsWith('image')) {
            this.MostrarError("The format type " + tipoArchivo + " is not valid, it hast to be an image");
            return false;
        }
        else {
            return true;
        }
    };
    NgDropFilesDirective.prototype.MostrarError = function (msgError) {
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            type: 'error',
            title: msgError
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgDropFilesDirective.prototype, "urlPrevisualizacion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgDropFilesDirective.prototype, "archivos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgDropFilesDirective.prototype, "mouseSobre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onFileChanged", null);
    NgDropFilesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNgDropFiles]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], NgDropFilesDirective);
    return NgDropFilesDirective;
}());



/***/ }),

/***/ "./src/app/models/file-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/file-item.ts ***!
  \*************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
var FileItem = /** @class */ (function () {
    function FileItem(archivo) {
        this.archivo = archivo;
        this.desc = archivo.desc;
        this.estaSubiendo = false;
        this.nombreArchivo = archivo.name;
        this.price = archivo.price;
        this.progreso = 0;
        this.tipoArchivo = archivo.tipoArchivo;
        this.title = archivo.title;
        this.urlPrevisualizacion = archivo.urlPrevisualizacion;
    }
    return FileItem;
}());



/***/ }),

/***/ "./src/app/services/carga-imagenes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/carga-imagenes.service.ts ***!
  \****************************************************/
/*! exports provided: CargaImagenesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaImagenesService", function() { return CargaImagenesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore/firestore */ "./node_modules/@angular/fire/firestore/firestore.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var CargaImagenesService = /** @class */ (function () {
    function CargaImagenesService(db) {
        this.db = db;
        this.numeroImagenes = 0;
        this.almacenarLengthArrayActual = 0;
        this.almacenarLengthArrayAnterior = 0;
        this.cleaner = false;
        this.CARPETA_IMAGENES = 'img';
    }
    CargaImagenesService.prototype.limpiarImagenes = function () {
        this.cleaner = true;
    };
    CargaImagenesService.prototype.cargarImagenesFirebase = function (imagenes) {
        // console.log(imagenes);
        var _this = this;
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
        this.almacenarLengthArrayAnterior = this.almacenarLengthArrayActual;
        if (this.cleaner) {
            this.almacenarLengthArrayAnterior = 0;
            this.cleaner = false;
        }
        this.numeroImagenes = imagenes.length - this.almacenarLengthArrayAnterior;
        this.almacenarLengthArrayActual = imagenes.length;
        // console.log('array anterior', this.almacenarLengthArrayAnterior);
        // let imagenesCalculo = this.numeroImagenes - this.numeroImagenes + 1;
        var imagenesCalculo = 1;
        var _loop_1 = function (item) {
            item.estaSubiendo = true;
            if (item.progreso >= 100) {
                return "continue";
            }
            // console.log(item);
            var uploadTask = storageRef.child(this_1.CARPETA_IMAGENES + "/" + item.nombreArchivo)
                .put(item.archivo);
            uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_3__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { return item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; }, function (error) { return console.error('Error trying to upload', error); }, function () {
                item.estaSubiendo = false;
                storageRef.child(_this.CARPETA_IMAGENES + "/" + item.nombreArchivo).getDownloadURL()
                    .then(function (url) {
                    _this.guardarImagen({
                        desc: item.desc,
                        price: item.price,
                        title: item.title,
                        url: url
                    });
                    var imagenesCargadas = imagenesCalculo++;
                    // console.log('imagenes cargadas', imagenesCargadas);
                    // console.log('numero de imagenes', this.numeroImagenes);
                    if (imagenesCargadas === _this.numeroImagenes) {
                        if (imagenes.length > 1) {
                            _this.mostrarOk(imagenesCargadas + " Images have been uploaded to firebase successfully");
                        }
                        else if (imagenes.length <= 1) {
                            _this.mostrarOk('The image has been uploaded to firebase successfully');
                        }
                    }
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, imagenes_1 = imagenes; _i < imagenes_1.length; _i++) {
            var item = imagenes_1[_i];
            _loop_1(item);
        }
    };
    CargaImagenesService.prototype.guardarImagen = function (imagen) {
        // console.log(imagen);
        this.db.collection("/" + this.CARPETA_IMAGENES)
            .add(imagen);
    };
    CargaImagenesService.prototype.eliminarImagen = function (key) {
        var _this = this;
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-2',
                cancelButton: 'btn btn-danger mx-2'
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: '¡You cannot revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel it!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'The card has been deleted successfully.', 'success');
                _this.db.collection('img').doc(key).delete().then(function () {
                }).catch(function (error) {
                    console.log('Error: ', error);
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your card is safe :)', 'error');
            }
        });
    };
    CargaImagenesService.prototype.mostrarOk = function (msgSuccess) {
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            type: 'success',
            title: msgSuccess
        });
    };
    CargaImagenesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CargaImagenesService);
    return CargaImagenesService;
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
        apiKey: 'AIzaSyAqncheL86paLtexbbR5KHpKIhdCRETcR8',
        authDomain: 'fire-fotos-8e3f9.firebaseapp.com',
        databaseURL: 'https://fire-fotos-8e3f9.firebaseio.com',
        projectId: 'fire-fotos-8e3f9',
        storageBucket: 'fire-fotos-8e3f9.appspot.com',
        messagingSenderId: '699144764414'
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
    production: true
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

module.exports = __webpack_require__(/*! C:\Users\crian\Downloads\to-check\angular-14-fotos-firebase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map