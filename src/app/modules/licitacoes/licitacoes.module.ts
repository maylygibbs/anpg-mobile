import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LicitacoesPageRoutingModule } from './licitacoes-routing.module';
import { LicitacoesPage } from './licitacoes.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    LicitacoesPageRoutingModule
  ],
  declarations: [LicitacoesPage]
})
export class LicitacoesPageModule {}
