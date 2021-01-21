import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapasPageRoutingModule } from './mapas-routing.module';

import { MapasPage } from './mapas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MapasPageRoutingModule
  ],
  declarations: [MapasPage]
})
export class MapasPageModule {}
