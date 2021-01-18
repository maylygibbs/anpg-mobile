import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivosestrategicosPageRoutingModule } from './objetivosestrategicos-routing.module';

import { ObjetivosestrategicosPage } from './objetivosestrategicos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ObjetivosestrategicosPageRoutingModule
  ],
  declarations: [ObjetivosestrategicosPage]
})
export class ObjetivosestrategicosPageModule {}
