import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {getAllContacts, getSelectedContact} from '../../../store/contact.selector';
import {Contact} from '../../../models/contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../../../service/contacts.service';

@Component({
  selector: 'app-contact-history',
  templateUrl: './contact-history.component.html',
  styleUrls: ['./contact-history.component.scss']
})
export class ContactHistoryComponent implements OnInit {
  contact: Contact;
  form: FormGroup;

  constructor(private store: Store<AppState>,
              private formBuilder: FormBuilder,
              private contactService: ContactsService) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required]
    });
    this.store
      .pipe(
        select(getSelectedContact)
      )
      .subscribe((contact: Contact) => {
        this.contact = contact;
        this.form.patchValue({
          lastName: this.contact.lastName,
          firstName: this.contact.firstName,
        });

      });

  }

  onSubmit(form: FormGroup) {
    console.log('form ', form.value);
    const updateContact: Contact = Object.assign({}, this.contact);
    updateContact.lastName = this.form.value.lastName;
    updateContact.firstName = this.form.value.firstName;


    this.contactService.updateContact(updateContact).subscribe(
      (resp)=>{
        console.log('udate resp', resp);
      }
    )
  }

}