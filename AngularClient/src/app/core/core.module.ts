import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavHeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavHeaderComponent,
    HomeComponent
  ]
})
export class CoreModule { }
