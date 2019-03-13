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

module.exports = "<app-main-homepage></app-main-homepage>\n\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.module */ "./src/app/homepage/homepage.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/main-homepage/main-homepage.component */ "./src/app/homepage/main-homepage/main-homepage.component.ts");







var appRoutes = [
    // {path:'signup',component:SignupComponent},
    // {path: 'signin', component:SigninComponent},
    // {path:'users',component: DSNDComponent},
    { path: 'home', component: _homepage_main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_6__["MainHomepageComponent"], children: [] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_4__["HomepageModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homepage/discount-item/discount-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/homepage/discount-item/discount-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid{\n    position: relative;\n    margin-left: 15px;\n    max-width: 1000px;\n    list-style: none;\n    text-align: justify;\n    font-family: 'Roboto', sans-serif;\n  }\n  .grid figure{\n    position: relative;\n    float: left;\n    overflow: hidden;\n    margin: 10px 1%;\n  \n  }\n  .grid figure img{\n    position: relative;\n    display: block;\n    min-height: 100%;\n    max-width: 100%;\n  }\n  .grid figure figcaption{\n    width: 100%;\n    height: 100%;\n    padding: 2em;\n    color: #ffff;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    position: absolute;\n    background-color: #000000;\n    overflow: hidden;\n  }\n  .grid figure figcaption:hover{\n    opacity: 0.8;\n    top: 0;\n    left: 0;\n    position: absolute;\n    transition: 3ms all;\n    overflow: hidden;\n  }\n  .grid figure figcaption h2{\n    font-size: 15px;\n    text-transform: uppercase;\n  }\n  .grid figure .btn-detail{\n      display: inline-block;\n      font-size: 14px;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n      color: #ffffff;\n      font-weight: 400;\n      border: 1px solid #ffffff;\n      padding: 15px 30px;\n      text-decoration: none;\n      line-height: 1;\n      background-color: transparent;\n  }\n  .grid figure .btn-detail:hover{\n    background-color: red;\n    color: white;\n    border: none;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZGlzY291bnQtaXRlbS9kaXNjb3VudC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTs7RUFFakI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7RUFDQTtNQUNJLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGNBQWM7TUFDZCw2QkFBNkI7RUFDakM7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvZGlzY291bnQtaXRlbS9kaXNjb3VudC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgfVxuICAuZ3JpZCBmaWd1cmV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMHB4IDElO1xuICBcbiAgfVxuICAuZ3JpZCBmaWd1cmUgaW1ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuZ3JpZCBmaWd1cmUgZmlnY2FwdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGNvbG9yOiAjZmZmZjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmdyaWQgZmlndXJlIGZpZ2NhcHRpb246aG92ZXJ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiAzbXMgYWxsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmdyaWQgZmlndXJlIGZpZ2NhcHRpb24gaDJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmdyaWQgZmlndXJlIC5idG4tZGV0YWlse1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAuZ3JpZCBmaWd1cmUgLmJ0bi1kZXRhaWw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/homepage/discount-item/discount-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/discount-item/discount-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid mix review\">\n    <a href=\"\" class=\"new__item d-block\">\n      <figure class=\"effect-ruby\">\n        <img [src]=\"ItemKhuyenMai.HinhAnh\" alt=\"\">\n        <figcaption>\n          <h2>{{ItemKhuyenMai.TenKhuyenMai}}</h2>\n          <p>{{ItemKhuyenMai.desc}}</p>\n          <a [href]=\"ItemKhuyenMai.href\" class=\"btn btn-detail\">Chi tiết</a>\n        </figcaption>\n      </figure>\n    </a>\n  </div>\n  "

/***/ }),

/***/ "./src/app/homepage/discount-item/discount-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/discount-item/discount-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: DiscountItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountItemComponent", function() { return DiscountItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiscountItemComponent = /** @class */ (function () {
    function DiscountItemComponent() {
    }
    DiscountItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiscountItemComponent.prototype, "ItemKhuyenMai", void 0);
    DiscountItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discount-item',
            template: __webpack_require__(/*! ./discount-item.component.html */ "./src/app/homepage/discount-item/discount-item.component.html"),
            styles: [__webpack_require__(/*! ./discount-item.component.css */ "./src/app/homepage/discount-item/discount-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiscountItemComponent);
    return DiscountItemComponent;
}());



/***/ }),

/***/ "./src/app/homepage/discount/discount.component.css":
/*!**********************************************************!*\
  !*** ./src/app/homepage/discount/discount.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n    line-height: 1.5;\n    font-size: 18px;\n    font-weight: 500;\n    text-transform: uppercase;\n    margin-left: 15px;\n  }\n  h3::after{\n    display: block;\n    width: 50px;\n    height: 2px;\n    margin-top: 8px;\n    content: '';\n    background-color: orangered;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICBoMzo6YWZ0ZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/homepage/discount/discount.component.html":
/*!***********************************************************!*\
  !*** ./src/app/homepage/discount/discount.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <h3>Tin khuyến mãi</h3>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" *ngFor=\"let khuyenmai of danhSachKhuyenMai\">\n        <app-discount-item [ItemKhuyenMai]=khuyenmai></app-discount-item>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/homepage/discount/discount.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/homepage/discount/discount.component.ts ***!
  \*********************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiscountComponent = /** @class */ (function () {
    function DiscountComponent() {
        this.danhSachKhuyenMai = [
            { TenKhuyenMai: "Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng", HinhAnh: '../../../../assets/img/khuyenmai1.jpg', desc: 'Từ lâu, chương trình Ngày Tri Ân Nhằm tạo điều kiện thuận lợi hơn cho các khách hàng thả ga xem phim đã trở nên quen thuộc với các khách hàng thân yêu của Galaxy Cinema.', href: 'https://www.galaxycine.vn/khuyen-mai/ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang' },
            { TenKhuyenMai: "Cà Thẻ Tẹt Ga – Cuối Tuần Thật Đã", HinhAnh: '../../../../assets/img/khuyenmai2.jpg', desc: 'Galaxy Cinema dành tặng các Stars chương trình ưu đãi vô cùng hấp dẫn ', href: 'https://www.galaxycine.vn/khuyen-mai/ca-the-tet-ga--cuoi-tuan-that-da' },
            { TenKhuyenMai: "Thứ 4 Vui Vẻ - Quẹt Thẻ Liền Tay", HinhAnh: '../../../../assets/img/khuyenmai3.jpg', desc: 'Từ ngày 21.08.2018 – 31.01.2019, Galaxy Cinema dành tặng các Stars chương trình ưu đãi vô cùng hấp dẫn Thứ 4 Vui Vẻ - Quẹt Thẻ Liền Tay.', href: 'https://www.galaxycine.vn/khuyen-mai/thu-4-vui-ve---quet-the-lien-tay' },
            { TenKhuyenMai: "Giá Vé U22  - Đồng Giá 45k", HinhAnh: '../../../../assets/img/khuyenmai4.jpg', desc: 'Từ 05/06, chỉ 45k/vé 2D lại thả ga bắp nước tại Galaxy Cinema.', href: 'https://www.galaxycine.vn/khuyen-mai/gia-ve-u22---dong-gia-45k' },
            { TenKhuyenMai: "Thông Báo Ngừng Áp Dụng Voucher WIN", HinhAnh: '../../../../assets/img/khuyenmai5.jpg', desc: 'Từ ngày 05.03.2019, Galaxy Cinema chính thức ngừng áp dụng voucher WIN (Voucher được sử dụng khi các Stars mua 01vé 2D và combo 2 trở lên) trên toàn hệ thống rạp.', href: 'https://www.galaxycine.vn/khuyen-mai/thong-bao-ngung-ap-dung-voucher-win' },
            { TenKhuyenMai: "Tôn Vinh Nhan Sắc – Đặc Cách Yêu Thương", HinhAnh: '../../../../assets/img/khuyenmai6.jpg', desc: 'Galaxy Cinema dành tặng hàng chục ngàn phần quà cho một nửa thế giới từ 07/03-09/03/2019!', href: 'https://www.galaxycine.vn/khuyen-mai/ton-vinh-nhan-sac--dac-cach-yeu-thuong' },
            { TenKhuyenMai: "Xem Phim Thả Ga, Mang Xe Về Nhà", HinhAnh: '../../../../assets/img/khuyenmai7.jpg', desc: 'Còn gì tuyệt vời hơn khi bắt đầu năm mới với những món quà siêu hấp dẫn đến từ Galaxy Cà Mau.', href: 'https://www.galaxycine.vn/khuyen-mai/xem-phim-tha-ga-mang-xe-ve-nha' },
            { TenKhuyenMai: "Hướng Dẫn Sử Dụng Máy Gbox", HinhAnh: '../../../../assets/img/khuyenmai8.jpg', desc: 'Gbox - Mua Vé Dễ Dàng, Tiết Kiệm Thời Gian', href: 'https://www.galaxycine.vn/khuyen-mai/huong-dan-su-dung-may-gbox' },
        ];
    }
    DiscountComponent.prototype.ngOnInit = function () {
    };
    DiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discount',
            template: __webpack_require__(/*! ./discount.component.html */ "./src/app/homepage/discount/discount.component.html"),
            styles: [__webpack_require__(/*! ./discount.component.css */ "./src/app/homepage/discount/discount.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiscountComponent);
    return DiscountComponent;
}());



/***/ }),

/***/ "./src/app/homepage/film-list/film-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/homepage/film-list/film-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n    line-height: 1.5;\n    font-size: 18px;\n    font-weight: 500;\n    text-transform: uppercase;\n    margin-left: 15px;\n  }\n  h3::after{\n    display: block;\n    width: 50px;\n    height: 2px;\n    margin-top: 8px;\n    content: '';\n    background-color: orangered;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZmlsbS1saXN0L2ZpbG0tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9maWxtLWxpc3QvZmlsbS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgaDM6OmFmdGVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/film-list/film-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/homepage/film-list/film-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <h3>Danh sách phim</h3>\n  <div class=\"row\">\n    <div class=\"col-3\" *ngFor=\"let phim of danhSachPhim | paginate: { itemsPerPage: 8, currentPage: p } ;let i = index \">\n      <app-film [phim]=\"phim\"></app-film>\n    </div>\n  </div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/homepage/film-list/film-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/homepage/film-list/film-list.component.ts ***!
  \***********************************************************/
/*! exports provided: FilmListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmListComponent", function() { return FilmListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_phim_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/phim-api.service */ "./src/app/services/phim-api.service.ts");



