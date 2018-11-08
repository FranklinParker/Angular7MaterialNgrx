import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contact} from '../../models/contact';
import {Group} from '../../models/group';

@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.css']
})
export class ContactAddEditComponent implements OnInit {
  contact: Contact = {
    lastName: undefined,
    firstName: undefined,
    groupCode: undefined

  };
  groups: Group[] =[
    {
      code: 'grp1',
      description: ' Group One'
    },
    {
      code: 'grp2',
      description: ' Group two'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('contact', this.contact);
  }

}


