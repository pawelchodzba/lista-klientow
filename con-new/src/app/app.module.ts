import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListModule } from './contact-list/contact-list.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { CoreModule } from '../app/core/core.module';
 import { ToastrModule } from 'ngx-toastr';
import { ContactListService } from './contact-list/contact-list.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ContactListModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    CoreModule
  ],
  providers: [
    ContactListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
