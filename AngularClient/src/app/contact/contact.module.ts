import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/contact.effects';
import { StoreModule } from '@ngrx/store';
import * as fromContact from './store/contact.reducer';
import { ContactAddEditComponent } from './components/contact-add-edit/contact-add-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactListExpandComponent } from './components/contact-list-expand/contact-list-expand.component';
import { ContactHistoryComponent } from './components/contact-list-expand/contact-history/contact-history.component';

@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactAddEditComponent,
    ContactListComponent,
    ContactListExpandComponent,
    ContactHistoryComponent]
  ,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ContactRoutingModule,
    EffectsModule.forFeature([ContactEffects]),
    StoreModule.forFeature('contact', fromContact.reducer)
  ]
})
export class ContactModule { }
