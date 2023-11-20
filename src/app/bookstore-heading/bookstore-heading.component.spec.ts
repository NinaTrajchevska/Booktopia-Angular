import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreHeadingComponent } from './bookstore-heading.component';

describe('BookstoreHeadingComponent', () => {
  let component: BookstoreHeadingComponent;
  let fixture: ComponentFixture<BookstoreHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookstoreHeadingComponent]
    });
    fixture = TestBed.createComponent(BookstoreHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
