import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa5PageRoutingModule } from './mapa5-routing.module';

import { Mapa5Page } from './mapa5.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa5PageRoutingModule
  ],
  declarations: [Mapa5Page]
})
export class Mapa5PageModule {}
