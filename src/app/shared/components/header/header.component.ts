import { Component, OnInit,Input } from '@angular/core';
import { RouteState } from '../../models/route-state.model';
import { RouteStateService } from '../../services/route-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  rotaAtual: RouteState = null;
  @Input() title: string;
  constructor(
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    this.rotaAtual = this.routeStateService.getCurrent();
  }

  back() {
    this.routeStateService.loadPrevious();
  }

}
