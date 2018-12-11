import { NgModule } from '@angular/core';
import {
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatDialogConfig,
        MAT_DIALOG_DEFAULT_OPTIONS,
        MatTabsModule,
        MatTableModule,
        MatListModule,
        MatPaginator,
        MatPaginatorModule,
        MatMenuModule,
        MatSidenavModule
} from '@angular/material';
const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '600px',
  // height: '700px',
  disableClose: true,
  hasBackdrop: true
};
const MATERIAL_MODULES = [
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatTabsModule,
        MatTableModule,
        MatListModule,
        MatPaginatorModule,
        MatMenuModule,
        MatSidenavModule
];

@NgModule({
  imports: [],
  exports: [...MATERIAL_MODULES],
  declarations: [],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG }
  ]
})
export class MaterialModule { }
