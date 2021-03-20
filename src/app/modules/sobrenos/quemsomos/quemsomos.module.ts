import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuemsomosPageRoutingModule } from './quemsomos-routing.module';

import { QuemsomosPage } from './quemsomos.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    QuemsomosPageRoutingModule
  ],
  declarations: [QuemsomosPage]
})
export class QuemsomosPageModule {}
