import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacaoJuridicaPageRoutingModule } from './informacao-juridica-routing.module';

import { InformacaoJuridicaPage } from './informacao-juridica.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    InformacaoJuridicaPageRoutingModule
  ],
  declarations: [InformacaoJuridicaPage]
})
export class InformacaoJuridicaPageModule {}
