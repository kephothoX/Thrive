import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynComponent } from './byn.component';

describe('BynComponent', () => {
  let component: BynComponent;
  let fixture: ComponentFixture<BynComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynComponent]
    });
    fixture = TestBed.createComponent(BynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
