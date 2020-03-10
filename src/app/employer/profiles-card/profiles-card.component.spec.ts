import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesCardComponent } from './profiles-card.component';

describe('ProfilesCardComponent', () => {
  let component: ProfilesCardComponent;
  let fixture: ComponentFixture<ProfilesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
