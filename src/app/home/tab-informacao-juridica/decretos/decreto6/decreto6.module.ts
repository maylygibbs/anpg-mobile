import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Decreto6PageRoutingModule } from './decreto6-routing.module';

import { Decreto6Page } from './decreto6.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Decreto6PageRoutingModule
  ],
  declarations: [Decreto6Page]
})
export class Decreto6PageModule {}
