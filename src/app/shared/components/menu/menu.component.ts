import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { RouteStateService } from '../../services/route-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  previousUrl: string;
  
  rootPage: any;

  menuItems = [
    {
      item: 'Teste 1'
    },
    {
      item: 'Teste 2'
    }

  ];

  constructor(public menuCtrl: MenuController,
              public routeStateService: RouteStateService,
              private router: Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      /*console.log('prev:', event.url);*/
      this.previousUrl = event.url;
    });
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

  goBack(): void {    
    this.router.navigate([this.previousUrl], null);
    /*this.routeStateService.add("Voltar", this.previousUrl + '/', null, false);*/
    /*this.routeStateService.loadPrevious();*/
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
