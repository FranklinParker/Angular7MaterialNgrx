import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../models/contact';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url: string = environment.apiUrl + '/contact';

  constructor(private http: HttpClient) {
  }

  /**
   * get a list of contacts
   *
   *
   */
  public async getContactsOld(): Promise<Contact[]> {
    try {
      const contacts: Contact[] = await this.http.get(this.url)
        .pipe(
          map((resp) => resp['records'])
        ).toPromise();
      return contacts;
    } catch (e) {
      return [];
    }
  }
/**
 *
 *
 */
  public getContacts(): Observable<Contact[]> {
    return  this.http.get(this.url)
      .pipe(
        map((resp) => resp['records'])
      );
  }

  public updateContact(contact: Contact){
    return this.http.put(this.url, contact);

  }
}


