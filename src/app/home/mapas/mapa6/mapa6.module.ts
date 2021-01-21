import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa6PageRoutingModule } from './mapa6-routing.module';

import { Mapa6Page } from './mapa6.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa6PageRoutingModule
  ],
  declarations: [Mapa6Page]
})
export class Mapa6PageModule {}
