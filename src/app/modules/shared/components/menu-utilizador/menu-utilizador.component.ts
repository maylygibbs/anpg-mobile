import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services';
import { RouteStateService } from '../../services/route-state.service';

@Component({
  selector: 'app-menu-utilizador',
  templateUrl: './menu-utilizador.component.html',
  styleUrls: ['./menu-utilizador.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuUtilizadorComponent {

  currentUser: User;
  
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
              public routeStateService: RouteStateService
              /*,private authenticationService: AuthenticationService*/) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);    
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

  goToUtilizador(): void {
    this.routeStateService.add("Utilizador", "/tabs/utilizador/", null, false);    
  }

  getUserName(): string {
    return this.currentUser.firstName + ', ' + this.currentUser.firstName;
  }

  logout() {
    //this.authenticationService.logout();    
  }



}
