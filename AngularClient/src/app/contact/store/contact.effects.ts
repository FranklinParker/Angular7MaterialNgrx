import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ContactActionTypes, ContactsLoaded, LoadContacts} from './contact.actions';
import {ContactsService} from '../service/contacts.service';
import {mergeMap, map} from 'rxjs/operators';


@Injectable()
export class ContactEffects {
  @Effect()
  contactLoad$ = this.actions$.pipe(
    ofType<LoadContacts>(ContactActionTypes.LoadContacts),
    mergeMap(async action=>{
     const contacts = await this.contactService.getContacts();
     return new ContactsLoaded({contacts})
    })
  );
  constructor(private actions$: Actions,
              private contactService: ContactsService) {}
}
