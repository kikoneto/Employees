import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesInfoComponent } from './employees-info.component';

describe('EmployeesInfoComponent', () => {
  let component: EmployeesInfoComponent;
  let fixture: ComponentFixture<EmployeesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesInfoComponent]
    });
    fixture = TestBed.createComponent(EmployeesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
