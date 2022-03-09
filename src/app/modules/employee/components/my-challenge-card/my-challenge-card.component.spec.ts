import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengeCardComponent } from './my-challenge-card.component';

describe('MyChallengeCardComponent', () => {
  let component: MyChallengeCardComponent;
  let fixture: ComponentFixture<MyChallengeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChallengeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
