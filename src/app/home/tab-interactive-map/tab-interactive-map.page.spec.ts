import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabInteractiveMap } from './tab-interactive-map.page';

describe('TabInteractiveMap', () => {
  let component: TabInteractiveMap;
  let fixture: ComponentFixture<TabInteractiveMap>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabInteractiveMap],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabInteractiveMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