var FilmListComponent = /** @class */ (function () {
    function FilmListComponent(_filmSV) {
        this._filmSV = _filmSV;
        this.danhSachPhim = [];
    }
    FilmListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._filmSV.getDanhSachPhim().subscribe(function (res) {
            console.log(res);
            _this.danhSachPhim = res;
        }, function (err) {
            console.log(err);
        });
    };
    FilmListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film-list',
            template: __webpack_require__(/*! ./film-list.component.html */ "./src/app/homepage/film-list/film-list.component.html"),
            styles: [__webpack_require__(/*! ./film-list.component.css */ "./src/app/homepage/film-list/film-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_phim_api_service__WEBPACK_IMPORTED_MODULE_2__["PhimApiService"]])
    ], FilmListComponent);
    return FilmListComponent;
}());



/***/ }),

/***/ "./src/app/homepage/film/film.component.css":
/*!**************************************************!*\
  !*** ./src/app/homepage/film/film.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    height: 100%;\n    width: 100%;\n    background: #e9e9e9;\n    font-family: 'Arimo', Arial, sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    color: #010b26;\n  }\n  \n  * {\n    transition: 300ms;\n  }\n  \n  .intro {\n    text-align: center;\n  }\n  \n  ul {\n    list-style-type: none;\n  }\n  \n  h1, h2, h3, h4, h5, p {\n    font-weight: 400;\n  }\n  \n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  \n  a:hover {\n    color: #6ABCEA;\n  }\n  \n  .container {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    margin-top: 10vh;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n  }\n  \n  .movie-card {\n    background: #ffffff;\n    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    max-width: 315px;\n    margin: 2em;\n    border-radius: 10px;\n    display: inline-block;\n  }\n  \n  .movie-header {\n    padding: 0;\n    margin: 0;\n    height: 367px;\n    width: 100%;\n    display: block;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n  \n  .header-icon-container img{\n    width: 100%;\n }\n  \n  .header-icon-container {\n    position: relative;\n  }\n  \n  .header-icon {\n    width: 100%;\n    height: 367px;\n    line-height: 367px;\n    text-align: center;\n    vertical-align: middle;\n    margin: 0 auto;\n    color: #ffffff;\n    font-size: 54px;\n    text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA;\n    opacity: .85;\n  }\n  \n  .header-icon:hover {\n    background: rgba(0, 0, 0, 0.15);\n    font-size: 74px;\n    text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    opacity: 1;\n  }\n  \n  .movie-card:hover {\n    -webkit-transform: scale(1.03);\n            transform: scale(1.03);\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);\n  }\n  \n  .movie-content {\n    padding: 18px 18px 24px 18px;\n    margin: 0;\n  }\n  \n  .movie-content-header, .movie-info {\n    display: table;\n    width: 100%;\n  }\n  \n  .movie-title {\n    font-size: 24px;\n    margin: 0;\n    display: table-cell;\n  }\n  \n  .imax-logo {\n    width: 50px;\n    height: 15px;\n    background: url(\"https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/media_kit/3e27ede823afbf139c57f1c78a03c870.jpg\") no-repeat;\n    background-size: contain;\n    display: table-cell;\n    float: right;\n    position: relative;\n    margin-top: 5px;\n  }\n  \n  .movie-info {\n    margin-top: 1em;\n  }\n  \n  .info-section {\n    display: table-cell;\n    text-transform: uppercase;\n    text-align: center;\n  }\n  \n  .info-section:first-of-type {\n    text-align: left;\n  }\n  \n  .info-section:last-of-type {\n    text-align: right;\n  }\n  \n  .info-section label {\n    display: block;\n    color: rgba(0, 0, 0, 0.5);\n    margin-bottom: .5em;\n    font-size: 9px;\n  }\n  \n  .info-section span {\n    font-weight: 700;\n    font-size: 11px;\n  }\n  \n  @media screen and (max-width: 500px) {\n    .movie-card {\n      width: 95%;\n      max-width: 95%;\n      margin: 1em;\n      display: block;\n    }\n  \n    .container {\n      padding: 0;\n      margin: 0;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZmlsbS9maWxtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBRUUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBR0UsYUFBYTtJQUVULGVBQWU7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBR1YsdUJBQXVCO0VBQ2pDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9COztFQUVEO0lBQ0csV0FBVztDQUNkOztFQUVDO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZix1REFBdUQ7SUFDdkQsWUFBWTtFQUNkOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGVBQWU7SUFDZix1REFBdUQ7SUFDdkQsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSw4QkFBOEI7WUFDdEIsc0JBQXNCO0lBQzlCLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZKQUE2SjtJQUM3Six3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLGNBQWM7TUFDZCxXQUFXO01BQ1gsY0FBYztJQUNoQjs7SUFFQTtNQUNFLFVBQVU7TUFDVixTQUFTO0lBQ1g7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2ZpbG0vZmlsbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgZm9udC1mYW1pbHk6ICdBcmltbycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDEwYjI2O1xuICB9XG4gIFxuICAqIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zO1xuICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICB9XG4gIFxuICAuaW50cm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICBcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBwIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjNkFCQ0VBO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLm1vdmllLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMxNXB4O1xuICAgIG1hcmdpbjogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAubW92aWUtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDM2N3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gLmhlYWRlci1pY29uLWNvbnRhaW5lciBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuICBcbiAgLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaGVhZGVyLWljb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzY3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2N3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4ICM2YWJjZWEsIDBweCA1cHggMjBweCAjNkFCQ0VBO1xuICAgIG9wYWNpdHk6IC44NTtcbiAgfVxuICBcbiAgLmhlYWRlci1pY29uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGZvbnQtc2l6ZTogNzRweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4ICM2YWJjZWEsIDBweCA1cHggMzBweCAjNkFCQ0VBO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLm1vdmllLWNhcmQ6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB9XG4gIFxuICAubW92aWUtY29udGVudCB7XG4gICAgcGFkZGluZzogMThweCAxOHB4IDI0cHggMThweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5tb3ZpZS1jb250ZW50LWhlYWRlciwgLm1vdmllLWluZm8ge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubW92aWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgfVxuICBcbiAgLmltYXgtbG9nbyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vNmEyNWJiZDA0YmQzM2I4YTg0M2UtOTYyNmE4YjZjNzg1ODA1Nzk0MTUyNGJmZGFkNWY1YjAuc3NsLmNmNS5yYWNrY2RuLmNvbS9tZWRpYV9raXQvM2UyN2VkZTgyM2FmYmYxMzljNTdmMWM3OGEwM2M4NzAuanBnXCIpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICBcbiAgLm1vdmllLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICBcbiAgLmluZm8tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmluZm8tc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAuaW5mby1zZWN0aW9uOmxhc3Qtb2YtdHlwZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC5pbmZvLXNlY3Rpb24gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxuICBcbiAgLmluZm8tc2VjdGlvbiBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAubW92aWUtY2FyZCB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW46IDFlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/film/film.component.html":
/*!***************************************************!*\
  !*** ./src/app/homepage/film/film.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-card\">\n  <div class=\"movie-header babyDriver\">\n    <div class=\"header-icon-container\">\n      <!-- <a href=\"#\">\n        <i class=\"material-icons header-icon\"></i>\n      </a> -->\n      <img class=\"img-fluid\" [src]=\"phim.HinhAnh\" alt=\"\">\n    </div>\n  </div><!--movie-header-->\n  <div class=\"movie-content\">\n    <div class=\"movie-content-header\">\n      <a href=\"#\">\n        <h3 class=\"movie-title\">{{phim.TenPhim}}</h3>\n      </a>\n      <div class=\"imax-logo\"></div>\n    </div>\n    <div class=\"movie-info\">\n      <div class=\"info-section\">\n        <label>Date & Time</label>\n        <span>{{ phim.NgayKhoiChieu }}</span>\n      </div><!--date,time-->\n      <div class=\"info-section\">\n        <label>Screen</label>\n        <span>01</span>\n      </div><!--screen-->\n      <div class=\"info-section\">\n        <label>Row</label>\n        <span>H</span>\n      </div><!--row-->\n      <div class=\"info-section\">\n        <label>Seat</label>\n        <span>15</span>\n      </div><!--seat-->\n    </div>\n  </div><!--movie-content-->\n</div><!--movie-card-->"

/***/ }),

