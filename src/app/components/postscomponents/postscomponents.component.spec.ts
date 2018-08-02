import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponents } from './postscomponents.component';

describe('PostscomponentsComponent', () => {
  let component: PostscomponentsComponent;
  let fixture: ComponentFixture<PostscomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostscomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostscomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
