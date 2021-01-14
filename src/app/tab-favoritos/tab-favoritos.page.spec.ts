import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFavoritos } from './tab-favoritos.page';

describe('TabFavoritos', () => {
  let component: TabFavoritos;
  let fixture: ComponentFixture<TabFavoritos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabFavoritos],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFavoritos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
