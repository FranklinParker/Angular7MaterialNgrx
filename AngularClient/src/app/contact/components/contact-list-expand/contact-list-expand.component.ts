import {Component, OnInit, ViewChild} from '@angular/core';
import {Contact} from '../../models/contact';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../reducers';
import {getAllContacts} from '../../store/contact.selector';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SelectContact} from '../../store/contact.actions';

@Component({
  selector: 'app-contact-list-expand',
  templateUrl: './contact-list-expand.component.html',
  styleUrls: ['./contact-list-expand.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ContactListExpandComponent implements OnInit {
  contacts: Contact[] = [];
  isLoading: boolean = false;
  expandedElement: Contact = undefined;


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

  rowClick(element: Contact){
    if(this.expandedElement!==undefined
      && this.expandedElement.id === element.id){
      this.expandedElement=undefined;

    }else{
      this.expandedElement = element;
    }
    this.store.dispatch(new SelectContact({ contact: element}))
    //this.tableElemService.setPeriodicElement(this.expandedElement);

  }

}
