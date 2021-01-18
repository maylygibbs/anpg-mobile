import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Decreto3Page } from './decreto3.page';

describe('Decreto3Page', () => {
  let component: Decreto3Page;
  let fixture: ComponentFixture<Decreto3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decreto3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Decreto3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
