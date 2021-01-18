import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KwanzaPageRoutingModule } from './kwanza-routing.module';

import { KwanzaPage } from './kwanza.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    KwanzaPageRoutingModule
  ],
  declarations: [KwanzaPage]
})
export class KwanzaPageModule {}
