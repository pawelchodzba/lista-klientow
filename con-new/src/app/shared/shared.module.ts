import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { SpinerComponent } from './spiner/spiner.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxLoadingModule

  ],
  exports: [DialogDeleteComponent, SpinerComponent],
  entryComponents: [DialogDeleteComponent, SpinerComponent],
  declarations: [DialogDeleteComponent, SpinerComponent]
})
export class SharedModule { }
