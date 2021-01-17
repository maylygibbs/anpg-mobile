import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ano2020PageRoutingModule } from './ano2020-routing.module';

import { Ano2020Page } from './ano2020.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Ano2020PageRoutingModule
  ],
  declarations: [Ano2020Page]
})
export class Ano2020PageModule {}
