import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrenosPageRoutingModule } from './sobrenos-routing.module';

import { SobrenosPage } from './sobrenos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SobrenosPageRoutingModule
  ],
  declarations: [SobrenosPage]
})
export class SobrenosPageModule {}
