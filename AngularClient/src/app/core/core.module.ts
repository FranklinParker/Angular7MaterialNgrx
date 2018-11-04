import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    NavHeaderComponent,
    HomeComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavHeaderComponent,
    SideNavComponent,
    HomeComponent
  ]
})
export class CoreModule { }
