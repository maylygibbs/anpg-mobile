import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa1Page } from './mapa1.page';

describe('Mapa1Page', () => {
  let component: Mapa1Page;
  let fixture: ComponentFixture<Mapa1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
