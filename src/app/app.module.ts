import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { SaveContactComponent } from './save-contact/save-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    ContactComponent,
    ContactListComponent,
    HeaderComponent,
    SaveContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
