import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongoPageRoutingModule } from './congo-routing.module';

import { CongoPage } from './congo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CongoPageRoutingModule
  ],
  declarations: [CongoPage]
})
export class CongoPageModule {}
