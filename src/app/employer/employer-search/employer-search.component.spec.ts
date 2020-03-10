import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSearchComponent } from './employer-search.component';

describe('EmployerSearchComponent', () => {
  let component: EmployerSearchComponent;
  let fixture: ComponentFixture<EmployerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
