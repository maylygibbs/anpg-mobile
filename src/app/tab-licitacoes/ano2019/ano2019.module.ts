import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ano2019PageRoutingModule } from './ano2019-routing.module';

import { Ano2019Page } from './ano2019.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ano2019PageRoutingModule
  ],
  declarations: [Ano2019Page]
})
export class Ano2019PageModule {}
