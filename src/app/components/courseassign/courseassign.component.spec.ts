import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseassignComponent } from './courseassign.component';

describe('CourseassignComponent', () => {
  let component: CourseassignComponent;
  let fixture: ComponentFixture<CourseassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
