import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KwanzaPageRoutingModule } from './kwanza-routing.module';

import { KwanzaPage } from './kwanza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KwanzaPageRoutingModule
  ],
  declarations: [KwanzaPage]
})
export class KwanzaPageModule {}
