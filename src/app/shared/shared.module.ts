import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabFaq } from '../tab-faq/tab-faq.page';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [ExpandableComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
  ],
  exports: [ExpandableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule { }
