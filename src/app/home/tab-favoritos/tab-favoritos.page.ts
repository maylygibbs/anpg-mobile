import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-favoritos',
  templateUrl: 'tab-favoritos.page.html',
  styleUrls: ['tab-favoritos.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabFavoritos {
    
  constructor() {}

}
