import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacotesdedadosPageRoutingModule } from './pacotesdedados-routing.module';

import { PacotesdedadosPage } from './pacotesdedados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacotesdedadosPageRoutingModule
  ],
  declarations: [PacotesdedadosPage]
})
export class PacotesdedadosPageModule {}
