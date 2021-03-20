import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RouteStateService } from '../../services/route-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  rootPage: any;

  @Input() title: string;

  constructor(public menuCtrl: MenuController,
              public routeStateService: RouteStateService) {

  }
 
  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }


  goToHome(): void {
    this.routeStateService.add("Home", "/", null, false);
  }

  goToSalaDeImprensa(): void {
    this.routeStateService.add("Sala de Imprensa", "/tabs/sala-de-imprensa/", null, false);    
  }

  goToMapaInteractivo(): void {
    this.routeStateService.goToMapaInteractivo();
  }

  goToAgendamento(): void {
    this.routeStateService.goToAgendamentoDataRoom();
  }

  goToDadosEap(): void {
    this.routeStateService.goToDadosEap();
  }

  goToGlossario(): void {
    this.routeStateService.add("Glossario", "/tabs/glossario/", null, false);    
  }

  goToPesquisar(): void {
    this.routeStateService.add("Pesquisar", "/tabs/search/", null, false);    
  }

  goToFavoritos(): void {
    this.routeStateService.add("Favoritos", "/tabs/favoritos/", null, false);    
  }

  goToUtilizador(): void {
    this.routeStateService.add("Utilizador", "/tabs/utilizador/", null, false);    
  }

  goToFAQ(): void {
    this.routeStateService.add("FAQ", "/tabs/faq/", null, false);    
  }  

  goToNoticias(): void {
    this.routeStateService.add("Noticias", "/tabs/news/", null, false);    
  }
}
