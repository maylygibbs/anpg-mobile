import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilizadorPageRoutingModule } from './utilizador-routing.module';

import { UtilizadorPage } from './utilizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilizadorPageRoutingModule
  ],
  declarations: [UtilizadorPage]
})
export class UtilizadorPageModule {}
