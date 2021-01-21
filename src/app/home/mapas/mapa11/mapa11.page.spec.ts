import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa11Page } from './mapa11.page';

describe('Mapa11Page', () => {
  let component: Mapa11Page;
  let fixture: ComponentFixture<Mapa11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
