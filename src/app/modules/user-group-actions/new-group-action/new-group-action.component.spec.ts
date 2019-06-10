import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupActionComponent } from './new-group-action.component';

describe('NewGroupActionComponent', () => {
  let component: NewGroupActionComponent;
  let fixture: ComponentFixture<NewGroupActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
