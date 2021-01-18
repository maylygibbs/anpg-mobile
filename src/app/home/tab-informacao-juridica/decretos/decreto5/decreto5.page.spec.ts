import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Decreto5Page } from './decreto5.page';

describe('Decreto5Page', () => {
  let component: Decreto5Page;
  let fixture: ComponentFixture<Decreto5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decreto5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Decreto5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
