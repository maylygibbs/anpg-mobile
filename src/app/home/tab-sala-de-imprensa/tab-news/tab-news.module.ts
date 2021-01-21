import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabNews } from './tab-news.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabNewsPageRoutingModule } from './tab-news-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TabNewsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: TabNews }])
  ],
  declarations: [TabNews]
})
export class TabNewsModule {}
