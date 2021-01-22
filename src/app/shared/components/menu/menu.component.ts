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
    this.routeStateService.add("Mapa Interactivo", "/tabs/mapa-interactivo/", null, false);    
  }

  goToAgendamento(): void {
    this.routeStateService.add("Agendamento de Data Room", "/tabs/agendamento/", null, false);    
  }

  goToDadosEap(): void {
    this.routeStateService.add("Dados E & P", "/tabs/dados-eap/", null, false);    
  }

  goToGlossario(): void {
    this.routeStateService.add("Glossario", "/tabs/glossario/", null, false);    
  }

  goToBuscar(): void {
    this.routeStateService.add("Buscar", "/tabs/search/", null, false);    
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
    this.routeStateService.add("FAQ", "/tabs/news/", null, false);    
  }
}
