import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa3PageRoutingModule } from './mapa3-routing.module';

import { Mapa3Page } from './mapa3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Mapa3PageRoutingModule
  ],
  declarations: [Mapa3Page]
})
export class Mapa3PageModule {}
