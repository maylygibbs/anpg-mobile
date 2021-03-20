import { Component, OnInit } from '@angular/core';
import { RouteStateService } from '../shared/services/route-state.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private routeStateService: RouteStateService) { }

  toToSalaDeImprensa(): void {
    this.routeStateService.toToSalaDeImprensa();
  }

  goToMapaInteractivo(): void {
    this.routeStateService.goToMapaInteractivo();
  }

  goToDadosEap(): void {
    this.routeStateService.goToDadosEap();
  }

  goToInformacoesJuridicas(): void {
    this.routeStateService.goToInformacoesJuridicas();
  }

  goToLicitacoes(): void {
    this.routeStateService.goToLicitacoes();
  }

  goToSobreNos(): void {
    this.routeStateService.goToSobreNos();
  }

  goToAgendamentoDataRoom(): void {
    this.routeStateService.goToAgendamentoDataRoom();
  }

  goToMapas(): void {
    this.routeStateService.goToMapas();
  }

  goToFAQs(): void {
    this.routeStateService.goToFAQs();
  }

  ngOnInit() { }

}
