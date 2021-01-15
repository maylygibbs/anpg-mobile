import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabNewsDetalhe } from './tab-news-detalhe.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabNewsDetalhe }])
  ],
  declarations: [TabNewsDetalhe]
})
export class TabNewsDetalheModule {}
