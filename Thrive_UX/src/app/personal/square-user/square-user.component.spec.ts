import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareUserComponent } from './square-user.component';

describe('SquareUserComponent', () => {
  let component: SquareUserComponent;
  let fixture: ComponentFixture<SquareUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareUserComponent]
    });
    fixture = TestBed.createComponent(SquareUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
