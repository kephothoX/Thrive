import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YmsComponent } from './yms.component';

describe('YmsComponent', () => {
  let component: YmsComponent;
  let fixture: ComponentFixture<YmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YmsComponent]
    });
    fixture = TestBed.createComponent(YmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
