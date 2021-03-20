import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosEapPageRoutingModule } from './dados-eap-routing.module';

import { DadosEapPage } from './dados-eap.page';

import { GraficoComponent } from './components/grafico/grafico.component';
import { DadosComponent } from './components/dados/dados.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DadosEapPageRoutingModule
  ],
  declarations: [DadosEapPage, GraficoComponent, DadosComponent, FiltroComponent]
})
export class DadosEapPageModule {}
