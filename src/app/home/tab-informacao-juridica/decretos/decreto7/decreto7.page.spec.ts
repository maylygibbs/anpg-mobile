import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Decreto7Page } from './decreto7.page';

describe('Decreto7Page', () => {
  let component: Decreto7Page;
  let fixture: ComponentFixture<Decreto7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decreto7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Decreto7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
