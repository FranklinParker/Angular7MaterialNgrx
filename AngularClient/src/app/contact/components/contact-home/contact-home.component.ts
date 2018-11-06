import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../service/contacts.service';
import {Contact} from '../../models/contact';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {getAllContacts} from '../../store/contact.selector';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private contactsService: ContactsService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    // this.contacts = await this.contactsService.getContacts();
    // console.log('contacts', this.contacts);
    //this.route.snapshot.data["course"];
    //this.contacts = this.activatedRoute.snapshot.data['contacts'];
    this.store.select(getAllContacts)
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
        console.log('contacts', this.contacts);
      });


  }

}
