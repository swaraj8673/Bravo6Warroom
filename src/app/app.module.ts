import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contactList.component';
import { CLHeaderComponents } from './contact-list/contactListHeader/CLHeader.component';
import { CSearchComponent } from './contact-list/ContactSearch/csearch.component';
import { ContactsComponent } from './contact-list/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CLHeaderComponents,
    CSearchComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
