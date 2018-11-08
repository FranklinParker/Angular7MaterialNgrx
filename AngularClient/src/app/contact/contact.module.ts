import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/contact.effects';
import { StoreModule } from '@ngrx/store';
import * as fromContact from './store/contact.reducer';
import { ContactAddEditComponent } from './components/contact-add-edit/contact-add-edit.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ContactHomeComponent, ContactAddEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ContactRoutingModule,
    EffectsModule.forFeature([ContactEffects]),
    StoreModule.forFeature('contact', fromContact.reducer)
  ]
})
export class ContactModule { }
