import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { OilStickerComponent } from './components/oil-sticker/oil-sticker.component';
import { MiAccordionComponent } from './widgets/mi-accordion/mi-accordion.component';
import { MenuUtilizadorComponent } from './components/menu-utilizador/menu-utilizador.component';
import { HeaderUtilizadorComponent } from './components/header-utilizador/header-utilizador.component';
 
@NgModule({
  declarations: [ExpandableComponent, MenuComponent, HeaderComponent, OilStickerComponent, MiAccordionComponent, MenuUtilizadorComponent, HeaderUtilizadorComponent],
  imports: [
    CommonModule,
    FormsModule,    
    IonicModule.forRoot(), 
  ],
  exports: [ExpandableComponent, MenuComponent, HeaderComponent, OilStickerComponent, MiAccordionComponent, MenuUtilizadorComponent, HeaderUtilizadorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule { }
