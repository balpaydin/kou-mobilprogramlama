import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddResponsePage } from './add-response.page';

describe('AddResponsePage', () => {
  let component: AddResponsePage;
  let fixture: ComponentFixture<AddResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
