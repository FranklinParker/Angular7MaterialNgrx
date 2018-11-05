import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../models/contact';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

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
  public async getContacts(): Promise<Contact[]> {
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
}


