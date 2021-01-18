import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecretosPageRoutingModule } from './decretos-routing.module';

import { DecretosPage } from './decretos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DecretosPageRoutingModule
  ],
  declarations: [DecretosPage]
})
export class DecretosPageModule {}
