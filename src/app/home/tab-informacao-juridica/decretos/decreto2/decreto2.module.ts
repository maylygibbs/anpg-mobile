import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Decreto2PageRoutingModule } from './decreto2-routing.module';

import { Decreto2Page } from './decreto2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Decreto2PageRoutingModule
  ],
  declarations: [Decreto2Page]
})
export class Decreto2PageModule {}
