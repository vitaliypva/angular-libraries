import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var SuperLibComponent = /** @class */ (function () {
    function SuperLibComponent() {
    }
    SuperLibComponent = __decorate([
        Component({
            selector: 'super-lib-component',
            template: "<p>\r\n  Hello from an external template\r\n</p>\r\n"
        })
    ], SuperLibComponent);
    return SuperLibComponent;
}());

var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [SuperLibComponent],
            exports: [SuperLibComponent],
        })
    ], SuperLibModule);
    return SuperLibModule;
}());

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=my-first-super-lib.js.map
