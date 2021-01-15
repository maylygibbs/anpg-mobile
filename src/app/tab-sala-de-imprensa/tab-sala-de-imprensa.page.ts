import { Component, ViewChild } from '@angular/core';
import { RouteStateService } from '../shared/services/route-state.service';

@Component({
  selector: 'app-tab-sala-de-imprensa',
  templateUrl: 'tab-sala-de-imprensa.page.html',
  styleUrls: ['tab-sala-de-imprensa.page.scss']
})
export class TabSalaDeImprensa {
    
  constructor(private routeStateService: RouteStateService) {}

  goBack(): void {
    this.routeStateService.loadPrevious();
  }

  goToNoticias(): void {
    this.routeStateService.add("Sala de Imprensa", "/tabs/news/", null, false);    
  }
}
