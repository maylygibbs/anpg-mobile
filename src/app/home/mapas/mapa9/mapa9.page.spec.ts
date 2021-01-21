import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa9Page } from './mapa9.page';

describe('Mapa9Page', () => {
  let component: Mapa9Page;
  let fixture: ComponentFixture<Mapa9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
