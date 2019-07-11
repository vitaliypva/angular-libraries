import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let SuperLibComponent = class SuperLibComponent {
};
SuperLibComponent = __decorate([
    Component({
        selector: 'super-lib-component',
        template: "<p>\r\n  Hello from an external template\r\n</p>\r\n"
    })
], SuperLibComponent);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [SuperLibComponent],
        exports: [SuperLibComponent],
    })
], SuperLibModule);

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=my-first-super-lib.js.map
