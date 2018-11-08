import {ContactHistory} from './contactHistory';

export interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  contactHistories?: ContactHistory[];
  groupCode?: string;
}
