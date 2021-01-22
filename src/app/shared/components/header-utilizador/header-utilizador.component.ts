import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouteState } from '../../models/route-state.model';
import { RouteStateService } from '../../services/route-state.service';

@Component({
  selector: 'app-header-utilizador',
  templateUrl: './header-utilizador.component.html',
  styleUrls: ['./header-utilizador.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderUtilizadorComponent implements OnInit {

  rotaAtual: RouteState = null;
  
  constructor(
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    this.rotaAtual = this.routeStateService.getCurrent();
  }

  back() {
    this.routeStateService.loadPrevious();
  }

}
