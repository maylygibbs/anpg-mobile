import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa9PageRoutingModule } from './mapa9-routing.module';

import { Mapa9Page } from './mapa9.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa9PageRoutingModule
  ],
  declarations: [Mapa9Page]
})
export class Mapa9PageModule {}
