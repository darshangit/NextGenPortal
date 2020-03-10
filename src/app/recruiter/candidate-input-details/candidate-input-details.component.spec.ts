import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInputDetailsComponent } from './candidate-input-details.component';

describe('CandidateInputDetailsComponent', () => {
  let component: CandidateInputDetailsComponent;
  let fixture: ComponentFixture<CandidateInputDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateInputDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateInputDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
