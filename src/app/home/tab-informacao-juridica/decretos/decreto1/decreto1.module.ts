import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Decreto1PageRoutingModule } from './decreto1-routing.module';

import { Decreto1Page } from './decreto1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Decreto1PageRoutingModule
  ],
  declarations: [Decreto1Page]
})
export class Decreto1PageModule {}
