import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessComponent } from './business.component';

describe('BusinessComponent', () => {
  const component: BusinessComponent;
  const fixture: ComponentFixture<BusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
