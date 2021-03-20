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
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'utilizador',
        loadChildren: () => import('../utilizador/utilizador.module').then(m => m.UtilizadorPageModule)
      },

      {
        path: 'sala-imprensa',
        loadChildren: () => import('../sala-imprensa/sala-imprensa.module').then(m => m.SalaImprensaPageModule)
      },
      {
        path: 'dados-eap',
        loadChildren: () => import('../dados-eap/dados-eap.module').then(m => m.DadosEapPageModule)
      },
      {
        path: 'informacao-juridica',
        loadChildren: () => import('../informacao-juridica/informacao-juridica.module').then(m => m.InformacaoJuridicaPageModule)
      },
      {
        path: 'licitacoes',
        loadChildren: () => import('../licitacoes/licitacoes.module').then(m => m.LicitacoesPageModule)
      },
      {
        path: 'sobrenos',
        loadChildren: () => import('../sobrenos/sobrenos.module').then(m => m.SobrenosPageModule)
      },

      {
        path: 'agendamento',
        loadChildren: () => import('../agenda-data-room/agenda-data-room.module').then(m => m.AgendaDataRoomPageModule)
      },
      {
        path: 'mapas',
        loadChildren: () => import('../mapas/mapas.module').then(m => m.MapasPageModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('../faq/faq.module').then( m => m.FaqPageModule)
      },      
      {
        path: '',
        redirectTo: '/tabs/home',
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
})
export class TabsPageRoutingModule { }