/***/ "./src/app/homepage/film/film.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/film/film.component.ts ***!
  \*************************************************/
/*! exports provided: FilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmComponent", function() { return FilmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_phim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/phim */ "./src/app/models/phim.ts");



var FilmComponent = /** @class */ (function () {
    function FilmComponent() {
    }
    FilmComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_phim__WEBPACK_IMPORTED_MODULE_2__["Phim"])
    ], FilmComponent.prototype, "phim", void 0);
    FilmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film',
            template: __webpack_require__(/*! ./film.component.html */ "./src/app/homepage/film/film.component.html"),
            styles: [__webpack_require__(/*! ./film.component.css */ "./src/app/homepage/film/film.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilmComponent);
    return FilmComponent;
}());



/***/ }),

/***/ "./src/app/homepage/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-bg{\n    background-color: #000000;\n    padding: 40px 15px 20px 15px;\n    text-align: left;\n  }\n  .row{\n    margin-right: -100px;\n    margin-left: -100px;\n  }\n  .title-widget{\n    color: white;\n    font-size: 18px;\n    line-height: 1;\n    position: relative;\n    text-transform: uppercase;\n    margin: 0 0 25px 0;\n    padding-left: 50px;\n  }\n  .title-widget::before{\n    background-color: orangered;\n    content: \"\";\n    height: 22px;\n    left: 40px;\n    position: absolute;\n    top: -2px;\n    width: 4px;\n  }\n  .list-unstyled ul li{\n    list-style: none;\n  }\n  .list-unstyled ul li i{\n    padding-right: 5px;\n    color: white;\n  }\n  .list-unstyled ul li i:hover{\n    color: orangered;\n  }\n  .list-unstyled ul li a{\n    color: white;\n    font-size: 13px;\n    text-decoration: none;\n  }\n  a:hover{\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n  }\n  span:hover{\n    color: orangered;\n  }\n  .social-icon{\n    margin-left: 40px;\n  }\n  .social-icon i{\n    color: white;\n    font-size: 25px;\n    margin-right: 15px;\n  }\n  .social-icon i:hover{\n    color: orangered;\n  }\n  .footer-bottom{\n    border-top: 1px solid white;\n    min-height: 30px;\n    background-color: #000000;\n    width: 100%;\n    padding: 10px 10px 10px 90px;\n  }\n  .copyright{\n    display: inline-block;\n    padding: 20px 15px;\n    font-style: italic;\n    line-height: 22px;\n    font-size: 14px;\n  }\n  p{\n    color: white;\n    display: inline;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogNDBweCAxNXB4IDIwcHggMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5yb3d7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgfVxuICAudGl0bGUtd2lkZ2V0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgfVxuICAudGl0bGUtd2lkZ2V0OjpiZWZvcmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTJweDtcbiAgICB3aWR0aDogNHB4O1xuICB9XG4gIC5saXN0LXVuc3R5bGVkIHVsIGxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgLmxpc3QtdW5zdHlsZWQgdWwgbGkgaXtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5saXN0LXVuc3R5bGVkIHVsIGxpIGk6aG92ZXJ7XG4gICAgY29sb3I6IG9yYW5nZXJlZDtcbiAgfVxuICAubGlzdC11bnN0eWxlZCB1bCBsaSBhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIH1cbiAgc3Bhbjpob3ZlcntcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xuICB9XG4gIC5zb2NpYWwtaWNvbntcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuc29jaWFsLWljb24gaXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICAuc29jaWFsLWljb24gaTpob3ZlcntcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xuICB9XG4gIC5mb290ZXItYm90dG9te1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggOTBweDtcbiAgfVxuICAuY29weXJpZ2h0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/homepage/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n        <ul class=\"list-unstyled clear-margin\">\n          <li class=\"widget-container widget-nav-menu\">\n            <h1 class=\"title-widget\">GIỚI THIỆU</h1>\n            <ul>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>VỀ CHÚNG TÔI</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>THỎA THUẬN SỬ DỤNG</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>QUY CHẾ HOẠT ĐỘNG</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>CHÍNH SÁCH BẢO MẬT</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n        <ul class=\"list-unstyled clear-margin\">\n          <li class=\"widget-container widget-nav-menu\">\n            <h1 class=\"title-widget\">GÓC ĐIỆN ẢNH</h1>\n            <ul>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>THỂ LOẠI PHIM</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>BÌNH LUẬN PHIM</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>BLOG ĐIỆN ẢNH</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>PHIM HAY THÁNG</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n        <ul class=\"list-unstyled clear-margin\">\n          <li class=\"widget-container widget-nav-menu\">\n            <h1 class=\"title-widget\">HỖ TRỢ</h1>\n            <ul>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>GÓP Ý</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>SALE & SERVICES</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>RẠP / GIÁ VÉ</span>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"fa fa-angle-double-right\"></i>\n                  <span>TUYỂN DỤNG</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n        <ul class=\"list-unstyled clear-margin\">\n          <li class=\"widget-container widget_recent_news\">\n            <h1 class=\"title-widget\">KẾT NỐI GALAXY CINEMA</h1>\n            <div class=\"social-icon\">\n              <a href=\"https://www.facebook.com/galaxycinevn/\" target=\"_blank\">\n                <i class=\"fab fa-facebook-square\"></i>\n              </a>\n              <a href=\"https://www.youtube.com/user/galaxymovies\" target=\"_blank\">\n                <i class=\"fab fa-youtube\"></i>\n              </a>\n              <a href=\"https://www.instagram.com/galaxycinema\" target=\"_blank\">\n                <i class=\"fab fa-instagram\"></i>\n              </a>\n            </div>\n          </li>\n        </ul>\n        <div class=\"store\">\n          <ul class=\"list-unstyled clear-margin\">\n            <li class=\"widget-container widget_recent_news\">\n              <h1 class=\"title-widget\">DOWNLOAD APP</h1>\n              <div class=\"social-icon\">\n                <a href=\"https://itunes.apple.com/vn/app/galaxy-cinema/id593312549?l=vi&mt=8\" target=\"_blank\">\n                  <i class=\"fab fa-apple\"></i>\n                </a>\n                <a href=\"https://play.google.com/store/apps/details?id=com.galaxy.cinema&hl=vi\" target=\"_blank\">\n                  <i class=\"fab fa-google-play\"></i>\n                </a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<div class=\"footer-bottom\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <a href=\"/\">\n          <img src=\"../../../../assets/img/galaxy-logo-footer.png\" alt=\"\">\n        </a>\n        <div class=\"copyright\">\n          <p>Công Ty Cổ Phần Phim Thiên Ngân, Tầng 5, Toà Nhà Mặt Trời Sông Hồng, 23 Phan Chu Trinh, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/homepage/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/homepage/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/homepage/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap{\n    width: 100%;\n    color: yellow\n}\n\n.brand a{\n    text-decoration: none;\n    color: yellow;\n  \n}\n\n.brand img{\n    padding: 0px 18px;\n}\n\n.nav_right{\n    padding: 0px 18px;\n}\n\n.logo_des{\n    font-size: 25px;\n}\n\n.navbar-nav{\n    margin-top: 20px;\n    font-size: 20px;\n}\n\n.navbar-nav .nav-item{\n    border-right: solid 1px darkblue;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTs7QUFFakI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogeWVsbG93XG59XG5cbi5icmFuZCBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogeWVsbG93O1xuICBcbn1cbi5icmFuZCBpbWd7XG4gICAgcGFkZGluZzogMHB4IDE4cHg7XG59XG5cbi5uYXZfcmlnaHR7XG4gICAgcGFkZGluZzogMHB4IDE4cHg7XG59XG5cbi5sb2dvX2Rlc3tcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5uYXZiYXItbmF2e1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW17XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZGFya2JsdWU7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-light navbar-light\">\n  <div class=\"row wrap\">\n    <div class=\"col-md-6 brand\">\n      <!-- Brand -->\n      <img src=\"./../../../assets/logo.jpg\" alt=\"\">\n      <a href=\"#\" class=\"logo_des\">Sigma duck cinema</a>\n    </div>\n    <!-- Toggler/collapsibe Button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"col-md-6 \">\n      <!-- Navbar links -->\n      <div class=\"navbar_right collapse navbar-collapse \" id=\"collapsibleNavbar\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item nav_right rotate\">\n            <a class=\"nav-link\" href=\"#\">Trang chủ</a>\n          </li>\n          <li class=\"nav-item nav_right rotate\">\n            <a class=\"nav-link\" routerLink=\"#\" target=\"_blank\">Đăng ký</a>\n          </li>\n          <li class=\"nav-item nav_right rotate\">\n            <a class=\"nav-link\" href=\"#\">Đăng nhập</a>\n          </li>\n          <li class=\"nav-item nav_right rotate\">\n            <a class=\"nav-link\" href=\"#\">Tài khoản</a>\n          </li>\n          <li class=\" dropdown\">\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\">Phim</a>\n            <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" href=\"#\">Phim đang chiếu</a>\n              <a class=\"dropdown-item\" href=\"#\">Phim sắp chiếu</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/homepage/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/homepage/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/homepage/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/homepage/header/header.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/homepage/slider/slider.component.ts");
/* harmony import */ var _film_list_film_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./film-list/film-list.component */ "./src/app/homepage/film-list/film-list.component.ts");
/* harmony import */ var _film_film_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./film/film.component */ "./src/app/homepage/film/film.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./discount/discount.component */ "./src/app/homepage/discount/discount.component.ts");
/* harmony import */ var _discount_item_discount_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./discount-item/discount-item.component */ "./src/app/homepage/discount-item/discount-item.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./information/information.component */ "./src/app/homepage/information/information.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/homepage/footer/footer.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-homepage/main-homepage.component */ "./src/app/homepage/main-homepage/main-homepage.component.ts");
/* harmony import */ var _trang_dang_ky_trang_dang_ky_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trang-dang-ky/trang-dang-ky.component */ "./src/app/homepage/trang-dang-ky/trang-dang-ky.component.ts");
/* harmony import */ var _trang_dang_nhap_trang_dang_nhap_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trang-dang-nhap/trang-dang-nhap.component */ "./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.ts");


















