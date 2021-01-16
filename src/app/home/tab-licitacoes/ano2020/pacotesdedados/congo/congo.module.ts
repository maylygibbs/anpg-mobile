import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongoPageRoutingModule } from './congo-routing.module';

import { CongoPage } from './congo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongoPageRoutingModule
  ],
  declarations: [CongoPage]
})
export class CongoPageModule {}
