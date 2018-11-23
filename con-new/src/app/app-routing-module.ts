import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './contact-list/list/list.component';
import { Route } from '@angular/router';
import { ContactDetailsComponent } from './contact-list/contact-details/contact-details.component';
import { EditContactComponent } from './contact-list/edit-contact/edit-contact.component';

const APP_ROUTES: Route[] = [
  // { path: '', pathMatch : 'full', redirectTo: 'clients'},
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients' , component: <any>ListComponent, children: [
      { path: 'details/:id', component: <any>ContactDetailsComponent},
      { path: 'edit/:id', component: <any>EditContactComponent},
  ]},
  // { path: 'details/:id', redirectTo: '/aaaa', pathMatch: 'full' }
  // { path: 'details/:id' , component: <any>ContactDetailsComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
