import { TestBed } from '@angular/core/testing';

import { ModifyChallengeService } from './modify-challenge.service';

describe('ModifyChallengeService', () => {
  let service: ModifyChallengeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyChallengeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
