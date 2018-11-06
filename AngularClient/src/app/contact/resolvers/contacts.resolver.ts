import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Contact} from '../models/contact';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {getAllContacts} from '../store/contact.selector';
import {tap, filter, first} from 'rxjs/operators';
import {LoadContacts} from '../store/contact.actions';

@Injectable({
  providedIn: 'root'
})
export class ContactsResolver  implements Resolve<Contact[]> {

  constructor(private store: Store<AppState>) { }
  /**
   * gets
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[]> {
    const result =  this.store
      .pipe (
        select(getAllContacts),
        tap(contacts=>{
          if(!contacts || contacts.length===0){
            this.store.dispatch( new LoadContacts())
          }
        }),
        filter(contacts => !!contacts),
        first()
      );
    return result;

  }

}
