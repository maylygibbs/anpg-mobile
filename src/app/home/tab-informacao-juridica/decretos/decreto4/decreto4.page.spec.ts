import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Decreto4Page } from './decreto4.page';

describe('Decreto4Page', () => {
  let component: Decreto4Page;
  let fixture: ComponentFixture<Decreto4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decreto4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Decreto4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
