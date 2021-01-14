import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab5/tab5.module').then(m => m.Tab5PageModule)
          }
        ]
      },
      {
        path: 'tabSplash',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabSplash/tabSplash.module').then(m => m.TabSplashModule)
          }
        ]
      },
      {
        path: 'tabNews',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabNews/tabNews.module').then(m => m.TabNewsModule)
          }
        ]
      },
      {
        path: 'interactive-map',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-interactive-map/tab-interactive-map.module').then(m => m.TabInteractiveMapModule)
          }
        ]
      },
      {
        path: 'sala-de-imprensa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-sala-de-imprensa/tab-sala-de-imprensa.module').then(m => m.TabSalaDeImprensaModule)
          }
        ]
      },
      {
        path: 'faq',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-faq/tab-faq.module').then(m => m.TabFaqModule)
          }
        ]
      },
      {
        path: 'agendamento',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-agendamento-data-room/tab-agendamento-data-room.module').then(m => m.TabAgendamentoDataRoomModule)
          }
        ]
      },
      {
        path: 'dados-eap',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-dados-eap/tab-dados-eap.module').then(m => m.TabDadosEapModule)
          }
        ]
      },
      {
        path: 'favoritos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-favoritos/tab-favoritos.module').then(m => m.TabFavoritosModule)
          }
        ]
      },
      {
        path: 'glossario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-glossario/tab-glossario.module').then(m => m.TabGlossarioModule)
          }
        ]
      },
      {
        path: 'informacao-juridica',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-informacao-juridica/tab-informacao-juridica.module').then(m => m.TabInformacaoJuridicaModule)
          }
        ]
      },
      {
        path: 'licitacoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-licitacoes/tab-licitacoes.module').then(m => m.TabLicitacoesModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tabSplash',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
