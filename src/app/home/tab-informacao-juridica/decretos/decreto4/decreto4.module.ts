import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Decreto4PageRoutingModule } from './decreto4-routing.module';

import { Decreto4Page } from './decreto4.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Decreto4PageRoutingModule
  ],
  declarations: [Decreto4Page]
})
export class Decreto4PageModule {}
