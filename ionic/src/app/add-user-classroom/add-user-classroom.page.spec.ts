import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUserClassroomPage } from './add-user-classroom.page';

describe('AddUserClassroomPage', () => {
  let component: AddUserClassroomPage;
  let fixture: ComponentFixture<AddUserClassroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserClassroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserClassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
