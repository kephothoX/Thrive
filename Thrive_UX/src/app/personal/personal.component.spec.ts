import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComponent } from './personal.component';

describe('PersonalComponent', () => {
  const component: PersonalComponent;
  const fixture: ComponentFixture<PersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
