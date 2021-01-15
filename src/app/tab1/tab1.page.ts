import { Component } from '@angular/core';
import { RouteStateService } from '../shared/services/route-state.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private routeStateService: RouteStateService) {}

  toToSalaDeImprensa(): void {
    this.routeStateService.add("Sala de Imprensa", "/tabs/sala-de-imprensa/", null, false);    
  }

}
