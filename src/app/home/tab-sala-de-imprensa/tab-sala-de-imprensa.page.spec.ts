import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabSalaDeImprensa } from './tab-sala-de-imprensa.page';

describe('TabSalaDeImprensa', () => {
  let component: TabSalaDeImprensa;
  let fixture: ComponentFixture<TabSalaDeImprensa>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSalaDeImprensa],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSalaDeImprensa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
