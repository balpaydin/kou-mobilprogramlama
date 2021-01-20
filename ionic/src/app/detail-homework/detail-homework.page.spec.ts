import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailHomeworkPage } from './detail-homework.page';

describe('DetailHomeworkPage', () => {
  let component: DetailHomeworkPage;
  let fixture: ComponentFixture<DetailHomeworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHomeworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailHomeworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
