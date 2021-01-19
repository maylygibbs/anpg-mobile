import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa7PageRoutingModule } from './mapa7-routing.module';

import { Mapa7Page } from './mapa7.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa7PageRoutingModule
  ],
  declarations: [Mapa7Page]
})
export class Mapa7PageModule {}