var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"], _film_list_film_list_component__WEBPACK_IMPORTED_MODULE_6__["FilmListComponent"], _film_film_component__WEBPACK_IMPORTED_MODULE_7__["FilmComponent"], _discount_discount_component__WEBPACK_IMPORTED_MODULE_10__["DiscountComponent"], _discount_item_discount_item_component__WEBPACK_IMPORTED_MODULE_11__["DiscountItemComponent"], _information_information_component__WEBPACK_IMPORTED_MODULE_12__["InformationComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_15__["MainHomepageComponent"], _trang_dang_ky_trang_dang_ky_component__WEBPACK_IMPORTED_MODULE_16__["TrangDangKyComponent"], _trang_dang_nhap_trang_dang_nhap_component__WEBPACK_IMPORTED_MODULE_17__["TrangDangNhapComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _film_list_film_list_component__WEBPACK_IMPORTED_MODULE_6__["FilmListComponent"],
                _film_film_component__WEBPACK_IMPORTED_MODULE_7__["FilmComponent"],
                _discount_discount_component__WEBPACK_IMPORTED_MODULE_10__["DiscountComponent"],
                _information_information_component__WEBPACK_IMPORTED_MODULE_12__["InformationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_15__["MainHomepageComponent"],
                _trang_dang_ky_trang_dang_ky_component__WEBPACK_IMPORTED_MODULE_16__["TrangDangKyComponent"],
                _trang_dang_nhap_trang_dang_nhap_component__WEBPACK_IMPORTED_MODULE_17__["TrangDangNhapComponent"]
            ]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/homepage/information/information.component.css":
/*!****************************************************************!*\
  !*** ./src/app/homepage/information/information.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n    margin: 10px 0px;\n    text-align: justify;\n    font-family: 'Roboto', sans-serif;\n  }\n  h3{\n    line-height: 1.5;\n    font-size: 18px;\n    font-weight: 500;\n    text-transform: uppercase;\n    margin-left: 15px;\n  }\n  h3::after{\n    display: block;\n    width: 50px;\n    height: 2px;\n    margin-top: 8px;\n    content: '';\n    background-color: orangered;\n  }\n  a{\n    text-decoration: none;\n    color: #000000;\n  }\n  a:hover{\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n    color: orangered;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgfVxuICBoM3tcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgaDM6OmFmdGVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gIH1cbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/information/information.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/homepage/information/information.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container px-2 mt-5\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n        <section id=\"content\">\n          <h3 class=\"text-bold\">GALAXY CINEMA</h3>\n          <div class=\"content\">\n            <div class=\"col-md-12\">\n              <div class=\"content-text\">\n                <p>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <b>Galaxy Cinema</b>\n                    </a>\n                  </span>\n                  <span>\n                    là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định\n                    thương\n                    hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện\n                    đại, thu hút hàng triệu lượt người đến xem, <span>\n                      <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                        <b>Galaxy Cinema</b>\n                      </a>\n                    </span> còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.\n                  </span>\n                </p>\n                <p>\n                  <span>Đến website\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      galaxycine.vn\n                    </a>\n                  </span>\n                  <span>\n                    , quý khách sẽ được cập nhật nhanh chóng các phim hay nhất phim mới nhất đang chiếu hoặc sắp chiếu.\n                    Lịch\n                    chiếu tại mọi hệ thống rạp chiếu phim của <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <b>Galaxy Cinema</b>\n                    </a> cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ. <span>\n  \n                    </span>\n                  </span>\n                </p>\n                <p>\n                  <span>Đặt vé tại\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <b>Galaxy Cinema</b>\n                    </a>\n                  </span>\n                  <span>\n                    dễ dàng chỉ sau vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn\n                    Mua\n                    vé theo phim, theo rạp, theo ngày tùy cách nào tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé\n                    theo\n                    các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành\n                    công của <span>\n                      <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                        <b>Galaxy Cinema</b>\n                      </a>\n                    </span>. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của Galaxy Cinema hoặc quét mã QR để một\n                    bước\n                    vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.</span>\n                </p>\n                <p>\n                  <span>Nếu bạn đã chọn được</span>\n                  <a href=\"https://www.galaxycine.vn/\">\n                    <i> phim hay </i>\n                  </a>\n                  <span>để xem, hãy đặt vé cực nhanh bằng box</span>\n                  <i> Mua Vé Nhanh </i>\n                  <span>ngay từ</span>\n                  <a href=\"https://www.galaxycine.vn/\">\n                    <i> Trang chủ </i>\n                  </a>\n                  . Chỉ cần một phút, tin nhắn và email phản hồi của\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <b>Galaxy Cinema</b>\n                    </a>\n                  </span>\n                  sẽ gửi ngay vào điện thoại và hộp mail của bạn.\n                </p>\n                <p>\n                  <span>Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ</span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <i> phim hay </i>\n                    </a>\n                  </span>\n                  <span>trong mục</span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/phim-dang-chieu\">\n                      <i> Phim Đang Chiếu </i>\n                    </a>\n                  </span>\n                  <span>cũng như </span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/phim-sap-chieu\">\n                      <i> Phim Sắp Chiếu </i>\n                    </a>\n                  </span>\n                  <span>tại</span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\">\n                      <i> rạp chiếu phim </i>\n                    </a>\n                  </span>\n                  <span>bằng cách vào mục</span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\">\n                      <i> Bình Luận Phim </i>\n                    </a>\n                  </span>\n                  <span>ở</span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\">\n                      <i> Góc Điện Ảnh </i>\n                    </a>\n                  </span>\n                  <span>\n                    để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, quý khách hãy đặt vé bằng\n                    box\n                    <i> Mua Vé Nhanh </i>ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.\n                  </span>\n                </p>\n                <p>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <b>Galaxy Cinema </b>\n                    </a>\n                  </span>\n                  <span>luôn có những chương trình</span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/khuyen-mai\"> khuyến mãi, ưu đãi, </a>\n                  </span>\n                  <span> quà tặng vô cùng hấp dẫn như <i>giảm giá vé</i>, tặng vé xem phim miễn phí, tặng Combo, tặng quà\n                    phim… dành cho quý khách.</span>\n  \n                </p>\n                <p>\n                  <span>\n                    Trang web galaxycine.vn còn có mục Góc Điện Ảnh - sở hữu lượng dữ liệu về phim, diễn viên và đạo diễn,\n                    giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng cao kiến thức về điện ảnh của bản thân.\n                    Ngoài ra, vào mỗi tháng,\n                  </span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <b>Galaxy Cinema</b>\n                    </a>\n                  </span> cũng giới thiệu các\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/phim-sap-chieu\" target=\"_blank\">\n                      <i> phim sắp chiếu </i>\n                    </a>\n                  </span>hot nhất trong mục\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/phim-hay\" target=\"_blank\">\n                      <i> Phim Hay Tháng </i>\n                    </a>\n                  </span>để quý khách sớm có sự tính toán.\n                </p>\n                <p>\n                  <span>Hiện nay, </span>\n                  <span>\n                    <a href=\"https://www.galaxycine.vn/\" target=\"_blank\">\n                      <b>Galaxy Cinema</b>\n                    </a>\n                  </span>\n                  <span>\n                    đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho\n                    khán\n                    giả những bộ phim bom tấn của thế giới và Việt Nam nhanh chóng và sớm nhất.\n                  </span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/homepage/information/information.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/homepage/information/information.component.ts ***!
  \***************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/homepage/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/homepage/information/information.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/homepage/main-homepage/main-homepage.component.css":
/*!********************************************************************!*\
  !*** ./src/app/homepage/main-homepage/main-homepage.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL21haW4taG9tZXBhZ2UvbWFpbi1ob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/homepage/main-homepage/main-homepage.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/main-homepage/main-homepage.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-slider></app-slider>\n<app-film-list></app-film-list>\n<app-discount></app-discount>\n<app-information></app-information>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/homepage/main-homepage/main-homepage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/main-homepage/main-homepage.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomepageComponent", function() { return MainHomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainHomepageComponent = /** @class */ (function () {
    function MainHomepageComponent() {
    }
    MainHomepageComponent.prototype.ngOnInit = function () {
    };
    MainHomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-homepage',
            template: __webpack_require__(/*! ./main-homepage.component.html */ "./src/app/homepage/main-homepage/main-homepage.component.html"),
            styles: [__webpack_require__(/*! ./main-homepage.component.css */ "./src/app/homepage/main-homepage/main-homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainHomepageComponent);
    return MainHomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/slider/slider.component.css":
/*!******************************************************!*\
  !*** ./src/app/homepage/slider/slider.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel_fix img{\n    width: 100%;\n    height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2Uvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWxfZml4IGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/slider/slider.component.html":
/*!*******************************************************!*\
  !*** ./src/app/homepage/slider/slider.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n  \n    <!-- The slideshow -->\n    <div class=\"carousel-inner carousel_fix\">\n      <div class=\"carousel-item active\">\n        <img src=\"../../../assets/captain_marvel.jpg\" alt=\"Los Angeles\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../../assets/haiphuong.jpg\" alt=\"Chicago\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../../assets/theconjuring2.jpg\" alt=\"New York\">\n      </div>\n    </div>\n  \n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  \n  </div>\n"

/***/ }),

/***/ "./src/app/homepage/slider/slider.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/slider/slider.component.ts ***!
  \*****************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/homepage/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/homepage/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/trang-dang-ky/trang-dang-ky.component.css":
/*!********************************************************************!*\
  !*** ./src/app/homepage/trang-dang-ky/trang-dang-ky.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n  border-left: 3px solid red;\r\n}\r\ninput.ng-valid.ng-touched{\r\n  border-left: 3px solid green;\r\n}\r\nh4{\r\n  color: #f26b38;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvdHJhbmctZGFuZy1reS90cmFuZy1kYW5nLWt5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL3RyYW5nLWRhbmcta3kvdHJhbmctZGFuZy1reS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xyXG59XHJcbmlucHV0Lm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcclxufVxyXG5oNHtcclxuICBjb2xvcjogI2YyNmIzODtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/trang-dang-ky/trang-dang-ky.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/trang-dang-ky/trang-dang-ky.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6 mx-auto\">\n      <form #formDangKy=\"ngForm\" (ngSubmit)=\"DangKy(formDangKy.value)\">\n        <h4 class=\"text-center\">ĐĂNG KÝ</h4>\n        <div class=\"col-12 form-group\">\n           <input placeholder=\"Họ tên\" type=\"text\" class=\" form-control\" #hoTen=\"ngModel\" name=\"HoTen\" required [pattern]='\"^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ\" +\n           \"ẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ\" +\n           \"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\\\s]+$\"' ngModel />\n          <div *ngIf=\"hoTen.errors && (hoTen.touched || hoTen.dirty)\">\n           <!-- Kiểm tra rỗng -->\n            <div class=\"alert alert-danger\" *ngIf=\"hoTen.errors.required\">\n              Vui lòng nhập vào họ tên\n            </div>\n            <!-- Kiểm tra lỗi pattern-->\n            <div class=\"alert alert-danger\" *ngIf=\"hoTen.errors.pattern\">\n              Họ tên phải là chữ\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 form-group\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n              <input placeholder=\"Số điện thoại\" type=\"text\" class=\" form-control\" #soDT=\"ngModel\" name=\"SoDT\" ngModel/>\n            </div>\n            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n              <select class=\"form-control\" name=\"GioiTinh\" [(ngModel)]=\"gioiTinh\">\n                <option value=\"0\" selected>Chọn giới tính</option>\n                <option value=\"1\">Nam</option>\n                <option value=\"2\">Nữ</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 form-group\">\n          <input placeholder=\"Email\" type=\"email\" [pattern]='\"^[_A-Za-z0-9-\\\\+]+(\\\\.[_A-Za-z0-9-]+)*@\"\n          + \"[A-Za-z0-9-]+(\\\\.[A-Za-z0-9]+)*(\\\\.[A-Za-z]{2,})$\"' required class=\" form-control\" #email=\"ngModel\" name=\"Email\" ngModel/>\n          <div *ngIf=\"email.errors && (email.touched || email.dirty)\">\n            <!-- Kiểm tra rỗng -->\n            <div class=\"alert alert-danger\" *ngIf=\"email.errors.required\">\n              Vui lòng nhập email\n            </div>\n            <!-- Kiểm tra email hợp lệ -->\n            <div class=\"alert alert-danger\" *ngIf=\"email.errors.pattern\">\n              Email nhập vào chưa đúng\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 form-group\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n              <input placeholder=\"Mật Khẩu\" type=\"password\" class=\" form-control\" #matKhau=\"ngModel\" minlength=\"10\" maxlength=\"20\" required name=\"MatKhau\" ngModel/>\n\n              <div *ngIf=\"matKhau.errors && (matKhau.touched || matKhau.dirty)\">\n                <!-- Kiểm tra rỗng -->\n                <div class=\"alert alert-danger\" *ngIf=\"matKhau.errors.required\">\n                  Vui lòng nhập mật khẩu\n                </div>\n                <!-- Kiểm tra minlength và maxlength -->\n                <div class=\"alert alert-danger\" *ngIf=\"matKhau.errors.minlength || matKhau.errors.maxlength\">\n                  Mật khẩu phải có từ 10 tới 20 ký tự\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n              <input placeholder=\"Nhập Lại Mật Khẩu\" type=\"password\" [pattern]=\"matKhau.value\" class=\" form-control\" #repeatPass=\"ngModel\" name=\"RepeatPass\" ngModel/>\n              <!-- Kiểm tra khớp password -->\n              <div *ngIf=\"repeatPass.errors && (repeatPass.touched || repeatPass.dirty)\">\n                <div class=\"alert alert-danger\" *ngIf=\"repeatPass.errors.pattern\">\n                  Vui lòng nhập đúng password\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 form-group\">\n          <input placeholder=\"Địa chỉ\" type=\"text\" required class=\" form-control\" #address=\"ngModel\" name=\"Address\" ngModel/>\n          <div *ngIf=\"address.errors && (address.touched || address.dirty)\">\n            <!-- Kiểm tra rỗng -->\n            <div class=\"alert alert-danger\" *ngIf=\"address.errors.required\">\n              Vui lòng nhập địa chỉ của bạn\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12\">\n          <p class=\"text-confirm-signup\">\n            Tôi đã đọc và đồng ý với\n            <a href=\"https://www.galaxycine.vn/chinh-sach\">\n              <b> Chính sách </b>\n            </a>\n            của chương trình.\n          </p>\n        </div>\n        <div class=\"col-12 form-group\">\n          <button class=\"btn btn-success form-control\" [disabled]=\"formDangKy.invalid\" type=\"submit\">Đăng Ký</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/trang-dang-ky/trang-dang-ky.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/trang-dang-ky/trang-dang-ky.component.ts ***!
  \*******************************************************************/
/*! exports provided: TrangDangKyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangDangKyComponent", function() { return TrangDangKyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TrangDangKyComponent = /** @class */ (function () {
    function TrangDangKyComponent() {
        this.mangNguoiDungDangKy = [];
        this.gioiTinh = 0;
    }
    TrangDangKyComponent.prototype.DangKy = function (value) {
        this.mangNguoiDungDangKy.push(value);
        this.formDK.reset();
        console.log(this.mangNguoiDungDangKy);
    };
    TrangDangKyComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formDangKy'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], TrangDangKyComponent.prototype, "formDK", void 0);
    TrangDangKyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trang-dang-ky',
            template: __webpack_require__(/*! ./trang-dang-ky.component.html */ "./src/app/homepage/trang-dang-ky/trang-dang-ky.component.html"),
            styles: [__webpack_require__(/*! ./trang-dang-ky.component.css */ "./src/app/homepage/trang-dang-ky/trang-dang-ky.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrangDangKyComponent);
    return TrangDangKyComponent;
}());



/***/ }),

/***/ "./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.css":
/*!************************************************************************!*\
  !*** ./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n  color: #f26b38;\r\n}\r\n.sub-text{\r\ncolor: #a0a3a7;\r\n}\r\n.btn{\r\nbackground-color: #f26b38;\r\n}\r\n.forget-pass{\r\npadding: 10px 15px;\r\n}\r\n.forget-pass a{\r\ntext-decoration: none;\r\ncolor: #a0a3a7;\r\n}\r\n.forget-pass a:hover{\r\ncolor: #f26b38;\r\ntransition: all 3ms;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvdHJhbmctZGFuZy1uaGFwL3RyYW5nLWRhbmctbmhhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkLG1CQUFtQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL3RyYW5nLWRhbmctbmhhcC90cmFuZy1kYW5nLW5oYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xyXG4gIGNvbG9yOiAjZjI2YjM4O1xyXG59XHJcbi5zdWItdGV4dHtcclxuY29sb3I6ICNhMGEzYTc7XHJcbn1cclxuLmJ0bntcclxuYmFja2dyb3VuZC1jb2xvcjogI2YyNmIzODtcclxufVxyXG4uZm9yZ2V0LXBhc3N7XHJcbnBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG4uZm9yZ2V0LXBhc3MgYXtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jb2xvcjogI2EwYTNhNztcclxufVxyXG4uZm9yZ2V0LXBhc3MgYTpob3ZlcntcclxuY29sb3I6ICNmMjZiMzg7XHJcbnRyYW5zaXRpb246IGFsbCAzbXM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6 mx-auto p-3\">\n      <form [formGroup]=\"formDangNhap\" (ngSubmit)=\"DangNhap()\">\n        <h4 class=\"text-center\">ĐĂNG NHẬP</h4>\n        <div class=\"col-12\">\n          <p class=\"sub-text\"><i> Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành\n            viên Galaxy Cinema.</i></p>\n        </div>\n        <div class=\"col-12 form-group\">\n          <input id=\"email\" placeholder=\"Email\" type=\"email\" class=\"form-control\" formControlName=\"Email\" />\n        </div>\n        <div class=\"col-12 form-group\">\n          <input id=\"password\" placeholder=\"Mật Khẩu\" type=\"password\" class=\"form-control\" formControlName=\"PassWord\" />\n        </div>\n        <div class=\"col-12 forget-pass\">\n          <a href=\"\">Quên mật khẩu?</a>\n        </div>\n        <div class=\"col-12 form-group\">\n          <button type=\"submit\" class=\"btn form-control\">Đăng Ký</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.ts ***!
  \***********************************************************************/
/*! exports provided: TrangDangNhapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangDangNhapComponent", function() { return TrangDangNhapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TrangDangNhapComponent = /** @class */ (function () {
    function TrangDangNhapComponent() {
    }
    TrangDangNhapComponent.prototype.DangNhap = function () {
        console.log(this.formDangNhap.value);
    };
    TrangDangNhapComponent.prototype.ngOnInit = function () {
        this.formDangNhap = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'Email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'PassWord': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    TrangDangNhapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trang-dang-nhap',
            template: __webpack_require__(/*! ./trang-dang-nhap.component.html */ "./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.html"),
            styles: [__webpack_require__(/*! ./trang-dang-nhap.component.css */ "./src/app/homepage/trang-dang-nhap/trang-dang-nhap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrangDangNhapComponent);
    return TrangDangNhapComponent;
}());



/***/ }),

/***/ "./src/app/models/phim.ts":
/*!********************************!*\
  !*** ./src/app/models/phim.ts ***!
  \********************************/
/*! exports provided: Phim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phim", function() { return Phim; });
var Phim = /** @class */ (function () {
    function Phim() {
    }
    return Phim;
}());



/***/ }),

/***/ "./src/app/services/phim-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/phim-api.service.ts ***!
  \**********************************************/
/*! exports provided: PhimApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhimApiService", function() { return PhimApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PhimApiService = /** @class */ (function () {
    function PhimApiService(_httpClient) {
        this._httpClient = _httpClient;
    }
    PhimApiService.prototype.getChiTietPhim = function (maPhim) {
        return this._httpClient.get("http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=" + maPhim);
    };
    PhimApiService.prototype.getDanhSachPhim = function () {
        return this._httpClient.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP10');
    };
    PhimApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PhimApiService);
    return PhimApiService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\democode\doAn\Angular_final_project-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map