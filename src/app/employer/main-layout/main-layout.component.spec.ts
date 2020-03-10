import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponentEmployer } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponentEmployer;
  let fixture: ComponentFixture<MainLayoutComponentEmployer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutComponentEmployer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponentEmployer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
