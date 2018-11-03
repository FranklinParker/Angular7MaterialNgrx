import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactHomeComponent} from './components/contact-home/contact-home.component';

const routes: Routes = [
  { path: '',
    component: ContactHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
