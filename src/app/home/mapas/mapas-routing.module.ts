import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapasPage } from './mapas.page';

const routes: Routes = [
  {
    path: '',
    component: MapasPage
  },
  {
    path: 'mapa1',
    loadChildren: () => import('./mapa1/mapa1.module').then( m => m.Mapa1PageModule)
  },
  {
    path: 'mapa2',
    loadChildren: () => import('./mapa2/mapa2.module').then( m => m.Mapa2PageModule)
  },
  {
    path: 'mapa3',
    loadChildren: () => import('./mapa3/mapa3.module').then( m => m.Mapa3PageModule)
  },
  {
    path: 'mapa4',
    loadChildren: () => import('./mapa4/mapa4.module').then( m => m.Mapa4PageModule)
  },
  {
    path: 'mapa5',
    loadChildren: () => import('./mapa5/mapa5.module').then( m => m.Mapa5PageModule)
  },
  {
    path: 'mapa6',
    loadChildren: () => import('./mapa6/mapa6.module').then( m => m.Mapa6PageModule)
  },
  {
    path: 'mapa7',
    loadChildren: () => import('./mapa7/mapa7.module').then( m => m.Mapa7PageModule)
  },
  {
    path: 'mapa8',
    loadChildren: () => import('./mapa8/mapa8.module').then( m => m.Mapa8PageModule)
  },
  {
    path: 'mapa9',
    loadChildren: () => import('./mapa9/mapa9.module').then( m => m.Mapa9PageModule)
  },
  {
    path: 'mapa10',
    loadChildren: () => import('./mapa10/mapa10.module').then( m => m.Mapa10PageModule)
  },
  {
    path: 'mapa11',
    loadChildren: () => import('./mapa11/mapa11.module').then( m => m.Mapa11PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapasPageRoutingModule {}
