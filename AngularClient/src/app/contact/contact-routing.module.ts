import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactHomeComponent} from './components/contact-home/contact-home.component';
import {ContactsResolver} from './resolvers/contacts.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContactHomeComponent,
    resolve: {'contacts': ContactsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
