import { Action } from '@ngrx/store';
import {Contact} from '../models/contact';

export enum ContactActionTypes {
  LoadContacts = '[LoadContacts] Load Contacts',
  ContactsLoaded = '[ContactsLoaded] Contacts Loaded',
  SelectContact = '[SelectContact] select contact'

}

export class LoadContacts implements Action {
  readonly type = ContactActionTypes.LoadContacts;
}


export class ContactsLoaded implements Action {
  readonly type = ContactActionTypes.ContactsLoaded;
  constructor(public payload: { contacts:Contact[]}){

  }

}

export class SelectContact implements Action {
  readonly type = ContactActionTypes.SelectContact;
  constructor(public payload: { contact: Contact}){

  }

}
export type ContactActions = LoadContacts
  | ContactsLoaded
  | SelectContact;
