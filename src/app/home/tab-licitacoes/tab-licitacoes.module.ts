import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabLicitacoes } from './tab-licitacoes.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { TabLicitacoesPageRoutingModule } from './tab-licitacoes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TabLicitacoesPageRoutingModule,
    RouterModule.forChild([{ path: '', component: TabLicitacoes }])
  ],
  declarations: [TabLicitacoes]
})
export class TabLicitacoesModule {}
