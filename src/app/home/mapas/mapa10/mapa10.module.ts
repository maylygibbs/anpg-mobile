import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa10PageRoutingModule } from './mapa10-routing.module';

import { Mapa10Page } from './mapa10.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa10PageRoutingModule
  ],
  declarations: [Mapa10Page]
})
export class Mapa10PageModule {}
