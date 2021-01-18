import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrenosPage } from './sobrenos.page';

const routes: Routes = [
  {
    path: '',
    component: SobrenosPage
  },
  {
    path: 'quemsomos',
    loadChildren: () => import('./quemsomos/quemsomos.module').then( m => m.QuemsomosPageModule)
  },
  {
    path: 'missao',
    loadChildren: () => import('./missao/missao.module').then( m => m.MissaoPageModule)
  },
  {
    path: 'mensagem',
    loadChildren: () => import('./mensagem/mensagem.module').then( m => m.MensagemPageModule)
  },
  {
    path: 'conselhoadministracao',
    loadChildren: () => import('./conselhoadministracao/conselhoadministracao.module').then( m => m.ConselhoadministracaoPageModule)
  },
  {
    path: 'objetivosestrategicos',
    loadChildren: () => import('./objetivosestrategicos/objetivosestrategicos.module').then( m => m.ObjetivosestrategicosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrenosPageRoutingModule {}
