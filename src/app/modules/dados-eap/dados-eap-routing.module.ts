import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosComponent } from './components/dados/dados.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { DadosEapPage } from './dados-eap.page';

const routes: Routes = [
  {
      path:'',
      component: DadosEapPage,
      children:[
          {
              path:'grafico',
              component:GraficoComponent
          },
          {
              path:'dados',
              component:DadosComponent
          },
          {
              path:'filtro',
              component: FiltroComponent
          },
          {
              path: '',
              redirectTo: 'grafico',
              pathMatch: 'full'
          }
      ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosEapPageRoutingModule {}
