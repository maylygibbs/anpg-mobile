import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: 'favoritos.page.html',
  styleUrls: ['favoritos.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritosPage {

  constructor() {}

}
