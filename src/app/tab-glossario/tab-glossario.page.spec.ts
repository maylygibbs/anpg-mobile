import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabGlossario } from './tab-glossario.page';

describe('TabGlossario', () => {
  let component: TabGlossario;
  let fixture: ComponentFixture<TabGlossario>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGlossario],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabGlossario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
