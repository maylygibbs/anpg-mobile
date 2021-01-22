import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-utilizador',
  templateUrl: 'utilizador.page.html',
  styleUrls: ['utilizador.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilizadorPage {
  currentUser: User = null;

  constructor(
    private router: Router
    /*,private authenticationService: AuthenticationService*/
  ) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    /*this.authenticationService.logout();*/
    this.router.navigate(['/tabs/home']);
  }
}
