import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Decreto2Page } from './decreto2.page';

describe('Decreto2Page', () => {
  let component: Decreto2Page;
  let fixture: ComponentFixture<Decreto2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decreto2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Decreto2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
