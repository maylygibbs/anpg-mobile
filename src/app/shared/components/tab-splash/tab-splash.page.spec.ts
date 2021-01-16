import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabSplash } from './tab-splash.page';

describe('TabSplash', () => {
  let component: TabSplash;
  let fixture: ComponentFixture<TabSplash>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSplash],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSplash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
