import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa7Page } from './mapa7.page';

describe('Mapa7Page', () => {
  let component: Mapa7Page;
  let fixture: ComponentFixture<Mapa7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
