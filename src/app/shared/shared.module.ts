import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { OilStickerComponent } from './components/oil-sticker/oil-sticker.component';


@NgModule({
  declarations: [ExpandableComponent, MenuComponent, HeaderComponent, OilStickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(), 
  ],
  exports: [ExpandableComponent, MenuComponent, HeaderComponent, OilStickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule { }
