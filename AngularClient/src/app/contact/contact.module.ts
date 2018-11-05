import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/contact.effects';
import { StoreModule } from '@ngrx/store';
import * as fromContact from './store/contact.reducer';

@NgModule({
  declarations: [ContactHomeComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    EffectsModule.forFeature([ContactEffects]),
    StoreModule.forFeature('contact', fromContact.reducer)
  ]
})
export class ContactModule { }
