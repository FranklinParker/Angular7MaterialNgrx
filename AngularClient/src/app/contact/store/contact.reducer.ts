import {ContactActions, ContactActionTypes} from './contact.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Contact} from '../models/contact';
import {state} from '@angular/animations';

export const adapter: EntityAdapter<Contact> =
  createEntityAdapter<Contact>();

export interface ContactState extends EntityState<Contact> {
  recordsLoaded: boolean;
  recordsLoading: boolean;
  contact: Contact;
  deletedId: number;
  recordUpdating: boolean;
}

const BLANK_RECORD: Contact = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  contactHistories: []

}

export const initialState: ContactState = adapter.getInitialState({
  recordsLoaded: false,
  recordsLoading: false,
  contact: BLANK_RECORD,
  deletedId: undefined,
  recordUpdating: false
});



export function reducer(state = initialState, action: ContactActions): ContactState {
  switch (action.type) {
    case ContactActionTypes.ContactsLoaded:
      return adapter.addAll(action.payload.contacts, {...state, recordsLoaded: true});
    case ContactActionTypes.SelectContact:
      return {...state, contact: action.payload.contact};
    default:
      return state;
  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();

