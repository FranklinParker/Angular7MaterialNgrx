import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../service/contacts.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {
  }

  async ngOnInit() {
    this.contacts = await this.contactsService.getContacts();
    console.log('contacts', this.contacts);
  }

}
