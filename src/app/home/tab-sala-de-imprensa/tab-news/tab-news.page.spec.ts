import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabNews } from './tab-news.page';

describe('TabNews', () => {
  let component: TabNews;
  let fixture: ComponentFixture<TabNews>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabNews],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
