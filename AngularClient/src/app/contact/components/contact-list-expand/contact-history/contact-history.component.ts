import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {getAllContacts, getSelectedContact} from '../../../store/contact.selector';
import {Contact} from '../../../models/contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../../../service/contacts.service';
import {Update} from '@ngrx/entity';
import {ContactUpdate} from '../../../store/contact.actions';
import {MatSnackBar} from '@angular/material';

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
              private contactService: ContactsService,
              private snackBar: MatSnackBar ) {

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
      (resp) => {
        if (resp['success']) {
          const updateContact:Contact = resp['record'];
          const update: Update<Contact> = {
            id: updateContact.id,
            changes: updateContact
          };
          this.snackBar.open('Contact Updated', 'Update successful', {
            duration: 9000
          });
          this.store.dispatch(new ContactUpdate({
            update: update, contact: updateContact}));
        } else{
          this.snackBar.open('Error Updating', 'Error Saving Contractor', {
            duration: 9000
          });
        }
      }
    )
  }

}
