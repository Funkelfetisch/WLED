import {Component, AfterViewInit, ElementRef, ViewChild, OnDestroy, Input, NgZone, OnInit, NgModule} from '@angular/core';

import outputTypes from '../previewOutput';
import {PreviewComponent} from './preview.component';
import {ColorPickerComponent} from './pickr.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from "@ionic/angular";
import {ControlPopOverComponent} from "./controlPopOver.component";
import {CommonModule} from "@angular/common";
import {TutorialPageRoutingModule} from '../../pages/tutorial/tutorial-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../../pages/tutorial/tutorial.module';


@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    PreviewComponent,
    ColorPickerComponent,
    ControlPopOverComponent
  ],
  exports: [
    PreviewComponent,
    ColorPickerComponent,
    ControlPopOverComponent
  ]
})
export class PreviewComponentModule { }
