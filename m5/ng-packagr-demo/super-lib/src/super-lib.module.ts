import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuperLibComponent } from './super-lib.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SuperLibComponent],
  exports: [SuperLibComponent],
})
export class SuperLibModule {}
