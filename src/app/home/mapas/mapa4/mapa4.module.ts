import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa4PageRoutingModule } from './mapa4-routing.module';

import { Mapa4Page } from './mapa4.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa4PageRoutingModule
  ],
  declarations: [Mapa4Page]
})
export class Mapa4PageModule {}
