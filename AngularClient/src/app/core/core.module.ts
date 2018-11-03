import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class CoreModule { }
