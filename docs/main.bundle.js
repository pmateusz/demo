webpackJsonp([1,4],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-sm-offset-3\">\n<h1> {{title}} </h1>\n<br>\n</div>\n<form [formGroup]=\"calculatorForm\" novalidate>\n  <div class=\"row col-sm-offset-3\">\n    <div class=\"col-sm-3\">\n      <label class=\"control-label input-lg\">Kształt</label>\n    </div>\n    <div class=\"col-sm-4 form-group\">\n        <select class=\"form-control input-lg\" formControlName=\"selectedShape\" required>\n          <option *ngFor=\"let shape of shapes\" [ngValue]=\"shape\">{{shape.label}}</option>\n        </select>\n    </div>\n  </div>\n  <div class=\"row col-sm-offset-3\">\n    <div class=\"col-sm-3\">\n      <label class=\"control-label input-lg\">Metal</label>\n    </div>\n    <div class=\"col-sm-4 form-group\">\n        <select class=\"form-control input-lg\" formControlName=\"selectedMetal\" required>\n          <option *ngFor=\"let metal of metals\" [ngValue]=\"metal\">{{metal.label}}</option>\n        </select>\n    </div>\n  </div>\n  <div class=\"row col-sm-offset-3\">\n    <div class=\"col-sm-3\">\n      <label class=\"control-label input-lg\">Gęstość</label>\n    </div>\n    <div class=\"col-sm-4 form-group\">\n        <select class=\"form-control input-lg\" formControlName=\"selectedDensity\" required>\n          <option *ngFor=\"let density of selectedMetal.densities\" [ngValue]=\"density\">{{density.name}}</option>\n        </select>\n    </div>\n  </div>\n  <div formArrayName=\"parametersControl\">\n    <div *ngFor=\"let parameter of parametersControl.controls; let i=index\" [formGroupName]=\"i\" class=\"row col-sm-offset-3\">\n      <div class=\"col-sm-3\">\n        <label class=\"control-label input-lg\"> {{ selectedShape.parameters[i].label }} </label>\n      </div>\n      <div class=\"col-sm-4 form-group\">\n        <div [ngClass]=\"getParameterClass(i)\">\n          <input class=\"form-control input-lg\" formControlName=\"value\" required>\n          <span class=\"input-group-addon\">mm</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row col-sm-offset-3\">\n    <div class=\"col-sm-3\">\n      <label class=\"control-label input-lg\">Cena za kilogram</label>\n    </div>\n    <div class=\"col-sm-4 form-group\">\n      <div [ngClass]=\"(formErrors.rate.length > 0)?'form-group has-error':'form-group'\">\n        <input class=\"form-control input-lg\" formControlName=\"rate\" required>\n      </div>\n    </div>\n  </div>\n  <div class=\"row col-sm-offset-3\">\n    <div class=\"col-sm-3\">\n      <label class=\"control-label input-lg\">Wartość</label>\n    </div>\n    <div class=\"col-sm-4 form-group\">\n        <label class=\"form-control input-lg text-right\">{{ totalValue }}</label>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metal__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalculatorService = (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.getShapes = function () {
        return __WEBPACK_IMPORTED_MODULE_2__shape__["a" /* SHAPES */];
    };
    CalculatorService.prototype.getMetals = function () {
        return __WEBPACK_IMPORTED_MODULE_1__metal__["a" /* METALS */];
    };
    return CalculatorService;
}());
CalculatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CalculatorService);

