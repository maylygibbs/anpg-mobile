import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Decreto6Page } from './decreto6.page';

describe('Decreto6Page', () => {
  let component: Decreto6Page;
  let fixture: ComponentFixture<Decreto6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decreto6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Decreto6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
