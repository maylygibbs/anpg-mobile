import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetalhePageRoutingModule } from './news-detalhe-routing.module';

import { NewsDetalhePage } from './news-detalhe.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NewsDetalhePageRoutingModule
  ],
  declarations: [NewsDetalhePage]
})
export class NewsDetalhePageModule {}
