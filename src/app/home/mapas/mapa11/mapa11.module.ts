import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa11PageRoutingModule } from './mapa11-routing.module';

import { Mapa11Page } from './mapa11.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa11PageRoutingModule
  ],
  declarations: [Mapa11Page]
})
export class Mapa11PageModule {}
