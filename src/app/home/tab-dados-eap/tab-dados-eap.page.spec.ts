import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabDadosEap } from './tab-dados-eap.page';

describe('TabDadosEap', () => {
  let component: TabDadosEap;
  let fixture: ComponentFixture<TabDadosEap>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabDadosEap],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabDadosEap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
