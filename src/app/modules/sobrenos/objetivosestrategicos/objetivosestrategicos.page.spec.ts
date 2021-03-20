import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjetivosestrategicosPage } from './objetivosestrategicos.page';

describe('ObjetivosestrategicosPage', () => {
  let component: ObjetivosestrategicosPage;
  let fixture: ComponentFixture<ObjetivosestrategicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosestrategicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetivosestrategicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
