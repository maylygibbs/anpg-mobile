import { Component } from '@angular/core';
import { RouteStateService } from '../shared/services/route-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private routeStateService: RouteStateService) {}

  toToSalaDeImprensa(): void {
    this.routeStateService.add("Sala de Imprensa", "/tabs/sala-de-imprensa/", null, false);    
  }

}
