import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailClassroomPage } from './detail-classroom.page';

describe('DetailClassroomPage', () => {
  let component: DetailClassroomPage;
  let fixture: ComponentFixture<DetailClassroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClassroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailClassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
