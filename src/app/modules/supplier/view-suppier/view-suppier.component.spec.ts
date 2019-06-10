import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuppierComponent } from './view-suppier.component';

describe('ViewSuppierComponent', () => {
  let component: ViewSuppierComponent;
  let fixture: ComponentFixture<ViewSuppierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSuppierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuppierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
