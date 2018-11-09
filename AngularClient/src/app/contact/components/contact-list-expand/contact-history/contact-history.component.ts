import { Component, OnInit } from '@angular/core';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {getAllContacts, getSelectedContact} from '../../../store/contact.selector';
import {Contact} from '../../../models/contact';

@Component({
  selector: 'app-contact-history',
  templateUrl: './contact-history.component.html',
  styleUrls: ['./contact-history.component.scss']
})
export class ContactHistoryComponent implements OnInit {
  contact: Contact
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store
      .pipe(
        select(getSelectedContact)
      )
      .subscribe((contact: Contact) => {
        this.contact = contact;
      });
  }

}
