import { Action } from '@ngrx/store';
import {Contact} from '../models/contact';

export enum ContactActionTypes {
  LoadContacts = '[LoadContacts] Load Contacts',
  ContactsLoaded = '[ContactsLoaded] Contacts Loaded'

}

export class LoadContacts implements Action {
  readonly type = ContactActionTypes.LoadContacts;
}


export class ContactsLoaded implements Action {
  readonly type = ContactActionTypes.ContactsLoaded;
  constructor(public payload: { contacts:Contact[]}){

  }

}
export type ContactActions = LoadContacts
  | ContactsLoaded;
