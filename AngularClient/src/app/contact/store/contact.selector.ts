import {createSelector} from '@ngrx/store';

import * as fromContacts from './contact.reducer';

export const selectContactState = state => state.contact;


export const getAllContacts = createSelector(
  selectContactState,
  fromContacts.selectAll
);
