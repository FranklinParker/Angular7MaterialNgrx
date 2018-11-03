import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
