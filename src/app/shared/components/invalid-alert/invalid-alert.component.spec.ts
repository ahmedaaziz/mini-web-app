import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidAlertComponent } from './invalid-alert.component';

describe('InvalidAlertComponent', () => {
  let component: InvalidAlertComponent;
  let fixture: ComponentFixture<InvalidAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