//# sourceMappingURL=calculator.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(82);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function canParseNumber(control) {
    var value = AppComponent.parseNumber(control.value);
    if (isNaN(value)) {
        return { 'not_a_number': value };
    }
    return null;
}
function isNonNegativeNumber(control) {
    var value = AppComponent.parseNumber(control.value);
    if (isNaN(value) || value < 0.0) {
        return { 'negative_number': value };
    }
    return null;
}
var AppComponent = AppComponent_1 = (function () {
    function AppComponent(calculatorService, formBuilder) {
        this.calculatorService = calculatorService;
        this.formBuilder = formBuilder;
        this.title = 'Kalkulator Metali Kolorowych';
        this.formErrors = { 'rate': [] };
        this.parameterErrors = {};
    }
    AppComponent.parseNumber = function (value) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'string') {
            var valueToUse = value.replace(/,/, '.');
            return Number(valueToUse);
        }
        return value;
    };
    AppComponent.prototype.getParameterClass = function (index) {
        var classToUse = 'input-group';
        var selectedParameter = this.selectedShape.parameters[index];
        var errors = this.parameterErrors[selectedParameter.name];
        if (errors.length > 0) {
            classToUse += ' has-error';
        }
        return classToUse;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.shapes = this.calculatorService.getShapes();
        this.metals = this.calculatorService.getMetals();
        this.rate = 0.0;
        this.totalValue = '0,00';
        this.selectedShape = this.shapes[0];
        this.selectedMetal = this.metals[0];
        this.createForm();
    };
    Object.defineProperty(AppComponent.prototype, "shapeControl", {
        get: function () {
            return this.calculatorForm.get('selectedShape');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "parametersControl", {
        get: function () {
            return this.calculatorForm.get('parametersControl');
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "metalControl", {
        get: function () {
            return this.calculatorForm.get('selectedMetal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "rateControl", {
        get: function () {
            return this.calculatorForm.get('rate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "densityControl", {
        get: function () {
            return this.calculatorForm.get('selectedDensity');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onValueChanged = function (data) {
        if (!this.calculatorForm) {
            return;
        }
        var form = this.calculatorForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = [];
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                for (var key in control.errors) {
                    this.formErrors[field].push(key);
                }
            }
        }
        var index = 0;
        for (var parameter in this.parameterErrors) {
            // clear previous error message (if any)
            this.parameterErrors[parameter] = [];
            var control = form.get('parametersControl.' + index + '.value');
            if (control && control.dirty && !control.valid) {
                for (var key in control.errors) {
                    this.parameterErrors[parameter].push(key);
                }
            }
            index += 1;
        }
    };
    AppComponent.prototype.createForm = function () {
        var _this = this;
        this.calculatorForm = this.formBuilder.group({
            selectedShape: [this.selectedShape, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            selectedMetal: [this.selectedMetal, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            selectedDensity: [this.selectedMetal.defaultDensity, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            rate: [this.rate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            totalValue: 0.0,
            parameters: this.formBuilder.array([])
        });
        this.setParameters(this.selectedShape.parameters);
        this.shapeControl.valueChanges.forEach(function (shape) {
            _this.selectedShape = shape;
            _this.setParameters(shape.parameters);
        });
        this.metalControl.valueChanges.forEach(function (metal) {
            _this.selectedMetal = metal;
            _this.calculatorForm.patchValue({ selectedDensity: _this.selectedMetal.densities[0] });
        });
        this.rateControl.valueChanges.forEach(function (value) { return _this.updateTotalValue(); });
        this.densityControl.valueChanges.forEach(function (value) { return _this.updateTotalValue(); });
        this.calculatorForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    AppComponent.prototype.setParameters = function (parameters) {
        var _this = this;
        this.parameterErrors = {};
        parameters.forEach(function (parameter) {
            _this.parameterErrors[parameter.name] = [];
        });
        var parameterGroups = parameters.map(function (parameter) { return _this.formBuilder.group({ value: [parameter.defaultValue, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, canParseNumber, isNonNegativeNumber]] }); });
        var parameterFormArray = this.formBuilder.array(parameterGroups);
        this.calculatorForm.setControl('parametersControl', parameterFormArray);
        this.parametersControl.valueChanges.forEach(function (value) { return _this.updateTotalValue(); });
    };
    AppComponent.prototype.updateTotalValue = function () {
        var parameterValues = this.parametersControl.value.map(function (parameter) { return AppComponent_1.parseNumber(parameter.value); });
        var volume = this.selectedShape.getVolume(parameterValues);
        var density = this.densityControl.value.value;
        var rate = AppComponent_1.parseNumber(this.rateControl.value);
        var rawValue = rate * density * volume;
        var roundFactor = 100.0;
        var roundedValue = Math.round(rawValue * roundFactor) / roundFactor;
        var totalValueToUse;
        if (rawValue == 0.0 || isNaN(rawValue)) {
            this.totalValue = '0,00';
        }
        else if (rawValue > 0.0 && roundedValue < 0.01) {
            this.totalValue = '> 0,01';
        }
        else {
            this.totalValue = roundedValue.toFixed(2);
            this.totalValue = this.totalValue.replace('\.', ',');
        }
        this.calculatorForm.patchValue({ totalValue: totalValueToUse });
    };
    return AppComponent;
}());
AppComponent = AppComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(137),
        styles: [__webpack_require__(136)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__calculator_service__["a" /* CalculatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calculator_service__["a" /* CalculatorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], AppComponent);

var AppComponent_1, _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calculator_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__calculator_service__["a" /* CalculatorService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Metal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return METALS; });
var Metal = (function () {
    function Metal(id, name, label, densities) {
        this.id = id;
        this.name = name;
        this.label = label;
        this.densities = densities;
    }
    Object.defineProperty(Metal.prototype, "defaultDensity", {
        get: function () {
            return this.densities[0];
        },
        enumerable: true,
        configurable: true
    });
    return Metal;
}());

var METALS = [
    new Metal(1, 'Bronze', 'Brąz', [
        { id: 1, name: "8,5 kg/dm3", value: 8.5 },
        { id: 2, name: "B2, B4, B8, B443 - 8,895 kg/dm3", value: 8.895 },
        { id: 3, name: "BA5 - 8,197 kg/dm3", value: 8.197 },
        { id: 4, name: "BA8 - 7,8 kg/dm3", value: 7.8 },
        { id: 5, name: "BA83 - 7,695 kg/dm3", value: 7.695 },
        { id: 6, name: "Bk1, Bk31 - 8,497 kg/dm3", value: 8.497 },
        { id: 7, name: "BB1,7 - 8,4 kg/dm3", value: 8.4 },
        { id: 8, name: "BB2 - 8,295 kg/dm3", value: 8.295 },
        { id: 9, name: "BB21, BC2 - 8,895 kg/dm3", value: 8.895 }
    ]),
    new Metal(2, 'Aluminium', 'Aluminium', [
        { id: 10, name: "8,5 kg/dm3", value: 8.5 }
    ]),
    new Metal(3, 'Copper', 'Miedź', [
        { id: 11, name: "8,5 kg/dm3", value: 8.5 }
    ]),
    new Metal(4, 'Brass', 'Mosiądz', [
        { id: 12, name: "2,7 kg/dm3", value: 2.7 },
        { id: 13, name: "EN AW-3103 2,749 kg/dm3", value: 2.749 },
        { id: 14, name: "EN AW-5251 2,678 kg/dm3", value: 2.678 },
        { id: 15, name: "EN AW-6101A 2,689 kg/dm3", value: 2.689 },
        { id: 16, name: "EN AW-6082 2,7 kg/dm3", value: 2.7 },
        { id: 17, name: "EN AW-5019 2,638 kg/dm3", value: 2.638 },
        { id: 18, name: "EN AW-6061 2,713 kg/dm3", value: 2.713 },
        { id: 19, name: "EN AW-2017A 2,799 kg/dm3", value: 2.799 },
        { id: 20, name: "EN AW-2024 2,767 kg/dm3", value: 2.767 },
        { id: 21, name: "EN AW-2014 2,799 kg/dm3", value: 2.799 },
        { id: 22, name: "EN AW-5754 2,659 kg/dm3", value: 2.659 },
        { id: 23, name: "EN AW-5005A 2,689 kg/dm3", value: 2.689 },
        { id: 24, name: "2,8 kg/dm3", value: 2.8 },
        { id: 25, name: "2,9 kg/dm3", value: 2.9 }
    ]),
    new Metal(5, 'Steel', 'Stal', [
        { id: 26, name: "7,85 kg/dm3", value: 7.85 },
        { id: 27, name: "7,5 kg/dm3", value: 7.5 },
        { id: 28, name: "7,7 kg/dm3", value: 7.7 },
        { id: 29, name: "7,8 kg/dm3", value: 7.8 },
        { id: 30, name: "7,9 kg/dm3", value: 7.9 },
        { id: 31, name: "8,0 kg/dm3", value: 8 },
        { id: 32, name: "8,1 kg/dm3", value: 8.1 }
    ]),
    new Metal(6, 'Cu-Ni alloys', 'Stopy Cu-Ni', [
        { id: 33, name: '8,9 kg/dm3', value: 8.9 }
    ]),
    new Metal(7, 'CuA18/BA8', 'CuA18/BA8', [
        { id: 34, name: '7,8 kg/dm3', value: 7.8 }
    ]),
    new Metal(8, 'Lead', 'Ołów', [
        { id: 35, name: '11,68 kg/dm3', value: 11.68 }
    ]),
    new Metal(9, 'Lead alloys', 'Stopy ołowiu', [
        { id: 36, name: '9,9 kg/dm3', value: 9.9 }
    ]),
    new Metal(10, 'Zinc', 'Cynk', [
        { id: 37, name: '7,2 kg/dm3', value: 7.2 }
    ]),
    new Metal(11, 'Zinc alloys', 'Stopy cynku', [
        { id: 38, name: '6,7 kg/dm3', value: 6.7 }
    ]),
    new Metal(12, 'Gold', 'Złoto', [
        { id: 39, name: '19,3 kg/dm3', value: 19.3 }
    ])
];
//# sourceMappingURL=metal.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Shape */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHAPES; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HEIGHT = { id: 1, name: 'height', label: 'Wysokość (h)', defaultValue: 0 };
var WIDTH = { id: 2, name: 'width', label: 'Szerokość (w)', defaultValue: 0 };
var LENGTH = { id: 3, name: 'length', label: 'Długość (l)', defaultValue: 1000 };
var THICKNESS = { id: 4, name: 'thickness', label: 'Grubość', defaultValue: 0 };
var WALL_THICKNESS = { id: 5, name: 'wall thickness', label: 'Grubość ściany (b)', defaultValue: 0 };
var EXTERNAL_DIAMETER = { id: 6, name: 'external diameter', label: 'Średnica zew. (h)', defaultValue: 0 };
var INTERNAL_DIAMETER = { id: 7, name: 'internal diameter', label: 'Średnica wew. (b)', defaultValue: 0 };
var Shape = (function () {
    function Shape(id, name, label, parameters) {
        this.id = id;
        this.name = name;
        this.label = label;
        this.parameters = parameters;
    }
    return Shape;
}());

var RoundBar = (function (_super) {
    __extends(RoundBar, _super);
    function RoundBar() {
        return _super.call(this, 1, 'RoundBar', 'Pręt okrągły', [EXTERNAL_DIAMETER, LENGTH]) || this;
    }
    RoundBar.prototype.getVolume = function (values) {
        if (values.length != 2) {
            console.log('Argument error: expected [diameter, length]', 'Got: ', values);
            return 0.0;
        }
        var radius = values[0] / 100.0 / 2.0;
        var length = values[1] / 100.0;
        return Math.PI * Math.pow(radius, 2.0) * length;
    };
    return RoundBar;
}(Shape));
var Pipe = (function (_super) {
    __extends(Pipe, _super);
    function Pipe() {
        return _super.call(this, 2, 'Pipe', 'Rura okrągła', [EXTERNAL_DIAMETER, WALL_THICKNESS, LENGTH]) || this;
    }
    Pipe.prototype.getVolume = function (values) {
        if (values.length != 3) {
            console.log('Argument error: expected [external diameter, internal diameter, length]', 'Got: ', values);
            return 0.0;
        }
        var external_radius = values[0] / 100.0 / 2.0;
        var internal_radius = values[1] / 100.0 / 2.0;
        var length = values[2] / 100.0;
        return Math.PI * (Math.pow(external_radius, 2.0) - Math.pow(internal_radius, 2.0)) * length;
    };
    return Pipe;
}(Shape));
var HexagonalBar = (function (_super) {
    __extends(HexagonalBar, _super);
    function HexagonalBar() {
        return _super.call(this, 3, 'HexagonalBar', 'Pręt sześciokątny', [EXTERNAL_DIAMETER, LENGTH]) || this;
    }
    HexagonalBar.prototype.getVolume = function (values) {
        if (values.length != 2) {
            console.log('Argument error: expected [external diameter, length]', 'Got: ', values);
            return 0.0;
        }
        var external_radius = values[0] / 100.0 / 2.0;
        var length = values[1] / 100.0;
        return 2.0 * Math.sqrt(3.0) * Math.pow(external_radius, 2.0) * length;
    };
    return HexagonalBar;
}(Shape));
var HexagonalPipe = (function (_super) {
    __extends(HexagonalPipe, _super);
    function HexagonalPipe() {
        return _super.call(this, 4, 'HexagonalPipe', 'Rura sześciokątna', [HEIGHT, INTERNAL_DIAMETER, LENGTH]) || this;
    }
    HexagonalPipe.prototype.getVolume = function (values) {
        if (values.length != 3) {
            console.log('Argument error: expected [height, internal diameter, length]', 'Got: ', values);
            return 0.0;
        }
        var height = values[0] / 100.0 / 2.0;
        var internal_radius = values[1] / 100.0 / 2.0;
        var length = values[2] / 100.0;
        return (2.0 * Math.sqrt(3.0) * Math.pow(height, 2.0) - Math.PI * Math.pow(internal_radius, 2.0)) * length;
    };
    return HexagonalPipe;
}(Shape));
var SquareBar = (function (_super) {
    __extends(SquareBar, _super);
    function SquareBar() {
        return _super.call(this, 5, 'SquareBar', 'Kwadrat', [WIDTH, LENGTH]) || this;
    }
    SquareBar.prototype.getVolume = function (values) {
        if (values.length != 2) {
            console.log('Argument error: expected [width, length]', 'Got: ', values);
            return 0.0;
        }
        var width = values[0] / 100.0;
        var length = values[1] / 100.0;
        return Math.pow(width, 2.0) * length;
    };
    return SquareBar;
}(Shape));
var Sheet = (function (_super) {
    __extends(Sheet, _super);
    function Sheet() {
        return _super.call(this, 6, 'Sheet', 'Blacha', [THICKNESS, WIDTH, LENGTH]) || this;
    }
    Sheet.prototype.getVolume = function (values) {
        if (values.length != 3) {
            console.log('Argument error: expected [thickness, width, length]', 'Got: ', values);
            return 0.0;
        }
        var thickness = values[0] / 100.0;
        var width = values[1] / 100.0;
        var length = values[2] / 100.0;
        return thickness * width * length;
    };
    return Sheet;
}(Shape));
var SquareTube = (function (_super) {
    __extends(SquareTube, _super);
    function SquareTube() {
        return _super.call(this, 7, 'SquareTube', 'Rura kwadratowa', [HEIGHT, WIDTH, LENGTH, WALL_THICKNESS]) || this;
    }
    SquareTube.prototype.getVolume = function (values) {
        if (values.length != 4) {
            console.log('Argument error: expected [height, width, length, wall thickness]', 'Got: ', values);
            return 0.0;
        }
        var height = values[0] / 100.0;
        var width = values[1] / 100.0;
        var length = values[2] / 100.0;
        var thickness = values[3] / 100.0;
        return (height * width - (height - 2.0 * thickness) * (width - 2.0 * thickness)) * length;
    };
    return SquareTube;
}(Shape));
var Angle = (function (_super) {
    __extends(Angle, _super);
    function Angle() {
        return _super.call(this, 8, 'Angle', 'Kątownik', [HEIGHT, WIDTH, LENGTH, WALL_THICKNESS]) || this;
    }
    Angle.prototype.getVolume = function (values) {
        if (values.length != 4) {
            console.log('Argument error: expected [height, width, length, wall thickness]', 'Got: ', values);
            return 0.0;
        }
        var height = values[0] / 100.0;
        var width = values[1] / 100.0;
        var length = values[2] / 100.0;
        var thickness = values[3] / 100.0;
        return (height * width - (height - thickness) * (width - thickness)) * length;
    };
    return Angle;
}(Shape));
var Channel = (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super.call(this, 9, 'Channel', 'Ceownik', [HEIGHT, WIDTH, LENGTH, WALL_THICKNESS]) || this;
    }
    Channel.prototype.getVolume = function (values) {
        if (values.length != 4) {
            console.log('Argument error: expected [height, width, length, wall thickness]', 'Got: ', values);
            return 0.0;
        }
        var height = values[0] / 100.0;
        var width = values[1] / 100.0;
        var length = values[2] / 100.0;
        var thickness = values[3] / 100.0;
        return (height * width - (height - 2.0 * thickness) * (width - thickness)) * length;
    };
    return Channel;
}(Shape));
var Tee = (function (_super) {
    __extends(Tee, _super);
    function Tee() {
        return _super.call(this, 10, 'Tee', 'Teownik', [HEIGHT, WIDTH, LENGTH, WALL_THICKNESS]) || this;
    }
    Tee.prototype.getVolume = function (values) {
        if (values.length != 4) {
            console.log('Argument error: expected [height, width, length, wall thickness]', 'Got: ', values);
            return 0.0;
        }
        var height = values[0] / 100.0;
        var width = values[1] / 100.0;
        var length = values[2] / 100.0;
        var thickness = values[3] / 100.0;
        return (height * width - (height - thickness) * (width - thickness)) * length;
    };
    return Tee;
}(Shape));
var IBeam = (function (_super) {
    __extends(IBeam, _super);
    function IBeam() {
        return _super.call(this, 11, 'IBeam', 'Dwuteownik', [HEIGHT, WIDTH, LENGTH, WALL_THICKNESS]) || this;
    }
    IBeam.prototype.getVolume = function (values) {
        if (values.length != 4) {
            console.log('Argument error: expected [height, width, length, wall thickness]', 'Got: ', values);
            return 0.0;
        }
        var height = values[0] / 100.0;
        var width = values[1] / 100.0;
        var length = values[2] / 100.0;
        var thickness = values[3] / 100.0;
        return (height * width - (height - 2.0 * thickness) * (width - thickness)) * length;
    };
    return IBeam;
}(Shape));
var SHAPES = [
    new RoundBar(),
    new Pipe(),
    new HexagonalBar(),
    new HexagonalPipe(),
    new SquareBar(),
    new Sheet(),
    new SquareTube(),
    new Angle(),
    new Channel(),
    new Tee(),
    new IBeam()
];
//# sourceMappingURL=shape.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map