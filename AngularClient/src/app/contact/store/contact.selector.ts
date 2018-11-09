import {createSelector} from '@ngrx/store';

import * as fromContacts from './contact.reducer';
import {ContactState} from './contact.reducer';

export const selectContactState = state => state.contact;


export const getAllContacts = createSelector(
  selectContactState,
  fromContacts.selectAll
);


export const getSelectedContact = createSelector(
  selectContactState,
  (state:ContactState) => state.contact
);
