import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa6Page } from './mapa6.page';

describe('Mapa6Page', () => {
  let component: Mapa6Page;
  let fixture: ComponentFixture<Mapa6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
