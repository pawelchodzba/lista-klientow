import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [DialogDeleteComponent],
  entryComponents: [DialogDeleteComponent],
  declarations: [DialogDeleteComponent]
})
export class SharedModule { }
