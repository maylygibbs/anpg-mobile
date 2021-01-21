import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa8PageRoutingModule } from './mapa8-routing.module';

import { Mapa8Page } from './mapa8.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa8PageRoutingModule
  ],
  declarations: [Mapa8Page]
})
export class Mapa8PageModule {}
