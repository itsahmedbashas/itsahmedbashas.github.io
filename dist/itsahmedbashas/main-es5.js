function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'itsahmedbashas';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 32,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-3", "leftNav"], ["tabindex", "0", 1, "menu"], [1, "avatar"], ["src", "https://i.ibb.co/6n1dzTP/received-2028020270758459-2.jpg", 1, "mainAvatar"], [1, "line-1", "anim-typewriter"], [1, "mailString"], ["onClick", "parent.open('mailto:shaikahmedbashas@gmail.com')", 1, "mailString", "clickableIconStyle"], ["onClick", "parent.open('https://github.com/itsahmedbasha')", "alt", "Github", "title", "Github", "src", "assets/icons/Github logo.svg", 1, "socialMedialogos", "clickableIconStyle"], ["onClick", "parent.open('https://in.linkedin.com/in/itsahmedbasha')", "alt", "Linked In", "title", "Linked In", "src", "assets/icons/Linked In Logo.svg", 1, "socialMedialogos", "clickableIconStyle"], ["onClick", "parent.open('https://www.quora.com/profile/itsahmedbasha')", "alt", "Quora", "title", "Quora", "src", "assets/icons/Quora Logo.svg", 1, "socialMedialogos", "clickableIconStyle"], ["onClick", "parent.open('https://www.facebook.com/itsahmedbasha')", "alt", "Facebook", "title", "Facebook", "src", "assets/icons/facebook logo.svg", 1, "socialMedialogos", "clickableIconStyle"], ["onClick", "parent.open('https://twitter.com/itsahmebasha')", "alt", "Twitter", "title", "Twitter", "src", "assets/icons/twitter.svg", 1, "socialMedialogos", "clickableIconStyle"], ["onClick", "parent.open('https://www.instagram.com/itsahmedbasha')", "alt", "Instagram", "title", "Instagram", "src", "assets/icons/instagram logi.svg", 1, "socialMedialogos", "clickableIconStyle"], ["href", "#EXE_DIV1"], ["href", "#EXE_DIV2"], ["href", "#EXE_DIV3"], ["href", "#EXE_DIV4"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hey!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I'm Ahmed Basha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Software Programmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " shaikahmedbashas@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise+Pro);\n\n\n.line-1[_ngcontent-%COMP%] {\r\n    font-family: 'Waiting for the Sunrise', monospace;\r\n    position: relative;\r\n    top: 50%;\r\n    width: 24em;\r\n    margin: 0px auto;\r\n    margin-top: 15px;\r\n    border-right: 2px solid black;\r\n    font-size: 180%;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    transform: translateY(-50%);\r\n}\n.mailString[_ngcontent-%COMP%] {\r\n    font-family: 'Anonymous Pro', monospace;\r\n    \r\n    font-size: 110%;\r\n}\n\n.anim-typewriter[_ngcontent-%COMP%] {\r\n    -webkit-animation: typewriter 1s steps(20) 1s 1 normal both, blinkTextCursor 400ms steps(20) infinite normal;\r\n            animation: typewriter 1s steps(20) 1s 1 normal both, blinkTextCursor 400ms steps(20) infinite normal;\r\n}\n@-webkit-keyframes typewriter {\r\n    from {\r\n        width: 0;\r\n    }\r\n    to {\r\n        width: 8.5em;\r\n    }\r\n}\n@keyframes typewriter {\r\n    from {\r\n        width: 0;\r\n    }\r\n    to {\r\n        width: 8.5em;\r\n    }\r\n}\n@-webkit-keyframes blinkTextCursor {\r\n    from {\r\n        border-right-color: black;\r\n    }\r\n    to {\r\n        border-right-color: transparent;\r\n    }\r\n}\n@keyframes blinkTextCursor {\r\n    from {\r\n        border-right-color: black;\r\n    }\r\n    to {\r\n        border-right-color: transparent;\r\n    }\r\n}\nbody[_ngcontent-%COMP%] {\r\n    \r\n    background: #2f363d;\r\n    margin: 0;\r\n    font-family: \"Open Sans\", Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    color: #fff;\r\n    padding-left: 280px;\r\n}\n.menu[_ngcontent-%COMP%] {\r\n    \r\n    background: lightgrey;\r\n    height: 100vh;\r\n    \r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n    outline: none;\r\n    color: black;\r\n}\n.menu[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    \r\n    padding: 2em 0.5em;\r\n    text-align: center;\r\n}\n.menu[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .mainAvatar[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    border: 4px solid #ffea92;\r\n    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\r\n}\n\n\n\n\n\n\n\n\n.socialMedialogos[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    height: 30px;\r\n    width: 30px;\r\n    padding: 1px;\r\n}\n\n.clickableIconStyle[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n@media only screen and (max-width: 768px) {\r\n    \r\n    .menu[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        height: 500px;\r\n    }\r\n}\nul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    color: black;\r\n}\nli[_ngcontent-%COMP%] {\r\n    font: 100 18px/1.5 Helvetica, Verdana, sans-serif;\r\n    border-bottom: 1px solid #ccc;\r\n}\nli[_ngcontent-%COMP%]:last-child {\r\n    border: none;\r\n}\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n\n\n.EXE_NAV[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n.EXE_NAV[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-top: 0.5rem;\r\n    background: #fff;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 3.5rem;\r\n    z-index: 10;\r\n}\n.EXE_NAV[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    width: inherit;\r\n    margin: 0;\r\n}\n.EXE_NAV[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child( 3n + 1), #EXE_MAIN[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]:nth-child( 3n + 1) {\r\n    background: rgb( 0, 180, 255);\r\n}\n.EXE_NAV[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child( 3n + 2), #EXE_MAIN[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]:nth-child( 3n + 2) {\r\n    background: rgb( 255, 65, 180);\r\n}\n.EXE_NAV[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child( 3n + 3), #EXE_MAIN[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]:nth-child( 3n + 3) {\r\n    background: rgb( 0, 255, 180);\r\n}\n.EXE_NAV[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0.3rem 0.5rem;\r\n    border-radius: 2px;\r\n    line-height: 1.5;\r\n}\n.EXE_NAV[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\n.panel[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 500px;\r\n    \r\n    z-index: 0;\r\n    transform: translateZ( 0);\r\n    transition: transform 0.6s ease-in-out;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n}\n.panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-family: sans-serif;\r\n    font-size: 64px;\r\n    font-size: 4rem;\r\n    color: #fff;\r\n    position: relative;\r\n    line-height: 200px;\r\n    top: 33%;\r\n    text-align: center;\r\n    margin: 0;\r\n}\n\na[ id=\"EXE_DIV1\"][_ngcontent-%COMP%]:target ~ #EXE_MAIN[_ngcontent-%COMP%]   article.panel[_ngcontent-%COMP%] {\r\n    transform: translateY( 0px);\r\n}\na[ id=\"EXE_DIV2\"][_ngcontent-%COMP%]:target ~ #EXE_MAIN[_ngcontent-%COMP%]   article.panel[_ngcontent-%COMP%] {\r\n    transform: translateY( -500px);\r\n}\na[ id=\"EXE_DIV3\"][_ngcontent-%COMP%]:target ~ #EXE_MAIN[_ngcontent-%COMP%]   article.panel[_ngcontent-%COMP%] {\r\n    transform: translateY( -1000px);\r\n}\n.leftNav[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\n.rightNav[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QjtJQUNyQixVQUFVO0lBRVYseUJBQXlCO0lBRXpCLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUdBLDBCQUEwQjtBQUUxQjtJQUVJLDJCQUEyQjtBQUMvQjtBQUVBO0lBRUksOEJBQThCO0FBQ2xDO0FBRUE7SUFFSSwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdvb2dsZSBGb250cyAqL1xyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdhaXRpbmcrZm9yK3RoZStTdW5yaXNlK1Bybyk7XHJcblxyXG4vKiBHbG9iYWwgKi9cclxuXHJcbi5saW5lLTEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdXYWl0aW5nIGZvciB0aGUgU3VucmlzZScsIG1vbm9zcGFjZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDI0ZW07XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5tYWlsU3RyaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW5vbnltb3VzIFBybycsIG1vbm9zcGFjZTtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnV2FpdGluZyBmb3IgdGhlIFN1bnJpc2UnLCBjdXJzaXZlOyAgKi9cclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxufVxyXG5cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuLmFuaW0tdHlwZXdyaXRlciB7XHJcbiAgICBhbmltYXRpb246IHR5cGV3cml0ZXIgMXMgc3RlcHMoMjApIDFzIDEgbm9ybWFsIGJvdGgsIGJsaW5rVGV4dEN1cnNvciA0MDBtcyBzdGVwcygyMCkgaW5maW5pdGUgbm9ybWFsO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGV3cml0ZXIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgd2lkdGg6IDguNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rVGV4dEN1cnNvciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZmZWE5MjsgKi9cclxuICAgIGJhY2tncm91bmQ6ICMyZjM2M2Q7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMjgwcHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIC8qIGJhY2tncm91bmQ6ICM1YmM5OTU7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogd2lkdGg6IDI4MHB4OyAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWVudSAuYXZhdGFyIHtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cclxuICAgIHBhZGRpbmc6IDJlbSAwLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUgLmF2YXRhciAubWFpbkF2YXRhciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZWE5MjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcblxyXG4vKiAubWVudSAuYXZhdGFyIGgyIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn0gKi9cclxuXHJcblxyXG4vKiAubWVudSB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVlbSAwO1xyXG4gIG1hcmdpbjogMDtcclxufSAqL1xyXG5cclxuXHJcbi8qIC5tZW51IHVsIGxpIHtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW0gMC41ZW0gM2VtO1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAxNXB4IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSAqL1xyXG5cclxuXHJcbi8qIC5tZW51IHVsIGxpLmljb24tZGFzaGJvYXJkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwOi8vd3d3LmVudHlwby5jb20vaW1hZ2VzLy9nYXVnZS5zdmdcIik7XHJcbn1cclxuLm1lbnUgdWwgbGkuaWNvbi1jdXN0b21lcnMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly93d3cuZW50eXBvLmNvbS9pbWFnZXMvL2JyaWVmY2FzZS5zdmdcIik7XHJcbn1cclxuLm1lbnUgdWwgbGkuaWNvbi11c2VycyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cDovL3d3dy5lbnR5cG8uY29tL2ltYWdlcy8vdXNlcnMuc3ZnXCIpO1xyXG59ICovXHJcblxyXG5cclxuLyogLm1lbnUgdWwgbGkuaWNvbi1zZXR0aW5ncyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cDovL3d3dy5lbnR5cG8uY29tL2ltYWdlcy8vdG9vbHMuc3ZnXCIpO1xyXG59ICovXHJcblxyXG5cclxuLyogLm1lbnUgdWwgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufSAqL1xyXG5cclxuXHJcbi8qIC5tZW51IHVsIGxpOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59ICovXHJcblxyXG5cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gIH1cclxuICAubWVudSB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICB9XHJcbiAgLm1lbnUgLmF2YXRhciB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLm1lbnUgLmF2YXRhciAubWFpbkF2YXRhciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcbiAgLm1lbnUgLmF2YXRhciBoMiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAtNTAlLCAwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLm1lbnUgLmF2YXRhcjpob3ZlciBoMiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xyXG4gIH1cclxuICAubWVudSB1bCBsaSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5tZW51IHVsIGxpIHNwYW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTVweCwgLTUwJSwgMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5tZW51IHVsIGxpIHNwYW46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIC5tZW51IHVsIGxpOmhvdmVyIHNwYW4ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgLm1lbnUge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTAwZW0gcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIzMHB4LCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAubWVudSAuc21hcnRwaG9uZS1tZW51LXRyaWdnZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzViYzk5NTtcclxuICB9XHJcbiAgLm1lbnUgLnNtYXJ0cGhvbmUtbWVudS10cmlnZ2VyOmJlZm9yZSxcclxuICAubWVudSAuc21hcnRwaG9uZS1tZW51LXRyaWdnZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogNTAlOyBcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XHJcbiAgfVxyXG4gIC5tZW51IC5zbWFydHBob25lLW1lbnUtdHJpZ2dlcjphZnRlciB7XHJcbiAgICB0b3A6IDU1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XHJcbiAgfVxyXG4gIC5tZW51IHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDNlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG4gIC5tZW51OmZvY3VzIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMDBlbSByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgfVxyXG4gIC5tZW51OmZvY3VzIC5zbWFydHBob25lLW1lbnUtdHJpZ2dlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn0gKi9cclxuXHJcbi5zb2NpYWxNZWRpYWxvZ29zIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcblxyXG4vKiAuZmFjZWJvb2tMb2dvOmhvdmVye1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzYjU5OTg7XHJcbn0gKi9cclxuXHJcbi5jbGlja2FibGVJY29uU3R5bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgIC5tZW51IHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIH1cclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubGkge1xyXG4gICAgZm9udDogMTAwIDE4cHgvMS41IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG5saTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxudWwgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4vKiBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4vKiBsaSBhOmhvdmVyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufSAqL1xyXG5cclxuLkVYRV9OQVYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uRVhFX05BViBuYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5FWEVfTkFWIG5hdiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5FWEVfTkFWIHVsIGxpOm50aC1jaGlsZCggM24gKyAxKSxcclxuI0VYRV9NQUlOIC5wYW5lbDpudGgtY2hpbGQoIDNuICsgMSkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKCAwLCAxODAsIDI1NSk7XHJcbn1cclxuXHJcbi5FWEVfTkFWIHVsIGxpOm50aC1jaGlsZCggM24gKyAyKSxcclxuI0VYRV9NQUlOIC5wYW5lbDpudGgtY2hpbGQoIDNuICsgMikge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKCAyNTUsIDY1LCAxODApO1xyXG59XHJcblxyXG4uRVhFX05BViB1bCBsaTpudGgtY2hpbGQoIDNuICsgMyksXHJcbiNFWEVfTUFJTiAucGFuZWw6bnRoLWNoaWxkKCAzbiArIDMpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYiggMCwgMjU1LCAxODApO1xyXG59XHJcblxyXG4uRVhFX05BViB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLkVYRV9OQVYgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC8qIFlvdXIgRElWcyBIZWlnaHQgKi9cclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWiggMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooIDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhbmVsIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDMzJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qIFNtb290aCBDU1MzIFNjcm9sbGluZyAqL1xyXG5cclxuYVsgaWQ9XCJFWEVfRElWMVwiXTp0YXJnZXR+I0VYRV9NQUlOIGFydGljbGUucGFuZWwge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIDBweCk7XHJcbn1cclxuXHJcbmFbIGlkPVwiRVhFX0RJVjJcIl06dGFyZ2V0fiNFWEVfTUFJTiBhcnRpY2xlLnBhbmVsIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCAtNTAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCAtNTAwcHgpO1xyXG59XHJcblxyXG5hWyBpZD1cIkVYRV9ESVYzXCJdOnRhcmdldH4jRVhFX01BSU4gYXJ0aWNsZS5wYW5lbCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSggLTEwMDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC0xMDAwcHgpO1xyXG59XHJcblxyXG4ubGVmdE5hdiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodE5hdiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Development\Personal\itsahmedbashas\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map