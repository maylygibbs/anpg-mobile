import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Decreto7PageRoutingModule } from './decreto7-routing.module';

import { Decreto7Page } from './decreto7.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Decreto7PageRoutingModule
  ],
  declarations: [Decreto7Page]
})
export class Decreto7PageModule {}
