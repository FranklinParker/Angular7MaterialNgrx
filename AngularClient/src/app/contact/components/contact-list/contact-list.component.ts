import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../reducers';
import {getAllContacts} from '../../store/contact.selector';
import {map} from 'rxjs/operators';
import {Contact} from '../../models/contact';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  isLoading: boolean = false;

  selectedId: number;
  totalRecords = 10;
  recordsPerPage = 5;
  recordUpdating = false;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 15];

  dataSource =  new MatTableDataSource<Contact>([]);

  displayedColumns = ['id', 'firstName', 'lastName','delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store
      .pipe(
        select(getAllContacts)
      )
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
        this.dataSource.data = this.contacts;
      });
  }

  onDelete( contact: Contact) {

  }

  get dataLoaded(){
    return this.dataSource.data && this.dataSource.data.length>0;
  }
  get showSpinner(){
    return this.isLoading;
  }
}
