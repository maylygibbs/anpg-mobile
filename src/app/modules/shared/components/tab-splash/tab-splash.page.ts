import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tab-splash',
  templateUrl: 'tab-splash.page.html',
  styleUrls: ['tab-splash.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabSplash {

  constructor() {}

}
