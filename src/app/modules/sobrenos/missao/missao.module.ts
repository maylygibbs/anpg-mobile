import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissaoPageRoutingModule } from './missao-routing.module';

import { MissaoPage } from './missao.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MissaoPageRoutingModule
  ],
  declarations: [MissaoPage]
})
export class MissaoPageModule {}
