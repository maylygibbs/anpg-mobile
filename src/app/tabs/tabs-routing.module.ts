import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search/search.module').then(m => m.SearchPageModule)
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
        path: 'favoritos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
          }
        ]
      },
      {
        path: 'utilizador',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../utilizador/utilizador.module').then(m => m.UtilizadorPageModule)
          }
        ]
      },
      {
        path: 'splash',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shared/components/tab-splash/tab-splash.module').then(m => m.TabSplashModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-sala-de-imprensa/tab-news/tab-news.module').then(m => m.TabNewsModule)
          }
        ]
      },
      {
        path: 'mapa-interactivo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-interactive-map/tab-interactive-map.module').then(m => m.TabInteractiveMapModule)
          }
        ]
      },
      {
        path: 'sala-de-imprensa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-sala-de-imprensa/tab-sala-de-imprensa.module').then(m => m.TabSalaDeImprensaModule)
          }
        ]
      },
      {
        path: 'faq',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-faq/tab-faq.module').then(m => m.TabFaqModule)
          }
        ]
      },
      {
        path: 'agendamento',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-agendamento-data-room/tab-agendamento-data-room.module').then(m => m.TabAgendamentoDataRoomModule)
          }
        ]
      },
      {
        path: 'dados-eap',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-dados-eap/tab-dados-eap.module').then(m => m.TabDadosEapModule)
          }
        ]
      },
      {
        path: 'favoritos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
          }
        ]
      },
      {
        path: 'glossario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-glossario/tab-glossario.module').then(m => m.TabGlossarioModule)
          }
        ]
      },
      {
        path: 'informacao-juridica',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-informacao-juridica/tab-informacao-juridica.module').then(m => m.TabInformacaoJuridicaModule)
          }
        ]
      },
      {
        path: 'licitacoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-licitacoes/tab-licitacoes.module').then(m => m.TabLicitacoesModule)
          }
        ]
      },
      {
        path: 'ano2019',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-licitacoes/ano2019/ano2019.module').then(m => m.Ano2019PageModule)
          }
        ]
      },
      {
        path: 'ano2020',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-licitacoes/ano2020/ano2020.module').then(m => m.Ano2020PageModule)
          }
        ]
      },
      {
        path: 'ano2020/pacotesdedados',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-licitacoes/ano2020/pacotesdedados/pacotesdedados.module').then(m => m.PacotesdedadosPageModule)
          }
        ]
      },
      {
        path: 'ano2020/pacotesdedados/congo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-licitacoes/ano2020/pacotesdedados/congo/congo.module').then(m => m.CongoPageModule)
          }
        ]
      },
      {
        path: 'ano2020/pacotesdedados/kwanza',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-licitacoes/ano2020/pacotesdedados/kwanza/kwanza.module').then(m => m.KwanzaPageModule)
          }
        ]
      },
      {
        path: 'news-detalhe',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab-sala-de-imprensa/tab-news-detalhe/tab-news-detalhe.module').then(m => m.TabNewsDetalheModule)
          }
        ]
      },
      {
        path: 'sobrenos',
        loadChildren: () => import('../home/sobrenos/sobrenos.module').then( m => m.SobrenosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/splash',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
