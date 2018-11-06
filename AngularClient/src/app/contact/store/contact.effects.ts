import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ContactActionTypes, ContactsLoaded, LoadContacts} from './contact.actions';
import {ContactsService} from '../service/contacts.service';
import {mergeMap, map} from 'rxjs/operators';
import {Contact} from '../models/contact';


@Injectable()
export class ContactEffects {
  @Effect()
  contactLoad$ = this.actions$.pipe(
    ofType<LoadContacts>(ContactActionTypes.LoadContacts),
    mergeMap( action=>this.contactService.getContacts()),
    map(contacts=> new ContactsLoaded({contacts}))
  );
  constructor(private actions$: Actions,
              private contactService: ContactsService) {}
}
