import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

let SuperLibComponent = class SuperLibComponent {
    constructor() {
        this.msg = "component Message";
    }
};
SuperLibComponent = __decorate([
    Component({
        selector: 'super-lib-component',
        template: "<p>\r\n  Hello from an external template: {{msg}}\r\n</p>\r\n"
    })
], SuperLibComponent);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule],
        declarations: [SuperLibComponent],
        exports: [SuperLibComponent],
    })
], SuperLibModule);

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=my-first-super-lib.js.map
